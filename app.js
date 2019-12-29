var items = [{
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 301,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 100,
        quantity: 0
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function(value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },

    // データから、Vueインスタンスのプロパティを作成できる(記述の簡便化が理由？)
    computed: {
        totalPrice: function() {
            return this.items.reduce(function(sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function() {
            return Math.floor(this.totalPrice * 1.08)
        },

        // 1000円以上から購入可能にする
        canBuy: function() {
            return this.totalPrice >= 1000
        },
        errorMessageClass: function() {
            // canBuyが偽のときに赤く表示する
            return {
                error: !this.canBuy
            }
        },
        errorMessageStyle: function() {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    },
    methods: {
        doBuy: function() {
            // 本来はここでサーバと通信を行う
            alert(this.totalPriceWithTax + '円のお買上げ！')
            this.items.forEach(function(item) {
                item.quantity = 0
            })
        }
    }
})
window.vm = vm