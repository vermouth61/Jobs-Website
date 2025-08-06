<script setup>
import About from "./About.vue";
import HeroSection from "./HeroSection.vue";
import RecentJobs from "./RecentJobs.vue";
import JobFields from "./JobFields.vue";
import Accordion from "../../components/accordion.vue";
import { faqsArray } from "../../data";
import Button from "../../components/ui/button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <HeroSection />
  <About />
  <JobFields />
  <div
    dir="rtl"
    class="my-[80px] flex lg:flex-row lg:justify-between items-center flex-col gap-[24px] py-[40px] px-[20px] lg:px-[100px]"
  >
    <div class="flex flex-col justify-start gap-[24px] py-[16px]">
      <div class="flex flex-col gap-[16px]">
        <h3 class="text-[40px] text-[#246BFD] font-[600]">محتاج تتعلم مهارة جديدة في شغلك ؟</h3>
        <p class="text-[24px] font-[400] text-[#666D80]">
          طور المهارات اللي عندك في مجال شغلك واتعلم الحاجات الجديدة اللي تميزك
          عن باقي المعلمين ، ادخل اتعلم وطبق بإيدك علشان تكون معلم وكمان فنان!
        </p>
      </div>
      <Button buttonType="primary" extraClass="text-[18px] font-[600] w-[139px] h-[59px]">اتعلم من هنا</Button>
    </div>
    <div class="order-[-1] lg:order-1">
      <img class="rounded-lg" src="../../assets/newSkillsLearning.png" alt="Learning" />
    </div>
  </div>
  <RecentJobs />
  <div
    dir="rtl"
    class="my-[80px] flex lg:flex-row lg:justify-between items-center flex-col gap-[24px] py-[40px] px-[20px] lg:px-[100px]"
  >
  <div class="w-3/4">
    <img class="rounded-lg" src="../../assets/joinUs.jpg" alt="Learning" />
  </div>
    <div class="flex flex-col justify-start gap-[24px] py-[16px]">
      <div class="flex flex-col gap-[16px]">
        <h3 class="text-[40px] text-[#246BFD] font-[600]">انضم إلينا الآن</h3>
        <p class="text-[24px] font-[400] text-[#666D80]">
سواء كنت عامل بتدور على شغل ، أو صاحب ورشة أو مصنع ومحتاج عُمال يشتغلوا معاك ، هنا هتلاقي طلبك بكل سهولة ، سجل حسابك معانا دلوقتي وابدأ رحلتك معانا!        </p>
      </div>
      <Button @clickButton="() => router.push('/signup')" buttonType="primary" extraClass="text-[18px] font-[600] w-[139px] h-[59px]">سجل معنا</Button>
    </div>
  </div>
  <div
    class="flex flex-col gap-[24px] bg-[#F2F7FF] py-[32px] px-[20px] lg:py-[48px] lg:pb-[128px] lg:px-[230px]"
  >
    <h1 class="text-[32px] text-black text-center font-[600]">
      أسئلة <span class="text-[#246BFD]">شائعة</span>
    </h1>
    <Accordion v-for="faq in faqsArray" :title="faq.title" :open="faq.open">
      {{ faq.description }}
    </Accordion>
  </div>
</template>
