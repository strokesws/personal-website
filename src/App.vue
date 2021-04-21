<template>
  <div class="h-screen flex flex-col">
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

<style lang="scss" scoped>
  #nav > a {
    text-decoration: underline transparent;
    transition: text-decoration-color 300ms;

    &:hover {
      text-decoration-color: black;
    }
  }
</style>
