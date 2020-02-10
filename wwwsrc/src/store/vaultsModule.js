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
    async getVaults({ commit, dispatch }) {
      try {
        let res = await api.get("vaults");
        commit("setResource", { resource: "vaults", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getVaultById({ commit, dispatch }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId);
        commit("setResource", { resource: "activeVault", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async createVault({ commit, dispatch }, vault) {
      try {
        let res = await api.post("vaults", vault);
        dispatch("getVaults");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteVault({ commit, dispatch }, vaultId) {
      try {
        let res = await api.delete("vaults" + vaultId);
        dispatch("getVaults");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
