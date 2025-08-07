<script setup>
import WorkerExperience from '../../components/WorkerExperience.vue';
import WorkerSummary from '../../components/WorkerSummary.vue';
import { workerExperienceArray } from '../../data/index.js';
import AppliedJobs from './AppliedJobs.vue';
import WorkerContact from './WorkerContact.vue';


</script>

<template>
   <div dir="rtl" class="flex flex-col gap-[20px] flex-wrap justify-center lg:justify-start">
      <div class="flex gap-[20px] flex-wrap justify-center lg:justify-start">
         <div class="flex flex-col gap-[20px] xl:max-w-[610px]">
               <WorkerSummary workerName="أحمد محمد الشرقاوي" 
                              workerPosition="لحام أرجون و كهرباء" 
                              workerDescription="فني لحام محترف بخبرة 5 سنوات في اللحام الكهربائي ولحام الأرجون. أتميّز بدقة عالية في العمل، وحرص دائم على السلامة والجودة في تنفيذ المهام." />
               <WorkerExperience :workerExperience="workerExperienceArray"/>
         </div>
            <WorkerContact workerEmail="ahmed.mohamed@gmail.com"
                           workerPhone="01096486201" 
                           workerWhatsapp="01548985000" 
                           workerLocation="شبين الكوم , المنوفية" 
                           :workerSkills="['لحام TIG و MIG', 'لحام الفولاذ المقاوم للصدأ', 'لحام الأنابيب والخزانات', 'قراءة المخططات الفنية' , 'تصميم المخططات الفنية']"/>
      </div>
      <div class="bg-[#F6F8FA] max-w-[925px] p-[24px] rounded-lg border-[1px] border-[#B8BCC7]">
         <AppliedJobs/>
      </div>
   </div>
</template>