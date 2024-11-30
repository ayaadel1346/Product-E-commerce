<template>
    <div>
        <Header/>
        <RouterView />
        <Footer/>
    </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/Footer.vue'
</script>