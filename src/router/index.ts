import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routeOptions = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/my-timeline', name: 'My Timeline' },
];

const routes: Array<RouteRecordRaw> = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `@/views/${route.name.replace(
          ' ',
          '',
        )}.vue`
      ),
  };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
