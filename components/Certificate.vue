<template>
  <div class="border rounded-lg p-4 bg-white">
    <!-- Certification Intro Section -->
    <div class="text-sm text-gray-600 mb-4 flex">
      <span>Prepare for your certifications with this course:</span>
      <a href="#" class="text-blue-600 ml-1 hover:underline">Learn more</a>
    </div>

    <!-- Certifications List -->
    <div class="space-y-4">
      <!-- AWS Certified SysOps Administrator -->
      <div class="flex items-start space-x-4">
        <div class="w-17 h-17 rounded-lg flex items-center justify-center">
          <img src="@/assets/images/certificate.png" alt="AWS Certification" class="w-[70px] h-[70px]" />
        </div>
        <div>
          <h3 class="font-medium text-blue-600">AWS Certified SysOps Administrator - Associate</h3>
          <p class="text-sm text-gray-500">Issued by Amazon Web Services Training and Certification</p>
        </div>
      </div>

      <!-- AWS Certified Solutions Architect -->
      <div class="flex items-start space-x-4">
        <div class="w-17 h-17 rounded-lg flex items-center justify-center">
          <img src="@/assets/images/certificate.png" alt="AWS Solutions Architect" class="w-[70px] h-[70px]" />
        </div>
        <div>
          <h3 class="font-medium">AWS Certified Solutions Architect - Associate</h3>
        </div>
      </div>
    </div>

    <!-- Show More Button -->
    <button class="text-blue-600 text-sm mt-4 hover:underline">Show more →</button>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Optional scoped styles for customization */
</style>
