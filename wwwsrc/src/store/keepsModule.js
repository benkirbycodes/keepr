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
      let res = await api.get("keeps");
      commit("setResource", { resource: "publicKeeps", data: res.data });
    }
  }
};
