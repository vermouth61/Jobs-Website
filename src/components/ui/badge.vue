<script setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<template>
  <div
    :class="[
      title === 'قيد المراجعة' || title === 'خبرة عالية'
        ? 'bg-[#FEF9C3] text-[#854D0E]'
        : title === 'تم القبول'
        ? 'bg-[#DCFCE7] text-[#166534]'
        : title === 'مرفوض'
        ? 'bg-[#FEE2E2] text-[#991B1B]'
        : title === 'مبتدئ'
        ? 'bg-[#FFEDD5] text-[#C2410C]'
        : title === 'دوام كامل'
        ? 'bg-[#DBEAFE] text-[#246BFD]'
        : title === 'مشروع بالاتفاق'
        ? 'bg-[#F3E8FF] text-[#7E22CE]'
        : title === 'دوام جزئي'
        ? 'bg-[#FFD3F6] text-[#7100A2]'
        : title === 'خبرة متوسطة'
        ? 'bg-[#DCFCE7] text-[#15803D]'
        : 'bg-[#c3e9f1] text-[#187e92]',
      'py-[4px] w-fit px-[16px] text-[14px] rounded-full',
    ]"
  >
    {{ title }}
  </div>
</template>

<!-- How to use this component -->

<!-- <Badge title="عن بُعد" /> -->
