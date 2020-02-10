<template>
  <div class="vaults container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>My Vaults</h1>
      </div>
      <div v-for="vault in vaults" :key="vault.id" class="col-12">{{vault.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vaults",
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

<style>
</style>