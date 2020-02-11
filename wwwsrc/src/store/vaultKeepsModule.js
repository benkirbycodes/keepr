import Axios from "axios";
import { api } from "./api";

export default {
  actions: {
    async getKeepsByVaultId({ commit, dispatch }, vaultId) {
      try {
        let res = await api.get("vaultkeeps/" + vaultId + "/keeps");
        commit("setResource", { resource: "keepsPerVault", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async createVaultKeep({ commit, dispatch }, vaultKeep) {
      try {
        let res = await api.post("vaultkeeps", vaultKeep);
        dispatch("getKeepsByVaultId", res.data.vaultId);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteVaultKeep({ commit, dispatch }, { vaultId, keepId }) {
      try {
        let res = await api.delete(
          "vaultkeeps/" + vaultId + "/keeps/" + keepId
        );
        dispatch("getKeepsByVaultId", vaultId);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
