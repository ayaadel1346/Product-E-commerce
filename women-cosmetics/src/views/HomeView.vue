<template>
  <div v-if="homeStore.loaderHome">Loading...</div>
  <div v-else>
    <TopSection />
    <AboutSection />
    <ProductsSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import TopSection from '@/components/home-components/TopSection.vue';
import { useHomeStore } from '../stores/HeaderStore';

const AboutSection = defineAsyncComponent(() =>
  import('@/components/home-components/AboutSection.vue')
);

const ProductsSection = defineAsyncComponent(() =>
  import('@/components/home-components/ProductsSection.vue')
);

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.fetchData();
  homeStore.fetchCategoryData(1);
});
</script>

  