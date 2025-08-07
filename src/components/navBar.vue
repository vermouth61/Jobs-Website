<script setup>
import Button from "./ui/button.vue";
import { useAuth } from "../composables/useAuth.js";

const { currentUser, isLoggedIn, logout } = useAuth();
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
        <div v-if="!isLoggedIn">
          <router-link to="/login">
            <Button extraClass="text-sm" buttonType="primary"
              >تسجيل الدخول</Button
            >
          </router-link>
        </div>
        <div v-else class="flex items-center gap-2">
          <router-link
            to="/profile"
            class="flex items-center gap-2 bg-white rounded-full px-3 py-1 hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <span class="text-sm text-gray-700 font-medium"
              >أهلاً، {{ currentUser?.firstName }}</span
            >
            <div
              class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs"
            >
              {{ currentUser?.firstName?.charAt(0)
              }}{{ currentUser?.lastName?.charAt(0) }}
            </div>
          </router-link>
          <Button
            @click="logout"
            extraClass="text-sm rounded-lg"
            buttonType="secondary"
            >تسجيل الخروج</Button
          >
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
          to="/jobs"
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

        <!-- Profile link for logged in users -->
        <router-link
          v-if="isLoggedIn"
          to="/profile"
          class="group relative p-[10px] duration-300 lg:hidden"
          exact-active-class="pointer-events-none text-[#246BFD] font-[700] lg:border-b-[1.5px] lg:border-[#246BFD]"
        >
          <span
            class="before:absolute before:bg-[#246BFD] before:content-[''] before:rounded-lg before:w-0 before:h-[1px] before:translate-y-[34px] before:translate-x-[10px] lg:group-hover:before:w-full before:duration-500 group-hover:text-[#246BFD]"
          >
            الملف الشخصي
          </span>
        </router-link>
      </div>

      <div class="hidden lg:flex gap-[14px]" dir="rtl">
        <div v-if="!isLoggedIn">
          <router-link to="/login">
            <Button buttonType="primary">تسجيل الدخول</Button>
          </router-link>
        </div>
        <div v-else class="flex items-center gap-4">
          <router-link
            to="/profile"
            class="flex items-center gap-3 bg-white rounded-full px-4 py-2 hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="flex items-center gap-2">
              <span class="text-gray-700 font-medium"
                >أهلاً، {{ currentUser?.firstName }}</span
              >
              <div
                class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              >
                {{ currentUser?.firstName?.charAt(0)
                }}{{ currentUser?.lastName?.charAt(0) }}
              </div>
            </div>
          </router-link>
          <Button @click="logout" buttonType="secondary" extraClass="rounded-lg"
            >تسجيل الخروج</Button
          >
        </div>
      </div>
    </div>
  </nav>
</template>
