<template>
  <!--Layout & Appbar-->
  <v-layout>
    <!--    <v-app-bar-->
    <!--      theme="dark"-->
    <!--      elevation="0"-->
    <!--      extended-->
    <!--      extension-height="10"-->
    <!--      height="70"-->
    <!--      image="https://picsum.photos/1920/1080?random"-->
    <!--      style="border-bottom: 1px solid rgba(129, 129, 129, 0.671)"-->
    <!--    >-->
    <!--      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>-->
    <!--      <v-spacer></v-spacer>-->
    <!--      <v-icon color="white" class="mr-4">mdi-magnify</v-icon>-->
    <!--      <v-icon color="white" class="mr-4">mdi-heart</v-icon>-->
    <!--      <v-icon color="white" class="mr-4">mdi-dots-vertical</v-icon>-->
    <!--    </v-app-bar>-->
    <!--    <v-app-bar elevation="2">-->
    <!--      &lt;!&ndash;BreadCrumbs&ndash;&gt;-->
    <!--      <v-breadcrumbs :items="items">-->
    <!--        <template v-slot:divider>-->
    <!--          <v-icon>mdi-chevron-right</v-icon>-->
    <!--        </template>-->
    <!--      </v-breadcrumbs>-->
    <!--    </v-app-bar>-->
    <!--Bottom Navigation-->
    <v-bottom-navigation class="bg-red">
      <v-btn><v-icon>mdi-home</v-icon></v-btn>
      <v-btn><v-icon>mdi-account</v-icon></v-btn>
      <v-btn><v-icon>mdi-music</v-icon></v-btn>
    </v-bottom-navigation>
    <!--System Bar-->
    <!--    <v-system-bar color="red" elevation="10">-->
    <!--      <v-icon class="mr-2">mdi-wifi-strength-3</v-icon>-->
    <!--      <v-icon class="mr-2">mdi-signal</v-icon>-->
    <!--      <v-icon class="mr-2">mdi-battery</v-icon>-->
    <!--      <span>08:00 AM</span>-->
    <!--    </v-system-bar>-->
    <!--Footer-->
    <!--    <v-footer class="flex-column" elevation="20" :app="true">-->
    <!--      <p>-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at-->
    <!--        doloribus ex illum in laboriosam magnam minima perferendis quod tempora!-->
    <!--        Ea excepturi fugiat labore velit. Doloribus ex laboriosam officiis-->
    <!--        temporibus.-->
    <!--      </p>-->
    <!--      <div>-->
    <!--        <v-icon>mdi-home</v-icon>-->
    <!--        <v-icon>mdi-twitter</v-icon>-->
    <!--        <v-icon>mdi-facebook</v-icon>-->
    <!--        <v-icon>mdi-instagram</v-icon>-->
    <!--      </div>-->
    <!--    </v-footer>-->
    <!--Tabs-->
    <v-card class="w-100">
      <v-tabs
        v-model="tab"
        stacked
        align-tabs="center"
        center-active
        bg-color="red"
        fixed-tabs
        prev-icon="mdi-arrow-left"
      >
        <v-tab v-for="num in 20" :key="num" :value="num" variant="outlined">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab" class="mt-5">
        <v-window-item v-for="num in 20" :key="num" :value="num">
          <v-card>
            <v-card-title>Card {{ num }}</v-card-title>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12">
          <!--Loading(linear-circular)-->
          <v-progress-linear
            indeterminate
            class="mt-5"
            color="green"
          ></v-progress-linear>
          <v-progress-circular
            size="100"
            width="20"
            indeterminate
            class="my-5 mx-auto d-block"
          ></v-progress-circular>
          <v-btn @click="startLoading">Click me</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>

  <!--Toolbar-->
  <!--  <v-toolbar elevation="2" class="px-5">-->
  <!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
  <!--    <v-toolbar-title>My Title</v-toolbar-title>-->
  <!--    <v-spacer></v-spacer>-->
  <!--    <v-icon class="mr-3">mdi-account</v-icon>-->
  <!--    <v-icon>mdi-logout</v-icon>-->
  <!--  </v-toolbar>-->

  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <router-view />
</template>

<script setup>
import { ref } from "vue";
// const items = ref(["test One", "test Two", "test Three"]);
const tab = ref("");
const loading = ref(false);
const startLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-toolbar-title__placeholder {
  width: fit-content !important;
}
</style>
