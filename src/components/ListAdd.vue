<template>
  <form class="addlist" @submit.prevent="addList">
    <input v-model="title"
          type="text"
          class="text-input"
          placeholder="Add new list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
  }
}
</script>

<!-- 解説

- Submitイベント時にaddListメソッドをハンドルしています
- @ : v-onの省略記法
- .prevent : Vueのイベント修飾詞であり、サブミット時にリロードされるのを防ぎます
- v-model : "パラメーター"を定義することで、dataプロパティとバインドさせます
            v-onとv-bindの2つの機能を持ち合わせています。
            inputやselect、textareaなどのフォーム要素に対して使うことができます
- this.$store.dispatch('アクション名') : actionsを実行できます
                                      第二引数にオブジェクト型でdataプロパティの"パラメーター"を渡します
 -->

 <!--プロセス
- フォームボタンが押下されたら、actionsが呼ばれるように実装
- バインドさせるtitleもdataプロパティに定義
- addListメソッドをmethodsプロパティに定義して、store/index.jsで定義したactionsを呼び出す

  -->
