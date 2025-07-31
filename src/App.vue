<script setup></script>

<template>
  <transition name="fade" mode="default">
    <router-view />
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 50%;
}
</style>
