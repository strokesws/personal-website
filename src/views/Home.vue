<template>
  <div class="grid grid-cols-12 p-4">
    <div
      class="col-start-2 col-span-6 flex flex-col justify-center text-gray-800"
    >
      <h1 class="text-6xl px-4">Matheus Sartoretto</h1>
      <h2 class="text-4xl px-4">Front-end Developer</h2>
      <div class="mt-8">
        <!-- TODO: transform links into icons with fontawesome -->
        <a class="px-4" href="https://github.com/strokesws" target="_blank"
          ><i class="fab fa-github-alt fa-3x"></i
        ></a>
        <a
          class="px-4"
          href="https://linkedin.com/in/matheussartoretto/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in fa-3x"></i>
        </a>
      </div>
    </div>
    <div class="col-span-4 flex flex-col justify-center">
      <PolaroidPicture
        :picture="polaroid.picture"
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
        picture:
          'https://i.pinimg.com/originals/0f/84/d4/0f84d48b10a9d8867b287086cd62bf00.jpg',
        caption: "Hello! That's me!!",
      };

      return { polaroid };
    },
  });
</script>
