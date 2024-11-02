<template>
  <div class="grid grid-cols-1 ">
    <div class="bg-white">
      <div class="grid grid-cols-6 m-2 ">
        <div class="col-span-2">
          <h3 class="text-[20px] font-bold p-3 ">Md. Rashedul Hoque Bhuiyan</h3>
        </div>
        <div class="col-span-3 ">
          
          <el-header class="">
<!-- Hamburger Icon for Mobile -->
            
            <nav :class="{ 'block': isOpen, 'hidden': !isOpen }" class="flex justify-between items-center py-4 sticky top-0 z-10">

              <div class="pl-20">
                <ul class="flex space-x-6 text-center font-bold">
                  
                  <li><a href="#work-approch" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Process</a></li>
                  <li><a href="#portfolio" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Projects</a></li>
                  <li><a href="#technologies" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Skills</a></li>
                  <!-- <li><a href="#contact-us" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Contact</a></li> -->
                </ul>

              </div>
            </nav>
          </el-header>
        </div>
        <div class="lg:block md:block sm:hidden xsm:hidden col-span-1 justify-self-end relative group mt-3 mr-2">

            <a  class="text-[18px] font-bold p-3  border-purple-600 rounded-[10px] bg-green-400 " target="_blank"  @click="hireUs" >Hello</a>


          <div class="absolute right-full mr-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
            Open Whatsapp
          </div>
        </div>
        <div class="flex md:hidden items-center ml-auto">
              <button 
                  @click="toggleMenu" 
                  class="block md:hidden focus:outline-none text-right"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
            </button>
            </div>

      </div>

    </div>
    <div class="h-screen/2 bg-[#0dceaf] pt-10">
      <!-- <h1 class="pb-10 ml-10 font-extrabold text-[30px]"> Md. Rashedul Hoque Bhuiyan</h1> -->
      <div class="grid sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-6">
        <div class="sm:col-span-1 md:col-span-2 lg:col-span-2 pl-30">

          <img  src="../assets/myself.png" class="" alt="">
        </div>
        <div class="sm:col-span-1 md:col-span-6 lg:col-span-4 pl-30 pr-10 pb-5 border-amber-500 text-center text-justify">
         

         <h1 class="pb-10 p-5 font-extrabold text-[20px]"> "Technology is a tool for growth, ease and real-world problem-solving"</h1>
          <p class="text-lg p-8">
            With 7+ years of experience as a Laravel Developer, I have built diverse applications, including e-commerce, CMS, and SaaS platforms. My expertise includes Laravel, Vue.js, MySQL, MongoDB, Git and project deployment to Cloud hosting like DigitalOcean.
            </p>



        </div>
      </div>

    </div>

  </div>

</template>

<script>

export default {

  data() {
    return {
      isOpen: true, // Controls menu open/close state on mobile
      isMobile: window.innerWidth < 768,
    };
  },
  
  methods: {
    hireUs() {
      window.location.href = "https://wa.me/+8801554503491";
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) {
        this.isOpen = true; // Automatically open on larger screens
      } else {
        this.isOpen = false; // Auto-hide on smaller screens
      }
    },
  },
  mounted() {
       // Check initial screen size
    this.checkScreenSize();
     window.addEventListener("resize", this.checkScreenSize);
  }
};
</script>

<style scoped>
/* Custom styling for Header */
</style>
