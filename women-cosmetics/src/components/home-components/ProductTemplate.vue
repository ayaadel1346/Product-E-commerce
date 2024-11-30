<template>

    <main v-for="(brand,index) in homeData.brands" :key="index" class="py-10 px-7 relative bg-white min-h-[80vh] rounded-[15px] w-full ">
        

        <h1 class="capitalize font-semibold text-[20px] md:text-[30px]">
            {{ brand.title }} product showcase
        </h1>


        <ul class="my-5 flex lg:text-[25px] text-gray-500">
          <li
          v-for="(category,index) in brand.categories" :key="category.id"  
          @click="allHomeData.fetchCategoryData(category.id)" 
          class="mr-10 transition-all duration-300 ease-in-out  hover:text-darkLink cursor-pointer">
             {{ category.title }}
          </li>
        </ul>


       <div class="mt-10 lg:block hidden">
        <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="30"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >

    
        <swiper-slide v-for="(category,index) in categoryData"  :key="categoryData.id" >
          <div class="relative w-[100%] shadow-md my-1 rounded-[15px] p-2">
            <img 
            :src="category.img"
            alt=" product image"
            class="w-[90%] z-0 py-10 mx-auto rounded-[15px] h-[40vh] "/>

            <h1 class="absolute z-10 text-[19px] font-medium w-full bottom-[1%] left-[5%]  pr-[5%]">{{ category.name }} </h1>
            
          </div>
        </swiper-slide>
    

        
     </swiper>
       </div>

 </main>

</template>


<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useHomeStore } from "../../stores/HeaderStore";
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

const allHomeData=useHomeStore();
const { homeData ,categoryData} = storeToRefs(allHomeData)


const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>


<style>
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: static !important;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
}


.swiper-button-prev, .swiper-button-next {
    position: absolute !important;
    background-color: var( --dark-link) !important;
    width: 45px; 
    height: 45px; 
    border-radius: 50%;
    top:90% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}


.swiper-button-prev::after, 
.swiper-button-next::after {
    font-size: 20px; 
    color: rgb(250, 248, 248); 
}


.swiper-button-prev{
  left: 5% !important;
}


.swiper-button-next{
    left: 10% !important;
}



@media (max-width: 1024px) {
.swiper-button-prev, .swiper-button-next {
        width: 50px;
        height: 50px;
}

.swiper-button-prev{
  left: 5% !important;
}

.swiper-button-next{
    left: 20% !important;
} 
   
}



@media (max-width: 768px) { 
  .swiper-button-prev, .swiper-button-next {
        width: 50px; 
        height: 50px;
  }

  .swiper-button-prev{
  left: 5% !important;
  }

 .swiper-button-next{
    left: 30% !important;
 }
}
</style>