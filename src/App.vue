<!-- App.vue -->

<template>
  <q-layout
    id="app"
    view="hHh lpR lFf"
    style="height: 100vh"
    class="rounded-borders"
  >
    <q-header>
      <!-- Navbar  -->
      <Navbar v-if="isAuthenticated === true && token !== ''" />
    </q-header>
    <!-- Sidebar  -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { storeToRefs } from "pinia";
import Navbar from "./components/Navbar.vue";
import { useAuthStore } from "./store/auth-store";

const { isAuthenticated, token } = storeToRefs(useAuthStore());
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap");

#app {
  font-family: "Lato", sans-serif;
}
.page-container {
  background: var(--q-app-bg);
}

.page-container {
  /* background: var(--q-app-bg); */
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #9b9b9b;
  /* transition: all ease-in-out 0.2s; */
}
::-webkit-scrollbar-track {
  background-color: rgb(255, 255, 255);
}
</style>
