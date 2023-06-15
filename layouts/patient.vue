<script setup>
import { useRoute } from "vue-router";

const links = [
  {
    name: "Home",
    icon: "mdi-home",
    link: "/patient/",
  },
  {
    name: "Exercises",
    icon: "mdi-notebook",
    link: "/patient/exercises",
  },
  {
    name: "Profile",
    icon: "mdi-account-circle",
    link: "/patient/profile",
  },
];
const route = useRoute();

const title = computed(() =>
  route.name
    .split("-")
    .slice(1)
    .map((word) => "- " + word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);
</script>

<template>
  <v-app id="yolo-patient">
    <v-app-bar color="primary">
      <v-toolbar-title>Yolo {{ title }}</v-toolbar-title>
      <template v-slot:append>
        <v-btn v-for="{ name, icon, link } in links" :icon="icon" :href="link">
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
