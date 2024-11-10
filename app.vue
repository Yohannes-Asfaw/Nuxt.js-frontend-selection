<template>
  <div class="relative min-h-screen bg-white">
<FixedHeader />
    <!-- Navigation -->
<header class="flex items-center justify-between px-6 py-2 border-b border-gray-200">
    <!-- Left section -->
    <div class="flex items-center gap-4">
      <!-- Logo -->
      <a href="/" class="flex items-center">
            <img src="@/assets/images/image2.png" alt="Udemy" class="h-15" />
          
      </a>
      <button class="hidden md:block text-sm text-gray-600">Categories</button>
    </div>

    <!-- Search bar -->
    <div class="hidden md:block flex-grow mx-4 max-w-3xl relative">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for anything"
          class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-400"
        >
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-2 md:gap-4">
      <button class="hidden lg:block text-sm text-gray-600 whitespace-nowrap">Udemy Business</button>
      <button class="hidden lg:block text-sm text-gray-600 whitespace-nowrap">Teach on Udemy</button>
      
      <!-- Mobile search button -->
      <button class="md:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      <!-- Cart icon -->
      <button class="relative">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      <!-- Auth buttons -->
      <button class="hidden sm:block px-4 py-2 text-sm font-bold text-gray-700 border border-gray-700 hover:bg-gray-50">
        Log in
      </button>
      <button class="hidden sm:block px-4 py-2 text-sm font-bold text-white bg-black hover:bg-gray-900">
        Sign up
      </button>

      <!-- Language selector -->
      <button class="hidden sm:flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-50">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </button>

      <!-- Mobile menu button -->
      <button class="sm:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
<CoursePreview/>
<Wellcome/>
    <!-- Course Header -->
    
<div id="fixed-card" class="hidden lg:block max-w-xs border border-gray-200 bg-white fixed right-4 z-30 top-[90px] lg:right-[300px] lg:top-[90px] transition-all duration-1000">
    <!-- Video Preview Section -->
    <div id="coursePreview" class="relative aspect-video bg-gray-900 transition-all duration-1000">
      <img 
        src="@/assets/images/image.png" 
        alt="Course Preview" 
        class="w-full h-full object-cover"
      />
      <button class="absolute inset-0 flex items-center justify-center">
        
      </button>
      
    </div>

    <!--  -->
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
        <button class="w-full border h-10 font-bold border-black bg-white text-black rounded hover:bg-gray-50 transition-colors">
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

    <!-- bottom -->
<div class="max-w-3xl ml-[110px] p-4 space-y-6 ">
      <Certificate/>
      <Info/>


    <!-- Related Topics -->
    <div>
      <h2 class="font-medium text-lg mb-4">Explore related topics</h2>
      <div class="flex flex-wrap gap-2">
        <button class="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">Amazon AWS</button>
        <button class="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">AWS Certified Solutions Architect - Associate</button>
        <button class="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">AWS Certified Developer - Associate</button>
        <button class="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">AWS Certified SysOps Administrator - Associate</button>
        <button class="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">IT Certifications</button>
      </div>
    </div>

    <!-- Course Includes -->
    <div class="border rounded-lg p-4 bg-white">
      <h2 class="font-medium text-lg mb-4">This course includes:</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-sm">46 hours on-demand video</span>
        </div>
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span class="text-sm">7 articles</span>
        </div>
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          <span class="text-sm">81 downloadable resources</span>
        </div>
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
          <span class="text-sm">Access on mobile and TV</span>
        </div>
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <span class="text-sm">Certificate of completion</span>
        </div>
      </div>
    </div>

    <!-- Companies -->
    <div class="border rounded-lg p-4 bg-white">
      <h2 class="font-medium text-lg mb-4">Top companies offer this course to their employees</h2>
      <p class="text-sm text-gray-600 mb-4">
        This course was selected for our collection of top-rated courses trusted by businesses worldwide. 
        <a href="#" class="text-blue-600 hover:underline">Learn more</a>
      </p>
      <div class="flex items-center justify-between">
        <img src="@/assets/images/nasdaq-dark.svg" alt="Nasdaq" class="h-10" />
        <img src="@/assets/images/volkswagen-dark.svg" alt="Volkswagen" class="h-10" />
        <img src="@/assets/images/box-dark.svg" alt="Box" class="h-10" />
        <img src="@/assets/images/netapp-dark.svg" alt="NetApp" class="h-10" />
        <img src="@/assets/images/eventbrite-dark.svg" alt="Eventbrite" class="h-10" />
      </div>
    </div>
