import { Getters, Mutations, Actions, Module } from "vuex-smart-module";

class CounterState {
  public count: number = 1;
}

class CounterGetters extends Getters<CounterState> {
  public get double(): number {
    return this.state.count * 2;
  }

  public get triple(): number {
    return this.getters.double + this.state.count;
  }
}

class CounterMutations extends Mutations<CounterState> {
  public increment(payload: number) {
    this.state.count += payload;
  }
}

class CounterActions extends Actions<
  CounterState,
  CounterGetters,
  CounterMutations,
  CounterActions
> {
  public incrementAsync(payload: { amount: number; interval: number }) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.commit("increment", payload.amount);
      }, payload.interval);
    });
  }
}

export const counter = new Module({
  state: CounterState,
  getters: CounterGetters,
  mutations: CounterMutations,
  actions: CounterActions
});
