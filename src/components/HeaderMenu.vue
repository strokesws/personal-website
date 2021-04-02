<template>
  <nav id="nav" class="p-4 flex justify-end">
    <router-link
      v-for="item in menuItems"
      :key="item.title"
      :to="item.linkTo"
      class="p-3"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import router from '@/router/index';
  import { IHeaderMenuItem } from '@/types';

  export default defineComponent({
    setup() {
      let menuItems: IHeaderMenuItem[] = reactive([]);

      const buildMenuItems = (): void => {
        menuItems = router.getRoutes().map(
          (route): IHeaderMenuItem => {
            const title = route.name ? route.name.toString() : '';
            const linkTo = route.path ? route.path.toString() : '';

            return { title, linkTo };
          },
        );
      };

      buildMenuItems();

      return { menuItems };
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
