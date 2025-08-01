<script setup>
import About from './About.vue';
import HeroSection from './HeroSection.vue';
import RecentJobs from './RecentJobs.vue';
import JobFields from './JobFields.vue';
import Accordion from '../../components/accordion.vue';
import { faqsArray } from '../../data';




</script>
<template>
  <HeroSection />
  <About />
  <RecentJobs />
  <JobFields/>
  <div class="flex flex-col gap-[24px] py-[32px] px-[20px] lg:py-[45px] lg:px-[230px]">
    <h1 class="text-[32px] text-black text-center font-[600]">أسئلة <span class="text-[#246BFD]">شائعة</span></h1>
    <Accordion v-for="faq in faqsArray" :title="faq.title" :open="faq.open">
        {{ faq.description }}
      </Accordion>
  </div>
</template>
