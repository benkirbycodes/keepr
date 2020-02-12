<template>
  <div class="dashboard container-fluid bkgrnd">
    <div class="row">
      <div class="col-12-sm col-6-m p-3 text-center mx-auto">
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
            required
          />
          <br />
          <br />
          <label for="private">Mark as Private?</label>
          <br />
          <input class="rounded" name="private" type="checkbox" v-model="newKeep.isPrivate" />
          <br />
          <br />
          <button class="btn-lg text-white">Create</button>
        </form>
      </div>
      <div class="col-12-sm col-6-m p-3 text-center mx-auto">
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
          <button class="btn-lg p-2 text-white">Create</button>
        </form>
      </div>
    </div>
    <div class="row">
      <Keep :showPrivate="showPrivate" />
    </div>
  </div>
</template>

<script>
import Keep from "@/components/Keep.vue";

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
      },
      showPrivate: true
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
  components: {
    Keep
  }
};
</script>

<style>
.dashboard {
  min-height: 100vh;
}
</style>
