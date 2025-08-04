<script setup>
defineProps({
    workerSkills: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div dir="rtl" class="w-full px-[16px] py-[24px] bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-[8px]">
        <h1 class="text-[#1F2937] text-[20px] font-[500] mb-[12px]">المهارات</h1>
        <ul class="flex flex-col gap-[8px]">
            <li v-for="skill in workerSkills" :key="skill" class="text-[#246BFD] text-[14px] font-[400] list-disc list-inside">
                <span class="text-[#131524]">{{ skill }}</span>
            </li>
        </ul>
    </div>
</template>
