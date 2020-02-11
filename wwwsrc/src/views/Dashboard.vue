<template>
  <div class="dashboard container-fluid bkgrnd">
    <div class="row">
      <div class="col-6 p-3">
        <h1>Create A Keep</h1>
        <form @submit="createKeep">
          <label for="name">Name</label>
          <br />
          <input
            class="rounded"
            name="name"
            type="text"
            placeholder="Name..."
            v-model="newKeep.name"
          />
          <br />
          <label for="desc">Description</label>
          <br />
          <input
            class="rounded"
            name="desc"
            type="text"
            placeholder="Description..."
            v-model="newKeep.description"
          />
          <br />
          <label for="url">Image Url</label>
          <br />
          <input
            class="rounded"
            name="url"
            type="text"
            placeholder="Img Url..."
            v-model="newKeep.img"
          />
          <br />
          <br />
          <button class="btn-lg text-white">Create</button>
        </form>
      </div>
      <div class="col-6 p-3">
        <h1>Create A Vault</h1>

        <form @submit="createVault">
          <label for="name">Name</label>
          <br />
          <input
            class="rounded"
            name="name"
            type="text"
            placeholder="Name..."
            v-model="newVault.name"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  mounted() {},
  data() {
    return {
      newKeep: {
        name: "",
        img: "",
        description: "",
        isPrivate: false,
        views: 0,
        shares: 0,
        keeps: 0
      },
      newVault: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    createKeep() {
      let keep = { ...this.newKeep };
      this.$store.dispatch("createKeep", keep);
      this.newKeep = {
        name: "",
        img: "",
        description: "",
        isPrivate: false,
        views: 0,
        shares: 0,
        keeps: 0
      };
      this.$router.push("/");
    },
    createVault() {
      let vault = { ...this.newVault };
      this.$store.dispatch("createVault", vault);
      this.newVault = {
        name: "",
        description: ""
      };
      this.$router.push("/vaults");
    }
  },
  computed: {}
};
</script>

<style>
.dashboard {
  min-height: 100vh;
}
</style>
