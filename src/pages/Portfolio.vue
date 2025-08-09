<script setup>
import { ref } from 'vue';
import PortfolioCard from '../components/PortfolioCard.vue';
import PortfolioModal from '../components/portfolioModal.vue';
import Button from '../components/ui/button.vue';
import { workerPortfolioArray } from '../data';
const setOpen = ref(false);
const portfolioArray=ref(workerPortfolioArray);
const handleModalSubmit = ({wName, wDesc, wImg}) => {
    const newPortfolio = {
        title:wName ,
    description:wDesc ,
    image: URL.createObjectURL(wImg),
    }
    portfolioArray.value.push(newPortfolio);
    setOpen.value = false
}
</script>

<template>
    <div dir="rtl" class="w-full flex flex-col items-center bg-[#F6F8FA] border-[1px] border-[#B8BCC7] p-[24px] rounded-lg gap-[40px]">
        <h1 class="text-center text-[32px] text-[#246BFD] font-[600]">معرض أعمالي</h1>
        <div class="flex flex-wrap justify-center md:justify-start gap-[20px] md:max-w-[630px] lg:max-w-screen xl:max-w-[630px] 2xl:max-w-screen">
            <PortfolioCard v-for="workerPortfolio in portfolioArray" :workerPortfolio="workerPortfolio" :key="workerPortfolio.id"/>
        </div>
        <Button  @clickButton="setOpen = true" buttonType="primary" extraClass="font-[600] h-[48px] w-[262px]">أضف عمل</Button>
    </div>
    <PortfolioModal @submit="handleModalSubmit" :isOpen="setOpen" @close="setOpen = false"/>
</template>