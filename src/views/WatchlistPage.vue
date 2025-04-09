<template>
    <div class="min-h-screen bg-gradient-to-b from-green-900 to-black text-white p-4 md:p-10">
      <!-- Header -->
      <div class="relative flex items-center justify-center mb-8">
        <button @click="goBack" class="absolute left-0 text-2xl text-white">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <h1 class="text-2xl md:text-4xl font-bold text-center">Watchlist Saya</h1>
      </div>
  
      <!-- Watchlist Items -->
      <div class="grid gap-4 max-w-4xl mx-auto">
        <div
          v-for="(item, index) in watchlist"
          :key="index"
          class="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-10 p-4 rounded-lg"
        >
          <img :src="item.thumbnail" alt="thumbnail" class="w-full md:w-40 h-24 object-cover rounded-md" />
  
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-lg font-bold uppercase">{{ item.title }}</h2>
          </div>
  
          <div class="flex flex-col gap-2 w-full md:w-auto">
            <button
              class="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
              @click="removeFromWatchlist(index)"
            >
              Hapus dari Watchlist Saya
            </button>
            <button
              class="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
              @click="startWatching(item)"
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import TB from '@/assets/POSTER3.svg';
  
  const watchlist = reactive([
    {
      title: 'PAHLAWAN KECIL',
      thumbnail: TB
    },
    {
      title: 'AKARRASA',
      thumbnail: TB
    },
    {
      title: 'Iklan A',
      thumbnail: TB
    },
    {
      title: 'Iklan B',
      thumbnail: TB
    },
    {
      title: 'Iklan C',
      thumbnail: TB
    }
  ])
  
  const removeFromWatchlist = (index) => {
    watchlist.splice(index, 1)
  }
  
  const startWatching = (item) => {
    console.log('Mulai menonton:', item.title)
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
  