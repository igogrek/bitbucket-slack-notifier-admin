<template>
  <div>
    <div class="card">
      <div class="card-table">
        <div class="content">
          <table class="table is-fullwidth is-striped">
            <thead>
            <tr>
              <td>BitBucket Id</td>
              <td>Slack Id</td>
              <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <input class="input is-small" placeholder="BitBucket Id">
              </td>
              <td>
                <input class="input is-small" placeholder="Slack Id">
              </td>
              <td>
                <a class="button is-small is-primary">Test</a>
                <a class="button is-small is-success">Add</a>
              </td>
            </tr>
            <tr v-for="user in users">
              <td>{{user.bitBucketId}}</td>
              <td>{{user.slackId}}</td>
              <td>
                <a class="button is-small is-primary"
                   @click="testUserMapping(user)"
                   v-bind:class="{ 'is-loading': user.loading }">
                  Test
                </a>
                <a class="button is-small is-danger">Remove</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save User Mappings</a>
      </footer>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import testMessage from './test-message.json';

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
          this.users = this.usersToKeyValues(response.data)
        })
    },
    methods: {
      usersToKeyValues(userMap) {
        const keyValuePairs = [];
        for (const key of Object.keys(userMap)) {
          keyValuePairs.push({bitBucketId: key, slackId: userMap[key]});
        }
        return keyValuePairs;
      },
      testUserMapping(user) {
        this.$set(user, 'loading', true);
        axios.post(`/notify`, testMessage)
          .then(response => {
            this.$set(user, 'loading', false);
          })
          .catch(error => {
            this.$set(user, 'loading', false);
          });
      }
    }
  }
</script>

<style scoped>
</style>
