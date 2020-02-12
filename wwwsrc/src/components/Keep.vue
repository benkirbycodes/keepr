<template>
  <div class="keep card-columns mx-auto">
    <div v-for="keep in keeps" :key="keep.id" class="card mx-auto">
      <a class="img-link" @click="goToKeepDetail(keep.id)">
        <img :src="keep.img" class="card-img-top" alt="..." />
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ keep.name }}</h5>
        <p class="card-text">{{ keep.description }}</p>
        <div class="counters p-2 d-flex rounded justify-content-between">
          <p class="m-0">Keeps: {{ keep.keeps }}</p>
          <!-- <p class="m-0">Shares: {{ keep.shares }}</p> -->
          <p class="m-0">Views: {{ keep.views }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep",
  props: ["showPrivate"],
  data() {
    return {};
  },
  mounted() {
    if (this.$props.showPrivate) {
      this.$store.dispatch("getAllKeeps");
    } else {
      this.$store.dispatch("getPublicKeeps");
    }
  },
  methods: {
    goToKeepDetail(keepId) {
      this.$store.state.activeKeep = {};
      this.$router.push({ name: "keep-detail", params: { id: keepId } });
    }
  },
  computed: {
    keeps() {
      if (this.$props.showPrivate) {
        return this.$store.state.allKeeps;
      } else return this.$store.state.publicKeeps;
    }
  },
  components: {}
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
.img-link:hover {
  filter: brightness(75%);
}
</style>
