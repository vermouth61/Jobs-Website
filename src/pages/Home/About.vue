<script setup>
import { AiOutlineUser } from 'vue-icons-plus/ai';
import { Io5BagOutline } from 'vue-icons-plus/io5';
import { LuBookMarked } from 'vue-icons-plus/lu';

</script>
<template>
    <section class="container mx-auto">

        <div dir="rtl" class="mt-[8px] md:mt-[56px] py-[40px] ">
          <div class="flex flex-col gap-[16px]">
            <h1 class="text-center text-[32px] md:text-[48px] font-[700] text-[#246BFD]">من نحن</h1>
            <p class="text-center text-[18px] md:text-[32px] text-[#666D80]">
              "معلمين" هو المكان اللي بيجمعك بأفضل الحرفيين في مصر <br>
              من أول سباك لنقّاش،
              تقدر تلاقي اللي إنت محتاجه بضغطة واحدة
            </p>
          </div>
          <div class="flex flex-wrap justify-center gap-[24px] sm:justify-between mt-[56px] ">
              <div class="flex flex-col mx-auto lg:mx-0 items-center gap-[24px] w-[354px]">
                  <div class="p-[10px] w-fit shadow-[0px_16px_34px_rgba(73,131,233,0.30)] bg-[#5649FF] rounded-3xl">
                      <div class="p-[10px] bg-[#F6F8FA] rounded-full">
                          <AiOutlineUser class="text-[#666D80]"/>
                      </div>
                  </div>
                  <div>
                      <h3 class="text-center font-[700] mb-[5px] text-[24px]">تقدر تسجل  كـعامل، أو كـصاحب عمل</h3>
                      <p class="text-center font-[400] text-[18px] text-[#68727D]">كل حساب له مميزات مخصصة لتسهيل التواصل والشغل</p>
      
                  </div>
              </div>
              <div class="flex flex-col mx-auto lg:mx-0 items-center gap-[24px] w-[354px]">
                  <div class="p-[10px] w-fit shadow-[0px_16px_34px_rgba(84,35,201,0.30)] bg-[#5423C9] rounded-3xl">
                      <div class="p-[10px] bg-[#ECEFF3] rounded-full">
                          <LuBookMarked  class="text-[#666D80]"/>
                      </div>
                  </div>
                  <div>
                      <h3 class="text-center font-[700] mb-[5px] text-[24px]">فعل حسابك وكمّل بياناتك</h3>
                      <p class="text-center font-[400] text-[18px] text-[#68727D]">كمّل بياناتك علشان تبدأ تستخدم المنصة وتضيف مهاراتك وشغلك وكمان تقدر تشوف حد يشتغل معاك</p>
      
                  </div>
              </div>
              <div class="flex flex-col mx-auto lg:mx-0 items-center gap-[24px] w-[354px]">
                  <div class="p-[10px] w-fit shadow-[0px_16px_34px_rgba(41,183,65,0.30)] bg-[#29B741] rounded-3xl">
                      <div class="p-[10px] bg-[#ECEFF3] rounded-full">
                          <Io5BagOutline   class="text-[#666D80]"/>
                      </div>
                  </div>
                  <div>
                      <h3 class="text-center font-[700] mb-[5px] text-[24px]">ابدأ الشغل</h3>
                      <p class="text-center font-[400] text-[18px] text-[#68727D]">تواصل، اتفق، وابدأ تنفيذ الشغل بشكل مباشر من خلال المنصة.</p>
      
                  </div>
              </div>
          </div>
        </div>
    </section>
</template>
<br>