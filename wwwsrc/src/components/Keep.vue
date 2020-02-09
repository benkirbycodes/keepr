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

        <div class="btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" class="btn-sm btn-secondary">Keep</button>
          <button type="button" class="btn-sm btn-secondary">Share</button>
          <button type="button" class="btn-sm btn-secondary">View</button>
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