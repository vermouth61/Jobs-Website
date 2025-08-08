<script setup>
import RecentJobsCard from "../../components/recentJobsCard.vue";
import Button from "../../components/ui/button.vue";
import data from "../../data/data.json";
</script>

<template>
  <div
    class="flex flex-col items-center gap-[48px] bg-[#F2F7FF] px-[20px] lg:px-[100px] py-[40px]"
    dir="rtl"
  >
    <div class="flex flex-col text-center gap-[14px]">
      <h2 class="text-[#246BFD] text-[48px] font-[700]">الوظائف المتاحة</h2>
    </div>
    <div class="flex flex-wrap justify-center 2xl:gap-[40px] gap-[20px]">
      <RecentJobsCard
        v-for="job in data.recentJobsArray"
        :key="job.id"
        :id="job.id"
        :jobTitle="job.jobTitle"
        :location="job.location"
        :company="job.company"
        :dailyRate="job.dailyRate"
        :field="job.field"
        :desires="job.desires"
      />
    </div>
    <Button @clickButton="$router.push('/jobs')" buttonType="primary" extraClass="font-[600] h-[48px] w-[178px]"
      >شوف كل الوظائف</Button
    >
  </div>
</template>
