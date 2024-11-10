<template>
  <div class="block lg:hidden max-w-xl border border-gray-200 bg-white mx-auto mt-10">
    <!-- Video Preview Section -->
    <div class="relative aspect-video bg-gray-900">
      <img 
        src="@/assets/images/image.png" 
        alt="Course Preview" 
        class="w-full h-full object-cover"
      />
      <button class="absolute inset-0 flex items-center justify-center">
        <!-- Add your button content here -->
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex border-b">
      <button class="flex-1 px-4 py-3 text-center border-b-2 border-black font-medium">
        Personal
      </button>
      <button class="flex-1 px-4 py-3 text-center text-gray-600 hover:bg-gray-50">
        Teams
      </button>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-6">
      <!-- Subscription Section -->
      <div>
        <h2 class="text-xl font-bold mb-1">Subscribe to Udemy's top courses</h2>
        <p class="text-gray-600 text-xs mb-5">
          Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. 
          <a href="#" class="text-purple-600 font-medium hover:text-purple-700">Learn more</a>
        </p>
        <button class="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors">
          Try Personal Plan for free
        </button>
        <p class="text-xs text-gray-500 text-center mt-2">
          Starting at €15.83 per month after trial
        </p>
        <p class="text-xs text-gray-500 text-center">
          Cancel anytime
        </p>
      </div>

      <div class="flex items-center justify-center text-gray-400">
        <div class="w-full h-px bg-gray-200"></div>
        <span class="px-4 text-sm bg-white">or</span>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Price Section -->
      <div>
        <div class="text-xl font-bold mb-4 text-gray-700">€99.99</div>
        <button class="w-full border border-black bg-white text-black rounded hover:bg-gray-50 transition-colors">
          Add to cart
        </button>
        <p class="text-[10px] text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>
        <p class="text-[10px] text-gray-500 text-center">Full Lifetime Access</p>
      </div>

      <!-- Bottom Links -->
      <div class="flex justify-between text-sm text-gray-600 pt-4 border-t">
        <button class="hover:text-gray-900">
          <span>Share</span>
        </button>
        <button class="hover:text-gray-900">
          <span>Gift this course</span>
        </button>
        <button class="hover:text-gray-900">
          <span>Apply Coupon</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Optional styles for the component */
</style>
