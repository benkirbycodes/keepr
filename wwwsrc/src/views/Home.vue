<template>
  <div class="home container">
    <div class="row p-3">
      <h1>Keepr</h1>
      <keep />
    </div>
  </div>
</template>

<script>
import keep from "@/components/Keep.vue";

export default {
  name: "home",
  mounted() {},
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
    keep
  }
};
</script>
