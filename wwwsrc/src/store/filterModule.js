export default {
  actions: {
    addFilter({ commit, dispatch }, filter) {
      let filters = this.state.filters;
      filters.push(filter);
      commit("setResource", { resource: "filters", data: filters });
      commit("concatFilters");
      if (this.state.filters.length > 0) {
        dispatch("getFilteredKeeps");
      } else {
        dispatch("getPublicKeeps");
      }
    },
    removeFilter({ commit, dispatch }, filter) {
      let filters = this.state.filters;
      let filterToRemove = filters.indexOf(filter);
      filters.splice(filterToRemove, 1);
      commit("setResource", { resource: "filters", data: filters });
      commit("concatFilters");
      if (this.state.filters.length > 0) {
        dispatch("getFilteredKeeps");
      } else {
        dispatch("getPublicKeeps");
      }
    },
    removeAllFilters({ commit, dispatch }) {
      commit("setResource", { resource: "filters", data: [] });
      dispatch("getPublicKeeps");
    }
  }
};
