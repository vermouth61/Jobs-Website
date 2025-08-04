<script setup>
import { AiFillCalendar } from 'vue-icons-plus/ai';
import { BsFillPersonFill, BsTelephoneFill } from 'vue-icons-plus/bs';
import { HiMiniMapPin } from 'vue-icons-plus/hi2';
import { GrMail } from 'vue-icons-plus/gr';

defineProps({
    workerAge: {
        type: Number,
        default: null
    },
    workerLocation: {
        type: String,
        default: ''
    },
    workerEmail: {
        type: String,
        default: ''
    },
    workerPhone: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div dir="rtl" class="w-[295px] px-[16px] py-[24px] bg-[#FFF] border-[1px] border-[#DFE1E7] rounded-[8px]">
        <h1 class="text-[#1F2937] text-[20px] font-[500] mb-[12px] flex gap-[8px] items-center">
            <BsFillPersonFill class="text-[hsla(220,98%,57%,1)]" />
            المعلومات الشخصية</h1>
        <ul class="flex flex-col gap-[8px]">
            <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><AiFillCalendar class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]" /> العمر : 
                
                <span class="text-[#131524]">{{ workerAge }}</span></li>
            <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><HiMiniMapPin class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]" /> الموقع: 
                <span class="text-[#131524]">{{ workerLocation }}</span></li>
            <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><GrMail class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]" /> البريد: 
                <span class="text-[#131524]">{{ workerEmail }}</span></li>
            <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><BsTelephoneFill class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]" /> الهاتف: 
                <span class="text-[#131524]">{{ workerPhone }}</span></li>
        </ul>
    </div>
</template>