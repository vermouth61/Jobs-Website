<script setup>
import Footer from '../components/footer.vue';
import NavBar from '../components/navBar.vue';
import SideBar from '../components/sideBar.vue';
</script>
<template>
  <NavBar />
  <div dir="rtl" class="px-[20px] lg:px-[100px] lg:pt-[24px] flex flex-col lg:flex-row gap-[20px] mb-[128px]">
  <SideBar />
  <router-view />
  </div>
  <Footer />
</template>