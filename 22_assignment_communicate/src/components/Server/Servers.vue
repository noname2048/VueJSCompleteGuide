<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(server, idx) in servers"
        :key="idx"
        @statusChanged="changeStatus($event)"
      >Server #{{ server['id'] }} : {{ server['status'] }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Normal" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Normal" }
      ]
    };
  },
  created() {
    eventBus.$on("changeStatus", idx => {
      this.servers[idx - 1]["status"] = "Critical";
    });
  }
};
</script>

<style>
</style>
