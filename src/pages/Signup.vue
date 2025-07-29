<script setup>
import { ref } from 'vue';
import Button from '../components/ui/button.vue';
import MyInput from '../components/ui/MyInput.vue';
import { FaFacebook } from 'vue-icons-plus/fa';
import { FcGoogle } from 'vue-icons-plus/fc';
import { Fa6Check } from 'vue-icons-plus/fa6';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const mobile = ref('');

const onSignup = () => {
  // ...handle signup logic...
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col lg:flex-row items-center justify-around bg-cover bg-center relative"
    style="background-image: url('src/assets/signup-bg.jpg'); direction: rtl"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/80 z-0"></div>
    <div class="text-right mb-8 text-white drop-shadow-lg z-10">
      <router-link to="/" class="flex items-center justify-right mb-4"
        ><img src="/src/assets/logo.svg" alt="logo"
      /></router-link>
      <h2 class="text-4xl font-bold mb-4">المكان المناسب للمعلمين</h2>
      <ul class="flex flex-col gap-3 text-lg">
        <li class="flex gap-2">
          <Fa6Check />
          <p>هتلاقى وظائف جديدة كل يوم</p>
        </li>
        <li class="flex gap-2">
          <Fa6Check />
          <p>هنرشحلك أنسب الوظائف</p>
        </li>
        <li class="flex gap-2">
          <Fa6Check />
          <p>هتلاقي كل المعلمين الشاطرين معانا</p>
        </li>
        <li class="flex gap-2">
          <Fa6Check />
          <p>شوف الفرص المتاحه واختار المناسب ليك</p>
        </li>
      </ul>
      <h3 class="text-2xl font-semibold mt-4">انضم لينا وابدأ رحلتك معانا !</h3>
    </div>
    <div
      class="bg-white rounded-xl shadow-lg px-8 py-10 w-full max-w-xl flex flex-col z-10"
    >
      <h2 class="text-center text-lg font-bold text-gray-800 mb-6">
        سجل معانا دلوقتي!
      </h2>
      <div class="flex gap-2 mb-4 font-semibold w-full">
        <Button
          extraClass="bg-gray-100 border border-gray-300 hover:bg-gray-300 w-full"
        >
          <FaFacebook class="inline-block ml-2 text-[#1877F2]" />
          سجل عن طريق فيسبوك
        </Button>
        <Button
          extraClass="bg-gray-100 border border-gray-300 hover:bg-gray-300 w-full"
        >
          <FcGoogle class="inline-block ml-2" />
          سجل عن طريق جوجل
        </Button>
      </div>

      <div class="flex items-center my-4 text-base">
        <div class="flex-1 border-b border-gray-400 mx-2"></div>
        <span>أو</span>
        <div class="flex-1 border-b border-gray-400 mx-2"></div>
      </div>
      <form @submit.prevent="onSignup">
        <div class="flex gap-4 mb-4">
          <div class="w-1/2">
            <label for="firstName" class="block mb-1 font-semibold text-right"
              >الاسم الأول</label
            >
            <MyInput
              id="firstName"
              v-model="firstName"
              type="text"
              placeholder="اسمك الأول"
              class="w-full focus:outline-none focus:border-blue-600 text-base"
              required
            />
          </div>
          <div class="w-1/2">
            <label for="lastName" class="block mb-1 font-semibold text-right"
              >الاسم الأخير</label
            >
            <MyInput
              id="lastName"
              v-model="lastName"
              type="text"
              placeholder="اسمك الأخير"
              class="w-full focus:outline-none focus:border-blue-600 text-base"
              required
            />
          </div>
        </div>
        <div class="mb-4 relative">
          <label for="email" class="block mb-1 font-semibold text-right"
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
          <label for="password" class="block mb-1 font-semibold text-right"
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
          <a
            href="#"
            class="block text-blue-600 text-sm mt-1 hover:underline text-right"
            >نسيت كلمة المرور؟</a
          >
        </div>
        <div class="mb-4 relative">
          <label for="mobile" class="block mb-1 font-semibold text-right"
            >رقم الموبايل</label
          >
          <MyInput
            id="mobile"
            v-model="mobile"
            type="text"
            placeholder="01*********"
            class="w-full focus:outline-none focus:border-blue-600 text-base"
            required
          />
        </div>
        <Button buttonType="primary" extraClass="w-full" type="submit">
          إنشاء حساب
        </Button>
      </form>
      <div class="text-center mt-6 text-gray-700 text-base">
        عندك حساب؟
        <router-link to="/login" class="text-blue-600 hover:underline mr-1"
          >..تسجيل الدخول</router-link
        >
      </div>
    </div>
  </div>
</template>
