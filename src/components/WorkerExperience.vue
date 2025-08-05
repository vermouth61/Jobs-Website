<script setup>
import { PiBagFill } from 'vue-icons-plus/pi';
import VerticalIndicator from './VerticalIndicator.vue';

defineProps({
    workerExperience: {
        type: Array,
        default: []
    }
});
</script>

<template>
    <div dir="rtl" class="w-full px-[16px] py-[24px] bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-[8px]">
        <h1 class="text-[#1F2937] text-[20px] font-[500] flex items-center gap-[8px]">
            <PiBagFill class="text-[#246BFD] h-[24px]"/>الخبرة المهنية</h1>
        <div v-for="(experience, index) in workerExperience" :key="experience.id" class="flex items-center gap-[8px] mt-[16px]">
            <VerticalIndicator :indicatorState="index === 0" />
            <div class="flex flex-col gap-[4px] w-full">
                <h2 class="text-[#131524] text-[18px] font-[500]">{{ experience.jobTitle }}</h2>
                <p class="text-[#246BFD] text-[16px] font-[400]">{{ experience.companyName }}</p>
                <p class="text-[#4B5563] text-[14px] font-[400]">{{ experience.description }}</p>
                <p class="text-[#4B5563] text-[14px] font-[400]">{{ experience.duration }}</p>
                <div class="w-full h-[1px] bg-[#DFE1E7] mt-[4px]" :class="index === workerExperience.length - 1 ? 'hidden' : ''"></div>
            </div>
        </div>
    </div>
</template>