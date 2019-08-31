<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import moment from 'moment'

  export default {
    name: 'App',
    created() {
      let ref = db.collection('messages').orderBy('timestamp')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == 'added') {
            let doc = change.doc
            this.$store.commit('addMessage', {
              id: doc.id,
              name: doc.data().name,
              content: doc.data().content,
              timestamp: moment(doc.data().timestamp).format('lll')
            })
          }
        })
      })
    }
  }
</script>

<style>

</style>
<style src='./assets/css/main.css'></style>
