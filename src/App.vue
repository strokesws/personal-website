<template>
  <div class="h-screen overflow-y-auto flex flex-col bg-gray-100">
    <HeaderMenu />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderMenu from '@/components/HeaderMenu.vue';

  export default defineComponent({
    components: {
      HeaderMenu,
    },
  });
</script>

<style lang="scss">
  a {
    text-decoration: underline transparent;
    transition: color 300ms;
    @apply text-red-400;

    &:hover {
      @apply text-red-500;
    }
  }
</style>
