<template>
     <main class="loader relative">
      
      <div class="absolute inset-0 flex justify-center items-center">
        <LipStick />
      </div>
      
    </main>
</template>


<script setup>
import LipStick from '../components/icons/LipStick.vue';
</script>


<style scoped>
.loader {
  border: 4px solid rgba(239, 167, 167, 0.3); 
  border-top: 4px solid rgb(250, 150, 150);
  border-radius: 50%; 
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}


@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
