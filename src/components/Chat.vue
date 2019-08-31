<template>
  <div class="chat container">
    <h2 class="center teal-text">
      Chatter
    </h2>
    <div class="card">
      <div class="card-content">
        <ul
          class="messages"
          v-chat-scroll
        >
          <li
            v-for="message in messages"
            :key="message.id"
          >
            <span class="teal-text">
              {{ message.name }}
            </span>
            <span class="grey-text text-darken-3">
              {{ message.content }}
            </span>
            <span class="grey-text time">
              {{ message.timestamp }}
            </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage
          :name="name"
        ></NewMessage>
      </div>
    </div>
  </div>
</template>

<script>
  import NewMessage from '@/components/NewMessage'
  import db from '@/firebase/init'
  import moment from 'moment'

  export default {
    name: "Chat",
    props: ['name'],
    components: {
      NewMessage
    },
    data() {
      return {
        messages: this.$store.getters.getMessages
      }
    }
  }
</script>

<style>

</style>
