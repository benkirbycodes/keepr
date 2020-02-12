<template>
  <div class="home container-fluid bkgrnd">
    <div class="row p-3">
      <div class="col-12">
        <h1 class="text-center">Keepr</h1>
      </div>
      <Keep :showPrivate="showPrivate" />
    </div>
  </div>
</template>

<script>
import Keep from "@/components/Keep.vue";

export default {
  name: "home",
  mounted() {},
  data() {
    return {
      showPrivate: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {
    Keep
  }
};
</script>

<style>
.bkgrnd {
  background-image: linear-gradient(to bottom right, purple, white);
}
.home {
  min-height: 100vh;
}
h1 {
  text-shadow: 1px 1px 2px white;
}
input {
  max-width: 100%;
}
.dropform {
  transition: transform 2s ease-in-out;
}
.dropform > div {
  transition-delay: 1s;
}
</style>
