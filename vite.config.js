import { defineConfig } from 'vite';

export default defineConfig({
  // Configure Vite here
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});