<template>
  <div class="bg-white py-12 px-4 md:px-16">
    <div class="flex flex-col md:flex-row items-start justify-between mt-8 px-4 md:px-16 space-y-8 md:space-y-0 md:space-x-8">
      <!-- Left Side -->
      <div class="md:w-1/2 flex flex-col px-4 md:px-8">
        <h4 class="text-4xl md:text-4xl font-medium text-[#1E3036] mb-4 text-left font-clash-display-medium">
          <span class="block">Discuss your future with</span>
          <span class="block">one of our <span class="text-[#BCE272]">specialist team</span></span>
          <span class="block"><span class="text-[#BCE272]">members</span> today.</span>
        </h4>
        <form class="space-y-6">
          <input type="text" placeholder="Full Name" class="w-full p-4 rounded-lg bg-[#283c43bd] text-white placeholder-white font-clash-display-regular" />
          <input type="email" placeholder="Email Address" class="w-full p-4 rounded-lg bg-[#283c43bd] text-white placeholder-white font-clash-display-regular" />
          <input type="tel" placeholder="Telephone Number" class="w-full p-4 rounded-lg bg-[#283c43bd] text-white placeholder-white font-clash-display-regular" />
          <textarea placeholder="Brief Message" rows="6" class="w-full p-4 rounded-lg bg-[#283c43bd] text-white placeholder-white font-clash-display-regular"></textarea>
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox text-[#283c43bd] mr-2">
              <span class="text-[#1E3036] font-clash-display-regular">I agree to the terms and conditions</span>
            </label>
            <button type="submit" class="bg-white border border-[#C0F659] text-black py-2 px-4 rounded-full w-[162px] hover:bg-[#C0F659] hover:text-white transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- Right Side -->
      <div class="md:w-1/2 hidden md:flex flex-col items-start justify-center px-4 md:px-8 mt-8 md:mt-0">
        <img src="@/assets/Johnsmith.png" alt="John Smith" class="w-32 h-32 mt-36 mb-6" />
        <h4 class="text-3xl font-bold text-[#1E3036] mb-2 font-clash-display-bold">John Smith</h4>
        <p class="text-2xl text-[#1E3036] mb-4 font-clash-display-regular">Head Consultant</p>
        <p class="text-xl text-[#1E3036] mb-6 text-left font-clash-display-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-[#1E3036] hover:text-[#C0F659] transition duration-300">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-[#1E3036] hover:text-[#C0F659] transition duration-300">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
}
</script>

<style scoped>
input,
textarea {
  border: none;
  outline: none;
}

.placeholder-white::placeholder {
  color: white;
  opacity: 1;
}

.form-checkbox {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
