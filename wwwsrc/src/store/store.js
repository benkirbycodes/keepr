import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import keepsModule from "./keepsModule";
import vaultsModule from "./vaultsModule";
import vaultKeepsModule from "./vaultKeepsModule";
import { api } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keepsModule,
    vaultsModule,
    vaultKeepsModule
  },
  state: {
    publicKeeps: [],
    keepsPerVault: [],
    activeKeep: {},
    vaults: [],
    activeVault: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.Authorization = bearer;
      // console.log("SET THE BEARER:", api);
    },
    resetBearer() {
      api.defaults.headers.Authorization = "";
    }
  }
});
