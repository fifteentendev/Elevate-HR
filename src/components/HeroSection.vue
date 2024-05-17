<template>
    <div class="relative h-screen bg-cover bg-center"
        :style="{ backgroundImage: `url('${require('@/assets/Vector.png')}')`, backgroundColor: '#1E3036' }">
        <div class="absolute top-0 left-5">
            <img src="@/assets/Elevate-HR-Logo.png" alt="Elevate HR Logo" class="w-56 h-auto md:w-64" />
        </div>
        <div class="absolute top-0 right-5">
            <button @click="toggleMenu" class="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <nav :class="{ 'hidden': !menuOpen }"
                class="absolute right-0 mt-2 bg-[#1E3036] md:relative md:mt-0 md:bg-transparent md:flex space-x-4 text-[#C0F659] text-lg">
                <a href="#" class="block px-4 py-2 hover:underline">Home</a>
                <a href="#" class="block px-4 py-2 hover:underline">About Us</a>
                <a href="#" class="block px-4 py-2 hover:underline">Jobs</a>
                <a href="#" class="block px-4 py-2 hover:underline">Contact Us</a>
            </nav>
        </div>
        <header class="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 class="text-5xl md:text-6xl font-medium">
                <span class="text-[#c0f659]">Elevate</span> <span class="text-white"> Workforce,</span><br />
                <span class="text-white">Amplify Your</span> <span class="text-[#c0f659]">Impact</span>.
            </h1>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script>

<style scoped>
nav.md\\:hidden {
    display: none;
}

@media (min-width: 768px) {
    nav.md\\:hidden {
        display: flex;
    }
}
</style>
