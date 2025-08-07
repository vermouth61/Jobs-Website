<script setup>
import JobFieldsCard from "../../components/jobFieldsCard.vue";
import Button from "../../components/ui/button.vue";
import { jobFieldsArray } from "../../data";
</script>
<template>
  <div
    class="flex flex-col items-center mt-[56px] bg-[#F2F7FF] gap-[48px] px-[20px] lg:px-[100px] py-[48px]"
    dir="rtl"
  >
  
  
  <div class="text-center">
    <h2 class="text-[#246BFD] text-[48px] font-[700]">
      مجالات الوظائف المتاحة
    </h2>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-center 2xl:gap-[40px] gap-[20px]">
      <JobFieldsCard
      v-for="field in jobFieldsArray"
        :title="field.field" :description="field.description"
      >
       <component :is="field.icon"/>
      </JobFieldsCard>
    </div>
  </div>
  <Button
  buttonType="primary"
    extraClass="font-[600] h-[48px] w-[178px]"
    >شوف كل المجالات</Button
  >
   </div>
</template>
