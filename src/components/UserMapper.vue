<template>
  <div>
    <v-data-table
      v-bind:headers="headers"
      :items="usersKeyValues"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.bitBucketId }}</td>
        <td>{{ props.item.slackId }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'UserMapper',
    data() {
      return {
        headers: [
          {text: 'Bitbucket Account ID', value: 'bitBucketId'},
          {text: 'Slack Channel ID', value: 'slackId'},
        ],
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
