import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from '@react-router/dev/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
})