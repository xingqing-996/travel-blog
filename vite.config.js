import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // 新增：适配Vercel部署的base路径配置（核心解决404的关键）
  base: '/', 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 可选：确保构建输出目录为dist（Vercel默认识别dist，避免路径识别错误）
  build: {
    outDir: 'dist'
  }
})
