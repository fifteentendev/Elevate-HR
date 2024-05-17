<template>
    <div class="relative bg-cover bg-center"
        :style="{ backgroundImage: `url('${require('@/assets/Missionbg.png')}')` }">
        <div class="border-t-16 border-[#C0F659] w-full"></div>
        <div class="flex flex-col md:flex-row items-start py-20 px-4 md:px-16">
            <!-- Increased padding from py-16 to py-20 -->
            <div class="md:w-1/3 text-right">
                <h3 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <span class="text-[#C0F659] block">Our</span>
                    <span class="text-white block">Mission:</span>
                </h3>
            </div>
            <div class="md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <p class="text-left text-white text-lg md:text-xl lg:text-2xl">
                    Our mission is to provide exceptional HR recruitment services by connecting talented individuals
                    with dynamic organizations. We strive to build lasting relationships and deliver solutions that
                    drive success for both our clients and candidates.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurMission',
}
</script>

<style scoped>
.border-t-16 {
    border-top-width: 16px;
}
</style>
