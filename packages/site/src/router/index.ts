import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
