<script setup>
import { onMounted, ref } from 'vue';
import RecentJobsCard from '../components/recentJobsCard.vue';
const savedJobs = ref([]);
onMounted(() => {
    savedJobs.value = JSON.parse(localStorage.getItem('savedJobs')) || [];
})
</script>

<template>
    <div>
        <h1 dir="rtl" class="text-[#246BFD] text-[32px] font-[600] mb-[24px]">الوظائف المحفوظة</h1>
    
        <div class="flex flex-wrap justify-center xl:justify-start gap-[20px]">
              <RecentJobsCard
                class="w-[358px]! h-fit"
                v-if="savedJobs.length"
                v-for="job in savedJobs"
                :key="job.id"
                :id="job.id"
                :jobTitle="job.jobTitle"
                :location="job.location"
                :company="job.company"
                :dailyRate="job.dailyRate"
                :field="job.field"
                :desires="job.desires"
              />
              <h1 v-else class="text-[#1F2937] text-[20px] font-[500]"> لا يوجد وظائف محفوظة</h1>
            </div>
    </div>

</template>