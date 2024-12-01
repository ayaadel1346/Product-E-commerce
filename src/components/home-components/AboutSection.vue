<template>

    <main class="container-fluid min-h-[100vh] overflow-x-hidden lg:mt-[8%] mt-3 grid grid-col lg:grid-cols-2">
        
        <aside class="relative w-full h-[50vh] lg:h-full">
            <img 
                v-if="imageLoaded"
                :src="homeData.about.img"
                alt="left about image"
                class="w-full lg:w-5/6 h-[50vh] lg:h-full lg:min-h-[100vh] object-cover transition-opacity duration-1000 opacity-100"/>


            <BlurhashImg
                v-if="!imageLoaded"
                hash="L5D+b,005Q0000~VRj?bTxaKi_t7"
                class="w-full lg:w-5/6 h-[50vh] lg:h-full lg:min-h-[100vh] object-cover transition-opacity duration-1000 opacity-100 ease-out"
                :class="{'opacity-0': imageLoaded}"
            />
        </aside>
        

        <section class="lg:mx-auto mx-5 lg:py-[5%] py-[10%] w-full h-full min-h-[100vh] md:min-h-[75vh] lg:min-h-[100vh] flex flex-col justify-start items-start gap-[40px] lg:gap-[70px]">
            <h1 class="uppercase whitespace-nowrap text-[30px] md:text-[40px] leading-[20px] md:leading-[60px] lg:text-[8.2em] font-thin">
               {{ homeData.about.title }}
            </h1>

            <p class="lg:mt-5 pr-[50px] text-[16px] md:text-[20px] leading-[35px]">
                {{ homeData.about.desc }}   
            </p>

            <div class="w-full">
                <h2 class="capitalize font-bold text-[20px] md:text-[3em]">
                    values
                </h2>

                <ul class="flex flex-col gap-6 mt-7 pr-[50px]">
                    <li 
                        v-for="(value, index) in homeData.about.values" 
                        :key="index"
                        class="text-[16px] md:text-[22px] capitalize w-full p-3 rounded-[10px] bg-lightColor">
                        {{ value.title }}
                    </li>
                </ul>
            </div>
        </section>

    </main>

</template>


<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";
import { useHomeStore } from "../../stores/HeaderStore";
import BlurhashImg from "@/components/BlurhashImg.vue";


const { homeData } = toRefs(useHomeStore());
const imageLoaded = ref(false);


const checkIfImageLoaded = () => {
  if (homeData.value.about.img && homeData.value.about.img !== "") {
    const img = new Image();
    img.src = homeData.value.about.img;
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
  checkIfImageLoaded();
});
</script>
