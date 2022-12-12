<script setup>
import { onMounted } from "vue";
import { useEventStore } from "../store/eventStore";
const emit = useEventStore();
const props = defineProps({
  start: Function,
  stop: Function,
  show: Boolean,
});

onMounted(() => {
  console.log(props);
  emit.on("asyncComponentLoading", props.start);
  emit.on("asyncComponentLoaded", props.stop);
});
</script>

<template>
  <div class="loader" v-if="props.show"></div>
</template>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
