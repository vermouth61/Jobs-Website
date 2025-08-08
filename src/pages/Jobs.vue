<script setup>
import { useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import { HiMiniAdjustmentsHorizontal } from "vue-icons-plus/hi2";
import RecentJobsCard from "../components/recentJobsCard.vue";
import data from "../data/data.json";
import MyInput from "../components/ui/MyInput.vue";
import { GrSearch } from "vue-icons-plus/gr";
import Select from "../components/ui/select.vue";
import { fields, governorates, levels, salaries } from "../data";

const route = useRoute();
const allJobs = ref(data.recentJobsArray);
const search = ref("");
const debouncedSearch = ref("");
const selectedField = ref("");
const selectedGovernorate = ref("");
const selectedLevel = ref("");
const selectedSalary = ref("");
let debounceTimer;

onMounted(() => {
    if (route.query.search) {
        search.value = route.query.search;
        debouncedSearch.value = route.query.search;
    }
    if (route.query.field) {
        debouncedSearch.value = route.query.field;
    }
     window.scrollTo({ top: 0, behavior: "smooth" });
});
const filteredJobs = ref([]);

const filterJobs = () => {
    const result = allJobs.value.filter((job) => {
    const title = job.jobTitle;
    const tags = job.tags;
    const location = job.location;

    const matchesSearch =
      !debouncedSearch.value ||
      tags.includes(debouncedSearch.value) ||
      title.includes(debouncedSearch.value)||debouncedSearch.value.includes(title);

    const matchesField =
      !selectedField.value ||
      tags.includes(selectedField.value) ||
      title.includes(selectedField.value);

    const matchesGovernorate =
      !selectedGovernorate.value ||
      location.includes(selectedGovernorate.value);

    const matchesLevel =
      !selectedLevel.value || job.desires[1] === selectedLevel.value;

    const matchesSalary =
      !selectedSalary.value ||
      (job.dailyRate >= +selectedSalary.value.split("-")[0] &&
        job.dailyRate <= +selectedSalary.value.split("-")[1]);

    return (
      matchesSearch &&
      matchesField &&
      matchesGovernorate &&
      matchesLevel &&
      matchesSalary
    );
  });

  filteredJobs.value = result;
};
watch(search, (val) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearch.value = val;
  }, 500);
});
watch(
  [
    debouncedSearch,
    selectedField,
    selectedGovernorate,
    selectedLevel,
    selectedSalary
  ],
  filterJobs,
  { immediate: true }
);
</script>


<template>
  <div dir="rtl" class="container mx-auto mb-[128px] mt-12">
    <div class="flex flex-col lg:flex-row gap-[20px]">
      <div
        dir="rtl"
        class="bg-[#F6F8FA] lg:border-[1px] lg:border-[#B8BCC7] lg:rounded-[8px] p-[24px] h-fit w-full lg:max-w-[400px] flex flex-col gap-[24px]"
      >
        <input id="side-toggle" type="checkbox" class="peer hidden" />
        <div class="flex items-center gap-3 lg:hidden">
          <label
            for="side-toggle"
            class="cursor-pointer inline-flex items-center p-2 justify-center text-sm text-[#246BFD] rounded-lg hover:bg-gray-100"
          >
            <div class="flex items-center gap-1">
              <HiMiniAdjustmentsHorizontal class="w-[26px]" />
              <span class="font-[600] text-[18px]">تصفية الوظائف</span>
            </div>
          </label>
        </div>
        <div
          class="w-full mt-4 peer-checked:flex hidden flex-col gap-[16px] lg:flex lg:flex-col lg:items-start lg:w-full lg:mt-0"
        >
          <div class="hidden lg:flex items-center gap-2 text-[#246BFD]">
            <HiMiniAdjustmentsHorizontal class="w-[26px]" />
            <span class="font-[600] text-[24px]">تصفية الوظائف</span>
          </div>
          <div class="flex flex-col w-full relative gap-[4px]">
            <label for="search" class="text-[16px] font-[600]"
              >ابحث بالشغلانة</label
            >
            <MyInput
              id="search"
              v-model="search"
              type="text"
              placeholder="اسم الشغلانة"
              extraClass="w-full bg-white border-[#D1D5DB] focus:outline-none focus:border-[#246BFD] text-base"
              required
            />
            <GrSearch class="absolute left-[12px] top-1/2 text-[#666D80]" />
          </div>
          <div class="flex flex-col w-full relative gap-[4px]">
            <label for="search" class="text-[16px] font-[600]"
              >مجال العمل</label
            >
            <Select
              :options="fields"
              defaultSelected="مجال عملك"
              v-model="selectedField"
            />
          </div>
          <div class="flex flex-col w-full relative gap-[4px]">
            <label for="search" class="text-[16px] font-[600]">المحافظة</label>
            <Select
              :options="governorates"
              defaultSelected="اختر المحافظة"
              v-model="selectedGovernorate"
            />
          </div>
          <div class="flex flex-col w-full relative gap-[4px]">
            <label for="search" class="text-[16px] font-[600]"
              >مستوى الخبرة</label
            >
            <Select
              :options="levels"
              defaultSelected="جميع المستويات"
              v-model="selectedLevel"
            />
          </div>
          <div class="flex flex-col w-full relative gap-[4px]">
            <label for="search" class="text-[16px] font-[600]"
              >نطاق الراتب اليومي</label
            >
            <Select
              :options="salaries"
              defaultSelected="الكل"
              v-model="selectedSalary"
            />
          </div>
        </div>
      </div>
      <div>
        <h1
          v-if="route.query.search"
          class="text-[#1F2937] mb-[16px] text-[20px] font-[500]"
        >
          نتائج البحث عن: {{ route.query.search }}
        </h1>
        <div class="flex flex-wrap justify-center xl:justify-start gap-[20px]">
          <RecentJobsCard
            class="w-[358px]! h-fit"
            v-if="filteredJobs.length"
            v-for="job in filteredJobs"
            :key="job.id"
            :id="job.id"
            :jobTitle="job.jobTitle"
            :location="job.location"
            :company="job.company"
            :dailyRate="job.dailyRate"
            :field="job.field"
            :desires="job.desires"
          />
          <h1 v-else class="text-[#1F2937] text-[20px] font-[500]">لا يوجد وظائف</h1>
        </div>
      </div>
    </div>
  </div>
</template>
