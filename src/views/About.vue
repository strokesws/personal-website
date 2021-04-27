<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl sm:text-5xl md:text-6xl mb-4">About me</h1>
    <p class="mb-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue non
      velit nec euismod. Donec a mi sed dolor commodo consequat ac vitae est. Ut
      sed dui sit amet tellus bibendum fermentum. In at pulvinar purus. Morbi
      viverra velit non metus pretium, et auctor lorem efficitur. Donec eget
      nibh metus. Nunc suscipit bibendum consequat. Vivamus posuere id turpis
      sed bibendum. Curabitur sed massa velit. Curabitur ac augue quis augue
      rutrum vulputate. Nullam iaculis mauris sed condimentum accumsan.
    </p>

    <p class="mb-3">
      Aliquam tristique urna pulvinar turpis gravida congue. Praesent sit amet
      libero sed tortor sollicitudin consequat at eu est. Pellentesque bibendum
      at nisi non vehicula. Nulla convallis sit amet metus quis condimentum.
      Quisque odio mi, dignissim et aliquam non, commodo id tellus. Nullam enim
      nisi, fringilla ut porta a, accumsan sed sapien. Morbi laoreet purus vel
      orci tristique, in ullamcorper nisi tempus. Morbi tincidunt quam massa,
      venenatis pharetra leo sollicitudin maximus. Aenean molestie, sapien a
      mollis convallis, dolor augue vulputate arcu, vel commodo neque tortor nec
      quam. Morbi libero risus, bibendum ut consectetur a, pharetra id purus.
      Phasellus enim velit, tempus eu ex eget, posuere placerat odio.
    </p>

    <p class="mb-3">
      Sed aliquet lacus nisi, tincidunt elementum lectus elementum ac. Nam sed
      nulla non mi elementum vehicula vitae non nulla. Etiam pellentesque,
      tellus ac malesuada mollis, felis ante vestibulum odio, a bibendum ipsum
      lorem eget arcu. Quisque tincidunt elit non pretium aliquet. Nulla vel
      consectetur odio. Nunc rhoncus sollicitudin dolor. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae;
    </p>

    <div class="grid grid-cols-12 mt-16">
      <div
        class="col-span-6 md:col-span-3 m-4"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <PolaroidPicture
          class="transform"
          :class="getRotateCssClass()"
          :pictureUrl="photo.picture"
          :altText="photo.caption"
        ></PolaroidPicture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PolaroidPicture from '@/components/PolaroidPicture.vue';

  export default defineComponent({
    name: 'About',
    components: { PolaroidPicture },

    setup() {
      const photos = Array(8).fill({
        picture:
          'https://i.pinimg.com/originals/0f/84/d4/0f84d48b10a9d8867b287086cd62bf00.jpg',
        caption: "Hello! That's me!!",
      });

      const getRotateCssClass = () => {
        const min = -6;
        const max = 6;
        let rotation = Math.floor(Math.random() * (max - min + 1) + min);

        // -rotate-5, -rotate-4, rotate-4, rotate-5 doesn't exist
        if (rotation === -5) rotation = -6;
        else if (rotation === -4) rotation = -3;
        else if (rotation === 4) rotation = 3;
        else if (rotation === 5) rotation = 6;

        if (rotation === 0) return 'rotate-0';
        else if (rotation > 0) return `rotate-${rotation}`;
        else return `-rotate-${-1 * rotation}`;
      };

      return { photos, getRotateCssClass };
    },
  });
</script>
