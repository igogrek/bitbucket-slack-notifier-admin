<template>
  <div>
    <span v-for="user of users">
      {{user}}
    </span>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'UserMapper',
    data() {
      return {
        users: []
      }
    },
    created() {
      axios.get(`/users`)
        .then(response => {
          console.log(response.data)
          this.users = response.data
        })
    },
  }
</script>

<style scoped>
</style>
