<template>
  <div class="keep card-columns mx-auto">
    <div v-for="keep in keeps" :key="keep.id" class="card mx-auto">
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
          <i class="fa fa-arrow-circle-right" @click="goToKeepDetail(keep.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep",
  mounted() {
    this.$store.dispatch("getPublicKeeps");
  },
  methods: {
    goToKeepDetail(keepId) {
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
}
</style>