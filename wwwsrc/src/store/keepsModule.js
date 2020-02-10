import Axios from "axios";

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

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
    async editKeep({ commit, dispatch }, update) {
      try {
        let res = await api.put("keeps/" + update);
        dispatch("getPublicKeeps");
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
