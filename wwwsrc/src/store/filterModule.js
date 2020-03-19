export default {
  actions: {
    addFilter({ commit, dispatch }, filter) {
      commit("addResource", { resource: "filters", data: filter });
    },
    removeFilter({ commit, dispatch }, filter) {
      let filters = this.state.filters;
      let filterToRemove = filters.indexOf(filter);
      filters.splice(filterToRemove, 1);
      commit("setResource", { resource: "filters", data: filters });
    }
  }
};
