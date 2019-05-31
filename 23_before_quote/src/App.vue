<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <hr>
        {{ selectedComponent }}
        <component :is="selectedComponent"></component>
        <app-quote>
          <h2 slot="title">The Quote</h2>
          <p slot="content">A wonderful Quote</p>
          <h1>hello</h1>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
export default {
  data: function() {
    return {
      quoteTittle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote
  }
};
</script>

<style scoped>
h2 {
  color: blue;
}
h1 {
  color: green;
}
</style>
