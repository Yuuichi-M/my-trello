<template>
<!-- ここにHTMLを書きます -->
<div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list-add/>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'

export default {
  components: {
    ListAdd
  },
}
</script>

<!-- 解説

- export default : このコンポーネントを他のコンポーネントからimportして使用できるようになります


-->

<!-- プロセス

- カードの総数表示
- ListAddコンポーネント呼び出し

-->
