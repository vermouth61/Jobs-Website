<script setup>
import { ref, onMounted } from 'vue';
import Button from '../components/ui/button.vue';
import MyInput from '../components/ui/MyInput.vue';
import { FaFacebook } from 'vue-icons-plus/fa';
import { FcGoogle } from 'vue-icons-plus/fc';
import { Fa6Check } from 'vue-icons-plus/fa6';
import { useAuth } from '../composables/useAuth.js';

const { register, loading, error, success, clearMessages } = useAuth();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const mobile = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Form validation
const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const mobileError = ref('');

const validateFirstName = (firstName) => {
  if (!firstName.trim()) {
    return 'الاسم الأول مطلوب';
  }
  if (firstName.trim().length < 2) {
    return 'الاسم الأول يجب أن يكون حرفين على الأقل';
  }
  return '';
};

const validateLastName = (lastName) => {
  if (!lastName.trim()) {
    return 'الاسم الأخير مطلوب';
  }
  if (lastName.trim().length < 2) {
    return 'الاسم الأخير يجب أن يكون حرفين على الأقل';
  }
  return '';
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'البريد الإلكتروني مطلوب';
  }
  if (!emailRegex.test(email)) {
    return 'البريد الإلكتروني غير صحيح';
  }
  return '';
};

const validatePassword = (password) => {
  if (!password) {
    return 'كلمة المرور مطلوبة';
  }
  if (password.length < 6) {
    return 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
  }
  return '';
};

const validateConfirmPassword = (confirmPassword) => {
  if (!confirmPassword) {
    return 'تأكيد كلمة المرور مطلوب';
  }
  if (confirmPassword !== password.value) {
    return 'كلمة المرور غير متطابقة';
  }
  return '';
};

const validateMobile = (mobile) => {
  const mobileRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  if (!mobile) {
    return 'رقم الموبايل مطلوب';
  }
  if (!mobileRegex.test(mobile)) {
    return 'رقم الموبايل غير صحيح';
  }
  return '';
};

const validateForm = () => {
  firstNameError.value = validateFirstName(firstName.value);
  lastNameError.value = validateLastName(lastName.value);
  emailError.value = validateEmail(email.value);
  passwordError.value = validatePassword(password.value);
  confirmPasswordError.value = validateConfirmPassword(confirmPassword.value);
  mobileError.value = validateMobile(mobile.value);

  return (
    !firstNameError.value &&
    !lastNameError.value &&
    !emailError.value &&
    !passwordError.value &&
    !confirmPasswordError.value &&
    !mobileError.value
  );
};

const onSignup = async () => {
  clearMessages();

  if (!validateForm()) {
    return;
  }

  try {
    await register({
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      password: password.value,
      mobile: mobile.value.trim(),
    });

    // Clear form after successful registration
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    mobile.value = '';
  } catch (err) {
    // Error is already handled in the composable
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

// Clear messages when component mounts
onMounted(() => {
  clearMessages();
});
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

      <!-- Success/Error Messages -->
      <div
        v-if="success"
        class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded"
      >
        {{ success }}
      </div>
      <div
        v-if="error"
        class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
      >
        {{ error }}
      </div>

      <div class="flex gap-2 mb-4 font-semibold w-full">
        <Button
          extraClass="bg-gray-100 border border-gray-300 hover:bg-gray-300 w-full"
          :disabled="loading"
        >
          <FaFacebook class="inline-block ml-2 text-[#1877F2]" />
          سجل عن طريق فيسبوك
        </Button>
        <Button
          extraClass="bg-gray-100 border border-gray-300 hover:bg-gray-300 w-full"
          :disabled="loading"
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
              :class="{ 'border-red-500': firstNameError }"
              required
              :disabled="loading"
            />
            <div v-if="firstNameError" class="text-red-500 text-sm mt-1">
              {{ firstNameError }}
            </div>
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
              :class="{ 'border-red-500': lastNameError }"
              required
              :disabled="loading"
            />
            <div v-if="lastNameError" class="text-red-500 text-sm mt-1">
              {{ lastNameError }}
            </div>
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
            :class="{ 'border-red-500': emailError }"
            required
            :disabled="loading"
          />
          <div v-if="emailError" class="text-red-500 text-sm mt-1">
            {{ emailError }}
          </div>
        </div>
        <div class="mb-4 relative">
          <label for="password" class="block mb-1 font-semibold text-right"
            >كلمة المرور</label
          >
          <div class="relative">
            <MyInput
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="أدخل كلمة المرور"
              class="w-full focus:outline-none focus:border-blue-600 text-base pr-10"
              :class="{ 'border-red-500': passwordError }"
              required
              :disabled="loading"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              :disabled="loading"
            >
              <svg
                v-if="showPassword"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                ></path>
              </svg>
              <svg
                v-else
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </button>
          </div>
          <div v-if="passwordError" class="text-red-500 text-sm mt-1">
            {{ passwordError }}
          </div>
        </div>
        <div class="mb-4 relative">
          <label
            for="confirmPassword"
            class="block mb-1 font-semibold text-right"
            >تأكيد كلمة المرور</label
          >
          <div class="relative">
            <MyInput
              id="confirmPassword"
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="أعد إدخال كلمة المرور"
              class="w-full focus:outline-none focus:border-blue-600 text-base pr-10"
              :class="{ 'border-red-500': confirmPasswordError }"
              required
              :disabled="loading"
            />
            <button
              type="button"
              @click="toggleConfirmPasswordVisibility"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              :disabled="loading"
            >
              <svg
                v-if="showConfirmPassword"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                ></path>
              </svg>
              <svg
                v-else
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </button>
          </div>
          <div v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">
            {{ confirmPasswordError }}
          </div>
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
            :class="{ 'border-red-500': mobileError }"
            required
            :disabled="loading"
          />
          <div v-if="mobileError" class="text-red-500 text-sm mt-1">
            {{ mobileError }}
          </div>
        </div>
        <Button
          buttonType="primary"
          extraClass="w-full"
          type="submit"
          :disabled="loading"
        >
          <span v-if="loading" class="inline-block animate-spin mr-2">⏳</span>
          {{ loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب' }}
        </Button>
      </form>
      <div class="text-center mt-6 text-gray-700 text-base">
        عندك حساب؟
        <router-link to="/login" class="text-blue-600 hover:underline mr-1"
          >تسجيل الدخول</router-link
        >
      </div>
    </div>
  </div>
</template>
