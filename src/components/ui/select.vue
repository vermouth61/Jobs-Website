<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: [],
  },
  defaultSelected: {
    type: String,
    default: '',
    required: true,
  },
  modelValue: [String, Number],
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)
const isOpen = ref(false)

watch(selected, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <div class="relative">
    <select
      v-model="selected"
      class="appearance-none w-full border-[1px] text-[#666D80] border-[#D1D5DB] rounded-lg p-[10px] pl-10 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#246BFD]"
      @focus="isOpen = true"
      @blur="isOpen = false"
    >
      <option value="" disabled selected>{{ defaultSelected }}</option>
      <option
        v-for="(option, i) in options"
        :key="i"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <div
      class="pointer-events-none absolute inset-y-0 left-3 flex items-center transition-transform duration-200"
      :class="{ 'rotate-180': isOpen }"
    >
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </div>
</template>
