<template>
  <div class="vaults container-fluid bkgrnd">
    <div class="row p-3">
      <div class="col-12">
        <h1 class="text-center">
          My Vaults
          <i
            v-if="!showForm"
            @click="showForm = !showForm"
            class="fa fa-angle-double-down"
          ></i>
          <i v-else-if="showForm" @click="showForm = !showForm" class="fa fa-angle-double-up"></i>
          <div v-if="showForm">
            <form @submit="createVault">
              <label for="name">Name</label>
              <br />
              <input
                class="rounded"
                name="name"
                type="text"
                placeholder="Name..."
                v-model="newVault.name"
                required
              />
              <br />
              <label for="desc">Description</label>
              <br />
              <input
                class="rounded"
                name="desc"
                type="text"
                placeholder="Description..."
                v-model="newVault.description"
              />
              <br />
              <br />
              <button class="btn-lg p-2 text-white">Create</button>
            </form>
          </div>
        </h1>
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
    return {
      showForm: false,
      newVault: {
        name: "",
        description: ""
      }
    };
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
    },
    createVault() {
      this.showForm = !this.showForm;
      let vault = { ...this.newVault };
      this.$store.dispatch("createVault", vault);
      this.newVault = {
        name: "",
        description: ""
      };
      // this.$router.push("/vaults");
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
