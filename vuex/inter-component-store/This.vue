<template>
  <div>
    <p>{{count}}</p>
    <button v-on:click="increment(1)">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      // ストア内のカウンターのステートを返す
      return this.$store.state.count;
    }
  },

  methods: {
    increment(value) {
      // `increment`ミューテーションをコミット
      this.$store.commit("increment", value);
    }
  }
};
</script>