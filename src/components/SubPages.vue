<template>
    <div>
        <div class="border-t-16 border-[#C0F659] w-full"></div>
        <div class="bg-white pt-0 px-4 md:px-16">
            <div class="flex flex-col md:flex-row items-start mt-8 px-4 md:px-16 space-y-8 md:space-y-0 md:space-x-8">
                <div class="md:w-1/2 flex justify-center md:justify-start">
                    <img src="@/assets/Teamarrow.png" alt="Sample Image" class="w-full md:w-[68%] h-auto" />
                </div>
                <div class="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h3 class="text-left text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E3036]">
                            Your Partner in HR<br />
                            <span class="block mt-2">Recruitment Success</span>
                        </h3>
                        <p class="mt-8 text-left text-[#1E3036]">
                            Ut fugit prehento endelent dolest rem rerati dolorrovid qui optae voluptios molorro ribus,
                            ut
                            quaepro earciis volorum quos illorer iorerroreped quide sin essum faccullor sa volore
                            nonsedio
                            ipsa dolorior si ut maximin non reiciis quistibus rem con pero dolupta tquodia idi velendi
                            genditio. Igende illoremporem fugia conet vollitatur sed quamustiur?
                        </p>
                    </div>
                    <button
                        class="mt-8 md:mt-12 bg-white border border-[#C0F659] text-black py-2 px-4 rounded-full w-[162px] hover:bg-[#C0F659] hover:text-white transition duration-300">
                        Find Out More
                    </button>
                </div>
            </div>
            <div
                class="mt-20 flex flex-col pb-24 md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-16">
                <div class="relative flex-1 h-[416px] cursor-pointer group" @click="onClickRectangle(1)">
                    <img src="@/assets/Rectangle1.png" alt="Image 1" class="w-full h-full object-cover" />
                    <h4
                        class="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold group-hover:text-[#C0F659] transition duration-300">
                        Services</h4>
                    <img src="@/assets/Arrowvector1.png" alt="Arrow Icon"
                        class="absolute top-4 right-4 w-8 h-8 group-hover:hidden">
                    <img src="@/assets/Arrowvector2.png" alt="Arrow Icon Hover"
                        class="absolute top-4 right-4 w-8 h-8 hidden group-hover:block">
                </div>
                <div class="relative flex-1 h-[416px] cursor-pointer group" @click="onClickRectangle(2)">
                    <img src="@/assets/Rectangle2.png" alt="Image 2" class="w-full h-full object-cover" />
                    <h4
                        class="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold group-hover:text-[#C0F659] transition duration-300">
                        About Us</h4>
                    <img src="@/assets/Arrowvector1.png" alt="Arrow Icon"
                        class="absolute top-4 right-4 w-8 h-8 group-hover:hidden">
                    <img src="@/assets/Arrowvector2.png" alt="Arrow Icon Hover"
                        class="absolute top-4 right-4 w-8 h-8 hidden group-hover:block">
                </div>
                <div class="relative flex-1 h-[416px] cursor-pointer group" @click="onClickRectangle(3)">
                    <img src="@/assets/Rectangle3.png" alt="Image 3" class="w-full h-full object-cover" />
                    <h4
                        class="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold group-hover:text-[#C0F659] transition duration-300">
                        Contact</h4>
                    <img src="@/assets/Arrowvector1.png" alt="Arrow Icon"
                        class="absolute top-4 right-4 w-8 h-8 group-hover:hidden">
                    <img src="@/assets/Arrowvector2.png" alt="Arrow Icon Hover"
                        class="absolute top-4 right-4 w-8 h-8 hidden group-hover:block">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubPages',
    methods: {
        onClickRectangle(rectangleId) {
            alert(`Rectangle ${rectangleId} clicked`);
            // Implement the logic for clicking the rectangle
        }
    }
}
</script>

<style scoped>
.border-t-16 {
    border-top-width: 16px;
}
</style>
