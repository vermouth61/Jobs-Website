<script setup>
    import MyInput from '../components/ui/MyInput.vue';
    import Select from '../components/ui/Select.vue';
import { fields, governorates, jobTypes, levels, salaryTypes } from '../data';

</script>

<template>
    <div dir="rtl" class="w-full bg-[#F6F8FA] border-[1px] border-[#B8BCC7] p-[24px] rounded-lg items-center flex flex-col gap-[32px]">
        <h1 class="text-[#246BFD] text-[32px] font-[600]">حدد تفاصيل الوظيفة</h1>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobTitle">طبيعية العمل</label>
                <MyInput v-model="jobTitle" :type="'text'" placeholder="مثال : سباك" :extraClass="'bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px]'"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobField">مجال العمل</label>
                <Select v-model="jobField" defaultSelected="مثال : سباكة" :options="fields" :extraClass="'bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1'"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobType">نوع العمل</label>
                <Select v-model="jobType" defaultSelected="مثال : دوام كلي" :options="jobTypes" :extraClass="'bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1'"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="factoryName">اسم المصنع / الورشة</label>
                <MyInput v-model="factoryName" :type="'text'" placeholder="مثال : المقاولون العرب" :extraClass="'bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px]'"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="governorate">المحافظة</label>
                <Select v-model="governorate" defaultSelected="مثال : المنوفية" :options="governorates" :extraClass="'bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1'"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="experienceLevel">مستوى الخبرة</label>
                <Select v-model="experienceLevel" defaultSelected="مثال : مبتدئ" :options="levels" :extraClass="'bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1'"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="salaryType">نوع المرتب</label>
                <Select v-model="salaryType" defaultSelected="مثال : شهري" :options="salaryTypes" :extraClass="'bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1'"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="salaryValue">قيمة المرتب ( بالجنيه )</label>
                <MyInput v-model="salaryValue" :type="'text'" placeholder="مثال :  12,000" :extraClass="'bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px]'"/>
            </div>
        </div>
    </div>
</template>