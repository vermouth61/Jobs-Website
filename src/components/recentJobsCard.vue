<script setup>
import { HiMiniMapPin } from 'vue-icons-plus/hi2';
import Button from './ui/button.vue';
import { FaBuilding, FaTools } from 'vue-icons-plus/fa';
import { Fa6MoneyCheckDollar } from 'vue-icons-plus/fa6';
import { BsBookmark, BsBookmarkFill, BsFillClockFill } from 'vue-icons-plus/bs';
import { onMounted, ref } from 'vue';
import Badge from './ui/badge.vue';
import { getSavedJobs, toggleJob } from '../utils';
import { useRouter } from 'vue-router';
const { jobTitle, company, location, id, dailyRate, field, desires } =
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
    dailyRate: {
      type: Number,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    desires: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  });
const emit = defineEmits(['jobRemoved']);
const savedJobs = ref([]);
const saved = ref(false);
const router = useRouter();
onMounted(() => {
  savedJobs.value = getSavedJobs();
  if (savedJobs.value.find((job) => job.id === id)) {
    saved.value = true;
  }
});
const saveHandler = () => {
  saved.value = !saved.value;
  toggleJob({
    jobTitle: jobTitle,
    company: company,
    location: location,
    dailyRate: dailyRate,
    field: field,
    desires: desires,
    id: id,
  });
  if (!saved.value) {
    emit('jobRemoved', id);
  }
};
const goToDetails = () => {
  router.push(`/job/${id}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
<template>
  <div
    dir="rtl"
    class="p-[24px] border-1 bg-white border-[#DFE1E7] rounded-lg flex flex-col gap-[16px] w-[400px]"
  >
    <div>
      <div class="flex flex-col gap-[8px]">
        <div class="flex flex-row items-center justify-between">
          <h3 class="font-[500] py-[10px] text-[24px]">{{ jobTitle }}</h3>
          <Badge v-if="status" :title="status" />
          <div v-else>
            <BsBookmark
              class="cursor-pointer"
              v-if="!saved"
              @click="saveHandler"
            />
            <BsBookmarkFill
              class="cursor-pointer"
              v-else
              @click="saveHandler"
            />
          </div>
        </div>
        <div class="flex flex-row gap-[66px]">
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[#666D80] flex text-[16px] items-center font-[400]">
              <FaBuilding class="h-[16px]" />{{ company }}
            </li>
            <li class="text-[#666D80] flex text-[16px] items-center font-[400]">
              <Fa6MoneyCheckDollar class="h-[16px]" />{{ dailyRate }} يوميا
            </li>
          </ul>
          <ul class="flex flex-col gap-[8px]">
            <li class="text-[#666D80] flex text-[16px] items-center font-[400]">
              <FaTools class="h-[16px]" />{{ field }}
            </li>
            <li class="text-[#666D80] flex text-[16px] items-center font-[400]">
              <HiMiniMapPin class="h-[18px]" />{{ location }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex gap-[8px]">
      <Badge v-for="desire in desires" :title="desire" />
    </div>
    <Button
      buttonType="outline"
      extraClass="font-[600]"
      @clickButton="goToDetails"
      >تفاصيل الشغلانة</Button
    >
  </div>
</template>
