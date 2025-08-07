<script setup>
import WorkerExperience from '../../components/WorkerExperience.vue';
import WorkerSummary from '../../components/WorkerSummary.vue';
import { workerExperienceArray } from '../../data/index.js';

</script>

<template>
   <div>
      <div class="flex flex-col gap-[20px]">
            <WorkerSummary  workerName="أحمد محمد الشرقاوي" workerPosition="لحام أرجون و كهرباء" workerDescription="فني لحام محترف بخبرة 5 سنوات في اللحام الكهربائي ولحام الأرجون. أتميّز بدقة عالية في العمل، وحرص دائم على السلامة والجودة في تنفيذ المهام." />
            <WorkerExperience :workerExperience="workerExperienceArray"/>
      </div>

   </div>
</template>