import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://vikasnagpal.github.io/vcapp/ (GitHub Pages project site)
  base: '/vcapp/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // framed (iPhone bezel) build → /vcapp/
        main: 'index.html',
        // frame-less, full-bleed mobile build → /vcapp/mobile/
        mobile: 'mobile/index.html',
      },
    },
  },
})
