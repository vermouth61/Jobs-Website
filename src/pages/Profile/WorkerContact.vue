<script setup>
import { BsTelephoneFill } from 'vue-icons-plus/bs';
import { GrMail } from 'vue-icons-plus/gr';
import { HiMiniIdentification, HiMiniMapPin } from 'vue-icons-plus/hi2';
import { RiWhatsappFill } from 'vue-icons-plus/ri';
import DocumentsCard from './DocumentsCard.vue';
import { Fa6FilePdf } from 'vue-icons-plus/fa6';

    defineProps({
        workerEmail: {
            type: String,
            default: ''
        }
        , workerPhone: {
            type: String,
            default: ''
        }
        , workerWhatsapp: {
            type: String,
            default: ''
        }
        , workerLocation: {
            type: String,
            default: ''
        }
        , workerSkills : {
            type: Array,
            default: []
        }
    });
</script>

<template>
    <div dir="rtl" class="bg-[#F6F8FA] w-full p-[24px] rounded-lg flex flex-col gap-[32px] border-[1px] border-[#B8BCC7]">
        <div class="flex flex-col sm:flex-row xl:flex-col justify-around gap-[32px]">
            <div class="flex flex-col gap-[12px]">
                <h2 class="text-[#0D2559] text-[24px] font-[500]">التواصل والعنوان</h2>
                <ul class="flex flex-col gap-[8px]">
                    <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><GrMail class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]"/>
                        <span class="text-[#131524]">{{ workerEmail }}</span></li>
                    <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><BsTelephoneFill class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]"/>
                        <span class="text-[#131524]">{{ workerPhone }}</span></li>
                    <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><RiWhatsappFill class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]"/>
                        <span class="text-[#131524]">{{ workerWhatsapp }}</span></li>
                    <li class="text-[#4B5563] text-[16px] font-[400] flex items-center gap-[4px]"><HiMiniMapPin class="text-[hsla(220,9%,46%,1)] me-[4px] h-[20px]" />
                        <span class="text-[#131524]">{{ workerLocation }}</span></li>
                </ul>
            </div>
            <div class="flex flex-col gap-[12px]">
                <h2 class="text-[#0D2559] text-[24px] font-[500]">مهاراتك</h2>
                <ul class="flex flex-col gap-[8px]">
                    <li v-for="skill in workerSkills" :key="skill" class="text-[#131524] text-[16px] font-[400]">{{ skill }}</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-[16px]">
            <DocumentsCard documentName="صورة البطاقة">
                <HiMiniIdentification class="text-[#36394A]"/>
            </DocumentsCard>
            <DocumentsCard documentName="السيرة الذاتية">
                <Fa6FilePdf class="text-[#36394A]"/>
            </DocumentsCard>
        </div>
    </div>
</template>