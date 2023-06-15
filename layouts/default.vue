<script setup>
import { useRoute } from "vue-router";

const links = [
  {
    name: "Home",
    icon: "mdi-home",
    link: "/",
  },
  {
    name: "Profile",
    icon: "mdi-account-circle",
    link: "/profile",
  },
];
const route = useRoute();

const title = computed(() =>
  route.name
);
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>Hello! {{ title }}</v-toolbar-title>
      <template v-slot:append>
        <v-btn v-for="{ name, icon, link } in links" :icon="icon" :href="link">
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      {{ $route.fullPath }} - {{ $route.path }}
    <br />
    {{ $router.options.routes }}
    <br />
      <slot />
    </v-main>
  </v-app>
</template>
