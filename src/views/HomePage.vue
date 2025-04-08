<template>
    <div class="bg-black min-h-screen text-white">
      <!-- Navbar -->
      <div class="flex justify-between items-center p-4 bg-black sticky top-0 z-10">
        <button @click="toggleMenu" class="text-white text-2xl">&#9776;</button>
        
        <!-- Search Container -->
        <div class="flex items-center">
          <transition name="slide-fade">
            <div v-if="showSearch" class="flex items-center">
              <input 
                ref="searchInput"
                type="text" 
                placeholder="Cari Karya, Film, atau Judul" 
                class="bg-black text-white px-4 py-2 rounded-l focus:outline-none w-64"
                v-model="searchQuery"
                @keyup.enter="performSearch">
              <button 
                @click="closeSearch"
                class="bg-[#481E62] text-white px-3 py-2">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </transition>
          <button 
            @click="toggleSearch" 
            class="border border-gray-600 px-4 py-2 rounded text-white flex items-center"
            :class="{'rounded-l-none': showSearch}">
            <ion-icon name="search-outline" class="mr-2"></ion-icon>
            <span v-if="!showSearch">Cari</span>
          </button>
        </div>
      </div>
  
      <!-- Sidebar Menu -->
      <div v-if="menuOpen" class="fixed top-0 left-0 w-64 bg-black h-full p-4 shadow-lg z-20">
        <button @click="toggleMenu" class="text-white text-2xl mb-4">&#9776;</button>
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
          <div>
            <p class="font-semibold">Eril Sanjaya</p>
            <p class="text-gray-400 text-sm">Edit Profil</p>
          </div>
        </div>
        <ul class="space-y-4">
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Akun Saya</li>
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Pusat Bantuan</li>
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Keluar</li>
          <hr class="border-gray-600 my-3" />
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Beranda</li>
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Daftar Saya</li>
          <li class="cursor-pointer py-2 hover:bg-gray-800 px-2 rounded">Karya Iklan</li>
        </ul>
      </div>
  
      <!-- Overlay when menu or search is open -->
      <div v-if="menuOpen || showSearch" 
           class="fixed inset-0 bg-black bg-opacity-50 z-10"
           @click="closeAll"></div>
  
      <!-- Content -->
      <div class="p-4 pt-6">
        <!-- Carousel 16:9 -->
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-6">
          <div class="flex h-full transition-transform duration-500 ease-in-out"
              :style="`transform: translateX(-${currentSlide * 100}%)`">
            <div v-for="(banner, index) in banners" :key="index" class="w-full h-full flex-shrink-0">
              <img :src="banner" class="w-full h-full object-cover" />
            </div>
          </div>
          <button @click="prevSlide"
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2">
            <ion-icon name="chevron-back-outline" class="text-xl"></ion-icon>
          </button>
          <button @click="nextSlide"
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2">
            <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
          </button>
          <!-- Indicators -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div v-for="(_, index) in banners" :key="index" 
                 class="w-2 h-2 rounded-full transition-all"
                 :class="currentSlide === index ? 'bg-white w-4' : 'bg-gray-400'">
            </div>
          </div>
        </div>
  
        <!-- Trending Section -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-xl font-bold">Trending Sekarang</h3>
            <button class="text-sm text-gray-400 hover:text-white">Lihat Semua</button>
          </div>
          <div class="relative">
            <div class="flex space-x-3 overflow-x-auto scrollbar-hide pb-2" ref="trendingScroll">
              <div v-for="(poster, index) in trending" :key="index" class="flex-shrink-0 w-40 h-56 cursor-pointer hover:scale-105 transition-transform">
                <img :src="poster" class="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <button v-if="showTrendingLeft" @click="scrollTrending('left')"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 hover:bg-black">
              <ion-icon name="chevron-back-outline" class="text-xl"></ion-icon>
            </button>
            <button v-if="showTrendingRight" @click="scrollTrending('right')"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 hover:bg-black">
              <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
            </button>
          </div>
        </div>
  
        <!-- Promotions Section -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-xl font-bold">Promosi Iklan</h3>
            <button class="text-sm text-gray-400 hover:text-white">Lihat Semua</button>
          </div>
          <div class="relative">
            <div class="flex space-x-3 overflow-x-auto scrollbar-hide pb-2" ref="promoScroll">
              <div v-for="(promo, index) in promotions" :key="index" class="flex-shrink-0 w-40 h-56 cursor-pointer hover:scale-105 transition-transform">
                <img :src="promo" class="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <button v-if="showPromoLeft" @click="scrollPromo('left')"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 hover:bg-black">
              <ion-icon name="chevron-back-outline" class="text-xl"></ion-icon>
            </button>
            <button v-if="showPromoRight" @click="scrollPromo('right')"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 hover:bg-black">
              <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
            </button>
          </div>
        </div>
  
        <!-- Search Results (conditional rendering) -->
        <div v-if="searchResults.length > 0" class="mt-6">
          <h3 class="text-xl font-bold mb-4">Hasil Pencarian</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="(result, index) in searchResults" :key="index" class="cursor-pointer hover:scale-105 transition-transform">
              <img :src="result.image" class="w-full h-48 object-cover rounded-lg" />
              <p class="mt-2 text-sm truncate">{{ result.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import POSTER1 from '@/assets/BGHOME.jpg';
  import POSTER2 from '@/assets/POSTER3.svg';
  
  export default {
    data() {
      return {
        menuOpen: false,
        showSearch: false,
        searchQuery: '',
        searchResults: [],
        currentSlide: 0,
        banners: [
          POSTER1,
          POSTER2,
          POSTER1,
          POSTER2,
        ],
        trending: [
          POSTER2,
          POSTER2,
          POSTER2,
          POSTER1,
          POSTER1,
          POSTER1,
          POSTER2,
          POSTER2,
          POSTER1,
          POSTER1,
          POSTER2,
        ],
        promotions: [
          POSTER1,
          POSTER2,
          POSTER1,
          POSTER2,
          POSTER1,
          POSTER2,
        ],
        showTrendingLeft: false,
        showTrendingRight: true,
        showPromoLeft: false,
        showPromoRight: true,
        autoSlideInterval: null
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
          this.showSearch = false;
        }
      },
      toggleSearch() {
        this.showSearch = !this.showSearch;
        if (this.showSearch) {
          this.menuOpen = false;
          this.$nextTick(() => {
            this.$refs.searchInput?.focus();
          });
        } else {
          this.searchQuery = '';
          this.searchResults = [];
        }
      },
      closeSearch() {
        this.showSearch = false;
        this.searchQuery = '';
        this.searchResults = [];
      },
      closeAll() {
        this.menuOpen = false;
        this.closeSearch();
      },
      performSearch() {
        if (this.searchQuery.trim()) {
          // Simulate search results
          this.searchResults = [
            { title: 'Ne Zha 2', image: POSTER2 },
            { title: 'Home Background', image: POSTER1 },
            { title: 'Movie 3', image: POSTER2 },
            { title: 'Movie 4', image: POSTER1 },
            { title: 'Movie 5', image: POSTER2 },
          ];
        } else {
          this.searchResults = [];
        }
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.banners.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
      },
      scrollTrending(direction) {
        const container = this.$refs.trendingScroll;
        const scrollAmount = 300;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      },
      scrollPromo(direction) {
        const container = this.$refs.promoScroll;
        const scrollAmount = 300;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      },
      checkScrollPosition() {
        // For trending section
        const trendingContainer = this.$refs.trendingScroll;
        this.showTrendingLeft = trendingContainer.scrollLeft > 0;
        this.showTrendingRight = trendingContainer.scrollLeft < 
            (trendingContainer.scrollWidth - trendingContainer.clientWidth);
        
        // For promo section
        const promoContainer = this.$refs.promoScroll;
        this.showPromoLeft = promoContainer.scrollLeft > 0;
        this.showPromoRight = promoContainer.scrollLeft < 
            (promoContainer.scrollWidth - promoContainer.clientWidth);
      },
      startAutoSlide() {
        this.autoSlideInterval = setInterval(this.nextSlide, 5000);
      },
      stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
      }
    },
    mounted() {
      this.startAutoSlide();
      window.addEventListener('resize', this.checkScrollPosition);
      
      // Add scroll event listeners
      if (this.$refs.trendingScroll) {
        this.$refs.trendingScroll.addEventListener('scroll', this.checkScrollPosition);
      }
      if (this.$refs.promoScroll) {
        this.$refs.promoScroll.addEventListener('scroll', this.checkScrollPosition);
      }
      
      this.checkScrollPosition();
    },
    beforeDestroy() {
      this.stopAutoSlide();
      window.removeEventListener('resize', this.checkScrollPosition);
      
      // Remove scroll event listeners
      if (this.$refs.trendingScroll) {
        this.$refs.trendingScroll.removeEventListener('scroll', this.checkScrollPosition);
      }
      if (this.$refs.promoScroll) {
        this.$refs.promoScroll.removeEventListener('scroll', this.checkScrollPosition);
      }
    },
    watch: {
      searchQuery(newVal) {
        if (!newVal) {
          this.searchResults = [];
        }
      }
    }
  };
  </script>
  
  <style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* For Firefox */
  .scrollbar-hide {
    scrollbar-width: none;
  }
  
  /* Search transition */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  
  /* Hover effects */
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  </style>