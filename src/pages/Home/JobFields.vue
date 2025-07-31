<script setup>
import { Fa6Hammer, Fa6Trowel } from "vue-icons-plus/fa6";
import JobFieldsCard from "../../components/jobFieldsCard.vue";
import Button from "../../components/ui/button.vue";
import { GiValve } from "vue-icons-plus/gi";
import { IpHammerAndAnvil } from "vue-icons-plus/ip";
import { BsFillPlugFill } from "vue-icons-plus/bs";
import { BiSolidWrench } from "vue-icons-plus/bi";
import { jobFieldsArray } from "../../data";
</script>
<template>
  <div
    class="flex flex-col items-center gap-[48px] px-[20px] lg:px-[100px] py-[45px]"
    dir="rtl"
  >
    <div class="flex flex-col text-center gap-[14px]">
      <h2 class="text-[#246BFD] text-[48px] font-[700]">
        مجالات الوظائف المتاحه
      </h2>
      <p class="text-[24px] font-[400] text-[#68727D]">
        شوف المجال اللي يناسب مهاراتك وابدأ شغلك من هنا.
      </p>
    </div>
    <div class="flex flex-wrap justify-center 2xl:gap-[40px] gap-[20px]">
      <JobFieldsCard
      v-for="field in jobFieldsArray"
        :title="field.field" :description="field.description"
      >
       <component :is="field.icon"/>
      </JobFieldsCard>
    </div>
    <Button
      extraClass="bg-[#666D80] hover:bg-[#36394A] text-white font-[600] h-[48px] w-[269px]"
      >شوف كل المجالات</Button
    >
  </div>
</template>
