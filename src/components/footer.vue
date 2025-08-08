<script setup>
import Button from "./ui/button.vue";
import { Io5MailOutline } from "vue-icons-plus/io5";
import { PiPhone } from "vue-icons-plus/pi";
import { IoMapOutline } from "vue-icons-plus/io";
import { Fa6Instagram } from "vue-icons-plus/fa6";
import {  BiLogoLinkedin } from "vue-icons-plus/bi";

import { RiFacebookFill, RiTwitterXFill } from "vue-icons-plus/ri";
</script>
<template>
  <div class="bg-black py-[64px]">
    <div class="container mx-auto">

    
    <div dir="rtl" class="flex flex-wrap gap-5 justify-between mb-[45px] items-start">
      <div class="flex flex-col w-[392px] gap-[21px]">
        <div>
          <img src="../assets/logo.svg" alt="LOGO" />
        </div>
        <h5 class="text-white leading-6.5 font-[600]">
          "معلمين" هو المكان اللي بيجمعك بأفضل الحرفيين في مصر من أول سباك
          لنقّاش، تقدر تلاقي اللي إنت محتاجه بضغطة واحدة
        </h5>
        <Button @clickButton="$router.push('/jobs')" extraClass="w-[164px] h-[40px]" buttonType="primary"
          >استكشف الوظائف</Button
        >
      </div>
      <div>
        
      </div>
      <div>
        <h4 class="text-white text-[22px] font-[600] mb-[16px]">الصفحات</h4>
        <div class="flex gap-[32px]">
          <ul class="flex flex-col text-[#B8BCC7] gap-[14px]">
            <li><router-link to="/">الرئيسية</router-link></li>
            <li><router-link to="/about">من نحن</router-link></li>
            <li><router-link to="/jobs">الوظائف المتاحة</router-link></li>
            <li><router-link to="/faqs">أسئلة شائعة</router-link></li>
          </ul>
          <ul class="flex flex-col text-[#B8BCC7] gap-[14px]">
            <li><router-link to="/login">تسجيل الدخول</router-link></li>
            <li><router-link to="/jobsSearch">حساب جديد</router-link></li>
          </ul>
        </div>
      </div>
      <div>
        <h4 class="text-white text-[22px] font-[600] mb-[16px]">تواصل معنا</h4>
        <ul class="flex flex-col text-[#B8BCC7] gap-[14px]">
          <li class="flex items-center gap-[5px]">
            <IoMapOutline />Luqman Street, Khamis Mushait
          </li>
          <li class="flex items-center gap-[5px]">
            <Io5MailOutline />sales@Ma'lmeen.com
          </li>
          <li class="flex items-center gap-[5px]"><PiPhone />201500060139+</li>
        </ul>
      </div>
    </div>
    <div dir="rtl" class="py-[24px] border-1 border-t-[#AD9B9B] flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <ul class="flex text-gray-300 gap-[10px]">
            <li><BiLogoLinkedin /></li>
            <li><Fa6Instagram /></li>
            <li><RiFacebookFill /></li>
            <li><RiTwitterXFill /></li>
        </ul>
        <h3 class="text-[18px] text-white">© حقوق الطبع والنشر محفوظة 2025 لمنصة معلمين </h3>
    </div>
    </div>
  </div>
</template>
