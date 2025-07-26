<script setup>
import { FaBuilding } from "vue-icons-plus/fa";
import { IoLocationSharp } from "vue-icons-plus/io";
import Badge from "./ui/badge.vue";
import Button from "./ui/button.vue";

defineProps({
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  desires: {
    type: Array,
    required: true,
  },
  salary: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div
    dir="rtl"
    class="shadow-[0px_4px_8px_rgba(0,0,0,0.10)] md:ps-[85px] md:pe-[40px] py-[24px] px-[24px] flex flex-col items-center gap-3 md:flex-row md:justify-between"
  >
    <div class="flex flex-col gap-[12px]">
      <h2 class="text-[#36394A] font-[700] text-[18px]">{{ jobTitle }}</h2>
      <div class="flex gap-[32px] items-center">
        <div class="flex gap-[4px] items-center">
          <FaBuilding class="text-[#666D80] h-[16px]" />
          <p class="text-[#666D80] text-[16px]">{{ company }}</p>
        </div>
        <div class="flex gap-[4px] items-center">
          <IoLocationSharp class="text-[#666D80] h-[16px]" />
          <p class="text-[#666D80] text-[16px]">{{ location }}</p>
        </div>
      </div>
      <div class="flex gap-[10px]">
        <Badge v-for="desire in desires" :title="desire" />
      </div>
      <p class="text-[#666D80]">{{ salary[1] }}-{{ salary[0] }} جنيه شهرياً</p>
    </div>
    <div>
      <Button buttonType="green">عرض التفاصيل</Button>
    </div>
  </div>
</template>

<!------------ how to use this component ---------->

<!-- 
<AvailableJob
      jobTitle="مبرمج"
      company="جوجل"
      location="مصر"
      :desires="['خبرة عالية', 'عن بُعد']"
      :salary="['1000', '2000']"
    /> -->
