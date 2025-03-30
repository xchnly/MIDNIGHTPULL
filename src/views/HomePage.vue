<template>
    <div class="bg-black text-white min-h-screen">
        <!-- Navbar -->
        <nav
            class="flex justify-between items-center h-16 p-4 bg-gradient-to-b from-black to-transparent fixed w-full z-10">
            <!-- Logo -->
            <!-- <img src="@/assets/MidnightTextLogo.svg" alt="Logo" class="h-8 md:h-10"> -->
            <!-- Profile menu -->
            <div class="relative flex items-center">
                <button @click="toggleProfileMenu"
                    class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-600 flex items-center justify-center">
                </button>
                <div v-if="showProfileMenu" class="absolute top-10 left-0 mt-2 bg-gray-800 rounded shadow-lg py-2 w-48">
                    <p class="px-4 py-2 border-b border-gray-700">John Doe</p>
                    <button class="block px-4 py-2 w-full text-left hover:bg-gray-700">Edit Profil</button>
                    <button class="block px-4 py-2 w-full text-left hover:bg-gray-700">Ganti Akun</button>
                    <button class="block px-4 py-2 w-full text-left hover:bg-gray-700">Pusat Bantuan</button>
                    <button class="block px-4 py-2 w-full text-left hover:bg-gray-700">Karya Iklan</button>
                    <button class="block px-4 py-2 w-full text-left hover:bg-gray-700">Beranda</button>
                    <button class="block px-4 py-2 w-full text-left text-white hover:bg-gray-700">Keluar</button>
                </div>
            </div>

            <!-- Bagian kanan navbar -->
            <div class="flex items-center gap-2 md:gap-4">
                <!-- Search bar - hidden on mobile, shown on md screens and up -->
                <div class="hidden md:flex items-center">
                    <input type="text" placeholder="Cari..."
                        class="px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none">
                </div>

                <!-- Mobile search button -->
                <button class="md:hidden p-2 flex items-center justify-center" @click="toggleMobileSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <!-- Mobile search input (shown when toggled) -->
                <div v-if="showMobileSearch" class="absolute top-16 left-0 right-0 px-4 md:hidden">
                    <input type="text" placeholder="Search..."
                        class="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none">
                </div>


            </div>
        </nav>

        <!-- Hero Banner with Slider -->
        <div class="relative h-screen w-full overflow-hidden">
            <div class="flex transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(banner, index) in banners" :key="index"
                    class="w-full flex-shrink-0 bg-cover bg-center relative"
                    :style="{ backgroundImage: `url(${banner.image})`, height: '100vh' }">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    <div class="absolute bottom-20 left-5 max-w-md">
                        <h2 class="text-5xl font-bold">{{ banner.title }}</h2>
                        <p class="mt-4">{{ banner.description }}</p>
                        <button class="mt-6 bg-[#481E62] text-white font-bold px-6 py-2 rounded">Play</button>
                    </div>
                </div>
            </div>
            <button @click="prevSlide"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 p-3 rounded-full"><ion-icon
                    name="arrow-back-outline"></ion-icon></button>
            <button @click="nextSlide"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 p-3 rounded-full"><ion-icon
                    name="arrow-forward-outline"></ion-icon></button>
        </div>

        <!-- Movies Sections -->
        <div class="p-4 space-y-6">
            <div v-for="(movies, category) in movieCategories" :key="category">
                <h3 class="text-3xl font-semibold mb-2">{{ category }}</h3>
                <div class="relative">
                    <!-- Tombol Panah Kiri -->
                    <button
                        class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 text-white hidden md:flex"
                        @click="scrollLeft(category)">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <!-- Container Film -->
                    <div ref="scrollContainer" :data-category="category"
                        class="flex overflow-x-scroll space-x-4 scrollbar-hide scroll-smooth">
                        <img v-for="movie in movies" :key="movie.id" :src="movie.image"
                            class="w-96 rounded-md hover:scale-105 transition" />
                    </div>

                    <!-- Tombol Panah Kanan -->
                    <button
                        class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 text-white hidden md:flex"
                        @click="scrollRight(category)">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BGHOME from '@/assets/BGHOME.jpg';
import POSTER2 from '@/assets/Ne_Zha_2_Poster.jpg';

export default {
    data() {
        return {
            banners: [
                { image: BGHOME, title: 'Money Heist', description: "Lives are on the line as the Professor's plan begins to unravel." },
                { image: BGHOME, title: 'Stranger Things', description: 'Mysteries unfold in the small town of Hawkins.' },
                { image: BGHOME, title: 'The Witcher', description: 'A monster hunter navigates a world full of beasts and betrayals.' }
            ],
            currentIndex: 0,
            movieCategories: {
                'Trending Sekarang': [
                    { id: 1, image: POSTER2 },
                    { id: 2, image: POSTER2 },
                    { id: 3, image: POSTER2 },
                    { id: 4, image: POSTER2 },
                    { id: 5, image: POSTER2 },
                    { id: 6, image: POSTER2 },
                    { id: 7, image: POSTER2 },
                    { id: 8, image: POSTER2 },
                    { id: 9, image: POSTER2 },
                    { id: 10, image: POSTER2 }
                ],
                'Promosi Iklan': [
                    { id: 11, image: POSTER2 },
                    { id: 12, image: POSTER2 },
                    { id: 13, image: POSTER2 },
                    { id: 14, image: POSTER2 },
                    { id: 15, image: POSTER2 },
                    { id: 16, image: POSTER2 },
                    { id: 17, image: POSTER2 },
                    { id: 18, image: POSTER2 },
                    { id: 19, image: POSTER2 }
                ]
            },
            showProfileMenu: false,
            showMobileSearch: false
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.banners.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
        },
        toggleProfileMenu() {
            this.showProfileMenu = !this.showProfileMenu;
        },
        toggleMobileSearch() {
            this.showMobileSearch = !this.showMobileSearch;
        },
        scrollLeft(category) {
            const container = this.$refs.scrollContainer.find(el => el.dataset.category === category);
            if (container) container.scrollBy({ left: -300, behavior: "smooth" });
        },
        scrollRight(category) {
            const container = this.$refs.scrollContainer.find(el => el.dataset.category === category);
            if (container) container.scrollBy({ left: 300, behavior: "smooth" });
        }
    }
};
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>