import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',  // Path ke index.html di root direktori
    },
    outDir: 'dist',  // Direktori output untuk build
  },
})
