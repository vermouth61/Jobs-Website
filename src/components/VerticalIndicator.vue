<script setup>
    defineProps({
        indicatorState: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
        <div class="flex flex-col items-center w-[16px]">
            <div :class="[indicatorState ? 'bg-[#246BFD]' : 'bg-[#DFE1E7]']" class="w-[16px] h-[16px] rounded-full"></div>
            <div :class="[indicatorState ? 'bg-gradient-to-b from-[#246BFD] to-[#DFE1E7]' : 'bg-[#DFE1E7]']" class="w-[1px] h-[85px]"></div>
        </div>
</template>