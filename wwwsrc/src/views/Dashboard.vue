<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-12 p-3">
        <h1>Manage Your Keeps</h1>
        <form @submit="createKeep">
          <label for="name">Name</label>
          <br />
          <input name="name" type="text" placeholder="Name..." v-model="newKeep.name" />
          <br />
          <label for="desc">Description</label>
          <br />
          <input name="desc" type="text" placeholder="Description..." v-model="newKeep.desc" />
          <br />
          <label for="url">Image Url</label>
          <br />
          <input name="url" type="text" placeholder="Img Url..." v-model="newKeep.img" />
          <br />
          <button>Create</button>
        </form>
      </div>
      <div class="col-12 p-3">
        <h1>Manage Your Vaults</h1>

        <form @submit="createVault">
          <label for="name">Name</label>
          <br />
          <input name="name" type="text" placeholder="Name..." v-model="newVault.name" />
          <br />
          <label for="desc">Description</label>
          <br />
          <input name="desc" type="text" placeholder="Description..." v-model="newVault.desc" />
          <br />
          <button>Create</button>
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
        desc: "",
        isPrivate: false,
        views: 0,
        shares: 0,
        keeps: 0
      },
      newVault: {
        name: "",
        desc: ""
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
        desc: "",
        isPrivate: false,
        views: 0,
        shares: 0,
        keeps: 0
      };
    },
    createVault() {
      let vault = { ...this.newVault };
      this.$store.dispatch("createVault", vault);
      this.newVault = {
        name: "",
        desc: ""
      };
    }
  },
  computed: {}
};
</script>

<style></style>
