<script setup>
import { BsFillPersonFill } from 'vue-icons-plus/bs';
import { TbLogout2, TbPhotoFilled } from 'vue-icons-plus/tb';
import { RiUserSearchFill } from 'vue-icons-plus/ri';
import { MdPersonSearch } from 'vue-icons-plus/md';
import { BiSolidBookmarkStar } from 'vue-icons-plus/bi';
import { Io5SettingsSharp } from 'vue-icons-plus/io5';
import Button from './ui/button.vue';

</script>

<template>
<div dir="rtl" class="bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-[8px] px-[16px] py-[24px] w-[295px] flex flex-col gap-[16px]">
    <router-link to="/profile" class=" text-[#36394A] text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/profile' }">
        <BsFillPersonFill class="w-[22px]"/>البيانات الشخصية
        </span>
    </router-link>
    <router-link to="/portfolio" class="text-[#36394A] text-[16px] font-[400] flex items-center" >
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/portfolio'}">
        <TbPhotoFilled class="w-[22px]"/>معرض الأعمال
        </span>
    </router-link>
    <router-link to="/hiring-workers" class=" text-[#36394A] text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/hiring-workers'}">
        <MdPersonSearch class="w-[22px]"/>تعيين عُمال
        </span>
    </router-link>
    <router-link to="/saved-jobs" class=" text-[#36394A] text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/saved-jobs'}">
        <BiSolidBookmarkStar class="w-[22px]"/>الوظائف المحفوظة
        </span>
    </router-link>
    <router-link to="/profile-settings" class=" text-[#36394A] text-[16px] font-[400] flex items-center">
        <span class="flex items-center gap-[8px] w-full h-full p-[16px] rounded-[12px] border-[1px] border-[#B8BCC7]"
        :class="{ 'bg-[#CCDDFF] text-[#246BFD] font-[600] border-transparent': $route.path === '/profile-settings'}">
        <Io5SettingsSharp class="w-[22px]"/>إعدادات الحساب
        </span>
    </router-link>
    <div>
        <Button buttonType="secondary" @clickButton="$emit('logout') " extraClass="w-full text-start rounded-[12px] px-[20px] flex gap-[8px]">
            <TbLogout2 class="inline-block w-[22px]"/>
            تسجيل الخروج
        </Button>
    </div>
</div>
</template>