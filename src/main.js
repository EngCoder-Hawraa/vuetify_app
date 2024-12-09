import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi"; // Use Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // Ensure default icon set is defined
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

// Proper initialization order
app.use(store);
app.use(router);
app.use(vuetify);

// Mount the app
app.mount("#app");
