<script setup>
import { ref } from 'vue';
import Button from './ui/button.vue';
import { Fa6Download } from 'vue-icons-plus/fa6';

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
    <div dir="rtl" class="flex p-[24px] bg-white rounded-[8px] border-[1px] border-[#DFE1E7] w-full mx-auto my-[24px]">
        <div class="flex items-center gap-[16px] w-full">
            <div>
                <img src="../assets/profile/person.jpg" alt="Person" class="w-[200px] h-[200px] rounded-[8px] object-cover" />
            </div>
            <div class="flex justify-between items-start">
                <div class="flex-3">
                    <h1 class="text-[36px] font-[500] text-[#1F2937]">{{ workerName }}</h1>
                    <h2 class="text-[20px] font-[400] text-[#246BFD] mt-[8px]">{{ workerPosition }}</h2>
                    <p class="text-[18px] font-[400] text-[#4B5563] mt-[12px]">{{ workerDescription }}</p>
                </div>
                <div class="flex-1" v-if="withButton">
                    <a href="../../assets/resume/MohamedDiaa-Resume.pdf" download="MohamedDiaa-Resume.pdf">
                        <Button buttonType="primary" extraClass=" flex gap-[13px] items-center text-[16px]">
                            <Fa6Download />
                            تحميل السيرة الذاتية
                            </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>