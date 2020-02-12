<template>
  <div class="keep-detail container-fluid mx-auto bkgrnd">
    <div class="card mx-auto">
      <img :src="keep.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ keep.name }}</h5>
        <p class="card-text">{{ keep.description }}</p>
        <div class="counters p-2 rounded d-flex justify-content-between">
          <p class="m-0">Keeps: {{ keep.keeps }}</p>
          <!-- <p class="m-0">Shares: {{ keep.shares }}</p> -->
          <p class="m-0">Views: {{ keep.views }}</p>
        </div>

        <div class="btn-group-sm p-2 d-flex justify-content-between" role="group">
          <div v-if="$auth.isAuthenticated" class="dropdown">
            <button
              class="btn-lg dropdown-toggle text-white"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Keep</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                @click="addToVault(vault.id)"
                v-for="vault in vaults"
                :key="vault.id"
                class="dropdown-item"
              >{{ vault.name }}</a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class="btn-lg dropdown-toggle text-white"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Share</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div
                class="fb-share-button dropdown-item"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-layout="button"
                data-size="small"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >Facebook</a>
              </div>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button dropdown-item"
                data-show-count="false"
              >Tweet</a>
            </div>
          </div>
          <button
            v-if="$auth.isAuthenticated"
            @click="deleteKeep"
            type="button"
            class="btn-lg text-white"
          >Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-detail",
  mounted() {
    this.$store.dispatch("getKeepById", this.$route.params.id);
    this.$store.dispatch("getVaults");
  },
  data() {
    return {
      activeKeep: this.$store.state.activeKeep
    };
  },
  methods: {
    addToVault(vaultId) {
      let vaultKeep = { keepId: this.$route.params.id, vaultId: vaultId };
      this.$store.dispatch("createVaultKeep", vaultKeep);
      this.$router.push({ name: "vault", params: { id: vaultId } });
    },
    deleteKeep() {
      if (confirm("Are You Sure You Want To Delete This Keep?")) {
        this.$store.dispatch("deleteKeep", this.$route.params.id);
        this.$router.push("/");
      }
    }
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  }
};
</script>

<style></style>
