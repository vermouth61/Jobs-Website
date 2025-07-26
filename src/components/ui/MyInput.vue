<script setup>
defineProps({
  type: {
    type: String,
    required: true,
    default: "text",
  },
  modelValue: {
    type: [String, Boolean],
    required: true,
  },
  extraClass: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    v-if="type === 'text' || type === 'password'"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="['px-[8px] py-[12px] placeholder:text-[#666D80] border-[1px] border-[#7D889D] bg-[#F6F8FA] rounded-lg focus:outline-[#666D80]', extraClass]"
  />
  <input
    v-else-if="type === 'checkbox'"
    :type="type"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :class="['p-2 bg-gray-200 rounded-md focus:outline-indigo-500', extraClass]"
  />
</template>
