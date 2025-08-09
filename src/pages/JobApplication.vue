<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '../components/ui/button.vue';
import MyInput from '../components/ui/MyInput.vue';
import RecentJobsCard from '../components/recentJobsCard.vue';
import data from '../data/data.json';
import {
  HiMiniUser,
  HiMiniBuildingOffice2,
  HiMiniClock,
  HiMiniCloudArrowUp,
  HiMiniPaperAirplane,
  HiMiniMapPin,
} from 'vue-icons-plus/hi2';

const route = useRoute();
const router = useRouter();
const jobId = computed(() => Number(route.params.id));
const allJobs = data.recentJobsArray;
const jobData = computed(() => allJobs.find((job) => job.id === jobId.value));
const similarJobs = computed(() =>
  allJobs.filter((job) => job.id !== jobId.value).slice(0, 6)
);

const coverLetter = ref('');
const expectedSalary = ref('');
const startDate = ref('');
const uploadedFiles = ref([]);

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  uploadedFiles.value = [...uploadedFiles.value, ...files];
};

const handleSubmit = () => {
  alert('تم إرسال الطلب بنجاح!');
  coverLetter.value = '';
  expectedSalary.value = '';
  startDate.value = '';
  uploadedFiles.value = [];
};

if (!jobData.value) {
  router.replace('/jobs');
}
</script>

<template>
  <div dir="rtl" class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Breadcrumbs -->
      <div class="mb-6">
        <nav class="text-sm text-gray-500 flex justify-start">
          <router-link to="/jobs" class="hover:text-blue-600"
            >الوظائف المتاحة</router-link
          >
          <span class="mx-2">/</span>
          <span class="text-gray-700 font-semibold">تفاصيل الوظيفة</span>
        </nav>
      </div>

      <!-- Main Content: 2 columns on lg+ -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Right: Job Details & Form -->
        <div
          class="order-1 lg:col-span-2 flex flex-col justify-between content-between"
        >
          <!-- Job Details -->
          <div
            class="flex flex-col gap-2 mb-4 border border-[#B8BCC7] rounded-lg p-6 bg-[#F6F8FA]"
          >
            <div class="flex items-center gap-2 mb-1 flex-wrap justify-between">
              <div class="text-[18px] font-bold">
                {{ jobData.jobTitle }}
              </div>
              <div class="desires">
                <div
                  class="inline-block align-middle px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#F3F0FF] text-[#7C3AED] border border-[#E9E3FF]"
                >
                  {{ jobData.desires[0] }}
                </div>
                <div
                  class="inline-block align-middle px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#FFF7ED] text-[#F97316] border border-[#FFE4D0] mr-2"
                >
                  {{ jobData.desires[1] }}
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-6 text-gray-600 text-sm mb-2">
              <div class="flex items-center gap-1">
                <HiMiniUser class="w-4 h-4" />{{ jobData.field }}
              </div>
              <div class="flex items-center gap-1">
                <HiMiniBuildingOffice2 class="w-4 h-4" />{{ jobData.company }}
              </div>
              <div class="flex items-center gap-1">
                <HiMiniMapPin class="w-4 h-4" /> {{ jobData.location }}
              </div>
              <div class="flex items-center gap-1">
                <HiMiniClock class="w-4 h-4" />{{ jobData.dailyRate }}
                يومياً
              </div>
            </div>
          </div>

          <div class="border border-[#B8BCC7] rounded-lg p-6 bg-[#F6F8FA] h-50">
            <h4 class="font-bold text-[15px] mb-1">تفاصيل العمل</h4>
            <p class="text-[14px] text-gray-700 leading-relaxed">
              {{ jobData.description }}
            </p>
          </div>
        </div>
        <!-- Left: Skills & Benefits -->
        <div class="order-2 lg:col-span-1">
          <div
            class="border flex flex-col gap-8 border-[#B8BCC7] rounded-lg p-6 bg-[#F6F8FA]"
          >
            <div>
              <h3 class="text-[16px] font-bold mb-3">المهارات المطلوبة</h3>
              <ul class="text-[14px] text-gray-700 space-y-2">
                <li v-for="skill in jobData.requiredSkills" :key="skill">
                  {{ skill }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-[16px] font-bold mb-3">مميزات العمل</h3>
              <ul class="text-[14px] text-gray-700 space-y-2 grid grid-cols-2">
                <li v-for="benefit in jobData.benefits" :key="benefit">
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Application Form -->
        <form
          @submit.prevent="handleSubmit"
          class="order-3 lg:col-span-2 flex flex-col gap-4"
        >
          <div>
            <label for="cover-letter" class="block font-semibold mb-2"
              >قدم على العمل</label
            >
            <textarea
              v-model="coverLetter"
              rows="3"
              class="w-full px-[8px] py-[12px] placeholder:text-[#666D80] border-[1px] border-[#7D889D] bg-[#F6F8FA] rounded-lg focus:outline-[#666D80]"
              placeholder="اكتب هنا لماذا تعتقد أنك مناسب لهذه الوظيفة..."
            ></textarea>
          </div>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <label for="expected-salary" class="block font-semibold mb-2"
                >الراتب المتوقع</label
              >
              <MyInput
                v-model="expectedSalary"
                type="text"
                placeholder="الراتب المتوقع"
                extraClass="w-full"
              />
            </div>
            <div class="flex-1">
              <label for="start-date" class="block font-semibold mb-2"
                >تاريخ البدء</label
              >
              <MyInput
                v-model="startDate"
                type="text"
                placeholder="تاريخ البدء"
                extraClass="w-full"
              />
            </div>
          </div>

          <div
            class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors"
          >
            <input
              type="file"
              multiple
              @change="handleFileUpload"
              class="hidden"
              id="file-upload"
            />
            <label for="file-upload" class="cursor-pointer">
              <HiMiniCloudArrowUp class="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p class="font-medium">أرفق أعمالك السابقة</p>
            </label>
          </div>
          <div v-if="uploadedFiles.length > 0" class="mt-2">
            <p class="text-xs text-gray-600 mb-1">الملفات المرفقة:</p>
            <ul class="space-y-1">
              <li
                v-for="file in uploadedFiles"
                :key="file.name"
                class="text-xs text-gray-700"
              >
                {{ file.name }}
              </li>
            </ul>
          </div>

          <Button
            @clickButton="handleSubmit"
            buttonType="primary"
            extraClass="w-full flex items-center justify-center gap-2 py-2 text-[15px]"
          >
            <HiMiniPaperAirplane class="w-5 h-5" />
            تقدم بالطلب
          </Button>
        </form>
      </div>
      <!-- Similar Jobs Section -->
      <div class="mt-10">
        <h3 class="text-lg font-bold text-blue-700 mb-4">الوظائف المشابهة</h3>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center"
        >
          <RecentJobsCard
            v-for="job in similarJobs"
            :key="job.id"
            :jobTitle="job.jobTitle"
            :company="job.company"
            :location="job.location"
            :id="job.id"
            :dailyRate="job.dailyRate"
            :field="job.field"
            :desires="job.desires"
          />
        </div>
      </div>
    </div>
  </div>
</template>
