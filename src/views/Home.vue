<template>
  <div class="grid grid-cols-12">
    <div class="col-span-7 p-4">
      <h1 class="text-6xl">Matheus Sartoretto</h1>
      <h2 class="text-4xl">Front-end Developer</h2>
      <div class="mt-8">
        <!-- TODO: transform links into icons with fontawesome -->
        <a href="https://github.com/strokesws" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/matheussartoretto/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
    <div class="col-span-2 p-4">
      <PolaroidPicture></PolaroidPicture>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PolaroidPicture from '@/components/PolaroidPicture.vue';

  export default defineComponent({
    name: 'Home',
    components: { PolaroidPicture },
  });
</script>
