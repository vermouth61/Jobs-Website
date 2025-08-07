<script setup>
defineProps({
  extraClass: {
    type: String,
    default: '',
  },
  buttonType: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['clickButton']);
</script>

<template>
  <button
    @click="emit('clickButton')"
    :class="[
      buttonType === 'primary'
        ? 'text-white px-[20px] py-[8px] rounded-lg bg-[#246BFD] hover:bg-[#194BB2]'
        : buttonType === 'green'
        ? 'border-[1px] px-[20px] py-[8px] rounded-lg text-white bg-[#40C4AA] hover:bg-[#379b87]'
        : buttonType === 'secondary'
        ? 'px-[16px] py-[12px] bg-[#DF1C41] hover:bg-[#AA0F2C] text-white'
        : buttonType === 'outline'
        ? 'border-[1px] border-[#246BFD] px-[20px] py-[8px] rounded-lg text-[#246BFD] hover:bg-[#246BFD] hover:text-white'
        : 'px-[20px] py-[8px] rounded-lg',
      'cursor-pointer duration-300',
      extraClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<!-- How to use this component -->

<!-- blue button 'text-white px-[20px] py-[8px] rounded-lg bg-[#246BFD] hover:bg-[#194BB2]'-->
<!-- <Button buttonType="primary">تسجيل الدخول</Button> -->

<!-- green button 'border-[1px] px-[20px] py-[8px] rounded-lg text-white bg-[#40C4AA] hover:bg-[#379b87]'-->
<!-- <Button buttonType="green">تسجيل الدخول</Button> -->

<!-- red button and write your own border radius by add => extraClass="rounded-[10px]" -->
<!-- <Button buttonType="secondary">تسجيل الدخول</Button> -->

<!-- custom button 'px-[20px] py-[8px] rounded-lg'-->
<!-- <Button extraClass="write your own tailwind classes">تسجيل الدخول</Button> -->
