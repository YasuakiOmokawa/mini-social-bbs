var MyButton = {
    data: function() {
        return {
            textlabel: "child"
        };
    },
    template: `
    <button>
      <slot>OK</slot>
    </button>
  `
};

new Vue({
    el: "#app",
    data: function() {
        return {
            textlabel: "parent"
        };
    },
    components: {
        MyButton: MyButton
    }
});