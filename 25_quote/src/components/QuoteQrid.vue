<template>
  <div class="row">
    <app-quote
      v-for="(quote, idx) in quotes"
      :key="idx"
      @click.native="deleteQuote(idx)"
    >{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  },
  props: ["quotes"],
  components: {
    appQuote: Quote
  }
};
</script>

<style>
</style>
