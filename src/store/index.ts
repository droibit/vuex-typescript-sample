import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-smart-module";
import { counter } from "./module/counter";

Vue.use(Vuex);

export default createStore(counter, {
  strict: process.env.NODE_ENV !== "production"
});
