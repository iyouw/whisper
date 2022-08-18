import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
