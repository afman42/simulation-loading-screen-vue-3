import mitt from "mitt";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: () => mitt(),
});
