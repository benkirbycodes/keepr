<template>
  <div class="keep-detail col-6 mx-auto">
    <div class="card mx-auto">
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
          <button type="button" class="btn-lg btn-secondary">Share</button>
          <button @click="deleteKeep" type="button" class="btn-lg btn-secondary">Delete</button>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
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
              >{{vault.name}}</a>
            </div>
          </div>
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
    this.updateViewCounter();
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
      // this.$router.push({ name: "vault", params: { id: vaultId } });
      // this.updateKeepCounter();
    },
    deleteKeep() {
      if (confirm("Are You Sure You Want To Delete This Keep?")) {
        this.$store.dispatch("deleteKeep", this.$route.params.id);
      }
    }
    //NOTE This doesn't work, need to figure out why
    // updateViewCounter() {
    //   let updatedKeepCount = {
    //     id: this.activeKeep.id,
    //     name: this.activeKeep.name,
    //     img: this.activeKeep.img,
    //     description: this.activeKeep.description,
    //     isPrivate: this.activeKeep.isPrivate,
    //     views: this.activeKeep.views + 1,
    //     shares: this.activeKeep.shares,
    //     keeps: this.activeKeep.keeps
    //   };
    //   this.$store.dispatch("editKeep", updatedKeepCount);
    // }
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

<style>
</style>