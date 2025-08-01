<script setup>
import { ref } from 'vue';
import Button from '../../components/ui/button.vue';
import { Fa6Download } from 'vue-icons-plus/fa6';

// const workerName = ref('');
// const workerJobTitle = ref('');
// const workerDescription = ref('');

</script>

<template>
    <div dir="rtl" class="flex p-[24px] bg-white rounded-[8px] border-[1px] border-[#DFE1E7] w-[1240px] mx-auto my-[16px]">
        <div class="flex items-center gap-[16px] w-full">
            <div>
                <img src="../../assets/profile/person.jpg" alt="Person" class="w-[200px] h-[200px] rounded-full object-cover" />
            </div>
            <div class="flex justify-between items-start w-[925px]">
                <div>
                    <h1 class="text-[36px] font-[500] text-[#1F2937]">أحمد محمد الشرقاوي</h1>
                    <h2 class="text-[20px] font-[400] text-[#246BFD] mt-[8px] ">لحام أرجون و كهرباء</h2>
                    <p class="text-[18px] font-[400] text-[#4B5563] mt-[12px]">فني لحام محترف بخبرة 5 سنوات في اللحام الكهربائي ولحام الأرجون. <br> أتميّز بدقة عالية في العمل، وحرص دائم على السلامة والجودة في تنفيذ المهام.</p>
                </div>
                <a href="../../assets/resume/MohamedDiaa-Resume.pdf" download="MohamedDiaa-Resume.pdf">
                    <Button buttonType="primary" extraClass=" flex gap-[13px] items-center text-[16px]">
                        <Fa6Download />
                        تحميل السيرة الذاتية
                        </Button>
                </a>
            </div>
        </div>
    </div>
</template>