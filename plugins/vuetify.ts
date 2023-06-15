import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "dark",
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#FFFFFF",
            surface: "#FFFFFF",
            primary: twColors.indigo[600],
            secondary: twColors.purple[600],
            error: twColors.red[500],
            info: twColors.blue[500],
            success: twColors.emerald[500],
            warning: twColors.amber[500],
          },
        },
        dark: {
          dark: true,
          colors: {
            background: twColors.slate[950],
            surface: twColors.slate[900],
            primary: twColors.indigo[500],
            secondary: twColors.purple[500],
            error: twColors.red[500],
            info: twColors.blue[500],
            success: twColors.emerald[500],
            warning: twColors.amber[500],
          },
        },
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    defaults,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
