<template>
  <nav class="navbar navbar-expand">
    <router-link class="navbar-brand" :to="{ name: 'home' }">Keepr</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'vaults' }"
        >
          <router-link class="nav-link" :to="{ name: 'vaults' }">Vaults</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn-lg text-white" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn-lg text-white" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "http://keepr123.herokuapp.com/";

let _api = axios.create({
  baseURL: baseUrl,
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      await this.$auth.getUserData();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout();

      this.$store.dispatch("resetBearer");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
.navbar {
  background-image: linear-gradient(to bottom, black, rgb(70, 70, 70));
}
.nav-link,
.navbar-brand {
  color: white;
}

.nav-link:focus,
.navbar-brand:focus {
  color: grey;
}
</style>
