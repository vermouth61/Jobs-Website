<script setup>
import WorkerInfo from '../../components/WorkerInfo.vue';
import WorkerSkills from '../../components/WorkerSkills.vue';
import WorkerSummary from '../../components/WorkerSummary.vue';
import WorkerExperience from '../../components/WorkerExperience.vue';
import { workerExperienceArray } from '../../data/index.js';
import { workerPortfolioArray } from '../../data/index.js';
import PortfolioCard from '../../components/PortfolioCard.vue';
import { FaFolderOpen } from 'vue-icons-plus/fa';
import { AiFillStar } from 'vue-icons-plus/ai';
import RatingCard from './RatingCard.vue';
import { workerRatingArray } from '../../data/index.js';
</script>

<template>
    <div dir="rtl" class="container mx-auto pt-[24px]">
        <div class="mb-[24px]">
        <WorkerSummary  workerName="أحمد محمد الشرقاوي" workerPosition="لحام أرجون و كهرباء" workerDescription="فني لحام محترف بخبرة 5 سنوات في اللحام الكهربائي ولحام الأرجون. أتميّز بدقة عالية في العمل، وحرص دائم على السلامة والجودة في تنفيذ المهام." withButton="true"/>
        </div>
        <div class="flex gap-[24px] flex-col md:flex-row">
            <div class="flex flex-col gap-[24px] ">
                <WorkerInfo workerAge=29 workerLocation="شبين الكوم , المنوفية" workerEmail="email@example.com" workerPhone="01234567890"/>
                <WorkerSkills :workerSkills="['لحام TIG و MIG', 'لحام الفولاذ المقاوم للصدأ', 'لحام الأنابيب والخزانات', 'قراءة المخططات الفنية' , 'تصميم المخططات الفنية']"/>
            </div>
            <WorkerExperience :workerExperience="workerExperienceArray"/>
        </div>

    <div class="mt-[24px] flex flex-col items-center xl:items-start">
        <div>
            <h1 class="text-[#1F2937] text-[20px] font-[500] flex items-center">
                <FaFolderOpen class="inline-block text-[#246BFD] me-[8px]"/>اطلع على اعمالي</h1>
        </div>
        <div class="mt-[16px] flex gap-[20px] flex-wrap justify-center xl:justify-start">
            <PortfolioCard v-for="(workerPortfolio, index) in workerPortfolioArray.slice(0, 4)" :key="index" :workerPortfolio="workerPortfolio" />
        </div>
        </div>
    
    <div class="mt-[24px] mb-[128px] flex flex-col items-center xl:items-start">
        <div>
            <h1 class="text-[#1F2937] text-[20px] font-[500] flex items-center">
                <AiFillStar class="inline-block text-[#246BFD] me-[8px]"/>التقييمات</h1>
        </div>
        <div class="mt-[16px] flex gap-[20px] flex-wrap justify-center xl:justify-start">
            <RatingCard v-for="(workerRating, index) in workerRatingArray" :key="index" :workerRating="workerRating"/>
        </div>
    </div>
</div>

</template>