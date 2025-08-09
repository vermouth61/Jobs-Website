<script setup>
import { BsFillPersonFill } from 'vue-icons-plus/bs';
import { TbLogout2, TbPhotoFilled } from 'vue-icons-plus/tb';
import { MdPersonSearch } from 'vue-icons-plus/md';
import { BiSolidBookmarkStar } from 'vue-icons-plus/bi';
import { Io5SettingsSharp } from 'vue-icons-plus/io5';
import Button from './ui/button.vue';
import { AiOutlineMenuFold } from 'vue-icons-plus/ai';
import { HiMiniUserGroup } from 'vue-icons-plus/hi2';
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => {
    localStorage.removeItem('userToken');
    router.push('/');
}
</script>

<template>
<div dir="rtl" class="bg-[#F6F8FA] lg:border-[1px] h-fit lg:border-[#B8BCC7] lg:rounded-[8px] px-[16px] py-[12px] lg:py-[24px] w-full lg:w-[400px] flex flex-col gap-[16px]">
        <input id="side-toggle" type="checkbox" class="peer hidden" />
    <div class="flex items-center gap-3 lg:hidden">

      <label
        for="side-toggle"
        class="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100"
      >
<AiOutlineMenuFold />
      </label>
    </div>
    <div class="w-full mt-4 peer-checked:flex hidden flex-col gap-[16px] lg:flex lg:flex-col lg:items-start lg:w-full lg:mt-0">
    <router-link to="/profile" class=" text-[#36394A] w-full text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/profile' }">
        <BsFillPersonFill class="w-[22px]"/>البيانات الشخصية
        </span>
    </router-link>
    <router-link to="/job-applicants" class=" text-[#36394A] w-full text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/job-applicants' }">
        <HiMiniUserGroup class="w-[22px]"/>المتقدمين للعمل
        </span>
    </router-link>
    <router-link to="/portfolio" class="text-[#36394A] w-full text-[16px] font-[400] flex items-center" >
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/portfolio'}">
        <TbPhotoFilled class="w-[22px]"/>معرض الأعمال
        </span>
    </router-link>
    <router-link to="/hiring-workers" class=" text-[#36394A] w-full text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/hiring-workers'}">
        <MdPersonSearch class="w-[22px]"/>تعيين عُمال
        </span>
    </router-link>
    <router-link to="/saved-jobs" class=" text-[#36394A] w-full text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/saved-jobs'}">
        <BiSolidBookmarkStar class="w-[22px]"/>الوظائف المحفوظة
        </span>
    </router-link>
    <router-link to="/profile-settings" class=" text-[#36394A] w-full text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/profile-settings'}">
        <Io5SettingsSharp class="w-[22px]"/>إعدادات الحساب
        </span>
    </router-link>
    <div class="w-full"> 
        <Button buttonType="secondary" @clickButton="logout" extraClass="w-full text-start rounded-[12px] px-[20px] flex gap-[8px]">
            <TbLogout2 class="inline-block w-[22px]"/>
            تسجيل الخروج
        </Button>
    </div>
    </div>
</div>
</template>