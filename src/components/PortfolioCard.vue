<script setup>
defineProps({
    workerPortfolio: {
        type: Object,
        default: {
            image: '',
            title: '',
            description: '',
        },
    }
});
</script>

<template>
    <div dir="rtl" class="bg-white border-[1px] border-[#B8BCC7] rounded-[8px] p-[16px]">
        <div class="flex flex-col items-center mb-[16px]">
            <img :src="workerPortfolio.image" alt="Portfolio Image" class="w-[271px] lg:w-[335px] object-cover rounded-[4px]" />
        </div>
        <div class="flex flex-col gap-[8px]">
            <h1 class="text-[#111827] text-[18px] font-[600]">{{ workerPortfolio.title }}</h1>
            <p class="text-[#4B5563] text-[14px] font-[400]">{{ workerPortfolio.description }}</p>
        </div>
    </div>
</template>