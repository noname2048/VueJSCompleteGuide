<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <button v-for="idx in 5" :key="idx" @click="changeStatus(idx)">Change Server #{{ idx }} status</button>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  methods: {
    changeStatus(idx) {
      // eventBus.$emit("statusChanged", idx);
      eventBus.changeStatus(idx);
    }
  }
};
</script>

<style>
</style>
