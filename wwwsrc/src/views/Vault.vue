<template>
  <div class="vault">
    <div class="card-columns mx-auto">
      <h1>{{vault.name}}</h1>
      <div v-for="keep in keeps" :key="keep.id" class="card mx-auto">
        <img :src="keep.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{keep.name}}</h5>
          <p class="card-text">{{keep.description}}</p>
          <div class="d-flex justify-content-between">
            <p>K: {{keep.keeps}}</p>
            <p>S: {{keep.shares}}</p>
            <p>V: {{keep.views}}</p>
          </div>

          <div class="btn-group-sm d-flex justify-content-between" role="group">
            <button type="button" class="btn-sm btn-secondary">Keep</button>
            <button type="button" class="btn-sm btn-secondary">Share</button>
            <button type="button" class="btn-sm btn-secondary">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vault",
  mounted() {
    this.$store.dispatch("getKeepsByVaultId", this.$route.params.id);
    this.$store.dispatch("getVaultById", this.$route.params.id);
  },
  computed: {
    keeps() {
      return this.$store.state.keepsPerVault;
    },
    vault() {
      return this.$store.state.activeVault;
    }
  }
};
</script>

<style>
</style>