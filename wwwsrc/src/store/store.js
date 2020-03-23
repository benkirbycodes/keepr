import Vue from "vue";
import Vuex from "vuex";
import keepsModule from "./keepsModule";
import vaultsModule from "./vaultsModule";
import vaultKeepsModule from "./vaultKeepsModule";
import filterModule from "./filterModule";
import { api } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keepsModule,
    vaultsModule,
    vaultKeepsModule,
    filterModule
  },
  state: {
    publicKeeps: [],
    allKeeps: [],
    keepsPerVault: [],
    activeKeep: {},
    vaults: [],
    activeVault: {},
    filters: [],
    filterString: ""
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    concatFilters(state) {
      let str = state.filters.join("&").toLowerCase();
      state.filterString = str;
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.Authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.Authorization = "";
    }
  }
});
