<template>
    
    <nav class="bg-white z-50  lg:sticky fixed  border-b-[1px]  border-darkGray  top-0  py-7  w-full min-h-[15vh]  lg:min-h-[25vh]  flex  flex-col  gap-7">

      <section class="w-full  px-5  md:px-10  flex  justify-between  items-center">
      
        <img
          alt="logo image"
          src="@/assets/images/Logo.webp"
          class="w-[150px] md:w-[220px]"/>
  
   
        <div class="flex items-center justify-center relative">

          <World />
  
          <button
            class="flex items-center rounded-md text-[16px] md:text-[19px] py-2 px-3"
            @click="toggleDropdown">

            <span>{{ selectedLang }}</span>

            <DownArrow class="ml-2 text-gray-500" />

          </button>
  
          
          <ul
            v-show="dropdownOpen"
            class="absolute  bottom-0  text-sm  bg-white border  rounded-md  shadow-lg  w-[200px]  z-10">
            
            <li
              class="px-4 py-2  cursor-pointer hover:bg-gray-100"
              @click="selectLang('en')">
              English
            </li>
            
            <li
              class="px-4 py-2  cursor-pointer hover:bg-gray-100"
              @click="selectLang('ar')">
              Arabic
            </li>

          </ul>

        </div>

      </section>



      <section class="px-5 md:px-10  hidden  w-full  lg:flex  justify-between  items-center">


        <aside>
        <RouterLink 
         active-class="active-link" 
         v-for="(link,index) in links" 
         :key="index" 
         :to="link.src"
         class="mr-5  hover:text-darkLink  transition-all  duration-300  ease-in-out  text-[18px]  md:text-[20px]  leading-[40px]  font-sans">
            {{ link.linkName }}
         </RouterLink>
        </aside>


        <aside class="flex justify-around items-center gap-3">
             <RouterLink class="links-up" to="/"><Snap/></RouterLink>
              <RouterLink  class="links-up" to="/"><Instagram/></RouterLink>
              <RouterLink  class="links-up" to="/"><Facebook/></RouterLink>
        </aside>

      </section>



      <section class="px-5  md:px-10  lg:hidden  w-full  flex  justify-end  items-center">

       <button @click="toggleMobileNav">
        <NavIcon/>
       </button>

      </section>



      <section 
        v-show="openMobileNav"
        class="overflow-hidden lg:hidden">


        <div :class="{'translate-y-0':openMobileNav,'-translate-y-full ':!openMobileNav ,' transition-all duration-300 ease-in-out w-full flex flex-col justify-start items-center gap-5 text-md min-h-[50vh] md:min-h-[30vh]':true}">

            <RouterLink 
                active-class="active-link" 
                v-for="(link,index) in links" 
                :key="index" 
                :to="link.src"
                class="{'text-[20px]  hover:text-darkBlue  leading-[40px] mt-3  font-semibold  font-sans'}">
                {{ link.linkName }}
            </RouterLink>

            <aside class="flex justify-around items-center gap-3">
              <RouterLink class="links-up" to="/"><Snap/></RouterLink>
              <RouterLink class="links-up" to="/"><Instagram/></RouterLink>
              <RouterLink class="links-up" to="/"><Facebook/></RouterLink>
            </aside>

        </div>


      </section>

    </nav>

</template>
  

<script setup lang="ts">
  import { ref } from 'vue';
  import World from '../icons/World.vue';
  import DownArrow from '../icons/DownArrow.vue';
  import Instagram from '../icons/Instagram.vue';
  import Facebook from '../icons/Facebook.vue';
  import Snap from '../icons/Snap.vue';
  import NavIcon from '../icons/NavIcon.vue';
  

  
  const selectedLang = ref<string>('English');
  const dropdownOpen = ref<boolean>(false);
  const openMobileNav=ref<boolean>(false);
  
 
  const toggleDropdown = ():void =>{
    dropdownOpen.value = !dropdownOpen.value;
  }


  const toggleMobileNav =() :void=>{
     openMobileNav.value=!openMobileNav.value;
  }

  
  const selectLang = (lang:string) :void =>{
    selectedLang.value = lang === 'en' ? 'English' : 'Arabic';
    dropdownOpen.value = false;
  }


  const links : {src:string,linkName:string}[]=[
    {
       src:'/' ,
       linkName:'Home'
    },
    {
       src:'/about' ,
       linkName:'About Us'
    },
    {
       src:'/services' ,
       linkName:'Our Services'
    }, 
    {
       src:'/brands' ,
       linkName:'Partener Brands'
    }, 
    {
       src:'/contact' ,
       linkName:'Contact Us'
    }
  ]
</script>
  


<style scoped>
.active-link{
   text-decoration: underline;
   text-decoration-thickness: 1px;
}
</style>