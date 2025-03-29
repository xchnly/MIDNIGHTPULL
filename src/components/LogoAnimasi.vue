<template>
  <transition name="fade-scale" @after-leave="$emit('animation-end')">
    <div v-if="show" class="flex items-center justify-center h-screen bg-black">
      <img src="@/assets/MidnightLogo.svg" alt="Logo" class="h-32 animate-pulse">
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(true);

onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 2500); // Animasi berlangsung lebih lama untuk kesan cinematic
});
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
