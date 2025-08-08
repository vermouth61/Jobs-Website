<script setup>
import Button from './ui/button.vue';

const props = defineProps({
  workshop: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['showDetails']);

const showWorkshopDetails = () => {
  emit('showDetails', props.workshop);
};
</script>

<template>
  <div
    dir="rtl"
    class="p-4 bg-[#F6F8FA] rounded-2xl border-[1px] border-[#DFE1E7] overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
  >
    <!-- Workshop Image -->
    <div class="h-48 overflow-hidden rounded-xl">
      <img
        :src="workshop.image"
        :alt="workshop.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        @error="
          $event.target.src =
            'https://via.placeholder.com/400x300/246BFD/FFFFFF?text=ورشة+تعليمية'
        "
      />
    </div>

    <!-- Workshop Content -->
    <div class="py-6 flex flex-col justify-between h-50">
      <!-- Title -->
      <h3 class="text-xl font-semibold text-[#246BFD] mb-3">
        {{ workshop.title }}
      </h3>

      <!-- Description -->
      <p class="text-[#7D889D] text-sm leading-relaxed mb-4 line-clamp-3">
        {{ workshop.description }}
      </p>
      <!-- Details Button -->
      <Button
        buttonType="primary"
        extraClass="w-full font-semibold "
        @clickButton="showWorkshopDetails"
      >
        تفاصيل الورشة
      </Button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
