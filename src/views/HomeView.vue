<template>

  <section 
    v-if="homeStore.loaderHome" 
    class="fixed inset-0 bg-white flex justify-center items-center z-50 overflow-hidden">
    <Loader/>
  </section>


  <section v-else>
    <keep-alive>
      <div>
        <TopSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection/>
        <Footer/>
      </div>
    </keep-alive>
  </section>

</template>

<script setup>
import { onMounted } from 'vue';
import TopSection from '@/components/home-components/TopSection.vue';
import AboutSection from '@/components/home-components/AboutSection.vue';
import ProductsSection from '@/components/home-components/ProductsSection.vue';
import ContactSection from '@/components/home-components/ContactSection.vue';
import Footer from '@/components/Footer.vue'
import { useHomeStore } from '../stores/HeaderStore';
import Loader from '../components/Loader.vue';


const homeStore = useHomeStore();

onMounted(() => {
  homeStore.fetchData();
  homeStore.fetchCategoryData(1);
});
</script>

