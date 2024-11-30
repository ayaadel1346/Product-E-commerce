
<template>

    <main class="container-fluid min-h-[100vh] bg-lightContainer overflow-x-hidden  lg:mt-[8%]  mt-3">

        <section v-for="(brand,index) in homeData.brands" :key="index" class="conatiner-fluid  mx-5 py-20  lg:mx-[4%] flex flex-col items-center justify-center gap-7">

            <header class="w-full flex flex-col justify-center items-center">
               <div class="lg:w-[400px] md:w-[300px]  w-[200px]" >
                <img 
                :src="brand.img"
                alt="brand image"
                class="w-full"/>

               </div>

                <p class="text-secondary my-[50px] text-center text-[16px] md:text-[20px] lg:px-[90px] leading-[30px]">
                    {{ brand.desc }}
                </p>
            </header>


    <ProductTemplate/>

        </section>

    </main>

</template>


<script setup lang="ts">
import { useHomeStore } from "../../stores/HeaderStore";
import ProductTemplate from '@/components/home-components/ProductTemplate.vue'
const { homeData } = useHomeStore();


</script>
