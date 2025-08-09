<script setup>
import { AiFillStar } from 'vue-icons-plus/ai';

defineProps({
    workerRating : {
        type: Array,
        default: []
    }
})
    
</script>

<template>
    <div dir="rtl" class="bg-[#F6F8FA] rounded-[8px] border-[1px] border-[#B8BCC7] p-[16px] ">
        <div class="flex gap-[8px] mb-[8px] items-center">
            <div>
                <img :src="workerRating.image" alt="صورة العميل" class="w-[48px] h-[48px] rounded-full mb-[8px] object-cover object-top">
            </div>
            <div>
                <h1 class="text-[#36394A] text-[18px] font-[500]">{{ workerRating.name }}</h1>
                <div v-for=" star in Array.from({ length: workerRating.rating }).fill(0)" :key="star" class="inline-block">
                    <AiFillStar class="text-[#FF9529] w-[16px] me-[2px]"/>
                </div>
            </div>
        </div>
            <div>
                <p class="text-[#666D80] text-[16px] font-[400] w-full xl:max-w-[271px] 2xl:max-w-[335px]">{{ workerRating.comment }}</p>
            </div>
    </div>
</template>