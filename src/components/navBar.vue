<script setup>
import Button from './ui/button.vue';
</script>

<template>
  <nav
    dir="rtl"
    class="bg-white px-[20px] position-sticky top-0 xl:px-[100px] lg:px-[78px] py-[14px] flex flex-wrap justify-between items-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
  >
    <router-link to="/">
      <img src="../assets/logo.svg" alt="logo" />
    </router-link>

    <input id="menu-toggle" type="checkbox" class="peer hidden" />
    <div class="flex items-center gap-3 lg:hidden">
      <router-link to="/login">
        <Button extraClass="text-sm" buttonType="primary">تسجيل الدخول</Button>
      </router-link>

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
        to="/contact"
        class="group relative p-[10px] duration-300"
        exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
      >
        <span
          class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
        >
          بحث وظائف خالية
        </span>
      </router-link>

      <router-link
        to="/fields"
        class="group relative p-[10px] duration-300"
        exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
      >
        <span
          class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
        >
          وظائف حسب المجال
        </span>
      </router-link>

      <router-link
        to="/governorates"
        class="group relative p-[10px] duration-300"
        exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
      >
        <span
          class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
        >
          وظائف المحافظات
        </span>
      </router-link>
    </div>

    <div class="hidden lg:flex gap-[14px]" dir="rtl">
      <router-link to="/login">
        <Button buttonType="primary">تسجيل الدخول</Button>
      </router-link>
    </div>
  </nav>
</template>
