import { defineConfig, InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  mode: 'development',
  server: {
    host: '0.0.0.0',
  },
  plugins: [vue(), vueJsx()],
}) as InlineConfig;
