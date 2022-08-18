import type { RouteRecordRaw } from 'vue-router';

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: () => import('../../views/Home.vue'),
  },
];
