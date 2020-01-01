import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        // examplesモジュールを定義
        example: {
            namespaced: true, // このフラグ有無でどう変わるか？をチェック

            state: {
                value: 'Example'
            },

            getters: {
                upper: state => {
                    return state.value.toUpperCase()
                }
            },

            mutations: {
                update(state) {
                    state.value = 'Updated'
                }
            },

            actions: {
                update(ctx) {
                    ctx.commit('update')
                }
            }
        }
    }
})