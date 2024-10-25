<template>
  <div class="grid grid-cols-1 ">
    <div class="bg-white">
      <div class="grid grid-cols-6 m-2 ">
        <div class="col-span-2">
          <h3 class="text-[20px] font-bold p-3 ">Md. Rashedul Hoque Bhuiyan</h3>
        </div>
        <div class="col-span-3 ">
          <el-header class="">


            <nav class="flex justify-between items-center py-4 sticky top-0 z-10">

              <div class="">
                <ul class="flex space-x-6 text-center font-bold">
                  
                  <li><a href="#who-we-are" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Work Approach</a></li>
                  <li><a href="#portfolio" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Projects</a></li>
                  <li><a href="#technologies" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Skills</a></li>
                  <li><a href="#contact-us" class="hover:bg-amber-custom hover:text-[18px] hover:p-3 hover:border-1 hover:border-white hover:rounded-[10px]">Contact</a></li>
                </ul>

              </div>
            </nav>
          </el-header>
        </div>
        <div class="col-span-1 justify-self-end relative group mt-3 mr-2">

            <a  class="text-[18px] font-bold p-3  border-purple-600 rounded-[10px] bg-green-400 " target="_blank"  @click="hireUs" >Hello</a>


          <div class="absolute right-full mr-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
            Open Whatsapp
          </div>
        </div>

      </div>

    </div>
    <div class="h-screen/2 bg-[#0dceaf] pt-10">
      <!-- <h1 class="pb-10 ml-10 font-extrabold text-[30px]"> Md. Rashedul Hoque Bhuiyan</h1> -->
      <div class="grid grid-cols-6">
        <div class="col-span-2 pl-30">

          <img src="../assets/myself.png" class="rounded-r" alt="">
        </div>
        <div class="col-span-4 border-amber-500 p-28 text-center text-justify">
         

         <h1 class="pb-10 m-5 font-extrabold text-[20px]"> "Technology is a tool for growth, ease and real-world problem-solving"</h1>
          <p class="text-lg">
            With 7+ years of experience as a Laravel Developer, I have built diverse applications, including e-commerce, CMS, and SaaS platforms. My expertise includes Laravel, Vue.js, MySQL, MongoDB, Git and project deployment to Cloud hosting like DigitalOcean.
            </p>



        </div>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  methods: {
    hireUs() {
      window.location.href = "https://wa.me/+8801554503491";
    }
  }
};
</script>

<style scoped>
/* Custom styling for Header */
</style>
