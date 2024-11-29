<template>
    <TopSection />
    <AboutSection/>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue'
  import TopSection from '@/components/home-components/TopSection.vue';
  const AboutSection =defineAsyncComponent(() =>
  import('@/components/home-components/AboutSection.vue')
 )
  </script>
  