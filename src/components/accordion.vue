<script setup >
import { ref } from 'vue'
import { EpArrowLeft } from 'vue-icons-plus/ep'
const { open } = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: '',
        required: true
    }
})
const accordionOpen = ref(open)


</script>

<template>
  <div dir="rtl" class="p-[16px] bg-white rounded-2xl">
    <h2>
      <button
        id="accordion-title-01"
        class="flex items-center  cursor-pointer justify-between w-full text-left font-semibold py-2"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        aria-controls="accordion-text-01"
      >
        <span class="text-[14px] sm:text-[22px]  cursor-pointer">{{ title }}</span>
        <EpArrowLeft class="transform origin-center  cursor-pointer transition duration-200 ease-out" :class="{ '!rotate-90': accordionOpen }"/>

      </button>
    </h2>
    <div
      id="accordion-text-01"
      role="region"
      aria-labelledby="accordion-title-01"
      class="grid overflow-hidden transition-all duration-300 ease-in-out"    
      :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <p class="pb-3 text-[12px] sm:text-[18px] text-[#68727D]">
            <slot></slot>
        </p>
      </div>
    </div>    
  </div>
</template>


<!-- How to use this component -->

 <!-- if you want it closed by default -->

<!-- <Accordion title="السؤال ؟" >
إجابة السؤال
</Accordion> -->



<!-- if you want it open by default just add => :open="true" -->

<!-- <Accordion title="السؤال ؟" :open="true" >
       إجابة السؤال
    </Accordion> -->