<script setup>
import { ref } from 'vue';
import Button from '../components/ui/button.vue';
import MyInput from '../components/ui/MyInput.vue';
import { FaFacebook } from 'vue-icons-plus/fa';
import { FcGoogle } from 'vue-icons-plus/fc';
const email = ref('');
const password = ref('');
const onLogin = () => {
  // ...handle login logic...
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
    style="background-image: url('src/assets/login-bg.jpg'); direction: rtl"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/80 z-0"></div>
    <div class="text-center mb-8 text-white drop-shadow-lg z-10">
      <router-link to="/" class="flex items-center justify-center mb-4"
        ><img src="/src/assets/logo.svg" alt="logo"
      /></router-link>
      <p class="text-4xl font-bold">الموقع رقم 1 للوظائف في مصر</p>
    </div>
    <div
      class="bg-white rounded-xl shadow-lg px-8 py-10 w-full max-w-xl flex flex-col z-10"
    >
      <h2 class="text-center text-lg font-bold text-gray-800 mb-6">
        تسجيل الدخول
      </h2>
      <div class="flex gap-2 mb-4 font-semibold w-full">
        <Button extraClass="bg-gray-100 hover:bg-gray-300 w-full">
          <FaFacebook class="inline-block ml-2 text-[#1877F2]" />
          سجل عن طريق فيسبوك
        </Button>
        <Button extraClass="bg-gray-100 hover:bg-gray-300 w-full">
          <FcGoogle class="inline-block ml-2" />
          سجل عن طريق جوجل
        </Button>
      </div>

      <div class="flex items-center my-4 text-base">
        <div class="flex-1 border-b border-gray-400 mx-2"></div>
        <span>أو</span>
        <div class="flex-1 border-b border-gray-400 mx-2"></div>
      </div>
      <form @submit.prevent="onLogin">
        <div class="mb-4 relative">
          <label for="email" class="block mb-1 font-medium"
            >البريد الإلكتروني</label
          >
          <MyInput
            id="email"
            v-model="email"
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            class="w-full focus:outline-none focus:border-blue-600 text-base"
            required
          />
        </div>
        <div class="mb-4 relative">
          <label for="password" class="block mb-1 font-medium"
            >كلمة المرور</label
          >
          <MyInput
            id="password"
            v-model="password"
            type="password"
            placeholder="أدخل كلمة المرور"
            class="w-full focus:outline-none focus:border-blue-600 text-base"
            required
          />
          <a href="#" class="block text-blue-600 text-sm mt-1 hover:underline"
            >نسيت كلمة المرور؟</a
          >
        </div>
        <Button buttonType="primary" extraClass="w-full" type="submit">
          تسجيل الدخول
        </Button>
      </form>
      <div class="text-center mt-6 text-gray-700 text-base">
        لا يوجد حساب؟
        <a href="/signup" class="text-blue-600 hover:underline mr-1"
          >إنشاء حساب جديد</a
        >
      </div>
    </div>
  </div>
</template>
