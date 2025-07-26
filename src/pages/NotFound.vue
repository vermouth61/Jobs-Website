<script setup>
import {useRouter} from "vue-router";
import Button from "../components/ui/button.vue"

const router = useRouter();
const goProducts=()=>{router.push("/")};
</script>
<template>
    <div class="w-56 h-56 mx-auto mt-40">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#246BFD" stroke="#246BFD" stroke-width="11" transform-origin="center" d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>    </div>
    <h1 class="text-9xl font-bold text-[#246BFD] text-center mt-2">404</h1>
    <h1 class="text-5xl font-bold text-[#246BFD] text-center mt-8">.الصفحة غير موجودة</h1>
    <div class="text-center">
        
        <Button buttonType="primary" @clickButton="goProducts" extraClass="font-bold mt-8">العودة إلى الرئيسية</Button>
    </div>
</template>