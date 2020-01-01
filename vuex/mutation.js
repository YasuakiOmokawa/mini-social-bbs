// mutation.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10
    },

    // mutationsプションでミューテーションを定義する
    mutations: {
        // `increment`ミューテーションを定義
        increment(state) {
            state.count = state.count + 1;
        }
    }
});

// store.commitでミューテーションを呼び出す
console.log(store.state.count);
store.commit("increment"); // incrementミューテーションを呼び出す
console.log(store.state.count); // countは+1されてるかい？