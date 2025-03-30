<template>
    <div class="bg-black h-full">
        <div class="p-6 w-full bg-black text-white rounded-2xl shadow-lg">
            <!-- Header Back Button -->
            <div class="max-w-screen-xl mx-auto mb-4 flex items-center">
                <button @click="" class="text-white text-3xl py-2 rounded-lg flex items-center">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                <!-- Poster Film -->
                <div class="col-span-1">
                    <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover rounded-xl">
                </div>

                <!-- Informasi Film -->
                <div class="col-span-2">
                    <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
                    <p class="text-gray-400 text-lg">{{ movie.year }} • {{ movie.seasons }} Seasons</p>
                    <p class="mt-2">{{ movie.description }}</p>
                    <button class="mt-4 bg-[#005A46] text-white py-2 px-6 rounded-lg font-bold">Mulai</button>
                </div>

                <!-- Season -->
                <div class="mt-6 max-w-screen-xl">
                    <h3 class="text-xl font-semibold">Season 1</h3>
                    <div class="flex items-start mt-4 space-x-4">
                        <img :src="movie.poster" :alt="movie.title" class="w-40 h-80 object-cover rounded-lg">
                        <div>
                            <h2 class="text-md font-bold">{{ movie.title }}</h2>
                            <p class="text-gray-400 text-sm">{{ movie.shortDescription }}</p>
                            <div class="flex flex-col w-fit mt-2 gap-2">
                                <!-- Tombol Waktu -->
                                <div class="text-white p-2 rounded-md flex flex-row items-center bg-[#005A46]">
                                    <ion-icon name="time-outline"></ion-icon>
                                    <span class="text-xs mx-1">45 Menit</span>
                                </div>

                                <!-- Tombol Watchlist -->
                                <button class="text-white py-2 px-2 rounded-lg flex flex-row items-center gap-1 border border-white hover:bg-[#481E62] hover:border-0 hover:font-bold ">
                                    <ion-icon name="add-outline"></ion-icon>
                                    <span class="text-xs mx-1">Watchlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Detail Film -->
            <div class="mt-6 max-w-screen-xl mx-auto">
                <h3 class="text-xl font-semibold">Creator</h3>
                <p class="text-gray-400">{{ movie.creator }}</p>

                <h3 class="mt-4 text-xl font-semibold">Cast</h3>
                <p class="text-gray-400">{{ movie.cast.join(", ") }}</p>

                <h3 class="mt-4 text-xl font-semibold">Genres</h3>
                <p class="text-gray-400">{{ movie.genre }}</p>

                <h3 class="mt-4 text-xl font-semibold">Moods</h3>
                <p class="text-gray-400">{{ movie.moods }}</p>
            </div>

            <!-- Karya Serupa -->
            <div class="mt-8 max-w-screen-xl mx-auto">
                <h3 class="text-xl font-semibold">Karya Film Serupa</h3>
                <div class="mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div class="inline-flex space-x-4">
                        <div v-for="similar in movie.similarMovies" :key="similar.title" class="w-40 flex-shrink-0">
                            <img :src="similar.poster" :alt="similar.title" class="w-full h-56 object-cover rounded-lg">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Karya Iklan -->
            <div class="mt-8 max-w-screen-xl mx-auto">
                <h3 class="text-xl font-semibold">Karya Iklan</h3>
                <div class="mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div class="inline-flex space-x-4">
                        <div v-for="ad in movie.ads" :key="ad.title" class="w-40 flex-shrink-0">
                            <img :src="ad.poster" :alt="ad.title" class="w-full h-56 object-cover rounded-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import POSTER1 from "@/assets/BGHOME.jpg";
import POSTER2 from "@/assets/Ne_Zha_2_Poster.jpg";
export default {
    data() {
        return {
            movie: {
                title: "Pahlawan Kecil",
                year: "2025",
                seasons: "1",
                creator: "Canniago Verrian",
                cast: ["Augustian", "Agus Suwandi", "Andi", "Canniago Verrian", "David Chou", "Eril Sanjaya", "Ferry Govert", "Fernando", "Febby Cecillia", "James Lim", "Lustini", "M. Naufal", "Musliadi KH", "Raymond Saragih", "Tino Winata Sumarno", "Toni Lau", "Victor", "Yonky Pernando"],
                genre: "Drama Psikologis, Aksi",
                moods: "Misterius",
                description: "Sebuah film yang mengisahkan tentang anak yang memiliki trauma masa lalu, yang membuatnya sulit dalam bersosialisasi.",
                shortDescription: "Anak yang memiliki trauma masa lalu, yang membuatnya sulit dalam bersosialisasi, diceritakan dalam lingkungan yang penuh bayang misterius.",
                poster: POSTER2,
                similarMovies: [
                    { title: "AkarRasa", poster: POSTER1 },
                    { title: "Pahlawan Kecil Event", poster: POSTER2 },
                    { title: "Movie 3", poster: POSTER1 },
                    { title: "Movie 4", poster: POSTER2 },
                    { title: "Movie 5", poster: POSTER1 },
                    { title: "Movie 6", poster: POSTER2 },
                    { title: "Movie 7", poster: POSTER1 },
                    { title: "Movie 8", poster: POSTER2 },
                    { title: "Movie 9", poster: POSTER1 },
                    { title: "Movie 10", poster: POSTER2 }
                ],
                ads: [
                    { title: "Just Do It", poster: POSTER1 },
                    { title: "Once Upon a Time in Hollywood", poster: POSTER2 },
                    { title: "Ad 3", poster: POSTER1 },
                    { title: "Ad 4", poster: POSTER1 },
                    { title: "Ad 5", poster: POSTER2 },
                    { title: "Ad 6", poster: POSTER1 },
                    { title: "Ad 7", poster: POSTER2 },
                    { title: "Ad 8", poster: POSTER1 },
                    { title: "Ad 9", poster: POSTER2 },
                    { title: "Ad 10", poster: POSTER1 }
                ]
            }
        }
    }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

button {
    transition: background-color 0.3s ease;
}
</style>
