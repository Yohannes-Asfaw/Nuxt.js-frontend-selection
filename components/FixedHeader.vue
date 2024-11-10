<template>
  <div
    id="fixed-header"
    class="bg-[#1C1D1F] text-white py-2 fixed left-0 w-full z-20 top-[-90px] transition-all duration-1000"
  >
    <div class="max-w-7xl ml-3">
      <!-- Course Title -->
      <h1 class="text-md font-bold mb-2">
        Amazon Web Services (AWS) Certified - 4 Certifications!
      </h1>

      <!-- Rating and Students -->
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <!-- Rating -->
        <div class="flex items-center gap-1">
          <span class="text-[#F69C08] font-bold">4.5</span>
          <!-- Star Icon -->
          <svg
            class="w-4 h-4 text-[#F69C08]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <!-- Ratings Count -->
          <a href="#" class="text-[#CEC0FC] hover:text-[#A435F0] underline">
            (23,942 ratings)
          </a>
        </div>

        <!-- Students Count -->
        <span class="text-white">158,602 students</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Add the scroll event listener to the window
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Clean up the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.getElementById('fixed-header');
      if (window.scrollY > 50) {
        header.classList.remove('top-[-90px]'); // Show it
        header.classList.add('top-0'); // Set it at the top
      } else {
        header.classList.remove('top-0');
        header.classList.add('top-[-90px]'); // Hide it again
      }
    },
  },
};
</script>

<style scoped>
/* Optional styles if needed */
</style>
