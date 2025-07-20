import { defineConfig } from 'vite';

import { defineConfig } from 'vite';

export default defineConfig({
  // Configure Vite here
  build: {
    outDir: 'build/client',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});