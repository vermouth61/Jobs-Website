<script setup>
import { watch } from 'vue';
import Button from './ui/button.vue';

const props = defineProps({
  workshop: {
    type: Object,
    default: null,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// Close modal when clicking outside
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

// Close modal with Escape key
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// Add event listener for escape key
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.removeEventListener('keydown', handleKeydown);
    }
  }
);

const openWhatsApp = () => {
  const message = `مرحبا، أنا مهتم بورشة ${props.workshop.title}`;
  const whatsappUrl = `https://wa.me/200000000000?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
  <div
    v-if="isOpen && workshop"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    @click="handleBackdropClick"
  >
    <div
      dir="rtl"
      class="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <!-- Header with close button -->
      <div
        class="flex justify-between items-center p-6 border-b border-gray-200"
      >
        <h2 class="text-2xl font-bold text-[#246BFD]">تفاصيل الورشة</h2>
        <Button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </Button>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Workshop Image -->
        <div class="mb-6">
          <img
            :src="workshop.image"
            :alt="workshop.title"
            class="w-full h-48 object-cover rounded-lg"
            @error="
              $event.target.src =
                'https://via.placeholder.com/600x300/246BFD/FFFFFF?text=ورشة+تعليمية'
            "
          />
        </div>

        <!-- Workshop Title -->
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-[#246BFD] mb-2">
            {{ workshop.title }}
          </h1>
          <p class="text-lg text-[#7D889D]">{{ workshop.englishTitle }}</p>
        </div>

        <!-- Workshop Details -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-[#36394A] mb-3">
            تفاصيل الورشة
          </h3>
          <p class="text-[#7D889D] leading-relaxed">
            {{ workshop.detailedDescription }}
          </p>
        </div>

        <!-- Workshop Location -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-[#36394A] mb-3">مكان الورشة</h3>
          <p class="text-[#7D889D]">{{ workshop.location }}</p>
        </div>

        <!-- Date and Duration Information -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-[#36394A] mb-2">تاريخ البدء</h4>
            <p class="text-[#7D889D]">{{ workshop.startDate }}</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-[#36394A] mb-2">تاريخ الانتهاء</h4>
            <p class="text-[#7D889D]">{{ workshop.endDate }}</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-[#36394A] mb-2">مدة الورشة</h4>
            <p class="text-[#7D889D]">{{ workshop.duration }}</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-[#36394A] mb-2">تكلفة الورشة</h4>
            <p class="text-[#7D889D]">{{ workshop.cost }}</p>
          </div>
        </div>

        <!-- WhatsApp Contact Button -->
        <div class="mt-8">
          <Button
            @click="openWhatsApp"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
            تواصل معنا عبر الواتساب
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
