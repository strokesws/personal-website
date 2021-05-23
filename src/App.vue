<template>
  <div class="h-screen overflow-y-auto flex flex-col bg-gray-100">
    <HeaderMenu />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from '@/store';
  import HeaderMenu from '@/components/HeaderMenu.vue';

  export default defineComponent({
    components: {
      HeaderMenu,
    },

    setup() {
      const store = useStore();
      store.dispatch('loadAboutMe');
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

  .fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.3s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
