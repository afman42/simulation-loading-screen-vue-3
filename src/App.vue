<script setup>
import Loader from "./components/Loader.vue";
import { ref } from "vue";
const show = ref(false);
const showRouterView = ref(true);
function start(e) {
  show.value = e.show;
  showRouterView.value = e.showRouterView;
}
function stop(e) {
  setTimeout(() => {
    show.value = e.show;
    showRouterView.value = e.showRouterView;
  }, 3000);
}
</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center">
    <div class="flex flex-row mb-5">
      <router-link to="/" class="btn btn-primary mr-1">/</router-link>
      <router-link to="/page-another" class="btn btn-danger"
        >/page-another</router-link
      >
    </div>
    <router-view v-if="showRouterView" />
    <Loader :show="show" :start="start" :stop="stop" />
  </div>
</template>
