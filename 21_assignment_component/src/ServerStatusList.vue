<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="index in 5" :key="index">
      <server-status></server-status>
    </li>
  </ul>
</template>

<script>
import ServerStatus from "./ServerStatus";
var cmp = ServerStatus;
export default {
  components: {
    "server-status": ServerStatus
  }
};
</script>
