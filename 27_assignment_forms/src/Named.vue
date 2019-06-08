<template>
  <div>
    <input type="text" :value="firstName" @input="addName(true, $event)">
    <input type="text" :value="lastName" @input="addName(false, $event)">
    <p>{{ this.value }}</p>
  </div>
</template>


<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    addName(b, event) {
      let name = "";
      if (b) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      this.$emit("input", name);
      return name;
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style scoped>
</style>
