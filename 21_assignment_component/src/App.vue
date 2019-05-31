<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Server Status</h1>
        </header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-status-list></server-status-list>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <p>All Servers are managed here</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ServerStatusList from "./ServerStatusList.vue";
var cmp = ServerStatusList;
export default {
  components: {
    "server-status-list": ServerStatusList
  }
};
</script>

<style>
</style>