<div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-xl font-bold">Course content</h2>
        <button class="text-blue-600 text-sm hover:underline">Expand all sections</button>
      </div>
      <p class="text-sm text-gray-600">5 sections • 250 lectures • 45h 59m total length</p>
    </div>

    <!-- Course Sections -->
    <div class="space-y-2">
      <div v-for="(section, index) in sections" :key="index" class="border rounded">
        <button 
          @click="toggleSection(index)"
          class="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
        >
          <div class="flex items-center space-x-3">
            <svg 
              class="w-4 h-4 text-gray-600 transform transition-transform"
              :class="{ 'rotate-90': section.isOpen }"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span class="font-medium">{{ section.title }}</span>
          </div>
          <span class="text-sm text-gray-600">{{ section.duration }}</span>
        </button>
        
        <div v-if="section.isOpen" class="px-11 py-2 border-t bg-gray-50">
          <p class="text-sm text-gray-600">{{ section.lectures }} lectures • {{ section.time }}</p>
        </div>
      </div>
    </div>

    <!-- Requirements -->
    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Requirements</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li class="text-sm text-gray-600">Basic understanding of computers and networking.</li>
        <li class="text-sm text-gray-600">The student will require an AWS account to complete hands on labs sessions.</li>
        <li class="text-sm text-gray-600">Windows, Linux or Mac PC to complete hands on labs sessions.</li>
      </ul>
    </div>

    <!-- Description -->
    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Description</h2>
      <div class="space-y-4">
        <p class="text-sm text-gray-800 font-bold">PLEASE NOTE THIS IS A VERY HANDS ON COURSE.</p>
        <p class="text-sm text-gray-800 font-bold">IF YOU ARE LOOKING FOR COURSE THAT TALKS TO SLIDES, THIS IS NOT FOR YOU!</p>
        <p class="text-sm text-gray-600">
          This course is fully updated for the latest AWS exams and is regularly updated at least every month; always has and always will be.
        </p>
        <p class="text-sm text-gray-600">
          The most comprehensive AWS certification prep course on Udemy.
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li class="text-sm text-gray-600">
            real life labs with professionally produced detailed full 1080s of pages!
          </li>
          <li class="text-sm text-gray-600">
            Python, NodeJS and JavaScript code for developed labs (Lambda, Cognito, X-Ray, SDK, SNS and much more)
          </li>
        </ul>
      </div>
      <button class="text-blue-600 text-sm mt-4 hover:underline">Show more →</button>
    </div>
 <!-- Featured Review -->
    <div class="border rounded-lg p-6 bg-white">
      <h2 class="font-medium mb-4">Featured review</h2>
      <div class="flex items-start space-x-4">
        <img 
          src="/assets/images/flix.jpg" 
          alt="Felix E." 
          class="w-12 h-12 rounded-full"
        />
        <div class="flex-1">
          <div class="flex items-center mb-1">
            <h3 class="font-medium">Felix E.</h3>
          </div>
          <div class="text-sm text-gray-600 mb-1">64 courses</div>
          <div class="text-sm text-gray-600 mb-2">89 reviews</div>
          <div class="flex items-center mb-3">
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="ml-2 text-sm text-gray-600">5 months ago</span>
          </div>
          <p class="text-sm text-gray-800 mb-4">
            This is truly a practical survival handbook. After this course, you will be ready to work comfortably with the requirements of a Cloud Practitioner. If you pay time enough to do all the labs, you can demonstrate know how in any job interview for an AWS Cloud Practitioner. It is the most hands-on course on udemy for this level.
          </p>
          <div class="flex items-center space-x-4">
            <button class="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
              <!-- <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg> -->
