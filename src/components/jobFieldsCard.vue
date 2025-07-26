<script setup>
import Button from './ui/button.vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div dir="rtl" class="bg-white w-[400px] flex flex-col gap-[8px] items-center py-[16px] px-[24px] rounded-2xl border-[1px] border-[#DFE1E7]">
        <div class="flex items-center gap-[8px]">
            <div class="p-[12px] rounded-lg bg-[#ECEFF3] text-[#36394A]"><slot></slot></div>
            <h3 class="text-[22px] font-[600] text-[#36394A]">{{ title }}</h3>
        </div>
        <p class="p-[10px] mb-[8px] text-[18px] text-[#7D889D] font-[400]">{{ description }}</p>
        <div>
            <Button buttonType="green">وظائف {{title }} المتاحة</Button>
        </div>
    </div>
</template>

<!-- How to use this component -->
 <!-- 
<JobFieldsCard
      title="نجارة"
      description="شغل في تصنيع الأثاث، الديكورات الخشبية، أو أعمال النجارة في المشاريع السكنية والتجارية."
      >
        <Fa6Hammer /> the icon from [vue-icons](https://vue-icons.com/icons/) **don't forget to import the icon component from the library**
    </JobFieldsCard> -->
