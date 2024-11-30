<template>
    <div
      class="relative h-0"
      :style="`padding-bottom: ${aspectRatio * 100}%`">
      <canvas
        ref="canvas"
        :class="externalClass"
        class="absolute inset-0 w-full h-full"
        width="32"
        height="32"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { decode } from 'blurhash';
  

  const props = defineProps({
    hash: {
      type: String,
      required: true,
    },
  
    aspectRatio: {
      type: Number,
      default: 1,
    },
  
    externalClass: {
      type: String,
      default: '',
    },
  });
  

  const canvas = ref(null);
  
  onMounted(() => {
  
      const pixels = decode(props.hash, 32, 32);
      const imageData = new ImageData(pixels, 32, 32);
      const context = canvas.value.getContext('2d');
      context.putImageData(imageData, 0, 0);
  });
  

  watch(() => props.hash, (newHash) => {
   
      const pixels = decode(newHash, 32, 32);
      const imageData = new ImageData(pixels, 32, 32);
      const context = canvas.value.getContext('2d');
      context.putImageData(imageData, 0, 0);
    
  });
  </script>
  