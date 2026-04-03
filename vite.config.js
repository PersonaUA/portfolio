import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base должен совпадать с именем репозитория на GitHub
// Например, если репо: github.com/personaua/portfolio → base: '/portfolio/'
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/'
})
