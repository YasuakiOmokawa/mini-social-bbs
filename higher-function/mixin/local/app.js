var Sharable = {
    data: function() {
        return {
            _isProcessing: false
        };
    },
    created: function() {
        console.log("Sharableミックスインのフックが呼ばれました");
    },
    methods: {
        share: function() {
            if (this._isProcessing) {
                return;
            }
            if (!window.confirm("シェアしますか？")) {
                return;
            }
            this._isProcessing = true;
            // 実際はここでSNSのSDKのAPIを呼び出す
            setTimeout(() => {
                window.alert("シェアしました");
                this._isProcessing = false;
            }, 300);
        }
    }
};

var IconShareButton = {
    mixins: [Sharable],
    created: function() {
        console.log("IcanSharableButtonのフックが呼ばれました");
    },
    template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `
};

var TextShareButton = {
    methods: {
        share: function() {
            // メソッド名が衝突したときはここが呼ばれる
            window.alert("コンポーネントからシェアされました");
        }
    },
    mixins: [Sharable],
    created: function() {
        console.log("TextShareButtonのフックが呼ばれました");
    },
    template: `
    <button @click="share">シェアする</button>
  `
};

new Vue({
    el: "#app",
    components: {
        IconShareButton,
        TextShareButton
    }
});