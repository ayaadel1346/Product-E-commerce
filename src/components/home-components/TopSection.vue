<template>
  <main class="min-h-[100vh] overflow-x-hidden my-[15vh] md:my-[8vh] lg:my-0 container-fluid grid grid-cols-1 lg:grid-cols-3">
    
    <aside class="w-full relative">
        <video
          v-if="videoLoaded"
          autoplay
          muted
          loop
          playsinline
          class="absolute w-full h-[60vh] md:min-h-[100vh] object-cover transition-opacity duration-1000 opacity-100">
          <source :src="homeData.header.video" type="video/mp4" />
          <source :src="homeData.header.video" type="video/m4v" />
          <p>Your browser does not support the video tag.</p>
        </video>

        
        <BlurhashImg
          hash="LPJ**a-=RjM{~qIUoft7RjofM_t7"
          class="absolute w-full h-[60vh] md:min-h-[100vh] object-cover transition-opacity duration-1000"
          :class="{ 'opacity-100': !videoLoaded, 'opacity-0': videoLoaded }"/>
    </aside>


    <section class="w-full flex justify-center items-center">
      <div class="flex-col gap-10 justify-center items-center w-full">

        <h1 class="mt-6 md:mt-10 lg:mt-0 md:text-[40px] lg:p-5 p-5 font-semibold text-[30px] md:leading-[70px] leading-[50px] text-center">
          {{ homeData.header.desc }}
        </h1>

        <RouterLink
          :to="homeData.header.btn_link"
          class="button-reverse border-[1px] border-transparent hover:border-lightButton z-10 mx-auto md:w-[200px] mt-10 w-[150px] 
                 flex justify-center items-center py-4 px-3 text-[16px] md:text-[22px] rounded-[30px] bg-lightButton">
          <span class="z-10">{{ homeData.header.btn_text }}</span>
        </RouterLink>

      </div>
    </section>



    <aside class="w-full hidden lg:block relative">
      <img
        v-if="imageLoaded"
        :src="imageSrc"
        alt="right image"
        class="absolute w-full h-[60vh] lg:min-h-[100vh] object-cover transition-opacity duration-1000 opacity-100"/>

    
      <BlurhashImg
        hash="L9OLr]~BXlI@JPx]tSDO%ggN_2OX"
        class="absolute w-full h-[60vh] lg:min-h-[100vh] object-cover transition-opacity duration-1000"
        :class="{ 'opacity-100': !imageLoaded, 'opacity-0': imageLoaded }"/>
    </aside>


  </main>

</template>

<script setup lang="ts">
import { ref, toRefs, onMounted } from 'vue';
import { useHomeStore } from "../../stores/HeaderStore";
import BlurhashImg from "@/components/BlurhashImg.vue";


const videoLoaded = ref(false);
const imageLoaded = ref(false);
const imageSrc = ref('');
const { homeData } = toRefs(useHomeStore());



const checkIfMediaLoaded = () => {
  if (homeData.value.header.video && homeData.value.header.video !== "") {
    const video = document.createElement("video");
    video.src = homeData.value.header.video;
    video.addEventListener('canplaythrough', () => {
      setTimeout(() => {
        videoLoaded.value = true;  
      }, 200);
    });
    video.onerror = () => {
      videoLoaded.value = false;
    };
  }

  
  if (homeData.value.header.img && homeData.value.header.img !== "") {
    imageSrc.value = homeData.value.header.img;
    const img = new Image();
    img.src = homeData.value.header.img;
    img.onload = () => {
      setTimeout(() => {
        imageLoaded.value = true;
      }, 200);
    };
    img.onerror = () => {
      imageLoaded.value = false;
    };
  }
};

onMounted(() => {
  checkIfMediaLoaded();
});
</script>
