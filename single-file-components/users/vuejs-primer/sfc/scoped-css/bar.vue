<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
    <foo /><!-- Fooコンポーネントの利用。scriptブロックも要注目 -->
  </div>
</template>
<script>
import Foo from "./foo";
export default {
  // FooコンポーネントをBarコンポーネントに登録
  components: { Foo }
};
</script>
// グローバルスタイルを定義しないこと。定義すると親スタイルに波及する
<style scoped>
.bar {
  border: solid 1px red;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 125%;
}
</style>
