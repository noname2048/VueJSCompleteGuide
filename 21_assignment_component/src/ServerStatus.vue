<template>
  <p>
    Server Status : {{ status }}
    (
    <button @click="changeStatus">ChangeStatus</button>)
  </p>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>
