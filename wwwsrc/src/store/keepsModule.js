import { api } from "./api";

export default {
  actions: {
    async getPublicKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps");
        commit("setResource", { resource: "publicKeeps", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getFilteredKeeps({ commit, dispatch }) {
      let filter = this.state.filterString;
      try {
        let res = await api.get("keeps/filter/" + filter);
        commit("setResource", { resource: "publicKeeps", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getAllKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps/private");
        commit("setResource", { resource: "allKeeps", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getKeepById({ commit, dispatch }, keepId) {
      try {
        let res = await api.get("keeps/" + keepId);
        commit("setResource", { resource: "activeKeep", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async createKeep({ commit, dispatch }, keep) {
      try {
        let res = await api.post("keeps", keep);
        dispatch("getPublicKeeps");
      } catch (error) {
        console.error(error);
      }
    },
    async editKeep({ commit, dispatch }, updatedKeep) {
      try {
        let res = await api.put("keeps/" + updatedKeep.id, updatedKeep);
        dispatch("getKeepById", updatedKeep.id);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteKeep({ commit, dispatch }, keepId) {
      try {
        let res = await api.delete("keeps/" + keepId);
        dispatch("getPublicKeeps");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
