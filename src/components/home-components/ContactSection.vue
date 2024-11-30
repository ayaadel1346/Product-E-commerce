<template>

    <main class="container-fluid  relative  mt-3  overflow-hidden  min-h-[20vh]  lg:min-h-[25vh]  flex  items-center">

        <h1 class="uppercase text-animation  lg:text-[5em]  text-[3em]  whitespace-nowrap">
          
            <span 
             class="mx-5" 
             v-for="index in 4" 
             :key="index">
                <span class="font-semibold"> 
                    {{ firstText }}
                </span>
                .
                <span class="color-animation">
                    {{ secondText }}
                </span>
                .
            </span>

        </h1>

    </main>

</template>


<script setup lang="ts">
import { computed, toRefs } from "vue";
import { useHomeStore } from "../../stores/HeaderStore";


const { homeData } = toRefs(useHomeStore());


const getArrayText = computed<string[]>(() => {
    return homeData.value.contact.advertisement.split('.');
});
const firstText = computed(() => getArrayText.value[0]);
const secondText = computed(() => getArrayText.value[1]);
</script>


<style scoped>
@keyframes color {
    0% {
        color: black;
    }
    100% {
        color: grey;
    }
}

@keyframes text {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

.color-animation {
    animation: color 20s infinite ease-in-out;
}

.text-animation {
    animation: text 25s linear infinite; 
    width: 200%;
}
</style>
