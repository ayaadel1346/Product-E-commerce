<template>

  <section 
    v-if="homeStore.loaderHome" 
    class="fixed inset-0 bg-white flex justify-center items-center z-50 overflow-hidden">
    
    <Loader/>
  </section>


  <div v-else>
    <TopSection />
    <AboutSection />
    <ProductsSection />
    <ContactSection/>
  </div>

</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import TopSection from '@/components/home-components/TopSection.vue';
import { useHomeStore } from '../stores/HeaderStore';
import Loader from '../components/Loader.vue';

const AboutSection = defineAsyncComponent(() =>
  import('@/components/home-components/AboutSection.vue')
);

const ProductsSection = defineAsyncComponent(() =>
  import('@/components/home-components/ProductsSection.vue')
);

const ContactSection = defineAsyncComponent(() =>
  import('@/components/home-components/ContactSection.vue')
);


const homeStore = useHomeStore();

onMounted(() => {
  homeStore.fetchData();
  homeStore.fetchCategoryData(1);
});
</script>

