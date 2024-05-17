<template>
    <div class="relative bg-cover bg-center py-12 md: pt-96"
        :style="{ backgroundImage: `url('${require('@/assets/Vector.png')}')`, backgroundColor: '#1E3036' }">
        <div
            class="container mx-auto flex flex-col md:flex-row justify-between items-start text-white space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-16">
            <!-- Left Column -->
            <div class="md:w-1/3 flex flex-col items-start pl-8">
                <img src="@/assets/Elevate-HR-Logo.png" alt="Elevate HR Logo" class="w-32 h-auto md:w-56" />
            </div>

            <!-- Middle Column -->
            <div class="md:w-1/3 flex flex-col items-start">
                <h4 class="text-lg font-bold mb-2">Privacy Protection</h4>
                <p class="text-sm text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, sem et pulvinar tempus,
                    dolor enim consequat nulla, id convallis justo justo ac dui. Cras pretium accumsan. Em et pulvinar
                    tempus, dolor enim consequat nulla.
                </p>
            </div>

            <!-- Right Column -->
            <div class="md:w-1/3 flex flex-col items-start">
                <h4 class="text-lg font-bold mb-2">Terms and Conditions</h4>
                <p class="text-sm text-left">
                    Cras pretium accumsan. Em et pulvinar tempus, dolor enim consequat nulla.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',
}
</script>

<style scoped></style>