<img 
          src="/assets/images/like.png" 
          alt="like" 
          class="w-7 h-7 "
        />
              <span>Helpful</span>
            </button>
            <button class="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
              <!-- <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 6H7a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg> -->
              <img 
          src="/assets/images/dislike.png" 
          alt="dislike" 
          class="w-6 h-6 "
        />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Students also bought -->
 <div class="max-w-3xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-6">Students also bought</h2>

  <div class="space-y-4">
    <div v-for="course in courses" :key="course.id" class="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg">
      <!-- Course Image -->
      <img :src="`/assets/images/${course.image}`"  :alt="course.title" class="w-16 h-16 object-cover rounded" />

      <!-- Course Info -->
      <div class="flex-grow min-w-0 w-[70%]">
        <h3 class="font-bold text-base leading-tight mb-1 truncate">{{ course.title }}</h3>

        <!-- Course Meta -->
        <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
          <span>{{ course.hours }} total hours</span>
          <span>•</span>
          <span>Updated {{ course.updated }}</span>
          <span v-if="course.bestseller" class="px-1.5 py-0.5 bg-[#eceb98] text-[#593d00] font-bold rounded-sm">
            Bestseller
          </span>
        </div>
      </div>

      <!-- Rating & Students -->
      <div class="flex flex-col items-start justify-start gap-1 w-[20%]">
        <!-- Rating -->
        <div class="flex items-center gap-1">
          <span class="font-bold text-sm">{{ course.rating }}</span>
          <svg class="w-4 h-4 text-[#b4690e]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <!-- Students -->
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span class="text-sm">{{ course.students.toLocaleString() }}</span>
        </div>
      </div>

      <!-- Price -->
      <div class="text-right">
        <div class="font-bold">€{{ course.price }}</div>
        <button class="mt-2 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <button class="w-full mt-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
    Show more
  </button>
