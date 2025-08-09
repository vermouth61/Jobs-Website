<script setup>
import PortfolioCard from '../components/PortfolioCard.vue';
import Button from '../components/ui/button.vue';
import { workerPortfolioArray } from '../data';


</script>

<template>
    <div dir="rtl" class="w-full flex flex-col items-center bg-[#F6F8FA] border-[1px] border-[#B8BCC7] p-[24px] rounded-lg gap-[40px]">
        <h1 class="text-center text-[32px] text-[#246BFD] font-[600]">معرض أعمالي</h1>
        <div class="flex flex-wrap justify-center gap-[20px]">
           <PortfolioCard v-for="workerPortfolio in workerPortfolioArray" :workerPortfolio="workerPortfolio" />
        </div>
        <Button buttonType="primary" extraClass="font-[600] h-[48px] w-[262px]">أضف عمل</Button>
    </div>
</template>