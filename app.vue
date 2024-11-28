<template>
  <div>
    <NuxtLayout name="header-box"></NuxtLayout>
    <NuxtPage />
    <NuxtLayout name="footer-box"></NuxtLayout>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  if (window.innerWidth <= 1200) {
  const html = document.documentElement;
  const clientWidth = html.getBoundingClientRect().width;
  html.style.fontSize = clientWidth / 375 + "px";
}
})
</script>

<style>
</style>
