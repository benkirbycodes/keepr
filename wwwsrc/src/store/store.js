import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";
import keepsModule from "./keepsModule";
import vaultsModule from "./vaultsModule";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    keepsModule,
    vaultsModule
  },
  state: {
    publicKeeps: [],
    vaults: []
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    }
  }
});
