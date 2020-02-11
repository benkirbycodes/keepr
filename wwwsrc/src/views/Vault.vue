<template>
  <div class="vault bkgrnd container-fluid">
    <div class="row p-3">
      <div class="col-12 text-center">
        <h1>{{ vault.name }}</h1>
      </div>
      <div class="card-columns mx-auto">
        <div v-for="keep in keeps" :key="keep.id" class="card mx-auto">
          <a @click="goToKeepDetail(keep.id)">
            <img :src="keep.img" class="card-img-top" alt="..." />
          </a>
          <div class="card-body">
            <h5 class="card-title">{{ keep.name }}</h5>
            <p class="card-text">{{ keep.description }}</p>
            <div class="counters p-2 rounded d-flex justify-content-between">
              <p class="m-0">Keeps: {{ keep.keeps }}</p>
              <p class="m-0">Shares: {{ keep.shares }}</p>
              <p class="m-0">Views: {{ keep.views }}</p>
            </div>

            <div
              class="btn-group-lg p-2 d-flex justify-content-between"
              role="group"
            >
              <button
                @click="removeKeepFromVault(keep.id)"
                type="button"
                class="btn-lg text-white"
              >
                Remove
              </button>
              <button type="button" class="btn-lg text-white">Share</button>
            </div>
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
  methods: {
    removeKeepFromVault(keepId) {
      let vaultId = this.$route.params.id;
      if (confirm("Are You Sure You Want To Remove This Keep?")) {
        this.$store.dispatch("deleteVaultKeep", { vaultId, keepId });
      }
    },
    goToKeepDetail(keepId) {
      this.$store.state.activeKeep = {};
      this.$router.push({ name: "keep-detail", params: { id: keepId } });
      this.$store.dispatch("incrementViewCount", keepId);
    }
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
.bkgrnd {
  min-height: 100vh;
}
</style>
