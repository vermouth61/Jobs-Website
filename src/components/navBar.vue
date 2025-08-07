<script setup>
import { onMounted, ref } from "vue";
import Button from "./ui/button.vue";
const token = ref("");
onMounted(() => {
  token.value = localStorage.getItem("userToken");
})
</script>

<template>
  <nav
    dir="rtl"
    class="bg-[rgba(255,255,255,0.80)] sticky z-10 top-0 py-[14px] backdrop-blur-[9px]"
  >
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>

      <input id="menu-toggle" type="checkbox" class="peer hidden" />
      <div class="flex items-center gap-3 lg:hidden">
         <router-link v-if="!token" to="/login">
          <Button buttonType="primary">تسجيل الدخول</Button>
        </router-link>
        <div v-if="token" @click="$router.push('/profile')" class="p-2 flex items-center cursor-pointer hover:bg-[#B8BCC7] border-[1px] duration-300 border-[#B8BCC7] rounded-[32px] gap-2">
          <div class="w-[34px]">
            <img class="rounded-full h-[34px] object-cover" src="../assets/peoples/avatar.jpg" alt="">
          </div>
          <h3 class="text-[18px] font-400">أهلاً، محمد</h3>
        </div>

        <label
          for="menu-toggle"
          class="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </label>
      </div>

      <div
        class="w-full mt-4 peer-checked:flex hidden flex-col gap-3 lg:flex lg:flex-row lg:items-center lg:w-auto lg:mt-0"
      >
        <router-link
          to="/"
          class="group relative p-[10px] duration-300"
          exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
        >
          <span
            class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
          >
            الرئيسية
          </span>
        </router-link>

        <router-link
          to="/available-jobs"
          class="group relative p-[10px] duration-300"
          exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
        >
          <span
            class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
          >
            الوظائف المتاحة
          </span>
        </router-link>

        <router-link
          to="/learning"
          class="group relative p-[10px] duration-300"
          exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
        >
          <span
            class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
          >
            وِرش تعليمية
          </span>
        </router-link>
      </div>

      <div class="hidden lg:flex gap-[14px]" dir="rtl">
        <router-link v-if="!token" to="/login">
          <Button buttonType="primary">تسجيل الدخول</Button>
        </router-link>
        <div v-if="token" @click="$router.push('/profile')" class="p-2 flex items-center cursor-pointer hover:bg-[#B8BCC7] border-[1px] duration-300 border-[#B8BCC7] rounded-[32px] gap-2">
          <div class="w-[34px]">
            <img class="rounded-full h-[34px] object-cover" src="../assets/peoples/avatar.jpg" alt="">
          </div>
          <h3 class="text-[18px] font-400">أهلاً، محمد</h3>
        </div>
      </div>
    </div>
  </nav>
</template>
