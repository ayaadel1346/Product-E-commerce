<template>

  <main class="min-h-[100vh]  overflow-x-hidden  my-[15vh]  md:my-[8vh]  lg:my-0  container-fluid  grid  grid-cols-1  lg:grid-cols-3">
    
    <aside class="w-full h-full">
     
      <video
       autoplay
       muted 
       loop 
       playsinline
       class="w-full h-[60vh] lg:min-h-[100vh] object-cover">
        <source :src="homeData.header.video" type="video/mp4" />
        <source :src="homeData.header.video" type="video/m4v" />
        <p>Your browser does not support the video tag.</p>
      </video>

    </aside>


    <section class="w-full flex justify-center items-center">

      <div class="flex-col gap-10 justify-center items-center w-full">

        <h1
          class="mt-6 md:mt-10 lg:mt-0 md:text-[40px] lg:p-5 p-5 font-semibold text-[30px] md:leading-[70px] leading-[50px] text-center">
          {{homeData.header.desc }}
        </h1>

        <RouterLink
          :to="homeData.header.btn_link"
          class="button-reverse  border-[1px]  border-transparent  hover:border-lightButton  z-10  mx-auto  md:w-[200px]  mt-10  w-[150px]
                 flex  justify-center  items-center  py-4  px-3  text-[16px]  md:text-[22px]  rounded-[30px]  bg-lightButton">
          <span class="z-10">{{ homeData.header.btn_text }}</span>
        </RouterLink>

      </div>

    </section>


    <aside class="w-full h-full hidden lg:block">
      <img
        :src="homeData.header.img"
        alt="right image"
        class="w-full h-[60vh] lg:min-h-[100vh] object-cover"
      />
    </aside>

  </main>

</template>


<script setup lang="ts">
import { toRefs } from "vue";
import { useHomeStore } from "../../stores/HeaderStore";

const { homeData } = toRefs(useHomeStore());
</script>
