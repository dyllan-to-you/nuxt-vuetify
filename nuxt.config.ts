import "@vite-pwa/nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    // apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {},
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Hello World",
      short_name: "42",
      theme_color: "#ffffff",
      icons: [
        // {
        //   src: "pwa-192x192.png",
        //   sizes: "192x192",
        //   type: "image/png",
        // },
        // {
        //   src: "pwa-512x512.png",
        //   sizes: "512x512",
        //   type: "image/png",
        // },
        // {
        //   src: "pwa-512x512.png",
        //   sizes: "512x512",
        //   type: "image/png",
        //   purpose: "any maskable",
        // },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
