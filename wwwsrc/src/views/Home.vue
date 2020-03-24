<template>
  <div class="home container-fluid bkgrnd">
    <div class="row p-3">
      <div class="col-12 bg-dark rounded p-2">
        <form @submit.prevent="addFilter">
          <label class="text-white" for="search">
            Search
            <input
              name="search"
              placeholder="Search..."
              v-model="filterTerm"
              type="text"
              class="rounded"
              required
            />
          </label>
          <button class="ml-1 btn-sm search-btn btn-outline-light text-white" type="submit">Submit</button>
        </form>
        <div v-if="filters.length" class="rounded filters">
          <span v-for="(filter,i) in filters" :key="i" class="m-1 badge badge-pill badge-light">
            {{filter}}
            <i class="fa fa-times" @click="removeFilter(filter)"></i>
          </span>
          <i class="fa fa-times text-white text-right" @click="removeAllFilters()"></i>
        </div>
      </div>
      <div class="col-12">
        <h1 class="text-center">Keepr</h1>
      </div>
      <Keep :showPrivate="showPrivate" />
    </div>
  </div>
</template>

<script>
import Keep from "@/components/Keep.vue";

export default {
  name: "home",
  mounted() {},
  data() {
    return {
      showPrivate: false,
      filterTerm: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    filters() {
      return this.$store.state.filters;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    addFilter() {
      let filter = this.filterTerm;
      if (!/^[a-z0-9\s]+$/gi.test(filter)) {
        alert("No special characters!");
      } else this.$store.dispatch("addFilter", filter);
      this.filterTerm = "";
    },
    removeFilter(filter) {
      this.$store.dispatch("removeFilter", filter);
      this.$store.dispatch("getFilteredKeeps");
    },
    removeAllFilters() {
      this.$store.dispatch("removeAllFilters");
    },
    getKeeps() {
      this.$store.dispatch("getFilteredKeeps");
    }
  },
  components: {
    Keep
  }
};
</script>

<style >
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
.filters {
  border: 1px solid white;
}
.search-btn {
  background-color: purple;
}
.search-btn:hover {
  background-color: rgb(228, 0, 228);
}
</style>
