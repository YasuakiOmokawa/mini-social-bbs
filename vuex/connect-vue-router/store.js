// ルーターとストア、ステートの同期
import Vue from 'vue'
import VueRouter from 'vue-router' // vue-routerをインポートする
import Vuex from 'vuex'

// vuex-router-syncのsync関数をインポート
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(Vuex)

// ルーターを生成
const router = new VueRouter({
    routes: [
        // ... ルーティング定義
    ]
})

// ストアを生成
const store = new Vuex.Store({
    // ... ストアの定義
})

// ルーターとストアを同期
sync(store, router)

// store.state.route以下にルーティングのデータが入る
console.log(store.state.route)

// 商品のリストをステートとして保持するモジュール
export default {
    state: {
        // 商品リスト
        products: [
            { id: 1, name: "Apple" },
            { id: 2, name: "Orange" },
            { id: 3, name: "Banana" }
        ],

        // 商品の検索キーワード
        keyword: '',

        // 商品の検索結果
        result: []
    },

    actions: {
        search({ state, commit, dispatch }) {
            // キーワードにマッチした商品を表示する
            const result = state.products.filter(product => {
                return product.name.includes(state.keyword)
            })

            if (result.length === 0) {
                // 結果がないときはエラーを表示する
                dispatch('showError', 'キーワードにマッチする商品がありませんでした')
            } else {
                // 結果がある場合はステートに反映させる
                commit('setSearchResult', result)

                // ページ遷移も行う
                router.push('/search')
            }
        }
    },

    mutations: {
        // 検索結果をステートにセット
        setSearchResult(state, result) {
            state.result = result
        }
    }
}