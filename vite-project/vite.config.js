import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js ou vite.config.ts
import { defineConfig } from 'vite';


export default defineConfig({
  resolve: {
    alias: {
      '/src/': new URL('./src', import.meta.url).pathname,
    },
  },
  plugins: [react()],
})
