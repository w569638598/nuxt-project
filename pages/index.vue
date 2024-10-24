<template>
    <div>
      <h1>Welcome to the homepage</h1>
      <AppAlert class="fs-20">
        This is an auto-imported component
      </AppAlert>
    </div>
  </template>
<script setup>

useSeoMeta({
    title: '首页',
    meta: [
          { name: 'description', content: '首页描述' }
        ]
})
</script>  