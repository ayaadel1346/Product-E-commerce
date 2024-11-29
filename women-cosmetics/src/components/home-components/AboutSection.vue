<template>
    <main class="container-fluid  min-h-[110vh] lg:mt-[8%] mt-3 flex lg:flex-row flex-col lg:gap-0 gap-5 items-start">

        <img 
         src="@/assets/images/image 44.webp"
         alt="left about image"
         class="w-full lg:w-2/5 h-[50vh] lg:min-h-[110vh]  object-cover"/>

         <section class="lg:mx-auto mx-5 lg:my-[4%]  my-[10%] lg:w-2/5  min-h-[110vh]  flex  flex-col justify-start items-start gap-[50px] lg:gap-[70px]">

            <h1 class="uppercase text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] lg:text-[9em] font-thin">
                about us
            </h1>

            <p class="lg:mt-5 text-[16px] md:text-[22px] leading-[35px]">
                From Ancient Times To The Present Day. Our Journey Continues To Bring The Best To The Modern Woman.
                We Draw Inspiration From Our Rich Heritage And Blend It With Contemporary Touches To Offer You A Diverse Range 
                Of Products That Reflect The Elegance And Sophistication Of The Past With A Modern Twist.
            </p>

            <div class="w-full">

                <h2 class="capitalize font-bold text-[20px]  md:text-[3em] ">
                    values
                </h2>

                <ul class="flex flex-col gap-6 mt-7">

                    <li 
                     v-for="(value,index) in values" 
                     :key="index"
                     class="text-[16px]  md:text-[22px]  capitalize  w-full p-3  rounded-[10px]  bg-lightGray">
                     {{ value }}
                    </li>

                </ul>

            </div>

         </section>

    </main>

</template>


<script setup lang="ts">
const values :string[] =[
'sustainability',
"women's empowerment",
'innovation and creativity',
'excellent customer service'
]
</script>