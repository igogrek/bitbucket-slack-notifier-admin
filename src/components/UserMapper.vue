<template>
  <div>
    <div class="card events-card">
      <header class="card-header">
        <p class="card-header-title">
          Events
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-table">
        <div class="content">
          <table class="table is-fullwidth is-striped">
            <tbody>
            <tr v-for="user in usersKeyValues">
              <td>{{user.bitBucketId}}</td>
              <td>{{user.slackId}}</td>
              <td><a class="button is-small is-primary" href="#">Action</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">View All</a>
      </footer>
    </div>
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
          this.users = response.data
        })
    },
    computed: {
      usersKeyValues() {
        const keyValuePairs = [];
        for (const key of Object.keys(this.users)) {
          keyValuePairs.push({bitBucketId: key, slackId: this.users[key]});
        }
        return keyValuePairs;
      }
    }
  }
</script>

<style scoped>
</style>
