<script setup>
import RecentJobsCard from '../../components/recentJobsCard.vue';
import Button from '../../components/ui/button.vue';
import { recentJobsArray } from '../../data';

</script>

<template>
    <div class="flex flex-col items-center gap-[48px] px-[20px] lg:px-[100px] py-[45px]" dir="rtl">
        <div class="flex flex-col text-center gap-[14px]">
            <h2 class="text-[#246BFD] text-[48px] font-[700]">الوظائف المٌضافة حديثاً</h2>
            <p class="text-[24px] font-[400] text-[#68727D]">اكتشف أفضل الوظايف اللي تناسب مهاراتك العملية من أصحاب الورش والمصانع</p>
        </div>
        <div class="flex flex-wrap justify-center 2xl:gap-[40px] gap-[20px]">
            <RecentJobsCard v-for="job in recentJobsArray " :jobTitle="job.jobTitle" :location="job.location" :company="job.company" :dailyRate="job.dailyRate" :time="job.time"/>
        </div>
        <Button extraClass="bg-[#666D80] hover:bg-[#36394A] text-white font-[600] h-[48px] w-[269px]">عرض المزيد من الوظائف</Button>
    </div>
</template>