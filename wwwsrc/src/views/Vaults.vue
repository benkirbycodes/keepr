<template>
  <div class="vaults container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>My Vaults</h1>
      </div>
      <div v-for="vault in vaults" :key="vault.id" class="col-12">
        {{vault.name}}
        <a class="fa fa-arrow-circle-right" @click="goToVault(vault.id)"></a>
        <a class="fa fa-times" @click="deleteVault(vault.id)"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vaults",
  mounted() {
    this.$store.dispatch("getVaults");
  },
  methods: {
    goToVault(vaultId) {
      this.$router.push({ name: "vault", params: { id: vaultId } });
    },
    deleteVault(vaultId) {
      if (confirm("Are You Sure You Want To Delete This Vault?")) {
        this.$store.dispatch("deleteVault", vaultId);
      }
    }
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