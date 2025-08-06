<script setup>
import Footer from '../components/footer.vue';
import NavBar from '../components/navBar.vue';
import SideBar from '../components/sideBar.vue';
</script>
<template>
  <NavBar />
  <div dir="rtl" class="px-[24px] sm:px-[48px] md:px-[64px] lg:px-[100px] pt-[24px] flex gap-[20px]">
  <SideBar />
  <router-view />
  </div>
  <Footer />
</template>