<template>
  <div>
    <p>Sever Status:{{ status }}</p>
    <hr>
    <button @click="changeStatus">changeStatus</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Crritical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

