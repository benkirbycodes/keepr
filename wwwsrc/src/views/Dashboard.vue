<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>DASHBOARD</h1>
      </div>
      <div class="col-12" v-for="vault in vaults" :key="vault.id">
        <h3>Vaults</h3>
        <!-- {{vault.name}} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getVaults");
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    }
  }
};
</script>

<style></style>
