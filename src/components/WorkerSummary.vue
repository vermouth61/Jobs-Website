<script setup>
import { ref } from 'vue';
import Button from './ui/button.vue';
import { Io5CloudDownloadSharp } from 'vue-icons-plus/io5';

defineProps({
    workerName: {
        type: String,
        default: ''
    },
    workerPosition: {
        type: String,
        default: ''
    },
    workerDescription: {
        type: String,
        default: ''
    },
    withButton: {
        type: Boolean,
        default: false
    }
});

</script>

<template>
    <div dir="rtl" class="flex p-[24px] bg-[#F6F8FA] rounded-[8px] border-[1px] border-[#B8BCC7] w-full mx-auto ">
        <div class="flex flex-col md:flex-row items-center gap-[16px] w-full">
            <div>
                <img src="../assets/profile/human-croped.jpg" alt="Person" class="w-[200px] h-[200px] rounded-[8px] object-cover"/>
            </div>
            <div class="flex justify-between items-center md:items-end lg:items-start flex-col lg:flex-row gap-[16px] w-full">
                <div class="flex-3 text-center md:text-right">
                    <h1 class="text-[24px] md:text-[36px] font-[500] text-[#1F2937]">{{ workerName }}</h1>
                    <h2 class="text-[16px] md:text-[20px] font-[400] text-[#246BFD] mt-[8px]">{{ workerPosition }}</h2>
                    <p class="text-[14px] md:text-[18px] font-[400] text-[#4B5563] mt-[12px]">{{ workerDescription }}</p>
                </div>
                <div class="flex-1" v-if="withButton">
                    <a href="/resume/MohamedDiaa-Resume.pdf" download="MohamedDiaa-Resume.pdf">
                        <Button buttonType="primary" extraClass=" flex gap-[8px] items-center text-[16px]">
                            <Io5CloudDownloadSharp class="w-[20px]"/>
                            تحميل السيرة الذاتية
                            </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>