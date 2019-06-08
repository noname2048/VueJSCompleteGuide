<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <h1>Custom Directives</h1>
        <p v-highlight="'red'">color this</p>
      </div>
    </div>
  </div>
</template>
