// action.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10
    },

    mutations: {
        increment(state) {
            state.count = state.count + 1;
        }
    },
    actions: {
        incrementAction(ctx) {
            // `increment`ミューテーションを実行する
            ctx.commit("increment");
        }
    }
});

// store.dispatchで呼び出す
console.log(store.state.count);
store.dispatch("incrementAction");
console.log(store.state.count); // countは+1されてるかい？