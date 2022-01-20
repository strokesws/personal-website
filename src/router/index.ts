import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routeOptions = [
  { path: '/', name: 'Home View' },
  { path: '/about', name: 'About View' },
  { path: '/my-timeline', name: 'My Timeline View' },
];

const routes: Array<RouteRecordRaw> = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `@/views/${route.name.replaceAll(
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
