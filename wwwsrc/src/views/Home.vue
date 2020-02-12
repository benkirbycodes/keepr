<template>
  <div class="home container-fluid bkgrnd">
    <div class="row p-3">
      <div class="col-12">
        <h1 class="text-center">
          Keepr
          <i v-if="!showForm" @click="showForm = !showForm" class="fa fa-angle-double-down"></i>
          <i v-else-if="showForm" @click="showForm = !showForm" class="fa fa-angle-double-up"></i>
          <div v-if="showForm" class="dropform">
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
              <button class="btn-lg text-white">Create</button>
            </form>
          </div>
        </h1>
      </div>
      <keep />
    </div>
  </div>
</template>

<script>
import keep from "@/components/Keep.vue";

export default {
  name: "home",
  mounted() {},
  data() {
    return {
      showForm: false,
      newKeep: {
        name: "",
        img: "",
        description: "",
        isPrivate: false,
        views: 0,
        shares: 0,
        keeps: 0
      }
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    createKeep() {
      this.showForm = !this.showForm;
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
    }
  },
  components: {
    keep
  }
};
</script>
<style>
.bkgrnd {
  background-image: linear-gradient(to bottom right, purple, white);
}
.home {
  min-height: 100vh;
}
h1 {
  text-shadow: 1px 1px 2px white;
}
input {
  max-width: 100%;
}
.dropform {
  transition: transform 2s ease-in-out;
}
.dropform > div {
  transition-delay: 1s;
}
</style>
