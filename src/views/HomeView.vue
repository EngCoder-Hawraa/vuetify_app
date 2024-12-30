<template>
  <div class="home">
    <h1 class="text font-weight-light">This is homepage</h1>
    <!--     Grid      -->
    <v-container fluid>
      <v-row>
        <v-col cols="6" style="border: 1px solid">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="3"
              xxl="3"
              style="border: 1px solid"
              >Column One</v-col
            >
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="3"
              xxl="3"
              style="border: 1px solid"
              >Column Two</v-col
            >
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="3"
              xxl="3"
              style="border: 1px solid"
              >Column Three</v-col
            >
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="3"
              xxl="3"
              style="border: 1px solid"
              >Column Four</v-col
            >
          </v-row>
        </v-col>
        <v-col cols="6" style="border: 1px solid">Arkan</v-col>
      </v-row>
    </v-container>
    <!--     Margin Padding & Width      -->
    <div style="border: 1px solid; width: 400px" class="ml-16 mx-auto pt-13">
      Margin & Padding
    </div>
    <!--     # Width (25,50,75,100)      -->
    <div style="border: 1px solid" class="w-50">Margin & Padding</div>
    <!-- Display -->
    <span class="d-inline-block">Display Inline Block</span>
    <span class="d-block">Display Block</span>
    <span class="d-none d-md-inline">Display None</span>
    <div
      class="parent d-flex justify-space-between align-center"
      style="height: 200px; border: 1px solid"
    >
      <!--# Font text-h1 to h6 As you wish -->
      <p class="text-h1">text-h1</p>
      <p class="text-subtitle-1">text-subtitle-1</p>
      <p class="text-body-2">text-body-2</p>
      <p class="text-button">text-button</p>
      <h3 class="text-start">text-start</h3>
      <h3>test</h3>
      <h3>test</h3>
    </div>
    <p class="text-h5 font-weight-bold bg-amber-darken-3 text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet
      architecto, beatae consequatur culpa, debitis deleniti dolorum eligendi
      error ex excepturi iste maiores minima nisi quos tempora tempore unde
      voluptatibus.
    </p>
    <!-- Buttons -->
    <v-btn color="blue" class="text-white mr-2" size="x-small">Button</v-btn>
    <v-btn color="red" class="text-white mr-2" size="small">Button</v-btn>
    <v-btn color="#455667" rounded="xl" class="text-white mr-2">Button</v-btn>
    <v-btn color="#ff6500" rounded="lg" class="text-white mr-2" size="large"
      >Button</v-btn
    >
    <v-btn color="#f54354" rounded="xs" class="text-white mr-2" size="x-large"
      >Button</v-btn
    >
    <v-btn
      color="purple-darken-3"
      class="text-white"
      elevation="5"
      :ripple="true"
      variant="plain"
      :loading="loading"
      @click="clickMe"
      ><v-icon size="30" color="green">mdi-account-outline</v-icon> User</v-btn
    >
    <v-icon>mdi-clock</v-icon>
    <!--  #Cards-->
    <v-container>
      <v-row>
        <v-col v-for="num in 4" :key="num">
          <v-card variant="outlined">
            <v-card-title>This is Title</v-card-title>
            <v-card-subtitle>This is Subtitle</v-card-subtitle>
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              architecto atque aut autem beatae consectetur corporis dicta eaque
              earum eligendi illum, incidunt laudantium libero, nesciunt non
              obcaecati qui quis voluptate.</v-card-text
            >
            <v-divider color="green" inset length="20%"></v-divider>
            <v-card-actions>
              <v-btn>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-share</v-icon>
              </v-btn>
            </v-card-actions>
            <!--     Chips And Dividers       -->
            <v-divider color="red"></v-divider>
            <v-chip color="red" label variant="outlined" class="mb-5 mt-5"
              ><v-icon>mdi-account-outline</v-icon> My First Chip</v-chip
            >
          </v-card>
        </v-col>
      </v-row>
      <!-- Expansion Panels -->
      <v-expansion-panels class="my-5" variant="popout">
        <v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-plus"
            >test</v-expansion-panel-title
          >
          <v-expansion-panel-text
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            corporis debitis deserunt dolore ducimus eum facere quo, vel.
            Consequatur explicabo nihil soluta. Ab ad, alias id nisi omnis
            ratione reprehenderit.</v-expansion-panel-text
          >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <!-- Dialog -->
    <v-btn @click="dialog = true">Click Me</v-btn>
    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <v-card-title>This is Dialog</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          debitis delectus dicta dolore excepturi facilis iusto laborum maxime
          non nostrum optio, perferendis quibusdam repudiandae, sequi vitae!
          Adipisci fugiat illum voluptatem?</v-card-text
        >
        <v-card-actions>
          <v-btn @click="dialog = false" color="red">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<!-- Options API -->
<!--<script>-->
<!--export default {-->
<!--  name: "HomeView",-->
<!--  data: () => ({-->
<!--    loading: false,-->
<!--    dialog: false,-->
<!--  }),-->
<!--  methods: {-->
<!--    clickMe() {-->
<!--      this.loading = true;-->
<!--      setTimeout(() => {-->
<!--        this.loading = false;-->
<!--      }, 2000);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!-- Composition API -->
<script setup>
import { ref } from "vue";

const loading = ref(false);
const dialog = ref(false);

function clickMe() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>
