<template>
  <div class="relative h-screen w-full bg-black text-white">
    <!-- Background Image -->
    <div class="absolute inset-0 animate-fade-in">
      <img src="@/assets/BGHOME.jpg" alt="Background Image" class="w-full h-full object-cover brightness-50" />
    </div>

    <div class="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>

    <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

    <!-- Logo Animation -->
    <LogoAnimation v-if="showAnimation" @animation-end="showAnimation = false" />

    <!-- Navbar -->
    <nav v-if="!showAnimation" class="fixed top-0 left-0 w-full flex justify-between p-6 animate-slide-down z-50">
      <img src="@/assets/MidnightTextLogo.svg" alt="Logo" class="h-10">
      <router-link to="/login" class="bg-[#481E62] px-4 py-2 rounded text-white font-semibold
             hover:bg-[#5a2a7a] active:bg-[#3c1450]
             transition-colors duration-200
             focus:outline-none focus:ring-2 focus:ring-[#481E62] focus:ring-opacity-50" @click="handleLogin">
        Masuk
      </router-link>
    </nav>

    <!-- Hero Section -->
    <div v-if="!showAnimation"
      class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
      <h1 class="text-4xl md:text-6xl font-bold max-w-2xl">Nonton karya film
        Mahasiswa Universitas Universal disini</h1>
      <p class="text-lg md:text-2xl mt-4">Nonton kapanpun, dan dimanapun
      </p>
      <p class="text-lg mt-6">Siap? isi emailmu untuk mendafatar.</p>

      <!-- Email Form -->
      <div class="mt-4 flex flex-col md:flex-row gap-4 w-full max-w-md">
        <input type="email" placeholder="Email address"
          class="p-3 w-full rounded bg-gray-900 border border-gray-700 text-white" /><button class="relative z-50 bg-[#481E62] px-6 py-3 rounded text-white font-semibold
           hover:bg-[#5a2a7a] active:bg-[#3c1450]
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-[#481E62] focus:ring-opacity-50
           cursor-pointer" @click="handleGetStarted">
          Mulai
        </button>
      </div>
    </div>
    <Footers v-if="!showAnimation" />
  </div>

</template>

<script setup>
import { ref } from "vue";
import LogoAnimation from "@/components/LogoAnimasi.vue";
import Footers from "@/components/Footers.vue";

const showAnimation = ref(true);
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out;
}

.animate-slide-down {
  animation: slide-down 1s ease-out;
}
</style>