import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Pastikan Anda sudah membuat file router/index.js
import './style.css'

// Hanya satu inisialisasi app
const app = createApp(App)

// Gunakan router
app.use(router)

// Mount aplikasi
app.mount('#app')