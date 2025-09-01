<script setup>
    import RecentJobsCard from '../../components/recentJobsCard.vue';
    import data from '../../data/data.json';
</script>

<template>
        <div class="flex flex-col gap-[24px]">
            <h2 class="text-[##000000] text-[24px] font-[500]">الوظائف اللي قدمت عليها</h2>
            <div class="flex flex-wrap gap-[20px] justify-center ">
                <RecentJobsCard v-for="job in data.recentJobsArray.slice(6, 10)"
                                :jobTitle="job.jobTitle"
                                :location="job.location"
                                :company="job.company"
                                :dailyRate="job.dailyRate"
                                :field="job.field"
                                :desires="job.desires"
                                :status="job.status"
                                :id="job.id"
                                :key="job.id"/>
            </div>
        </div>
</template>