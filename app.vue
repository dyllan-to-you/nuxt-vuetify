<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const layout = route.name.split("-")[0] ?? "default";
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
