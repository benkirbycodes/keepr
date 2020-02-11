<template>
  <div class="keep card-columns mx-auto">
    <div v-for="keep in keeps" :key="keep.id" class="card mx-auto">
      <a @click="goToKeepDetail(keep.id)">
        <img :src="keep.img" class="card-img-top" alt="..." />
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ keep.name }}</h5>
        <p class="card-text">{{ keep.description }}</p>
        <div class="counters p-2 d-flex rounded justify-content-between">
          <p class="m-0">Keeps: {{ keep.keeps }}</p>
          <p class="m-0">Shares: {{ keep.shares }}</p>
          <p class="m-0">Views: {{ keep.views }}</p>
        </div>
        <div
          class="btn-group-sm d-flex justify-content-between"
          role="group"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getPublicKeeps");
  },
  methods: {
    goToKeepDetail(keepId) {
      // this.$store.dispatch("incrementViewCount", keepId);
      this.$store.state.activeKeep = {};
      this.$router.push({ name: "keep-detail", params: { id: keepId } });
    }
  },
  computed: {
    keeps() {
      return this.$store.state.publicKeeps;
    }
  }
};
</script>

<style>
.card {
  max-width: 576px;
  box-shadow: 5px 5px 2px grey;
}
.counters {
  border: 2px solid black;
}

.btn-lg:visited,
.btn-lg:focus,
.btn-lg:hover {
  box-shadow: 2px 2px 2px black;
  background-color: rgb(194, 3, 194);
}
.btn-lg {
  box-shadow: 2px 2px 2px black;
  background-color: purple;
}
a:hover {
  cursor: pointer;
}
</style>
