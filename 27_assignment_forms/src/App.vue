<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <form>
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" class="form-control" id="fullName" v-model="userData.fullName">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="userData.email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="userData.password">
            </div>
            <div class="form-group">
              <label for="yes">Store Data?</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                value="yes"
                id="yes"
                v-model="userData.storeData"
              >
              <label class="form-check-label" for="yes">Yes</label>
            </div>
            <div class="form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                value="no"
                id="no"
                v-model="userData.stroeData"
              >
              <label class="form-check-label" for="yes">No</label>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submit">Submit</button>
          </form>
        </div>
      </div>
    </form>
    <!-- Exercise 2 -->
    <!-- Only display the Form if it has NOT been submitted -->
    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ '*'.repeat(userData.password.length) }}</p>
            <p>Store in Database?: {{ userData.storeData }}</p>
            <p>app-name: {{ userData.appName}}</p>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!-- Exercise 3 -->
    <!-- Edit the Example from above and create a custom "Full Name" Control -->
    <!-- which still holds the First Name and Last Name Input Field -->
    <app-named :value="userData.appName" @input="userData.appName = $event"></app-named>
  </div>
</template>

<script>
import Named from "./Named.vue";
export default {
  components: {
    appNamed: Named
  },
  data() {
    return {
      userData: {
        fullNmae: "",
        email: "",
        password: "",
        storeData: "yes",
        appName: "mama"
      },
      isSubmitted: false
    };
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
