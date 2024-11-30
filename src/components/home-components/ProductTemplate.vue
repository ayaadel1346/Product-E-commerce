<template>
  <main
    v-for="(brand, index) in homeData.brands"
    :key="index"
    class="py-10 px-7 relative bg-white  min-h-[130vh]  md:min-h-[105vh] lg:min-h-[85vh] rounded-[15px]  w-full">

    <h1 class="capitalize  font-semibold  text-[20px]  md:text-[30px]">
      {{ brand.title }} product showcase
    </h1>


    <ul class="my-6 flex  lg:flex-row flex-col  gap-5  text-[20px]  lg:text-[20px]  text-gray-500">
      <li
        v-for="(category, index) in brand.categories"
        :key="category.id"
        @click="[allHomeData.fetchCategoryData(category.id) , setClickedLink(category.id)]"
        :class="[clickedLink === category.id?'bg-lightColor rounded-[20px] text-black  px-5':'','mr-10 py-1  transition-all duration-300 ease-in-out hover:text-black cursor-pointer']">
        {{ category.title }}
      </li>
    </ul>


    <section
      class="mt-10 h-full flex justify-center items-center min-h-[40vh]"
      v-if="categoryData.length === 0 && !categoryLoader">
      <h1 class="text-[20px] md:text-[30px] font-semibold">
        No Available Products😵
      </h1>
    </section>


    <section
      class="mt-10 h-full flex justify-center items-center min-h-[40vh]"
      v-else-if="categoryLoader">
      <h1 class="text-[20px] md:text-[30px] font-semibold">Loading .....</h1>
    </section>


    <swiper
      v-else
      class="mt-5"
      :modules="modules"
      :breakpoints="breakpoints"
      :space-between="30"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange">

      <swiper-slide
        v-for="(category, index) in categoryData"
        :key="category.id">

        <div class="relative w-[100%] shadow-md  my-1  rounded-[15px]  p-2">

          <img
            :src="category.img"
            alt="product image"
            class="md:w-[90%] w-[95%] z-0 py-10 mx-auto rounded-[15px] h-[40vh]"/>

          <h1 class="absolute z-10 text-[19px] font-medium w-full bottom-[1%] left-[5%] pr-[5%]">
            {{ category.name }}
          </h1>

        </div>

      </swiper-slide>

    </swiper>

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
const { homeData ,categoryData , categoryLoader} = storeToRefs(allHomeData);
const clickedLink=ref(1);
const modules = [Navigation, Pagination, Scrollbar, A11y];
const breakpoints = {
  1024: {
    slidesPerView: 4, 
  },
  768: {
    slidesPerView: 2,
  },
  0: {
    slidesPerView: 1,
  },
};



const setClickedLink = (id)=>{
  clickedLink.value=id;
}
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
    top:93% !important;
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
    left: 12% !important;
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