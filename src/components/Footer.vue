<template>

    <main class="container-fluid  bg-lightContainer  min-h-[100vh]  md:min-h-[40vh]  flex  flex-col  justify-between">

        <section  class=" border-b-[1px]  border-darkGray  py-[50px]  px-10  flex  lg:flex  md:grid  md:grid-cols-2  flex-col  
                          lg:flex-row  justify-center  items-start  gap-12  lg:gap-0">


            <div class="w-full  lg:w-2/12  flex  flex-col  justify-start  gap-5">
              <h1 class="lg:text-[25px] text-[20px]  leading-[30px]  font-semibold">
                Informations
              </h1>

              <div class="flex flex-col gap-3">
                <RouterLink 
                 v-for="(link,index) in links" 
                 :key="index" 
                 :to="link.src"
                 class="lg:text-[17px]  hover:text-darkLink  transition-all  duration-300  ease-in-out  text-[16px]  font-medium">
                 {{ link.name }}
               </RouterLink>
              </div>
            </div>



            <div class="w-full lg:w-2/12 flex flex-col  justify-start gap-5">
              <h1 class="lg:text-[25px] text-[20px] leading-[30px] font-semibold">
                Informations
              </h1>

              <div class="flex flex-col gap-3">
                <RouterLink class="lg:text-[17px] hover:text-darkLink transition-all duration-300 ease-in-out text-[16px] font-medium" v-for="(link,index) in supportLinks" :key="index" :to="link.src">
                 {{ link.name }}
              </RouterLink>
              </div>
            </div>



            <div class="w-full lg:w-3/12  flex  justify-start  items-start ">
                <img 
                 :src="homeData.footer.logo" 
                 alt="logo image" 
                 class="w-[220px] h-[200px]" />
            </div>


            <div class="w-full  lg:w-2/12  flex  flex-col  justify-start  gap-5">
              <h1 class="lg:text-[25px] text-[20px] leading-[30px] font-semibold">
                Contacts
              </h1>

              <div class="flex flex-col gap-3">
                <a 
                 :href="`tel:${homeData.footer.phone}`"
                 class="lg:text-[17px] hover:text-darkLink transition-all duration-300 ease-in-out text-[16px] font-medium">
                   {{homeData.footer.phone}}
                </a>

                <a 
                 :href="`mailto:${homeData.footer.email}`"
                 class="lg:text-[17px] hover:text-darkLink transition-all duration-300 ease-in-out text-[16px] font-medium">
                  {{homeData.footer.email}}
                </a>

                <section class="flex justify-start items-center gap-3">
                    <RouterLink 
                    class="links-up" 
                    :to="homeData.footer.socials.snapchat">
                    <Snap/>
                    </RouterLink>

                    <RouterLink  
                    class="links-up" 
                    :to="homeData.footer.socials.instagram">
                    <Instagram/>
                    </RouterLink>

                    <RouterLink  
                    class="links-up" 
                    :to="homeData.footer.socials.facebook">
                     <Facebook/>
                    </RouterLink>
                </section>
              </div>
            </div>


            
            <div class="w-full  lg:w-3/12  lg:px-10  flex  flex-col  justify-start  gap-5">
              <h1 class="lg:text-[25px]  text-[20px]  leading-[30px] font-semibold">
                Subscribe For More
              </h1>

              <form 
               @submit.prevent="submitForm" 
               class="flex flex-col gap-3">

                <input 
                 class="p-3 rounded-[20px]" 
                 v-model="email" 
                 type="text" 
                 placeholder="Enter your mail"/>

                <button 
                 class=" w-[150px] text-[18px] font-medium rounded-[25px] flex justify-center items-center
                       bg-white hover:bg-darkGray hover:text-white  p-3 transition-all duration-300 ease-in-out" 
                 type="submit">
                 Send
                </button>
              
              </form>
           </div>

        </section>


        <section class=" flex lg:justify-end  justify-center  items-center  py-5  lg:px-10">
           
            <h1 
             class="capitalize text-xl">
             2010 &copy; all rights reserved
            </h1>

        </section>

    </main>

</template>



<script setup lang="ts">
import { ref, toRefs ,watch } from 'vue';
import { useHomeStore } from '../stores/HeaderStore';
import Snap from './icons/Snap.vue';
import Instagram from './icons/Instagram.vue';
import Facebook from './icons/Facebook.vue';
import SweetAlert from 'sweetalert2';


const { homeData ,successMessage ,errorMessage} = toRefs(useHomeStore());

const homeStore=useHomeStore();

const email=ref<string>('');

const links :{src:string,name:string}[]=[
{
    src:'/',
    name:'Home'
},
{
    src:'/',
    name:'About Us'
},
{
    src:'/',
    name:'Our Service'
},
{
    src:'/',
    name:'Our Product'
}
] 

const supportLinks:{src:string,name:string}[]=[
    {
        src:'/',
        name:'FAQS'
    },
    {
        src:'/',
        name:'Terms & Conditions'
    },
    {
        src:'/',
        name:'Privacy policy'
    },
]


const submitForm = () => {
  const formData = new FormData();
  formData.append('email', email.value); 
  homeStore.sentSubscribeData(formData); 
  email.value='';

};


watch(successMessage, (newValue) => {
  if (newValue === 'success') {
    SweetAlert.fire({
      title: 'Success!',
      text: 'You have successfully subscribed.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  } else if (newValue === 'error') {
    SweetAlert.fire({
      title: 'Error!',
      text: errorMessage.value || 'There was an error while subscribing. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
});
</script>