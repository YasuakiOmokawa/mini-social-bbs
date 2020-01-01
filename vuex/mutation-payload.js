// mutation-payload.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10
    },

    // mutationsプションでミューテーションを定義する
    mutations: {
        // ペイロード内のamountを使ってステートを更新
        increment(state, payload) {
            state.count = state.count + payload.amount;
        }
    }
});

// store.commitでミューテーションを呼び出す
console.log(store.state.count);
store.commit("increment", { amount: 5 }); // 第二引数にペイロードを渡す
console.log(store.state.count); // countは+1されてるかい？