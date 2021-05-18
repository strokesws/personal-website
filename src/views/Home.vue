<template>
  <div class="container mx-auto grid grid-cols-12 p-4 flex-grow">
    <div
      class="
        col-span-12
        sm:col-span-9
        md:col-span-8
        mb-3
        sm:mb-0
        flex flex-col
        justify-center
        text-gray-800
      "
    >
      <h1 class="text-yellow-500 text-4xl sm:text-5xl md:text-6xl sm:px-4">
        Matheus Sartoretto
      </h1>
      <h2 class="text-green-300 text-xl sm:text-3xl md:text-4xl sm:px-4">
        Front-end Developer
      </h2>
      <div class="mt-3 sm:mt-8">
        <a
          class="pr-3 sm:px-4"
          href="https://github.com/strokesws"
          target="_blank"
          ><i class="fab fa-github-alt text-xl sm:text-5xl"></i
        ></a>
        <a
          class="pl-3 sm:px-4"
          href="https://linkedin.com/in/matheussartoretto/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in text-xl sm:text-5xl"></i>
        </a>
      </div>
    </div>
    <div
      class="
        col-span-12
        sm:col-span-3
        md:col-span-4
        flex flex-col
        justify-center
      "
    >
      <PolaroidPicture
        class="transform rotate-6"
        :pictureUrl="polaroid.picture"
        :caption="polaroid.caption"
      ></PolaroidPicture>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PolaroidPicture from '@/components/PolaroidPicture.vue';

  export default defineComponent({
    name: 'Home',
    components: { PolaroidPicture },

    setup() {
      const polaroid = {
        picture: 'https://avatars.githubusercontent.com/u/5131379?v=4',
        caption: "Hello! That's me!!",
      };

      return { polaroid };
    },
  });
</script>
