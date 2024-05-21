<template>
  <div class="bg-white pt-6 px-4 md:px-16">
    <div class="flex flex-col md:flex-row items-start mt-8 px-4 md:px-16 space-y-8 md:space-y-0 md:space-x-8">
      <div class="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 class="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1E3036] font-clash-display-medium">
            <span class="block">Why <span class="text-[#BCE272]">Choose</span></span>
            <span class="block">Elevate HR?</span>
          </h3>
          <p class="mt-8 text-left text-[#1E3036] text-sm md:text-md lg:text-lg font-clash-display-regular">
            Unlike general recruitment agencies, Elevate HR focuses exclusively on HR roles. This
            specialisation allows us to delve deeper, understanding the unique skill sets and attributes
            required for success in the HR field.
            <br /><br />
            We believe in personalised service. Our team takes the time to understand the specific needs of
            each client and candidate, ensuring a perfect fit that goes beyond just qualifications.
          </p>
        </div>
        <button
          class="mt-8 mb-12 md:mt-12 bg-white border border-[#C0F659] text-black py-2 px-4 rounded-full w-[162px] hover:bg-[#C0F659] hover:text-white transition duration-300">
          Explore Jobs
        </button>
      </div>
      <div class="py-4 md:w-1/2 flex justify-center md:justify-end">
        <img src="@/assets/Teamarrow2.png" alt="Sample Image" class="w-full md:w-[68%] h-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyExplore',
}
</script>

<style scoped>
.border-t-16 {
  border-top-width: 16px;
}
</style>
