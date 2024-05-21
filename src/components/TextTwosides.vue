<template>
  <div
    class="relative bg-cover bg-center"
    :style="{ backgroundImage: `url('${require('@/assets/Vector.png')}')`, backgroundColor: '#1E3036' }"
  >
    <div class="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16 py-12 md:py-16">
      <div class="md:w-1/2 text-left md:text-right text-white space-y-2 md:space-y-4">
        <h3 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight font-clash-display-medium">
          <span class="block text-[#C0F659]">Let us elevate</span>
          <span class="block">your recruitment</span>
          <span class="block">experience and</span>
          <span class="block text-[#C0F659]">unlock your HR</span>
          <span class="block text-[#C0F659]">potential.</span>
        </h3>
      </div>
      <div class="md:w-1/2 text-left text-white md:pl-8 mt-8 md:mt-0 space-y-4">
        <p class="text-base md:text-lg lg:text-xl font-clash-display-regular">
          Whether you're a seasoned HR professional seeking your next challenge or a company in need of HR
          talent that can drive your business forward, Elevate HR is here to elevate your recruitment
          experience.
        </p>
        <p class="text-base md:text-lg lg:text-xl text-[#C0F659] font-clash-display-regular">
          Contact us today to embark on a journey towards HR excellence.
        </p>
        <button
          class="mt-8 md:mt-16 lg:mt-20 bg-white border border-[#C0F659] text-black py-2 px-4 rounded-full w-[162px] hover:bg-[#C0F659] hover:text-white transition duration-300"
        >
          Find Out More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextTwosides',
}
</script>

<style scoped></style>
