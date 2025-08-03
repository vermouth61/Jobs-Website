<script setup>
import WorkerInfo from '../../components/WorkerInfo.vue';
import WorkerSkills from '../../components/WorkerSkills.vue';
import WorkerSummary from '../../components/WorkerSummary.vue';

</script>

<template>
    <div dir="rtl" class="px-[100px]">

        <WorkerSummary workerName="أحمد محمد الشرقاوي" workerPosition="لحام أرجون و كهرباء" workerDescription="فني لحام محترف بخبرة 5 سنوات في اللحام الكهربائي ولحام الأرجون.أتميّز بدقة عالية في العمل، وحرص دائم على السلامة والجودة في تنفيذ المهام." withButton="true"/>
        <div class="flex flex-col gap-[24px] ">
        <WorkerInfo workerAge=29 workerLocation="شبين الكوم , المنوفية" workerEmail="email@example.com" workerPhone="01234567890"/>
        <WorkerSkills :workerSkills="['لحام TIG و MIG', 'لحام الفولاذ المقاوم للصدأ', 'لحام الأنابيب والخزانات', 'قراءة المخططات الفنية']"/>
        </div>
    </div>

</template>