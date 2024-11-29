<template>

 <main class="min-h-[100vh] my-[15vh] md:my-[8vh]  lg:my-0  container-fluid  flex  lg:flex-row  flex-col  justify-center  items-center">

    <aside class="lg:w-1/3 w-full h-full">
     
        <img 
         src="@/assets/images/image 26.webp"
         alt="left image"
         class="w-full h-[60vh]  lg:h-[100vh]  object-cover"/>

    </aside>


    <section class="lg:w-1/3 w-full flex-col gap-10 justify-center items-center">

        <h1 class="md:text-[40px]  lg:p-1 p-5 font-semibold text-[30px] md:leading-[70px] leading-[50px] text-center">
           <span class="lg:block"> Enhancing everything </span> <span class="lg:block">related to women&apos;s</span> charm and allure is <span class="lg:block">our mission</span>
        </h1>

        <RouterLink class="button-reverse z-10 mx-auto md:w-[200px] mt-10  w-[150px] flex justify-center items-center  py-4  px-3   text-[16px] md:text-[22px]  rounded-[30px] bg-lightBlue" to="/contact">
          <span class="z-30">  Contact Us</span>
        </RouterLink>
        

    </section>
    

    <aside class="lg:w-1/3 w-full h-full hidden lg:block">

        <img 
         src="@/assets/images/image 25.webp"
         alt="right image"
         class="w-full h-[60vh]  lg:h-[100vh]  object-cover"/>

    </aside>

 </main>

</template>