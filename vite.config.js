import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Tambahkan import path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Tambahkan alias @ untuk src/
    },
  },
})
