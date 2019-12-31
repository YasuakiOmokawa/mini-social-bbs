<template>
  <div class="root">
    <h1 class="header">Rootコンポーネント</h1>
    <p>これはRootコンポーネントです。</p>
    <foo /><!-- Fooコンポーネントの利用。scriptブロックも要注目 -->
    <bar /><!-- Barコンポーネントの利用。scriptブロックも要注目 -->
  </div>
</template>
<script>
import Foo from "./foo";
import Bar from "./bar";
export default {
  components: { Foo, Bar }
};
</script>
<style>
#root {
  border: solid 1px blue;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 200%;
}
p {
  text-decoration: underline;
}
</style>
