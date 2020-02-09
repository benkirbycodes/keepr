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
      let res = await api.get("vaults");
      commit("setResource", { resource: "vaults", data: res.data });
    }
  }
};
