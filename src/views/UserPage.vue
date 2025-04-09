<template>
    <div class="min-h-screen bg-gradient-to-b from-[#005A46] to-black text-white p-4 md:p-8">
      <!-- Header -->
      <div class="relative flex items-center justify-center mb-8">
        <button @click="goBack" class="absolute left-0 text-2xl text-white">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <h1 class="text-2xl md:text-3xl font-bold text-center">Siapa Yang Nonton?</h1>
      </div>
  
      <!-- Grid Profiles -->
      <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
        <div
          v-for="user in users"
          :key="user.id"
          class="flex flex-col items-center hover:scale-105 transition"
        >
          <img
            :src="user.avatar"
            class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl object-cover bg-gray-700"
            alt="avatar"
          />
          <p class="mt-2 text-sm md:text-base text-center">{{ user.name }}</p>
        </div>
  
        <!-- Tambah Profil -->
        <div
          @click="showModal = true"
          class="flex flex-col items-center hover:scale-105 transition cursor-pointer"
        >
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-gray-500 flex items-center justify-center text-4xl">
            +
          </div>
          <p class="mt-2 text-sm md:text-base text-center">Tambah Profil</p>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white text-black p-6 rounded-lg w-80">
          <h2 class="text-lg font-semibold mb-4">Tambah Profil</h2>
          <form @submit.prevent="addUser">
            <!-- Avatar Upload + Preview First -->
            <div class="flex flex-col items-center mb-4">
              <label class="cursor-pointer mb-2">
                <span class="block text-center text-sm font-medium text-gray-700">Pilih Avatar</span>
                <input
                  type="file"
                  @change="handleAvatarUpload"
                  accept="image/*"
                  class="hidden"
                />
              </label>
              <div v-if="newUser.avatar" class="flex justify-center">
                <img :src="newUser.avatar" class="w-20 h-20 rounded-xl object-cover" />
              </div>
              <div v-else class="w-20 h-20 rounded-xl bg-gray-300 flex items-center justify-center text-gray-600">
                ?
              </div>
            </div>
  
            <input
              v-model="newUser.name"
              type="text"
              placeholder="Nama"
              class="w-full mb-3 px-3 py-2 border rounded"
              required
            />
            <input
              v-model="newUser.password"
              type="password"
              placeholder="Password"
              class="w-full mb-3 px-3 py-2 border rounded"
              required
            />
  
            <div class="flex justify-end gap-2">
              <button @click="showModal = false" type="button" class="px-4 py-2 bg-gray-400 text-white rounded">Batal</button>
              <button type="submit" class="px-4 py-2 bg-[#005A46] text-white rounded">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  const users = ref([
    { id: 1, name: 'Eril Sanjaya', avatar: '/avatars/default.png' },
    { id: 2, name: 'Naufal', avatar: '/avatars/default.png' },
    { id: 3, name: 'James Lim', avatar: '/avatars/default.png' },
    { id: 4, name: 'Cann', avatar: '/avatars/default.png' },
    { id: 5, name: 'Fernando', avatar: '/avatars/default.png' },
  ])
  
  const showModal = ref(false)
  
  const newUser = reactive({
    name: '',
    password: '',
    avatar: ''
  })
  
  const handleAvatarUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return
  
    const reader = new FileReader()
    reader.onload = () => {
      newUser.avatar = reader.result
    }
    reader.readAsDataURL(file)
  }
  
  const addUser = () => {
    users.value.push({
      id: Date.now(),
      name: newUser.name,
      avatar: newUser.avatar || '/avatars/default.png'
    })
    newUser.name = ''
    newUser.password = ''
    newUser.avatar = ''
    showModal.value = false
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
  