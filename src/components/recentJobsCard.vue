<script setup>
import { HiMiniMapPin } from 'vue-icons-plus/hi2';
import Button from './ui/button.vue';
import { FaBuilding } from 'vue-icons-plus/fa';
import { Fa6MoneyCheckDollar } from 'vue-icons-plus/fa6';
import { BsFillClockFill } from 'vue-icons-plus/bs';
defineProps({
    jobTitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    dailyRate: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
})

</script>
<template>
    <div dir="rtl" class="p-[16px] border-1 border-[#DFE1E7] rounded-lg flex flex-col gap-[16px] w-[400px]">
        <div class="flex flex-row items-center px-[24px] justify-between">
            <div class="flex flex-col gap-[8px]">
                <h3 class="font-[500] p-[10px] text-[24px]">{{ jobTitle }}</h3>
                <ul class="w-full flex flex-col gap-[8px]">
                    <li class="text-[#666D80] flex text-[16px] items-center font-[400]"><HiMiniMapPin class="h-[18px]"/>{{ location }}</li>
                    <li class="text-[#666D80] flex text-[16px] items-center font-[400]"><FaBuilding class="h-[16px]" />{{ company }}</li>
                    <li class="text-[#666D80] flex text-[16px] items-center font-[400]"><Fa6MoneyCheckDollar class="h-[16px]"/>{{ dailyRate }} يوميا</li>
                    <li class="text-[#666D80] flex text-[16px] items-center font-[400]"><BsFillClockFill  class="h-[16px]"/>{{ time }}</li>
                </ul>
            </div>
            <div>
                <img src="../assets/company.png" alt="job">
            </div>
        </div>
        <Button buttonType="green" extraClass="h-[53px] font-[600]">تقدم الآن</Button>
    </div>
</template>