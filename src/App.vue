<template>
  <!--Layout & Appbar-->
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <!--Pagination-->
          <v-card
            min-height="60vh"
            min-width="100%"
            class="my-5"
            :loading="loading"
          >
            <v-row style="height: 100%" v-if="!loading">
              <v-col clos="3" v-for="item in passengers.data" :key="item._id">
                <v-card>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-title>{{ item.trips }}</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-pagination
              v-model="page"
              :length="passengers.totalPages"
              color="blue"
              @update:model-value="getData"
              rounded="circle"
              elevation="2"
              ellipsis="=> => =>"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
            ></v-pagination>
          </v-card>
        </v-col>
        <v-col>
          <v-btn @click="getData">Fetch</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
    <!--    <v-bottom-navigation class="bg-red">-->
    <!--      <v-btn><v-icon>mdi-home</v-icon></v-btn>-->
    <!--      <v-btn><v-icon>mdi-account</v-icon></v-btn>-->
    <!--      <v-btn><v-icon>mdi-music</v-icon></v-btn>-->
    <!--    </v-bottom-navigation>-->
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
    <!--    <v-card class="w-100">-->
    <!--      <v-tabs-->
    <!--        v-model="tab"-->
    <!--        stacked-->
    <!--        align-tabs="center"-->
    <!--        center-active-->
    <!--        bg-color="red"-->
    <!--        fixed-tabs-->
    <!--        prev-icon="mdi-arrow-left"-->
    <!--      >-->
    <!--        <v-tab v-for="num in 20" :key="num" :value="num" variant="outlined">-->
    <!--          <v-icon>mdi-home</v-icon>-->
    <!--          Tab {{ num }}-->
    <!--        </v-tab>-->
    <!--      </v-tabs>-->
    <!--      <v-window v-model="tab" class="mt-5">-->
    <!--        <v-window-item v-for="num in 20" :key="num" :value="num">-->
    <!--          <v-card>-->
    <!--            <v-card-title>Card {{ num }}</v-card-title>-->
    <!--          </v-card>-->
    <!--        </v-window-item>-->
    <!--      </v-window>-->
    <!--    </v-card>-->
    <!--    <v-container>-->
    <!--      <v-row>-->
    <!--        <v-col cols="12">-->
    <!--          &lt;!&ndash;Loading(linear-circular)&ndash;&gt;-->
    <!--          <v-progress-linear-->
    <!--            indeterminate-->
    <!--            class="mt-5"-->
    <!--            color="green"-->
    <!--          ></v-progress-linear>-->
    <!--          <v-progress-circular-->
    <!--            size="100"-->
    <!--            width="20"-->
    <!--            indeterminate-->
    <!--            class="my-5 mx-auto d-block"-->
    <!--          ></v-progress-circular>-->
    <!--          <v-btn @click="startLoading">Click me</v-btn>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </v-container>-->
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

  <!--  Navigation Drawer-->
  <v-container>
    <v-layout>
      <v-card min-width="100%">
        <v-app-bar color="red">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
          color="blue"
          class="px-0"
          permanent
          rail
          expand-on-hover
        >
          <v-list nav class="text-start">
            <v-list-item
              v-for="num in 5"
              :key="num"
              prepend-icon="mdi-home"
              @click="console.log('clicked')"
              :value="num"
            >
              <v-list-item-title>List {{ num }}</v-list-item-title>
            </v-list-item>
            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item prepend-icon="mdi-account" v-bind="props">
                  <v-list-item-title>test</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item>
                <v-list-item-title>test</v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-card min-width="100%">
        {{ search }}
        {{ write }}
        <v-autocomplete
          :items="items"
          v-model="search"
          v-model:search="write"
          no-data-text="لا يوجد بيانات"
          variant="outlined"
          :error-messages="errMsg"
          class="text-start"
        ></v-autocomplete>
        <v-btn @click="validate">submit</v-btn>
      </v-card>
    </v-layout>
    <v-layout>
      <v-card min-width="100%" min-height="50vh" variant="outlined">
        {{ selected }}
        <v-select
          class="text-start"
          :items="items"
          v-model="selected"
          variant="outlined"
          :error-messages="errMsg"
          item-title="text"
          item-value="myVal"
          autofocus
          multiple
          return-object
        ></v-select>
        <v-btn @click="validate">Submit</v-btn>
      </v-card>
    </v-layout>
    <v-layout>
      <v-card min-width="100%" min-height="50vh" variant="outlined">
        <v-text-field variant="outlined" v-model="myText"></v-text-field>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
// // const items = ref(["test One", "test Two", "test Three"]);
// const tab = ref("");
// const loading = ref(false);
// const startLoading = () => {
//   loading.value = true;
//   setTimeout(() => {
//     loading.value = false;
//   }, 2000);
// };

const passengers = ref([]);
const loading = ref(false);
const page = ref(1);
const drawer = ref(false);
const search = ref("");
const selected = ref([]);
const write = ref("");
const errMsg = ref("");
const items = ref([
  // "",
  // "ahmed",
  // "amgad",
  // "asaad",
  // "ayman",
  // "mohamed",
  // "mostafa",
  // "mahmoud",
  // "sami",
  // "samia",
  // "samir",
  {
    text: "Hawraa",
    myVal: 1,
  },
  {
    text: "Afnan",
    myVal: 2,
  },
  {
    text: "Arkan",
    myVal: 3,
  },
  {
    text: "Salih",
    myVal: 4,
  },
]);

const validate = () => {
  errMsg.value = "";
  if (!search.value) {
    errMsg.value = "Please select a name";
  }
  if (!selected.value) {
    errMsg.value.length = "Please select a name";
  }
};

const getData = async () => {
  loading.value = true;
  try {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${
        page.value - 1
      }&size=10`
    );
    const data = await response.json(); // Wait for the JSON response
    // console.log(data); // Log the data to the console
    passengers.value = data; // Assign the data to passengers
    loading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(async () => {
  await getData();
});
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
