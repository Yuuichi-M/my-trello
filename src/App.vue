<template>
  <div id="app">
    <board />
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<!--解説

- export default : コンポーネントを他のコンポーネントからimportして使用できるようになります
- import <コンポーネント> from <コンポーネントのパス> : インポートするコンポーネントを指定


-->

<!--実装プロセス

- Boardコンポーネントを呼び出し
-

-->