</div>
  <div class="max-w-2xl p-6 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-6">Frequently Bought Together</h2>
    
    <div class="space-y-4">
      <!-- Course 1 -->
      <div class="flex gap-4">
        <img src="@/assets/images/course1.jpg" alt="Course thumbnail" class="w-[180px] h-[100px] object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-bold text-[16px] leading-tight mb-1">
            Amazon Web Services (AWS) Certified - 4 Certifications!
          </h3>
          <p class="text-sm text-gray-600 mb-1">BackSpace Academy, Paul Coady</p>
          <div class="flex items-center gap-1">
            <span class="font-bold">4.5</span>
            <!-- Star Rating -->
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= 4 ? 'text-[#E59819]' : 'text-gray-300'" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">(23,942)</span>
          </div>
        </div>
        <div class="font-bold">$74.99</div>
      </div>

      <!-- Course 2 -->
      <div class="flex gap-4">
        <img src="@/assets/images/course4.jpg" alt="Course thumbnail" class="w-[180px] h-[100px] object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-bold text-[16px] leading-tight mb-1">
            Ultimate AWS Certified Solutions Architect Professional 2024
          </h3>
          <p class="text-sm text-gray-600 mb-1">Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer</p>
          <div class="flex items-center gap-1">
            <span class="font-bold">4.7</span>
            <!-- Star Rating -->
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-[#E59819]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">(20,507)</span>
          </div>
          <span class="inline-block px-2 py-1 bg-[#ECEB98] text-[#3D3C0A] text-xs font-bold rounded-sm mt-1">
            Bestseller
          </span>
        </div>
        <div class="font-bold">$74.99</div>
      </div>

      

      <!-- Course 3 -->
      <div class="flex gap-4">
        <img src="@/assets/images/course5.jpg" alt="Course thumbnail" class="w-[180px] h-[100px] object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-bold text-[16px] leading-tight mb-1">
            AWS Certified DevOps Engineer Professional 2024 - DOP-C02
          </h3>
          <p class="text-sm text-gray-600 mb-1">Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer</p>
          <div class="flex items-center gap-1">
            <span class="font-bold">4.7</span>
            <!-- Star Rating -->
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-[#E59819]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">(15,941)</span>
          </div>
          <span class="inline-block px-2 py-1 bg-[#ECEB98] text-[#3D3C0A] text-xs font-bold rounded-sm mt-1">
            Bestseller
          </span>
        </div>
        <div class="font-bold">$74.99</div>
      </div>
    </div>

    <!-- Total and Add to Cart -->
    <div class="flex items-center justify-between mt-6 pt-6 border-t">
      <div>
        <span class="text-sm text-gray-600">Total:</span>
        <span class="font-bold text-xl ml-2">$224.97</span>
      </div>
      <button class="px-6 py-3 bg-[#A435F0] hover:bg-[#8710ED] text-white font-bold rounded-sm transition-colors">
        Add all to cart
      </button>
    </div>
  </div>
 <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-8">Instructors</h2>
    
    <!-- BackSpace Academy -->
    <div class="mb-12">
      <a href="#" class="text-purple-700 text-lg font-semibold hover:underline">BackSpace Academy</a>
      <p class="text-gray-600 text-sm mb-4">The fastest route to cloud certification.</p>
      
      <div class="flex items-start gap-6">
        <img src="@/assets/images/backspace.jpg" alt="BackSpace Academy" class="w-24 h-24 rounded-full" />
        
        <div class="flex flex-col gap-2">
          <div class="block gap-x-6 gap-y-2">
            <!-- Rating -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span class="font-medium">4.5 Instructor Rating</span>
            </div>
            
            <!-- Reviews -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <span>33,732 Reviews</span>
            </div>
            
            <!-- Students -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>570,408 Students</span>
            </div>
            
            <!-- Courses -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span>3 Courses</span>
            </div>
          </div>
          
          <p class="text-gray-700 mt-2">
            Providing accelerated learning programs taught by AWS professional level certified instructors since 2014. A unique approach that focusses on maximum results in the shortest possible time. Quality lecture videos reinforced with instructional and hands-on lab videos and, review tests.
          </p>
          <p class="text-gray-700 mt-2">
            Don't waste hours of valuable time watching long boring videos only to find you are still not prepared for the exam.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Paul Coady -->
    <div class="mb-5">
      <a href="#" class="text-purple-700 text-lg font-semibold hover:underline">Paul Coady</a>
      <p class="text-gray-600 text-sm mb-4">Cloud Technology Expert</p>
      
      <div class="flex items-start gap-6">
        <img src="@/assets/images/backspace.jpg" alt="Paul Coady" class="w-24 h-24 rounded-full" />
        
        <div class="flex flex-col gap-2">
          <div class="block gap-x-6 gap-y-2">
            <!-- Rating -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span class="font-medium">4.5 Instructor Rating</span>
            </div>
            
            <!-- Reviews -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <span>23,942 Reviews</span>
            </div>
            
            <!-- Students -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>158,600 Students</span>
            </div>
            
            <!-- Courses -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span>1 Course</span>
            </div>
          </div>
          
          <p class="text-gray-700 mt-2">
            Highly experienced expert in cloud architecture design and deployment, not simply a certificate collector. Amazon Web Services Certified Professional. Providing a learn-by-doing approach produces students not only ready to pass an exam but also ready for employment. BackSpace Academy, the fastest route to cloud certification. Providing AWS Training since 2014 and still going strong.
          </p>
        </div>
      </div>
    </div>
  </div>

<div class="max-w-3xl mx-auto">
  <div class="flex items-center mb-6">
    <svg class="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
    <span class="ml-2 text-xl font-bold">{{ overallRating }} course rating</span>
    <span class="ml-2 text-gray-600">• {{ totalRatings }} ratings</span>
  </div>

  <div class="grid grid-cols-2 gap-6">
    <!-- Loop through reviews -->
    <div v-for="review in reviews" :key="review.id" class=" border-t border-gray-200 pt-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
            {{ review.userInitials }}
          </div>
          <div class="ml-4">
            <h3 class="font-bold">{{ review.userName }}</h3>
            <div class="flex items-center">
              <div class="flex">
                <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-600">{{ review.timeAgo }}</span>
            </div>
          </div>
        </div>
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      <p class="mt-2 text-gray-700">{{ review.text }}</p>
      <div class="mt-2 flex items-center space-x-4">
        <button class="flex items-center text-sm text-gray-500 hover:text-gray-700">
          <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          Helpful?
        </button>
        <button class="flex items-center text-sm text-gray-500 hover:text-gray-700">
          <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <button class="mt-6 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
    Show all reviews
  </button>
</div>
<div class="max-w-3xl mx-auto">
    <h2 class="text-xl font-bold mb-6">
      More Courses by 
      <a href="#" class="text-purple-600 hover:underline">BackSpace Academy</a>
    </h2>
    
    <div class="grid md:grid-cols-2 gap-6 z-1">
      <!-- Course Card 1 -->
      <div class="flex flex-col">
        <div class="relative aspect-video bg-yellow-400 rounded-lg overflow-hidden mb-3">
          <img 
            src="@/assets/images/backspaceone.avif" 
            alt="AWS Zero to Hero Course" 
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="font-bold mb-1">
          <a href="#" class="hover:text-purple-600">
            Amazon Web Services (AWS) - Zero to Hero
          </a>
        </h3>
        <p class="text-sm text-gray-600 mb-1">BackSpace Academy</p>
        <div class="flex items-center mb-1">
          <span class="font-bold mr-1">4.5</span>
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" 
                :class="i <= 4 ? 'text-yellow-400' : 'text-gray-300'" 
                viewBox="0 0 24 24" 
                fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span class="text-sm text-gray-600 ml-1">(7,911)</span>
        </div>
        <div class="text-sm text-gray-600">
          3 total hours · 14 lectures · All Levels
        </div>
        <div class="mt-1 font-bold">Free</div>
      </div>

      <!-- Course Card 2 -->
      <div class="flex flex-col">
        <div class="relative aspect-video bg-blue-400 rounded-lg overflow-hidden mb-3">
          <img 
            src="@/assets/images/backspaceone.avif"
            alt="AWS DevOps Course" 
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="font-bold mb-1">
          <a href="#" class="hover:text-purple-600">
            AWS DevOps CI/CD - CodePipeline, Elastic...
          </a>
        </h3>
        <p class="text-sm text-gray-600 mb-1">BackSpace Academy</p>
        <div class="flex items-center mb-1">
          <span class="font-bold mr-1">4.5</span>
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" 
                :class="i <= 4 ? 'text-yellow-400' : 'text-gray-300'" 
                viewBox="0 0 24 24" 
                fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span class="text-sm text-gray-600 ml-1">(1,887)</span>
        </div>
        <div class="text-sm text-gray-600">
          40 total mins · 5 lectures · All Levels
        </div>
        <div class="mt-1 font-bold">Free</div>
      </div>
    </div>

    <button 
      class="w-full mt-8 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      Report abuse
    </button>
  </div>
  </div>
    <footer class="bg-[#1C1D1F] text-white mt-10">
    <!-- Top Companies Banner -->
    <div class="border-b border-gray-300">
      <div class="max-w-7xl mx-10  py-6 flex items-center justify-between text-sm">
        <p class="flex items-center text-lg font-bold tracking-wide">
          <span>Top companies choose</span>
          <a href="#" class="text-[#A435F0] mx-1 hover:underline">Udemy Business</a>
          <span>to build in-demand career skills.</span>
        </p>
        <div class="flex items-center space-x-8">
          <img src="@/assets/images/nasdaq-dark.svg" alt="Nasdaq" class="h-8 opacity-80" />
          <img src="@/assets/images/volkswagen-dark.svg" alt="VW" class="h-8 opacity-80" />
          <img src="@/assets/images/box-dark.svg" alt="Box" class="h-8 opacity-80" />
          <img src="@/assets/images/netapp-dark.svg" alt="NetApp" class="h-8 opacity-80" />
          <img src="@/assets/images/eventbrite-dark.svg" alt="Eventbrite" class="h-8 opacity-80" />
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-10 py-12">
      <h2 class="text-xl font-bold mb-8">Explore top skills and certifications</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Certifications by Issuer -->
        <div>
          <h3 class="font-bold mb-4">Certifications by Issuer</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Amazon Web Services (AWS) Certifications</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Six Sigma Certifications</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Microsoft Certifications</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Cisco Certifications</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Scrum Certifications</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">See all Certifications</a></li>
          </ul>
        </div>

        <!-- Web Development -->
        <div>
          <h3 class="font-bold mb-4">Web Development</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Web Development</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">JavaScript</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">React JS</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Angular</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Java</a></li>
          </ul>

          <h3 class="font-bold mt-8 mb-4">Data Science</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Data Science</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Python</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Machine Learning</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">ChatGPT</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Deep Learning</a></li>
          </ul>
        </div>

        <!-- IT Certifications -->
        <div>
          <h3 class="font-bold mb-4">IT Certifications</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Amazon AWS</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">AWS Certified Cloud Practitioner</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">AZ-900 Microsoft Azure Fundamentals</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">AWS Certified Solutions Architect - Associate</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Kubernetes</a></li>
          </ul>

          <h3 class="font-bold mt-8 mb-4">Communication</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Communication Skills</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Presentation Skills</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Public Speaking</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Writing</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">PowerPoint</a></li>
          </ul>
        </div>

        <!-- Leadership & Business -->
        <div>
          <h3 class="font-bold mb-4">Leadership</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Leadership</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Management Skills</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Project Management</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Personal Productivity</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Emotional Intelligence</a></li>
          </ul>

          <h3 class="font-bold mt-8 mb-4">Business Analytics & Intelligence</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Microsoft Excel</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">SQL</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Microsoft Power BI</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Data Analysis</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Business Analysis</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-700">
        <!-- About -->
        <div>
          <h3 class="font-bold mb-4">About</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">About us</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Careers</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Contact us</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Blog</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Investors</a></li>
          </ul>
        </div>

        <!-- Discovery Udemy -->
        <div>
          <h3 class="font-bold mb-4">Discovery Udemy</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Get the app</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Teach on Udemy</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Plans and Pricing</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Affiliate</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Help and Support</a></li>
          </ul>
        </div>

        <!-- Udemy for Business -->
        <div>
          <h3 class="font-bold mb-4">Udemy for Business</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Udemy Business</a></li>
          </ul>
        </div>

        <!-- Legal & Accessibility -->
        <div>
          <h3 class="font-bold mb-4">Legal & Accessibility</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#A435F0]">Accessibility statement</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Privacy policy</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Sitemap</a></li>
            <li><a href="#" class="hover:text-[#A435F0]">Terms</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold">udemy</a>
          <span class="text-sm ml-2">© 2024 Udemy, Inc.</span>
        </div>
        <button class="flex items-center space-x-2 text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM3.616 11h3.905c-.195-2.843-.207-5.414-.031-7.667A8.008 8.008 0 0 0 3.616 11zm5.819 0h5.13c-.155-2.457-.165-4.937-.031-7.333h-5.07c.134 2.396.124 4.876-.029 7.333zm-.031 2c.13 2.457.144 4.937-.031 7.333h5.13c-.155-2.457-.165-4.937-.031-7.333h-5.068zm7.032-9.667c.176 2.253.164 4.824-.031 7.667h3.905a8.008 8.008 0 0 0-3.874-7.667zm.031 9.667a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13h-3.965z"/>
          </svg>
          <span>English</span>
        </button>
      </div>
    </div>
  </footer>
  </div>




</template>

<script setup>
import FixedHeader from '~/components/FixedHeader.vue';
import CoursePreview from '~/components/CoursePreview.vue';
import Wellcome from '~/components/Wellcome.vue';
import Certificate from '~/components/Certificate.vue';
import Info from '~/components/Info.vue';
import { ref } from 'vue'
import { computed } from 'vue'
const overallRating = 4.5;
const totalRatings = '24K';

const reviews = [
  {
    id: 1,
    userInitials: 'FN',
    userName: 'Freddy N.',
    rating: 5,
    timeAgo: '5 days ago',
    text: 'Very well-organized and informative. Not hard to understand.'
  },
  {
    id: 2,
    userInitials: 'SR',
    userName: 'Scott R.',
    rating: 3,
    timeAgo: 'a month ago',
    text: 'Needs to be updated to synch with the new AWS Interface. Gets a little confusing trying to find some of the configuration settings.'
  },
  {
    id: 3,
    userInitials: 'DV',
    userName: 'Deepak V.',
    rating: 5,
    timeAgo: 'a month ago',
    text: 'thanks for the excellent training material'
  },
  {
    id: 4,
    userInitials: 'DP',
    userName: 'dukire P.',
    rating: 5,
    timeAgo: 'a month ago',
    text: 'It was a good match for me.I gain so much of knowledge while taking this course.Thank you'
  }
];

const total = computed(() => courses2.reduce((sum, course) => sum + course.price, 0))

const courses = ref([
  {
    id: 1,
    title: 'Ultimate AWS Certified Developer Associate NEW DDA-C02',
    rating: 4.7,
    students: '173,435',
    price: '84.99',
    hours: '32',
    updated: '11/2024',
    image: "course1.jpg",
    bestseller: true
  },
  {
    id: 2,
    title: 'AWS Certified Developer Associate - AWS Certification',
    rating: 4.6,
    students: '43,444',
    price: '94.99',
    hours: '24.5',
    updated: '11/2024',
    image: "course2.jpg",
    bestseller: false
  },
  {
    id: 3,
    title: 'Ultimate AWS Cloud Practitioner - AWS Certification',
    rating: 4.7,
    students: '89,384',
    price: '84.99',
    hours: '17.5',
    updated: '11/2024',
    image: "course3.jpg",
    bestseller: false
  },
  {
    id: 4,
    title: 'AWS Certified Cloud Practitioner 2024 [NEW]',
    rating: 4.5,
    students: '141,881',
    price: '89.99',
    hours: '24.5',
    updated: '9/2024',
    image: "course4.jpg",
    bestseller: false
  },
  {
    id: 5,
    title: 'The AWS Course - Updated 2023',
    rating: 4.5,
    students: '52,241',
    price: '89.99',
    hours: '45',
    updated: '2/2024',
    image: "course5.jpg",
    bestseller: false
  },
  {
    id: 6,
    title: 'Ultimate AWS Certified Solutions Architect Professional 2024',
    rating: 4.7,
    students: '163,185',
    price: '84.99',
    hours: '17',
    updated: '11/2024',
    image: 'course6.jpg',
    bestseller: true
  }
])
const sections = ref([
  {
    title: 'AWS Certified Cloud Practitioner',
    lectures: '52 lectures',
    time: '10h 51m',
    duration: '52 lectures • 10h 51m',
    isOpen: false
  },
  {
    title: 'AWS Certified Associate Core Knowledge',
    lectures: '27 lectures',
    time: '8h 17m',
    duration: '27 lectures • 8h 17m',
    isOpen: false
  },
  {
    title: 'AWS Certified Developer Associate - Final Preparation',
    lectures: '34 lectures',
    time: '9h 47m',
    duration: '34 lectures • 9h 47m',
    isOpen: false
  },
  {
    title: 'AWS Certified Solutions Architect Associate - Final Preparation',
    lectures: '38 lectures',
    time: '9h 13m',
    duration: '38 lectures • 9h 13m',
    isOpen: false
  },
  {
    title: 'AWS Certified SysOps Administrator Associate - Final Preparation',
    lectures: '41 lectures',
    time: '8h 1m',
    duration: '41 lectures • 8h 1m',
    isOpen: false
  }
])

const toggleSection = (index) => {
  sections.value[index].isOpen = !sections.value[index].isOpen
}

import { onMounted } from 'vue';

onMounted(() => {
  // Ensure that this runs only on the client side after mounting
  if (process.client) {
    const card = document.querySelector('#fixed-card');
    const footer = document.querySelector('footer');
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', () => {
      const footerTop = footer.offsetTop;
      const cardHeight = card.offsetHeight;
      const scrollPosition = window.scrollY;

      // If the card's bottom reaches or exceeds the footer, stop the fixed positioning
      if (scrollPosition + 100 >= footerTop - cardHeight) {
        card.style.position = 'absolute';
        card.style.top = `${footerTop - cardHeight - 60}px`; // Adjust 10px if needed for spacing
        card.style.zIndex = 10;
      } else if (scrollPosition <= 200) {
        // If we're less than 200px from the top, the card stays fixed
        card.style.position = 'fixed';
        card.style.top = '90px';
        card.style.zIndex = 25;
      } else {
        // Otherwise, keep the card fixed at the top
        card.style.position = 'fixed';
        card.style.top = '0px';
        card.style.zIndex = 25;
      }
    });

    
  }
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const handleScroll = () => {
  const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
  const scrollPosition = window.scrollY;

  // Get the reference to the course preview div
  const coursePreviewDiv = document.querySelector("#coursePreview");

  if (scrollPosition > headerHeight+300) {
    // Hide the course preview when scrolling past the header
    coursePreviewDiv.style.display = 'none';
  } else {
    // Show it again when the scroll is back to the top
    coursePreviewDiv.style.display = 'block';
  }
};

</script>

<style scoped>
/* Additional styles can be added here if needed */
  .custom-position {
    top: 5rem; /* Equivalent to top-20 */
    right: 15rem; /* Custom value for right */
  }
</style>