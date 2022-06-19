import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists') //localStorageに保存したリストを取得します

const store = new Vuex.Store({  //ストアインスタンスを取得し、main.jsでインポートできるようにexport defaultしています
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
  },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
  },
  },
  getters: {
  },
})

store.subscribe((mutation, state) => {  //データの状態を更新後にlocalStorageへデータの状態を保存しています
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
   //保存するときは任意のキーを設定して、データを文字列型に変換して保存します
   //データを文字列型にするにはJSON.stringify(保存するデータ)でJSON形式に変換します
})

export default store

/** 解説
 * - actionsは第一引数にcontextというストアインスタンスのメソッドやプロパティを呼び出せるオブジェクトを受け取ることができます
 * - mutationsは第一引数でstate、第二引数ではコミット時に受け取る引数payloadを指定できます
 *   mutationsの重要なルールとして、同期的でなければならないというのがあります
 * - mutationsでリストのデータの状態を更新できるように、stateにリストを定義します
 * - localStorage : Web Storageというクライアント側（ブラウザ）にデータを保存できる機能の1つです
 *                  リロードしても、初期化されないように、ストアのstateへ保存時に、localStorageにも同じ状態を保存できるように実装
 *                  localStorageに保存されたデータは永続的に有効となります
 * - subscribe: ストアのインスタンスメソッドで、全てのmutationの後に呼ばれます
 *              第一引数にmutationインスタンス、第二引数にmutation後のデータの状態を受け取ります

 */

/** プロセス
 * - ListAdd.vueで呼び出すよう定義したactionsを使って、mutationsをコミット
 * - 「フォームボタンが押下されたら、リストを作成する」仕組みを実装しよう（store/index.js）
 * - ストアのデータの状態をlocalStorageに保存しよう
 */
