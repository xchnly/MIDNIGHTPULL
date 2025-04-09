<template>
    <div class="min-h-screen bg-gradient-to-b from-[#005A46] to-black text-white p-4 md:p-8">
      <!-- Header -->
      <div class="relative flex items-center justify-center mb-8">
        <button @click="goBack" class="absolute left-0 text-2xl text-white">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <h1 class="text-2xl md:text-4xl font-bold text-center">Pusat Bantuan</h1>
      </div>
  
      <!-- Form -->
      <form @submit.prevent="submitForm" class="w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto space-y-6">
        <input
          v-model="form.name"
          type="text"
          placeholder="Nama"
          class="w-full px-6 py-3 text-lg rounded border border-gray-300 text-black placeholder-green-800"
          required
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full px-6 py-3 text-lg rounded border border-gray-300 text-black placeholder-green-800"
          required
        />
        <input
          v-model="form.phone"
          type="tel"
          placeholder="Nomor Telepon"
          class="w-full px-6 py-3 text-lg rounded border border-gray-300 text-black placeholder-green-800"
          required
        />
        <textarea
          v-model="form.message"
          placeholder="Ceritakan Kendala"
          rows="5"
          class="w-full px-6 py-3 text-lg rounded border border-gray-300 text-black placeholder-green-800"
          required
        ></textarea>
  
        <button type="submit" class="w-full py-3 text-lg bg-[#005A46] text-white font-semibold rounded">
          Kirim
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const submitForm = () => {
    console.log('Form submitted:', form)
    // Tambahkan logika kirim data ke backend jika perlu
  }
  
  const goBack = () => {
    window.history.back()
  }
  </script>
  
  <style scoped>
  ion-icon {
    font-size: 24px;
  }
  </style>
  