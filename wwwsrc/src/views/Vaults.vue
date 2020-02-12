<template>
  <div class="vaults container-fluid bkgrnd">
    <div class="row p-3">
      <div class="col-12">
        <h1 class="text-center">My Vaults</h1>
      </div>
      <div class="card-columns mx-auto">
        <div v-for="vault in vaults" :key="vault.id" class="card mx-auto">
          <a class="fa fa-times" @click="deleteVault(vault.id)"></a>
          <div class="card-body" @click="goToVault(vault.id)">
            <h3>{{ vault.name }}</h3>
            <p>{{ vault.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vaults",
  data() {
    return {};
  },
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
.vaults {
  min-height: 100vh;
}
.card-body {
  cursor: pointer;
}
</style>
