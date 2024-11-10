<template>
  <div class="bg-zinc-900 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="flex gap-8 w-full lg:w-1/2">
        <!-- Course Details Section -->
        <div class="flex-1 space-y-4">
          <!-- Breadcrumb Navigation -->
          <nav class="flex gap-2 text-sm text-purple-400">
            <a href="#">IT & Software</a>
            <span>›</span>
            <a href="#">IT Certifications</a>
            <span>›</span>
            <a href="#">Amazon AWS</a>
          </nav>
          
          <!-- Course Title -->
          <h1 class="text-3xl font-bold">
            Amazon Web Services (AWS) Certified - 4 Certifications!
          </h1>
          
          <!-- Course Description -->
          <p class="text-lg">
            Videos, labs & practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)
          </p>
          
          <!-- Rating Section -->
          <div class="flex items-center gap-2">
            <span class="rounded-md bg-yellow-500 px-2 py-1 text-xs font-semibold text-yellow-900">Bestseller</span>
            <div class="flex items-center gap-1">
              <span class="font-bold text-yellow-400">4.5</span>
              <div class="flex">
                <svg v-for="i in 5" :key="i" class="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span class="text-sm text-slate-400">(23,942 ratings)</span>
            </div>
            <span class="text-sm text-slate-400">158,600 students</span>
          </div>
          
          <!-- Created by Section -->
          <p class="text-sm">
            Created by <a href="#" class="text-purple-400">BackSpace Academy</a>,
            <a href="#" class="text-purple-400">Paul Coady</a>
          </p>
          
          <!-- Last Updated Section -->
          <div class="flex items-center gap-4 text-sm">
            <div class="flex items-center gap-2">
              <span>Last updated 5/2024</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>English</span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
/* Optional scoped styles for customization */
</style>
