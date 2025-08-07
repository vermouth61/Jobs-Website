<script setup>
    defineProps({
        documentName: {
            type: String,
            default: ''
        },
    })
</script>

<template>
    <div class="bg-white p-[16px] rounded-lg border-[1px] border-[#B8BCC7] flex flex-col items-center gap-[8px]">
        <slot></slot>
        <h2 class="text-[#0D2559] text-[16px] font-[400]">{{documentName}}</h2>
    </div>
</template>