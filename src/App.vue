<script setup></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="default">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 60%;
}
</style>
