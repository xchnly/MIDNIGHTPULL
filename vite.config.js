import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    host: '0.0.0.0', // Izinkan akses dari jaringan
    port: 5173, // Bisa diubah jika perlu
    strictPort: true, // Pastikan menggunakan port ini
    open: true, // Otomatis buka di browser
  }
})
