<script setup>
import { ref } from 'vue';
import { workshopsData } from '../data/index.js';
import WorkshopCard from '../components/workshopCard.vue';
import WorkshopDetailsModal from '../components/workshopDetailsModal.vue';

const selectedWorkshop = ref(null);
const isModalOpen = ref(false);

const showWorkshopDetails = (workshop) => {
  selectedWorkshop.value = workshop;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedWorkshop.value = null;
};
</script>

<template>
  <div dir="rtl">
    <!-- Header Section -->
    <div class="py-6">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-[#246BFD] mb-6">
            الورش التعليمية
          </h1>
          <p class="text-lg text-[#7D889D] leading-relaxed">
            انضم لورشنا التعليمية اللي بتقدملك فرصة تطور مهاراتك الحرفية تحت
            إشراف خبراء مصريين سواء كنت مبتدئ أو محترف. هتعيش تجربة تعليمية
            ممتازة بتساعدك ترفع مستواك المهني.
          </p>
        </div>
      </div>
    </div>

    <!-- Workshops Grid -->
    <div class="container mx-auto px-4 py-12">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <WorkshopCard
          v-for="workshop in workshopsData"
          :key="workshop.id"
          :workshop="workshop"
          @showDetails="showWorkshopDetails"
        />
      </div>
    </div>

    <!-- Workshop Details Modal -->
    <WorkshopDetailsModal
      :workshop="selectedWorkshop"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>
