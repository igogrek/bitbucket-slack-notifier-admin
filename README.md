# bitbucket-slack-notifier-admin

#### Web interface for management of the notifier

UI is based on Vue.js and Bulma CSS framework.

Right now it's very basic and main functionality is managing the user
mapping between BitBucket user Ids and Slack channel Ids.

## Usage

1. Open http://BITBUCKET_HOST:9999/#/ to see the UI.
2. Specify your Slack ID in "Slack Id" field on top of the table
(usually now it's first part of the email from invitation,
so inviting `john.doe@mail.com` will create the private Slack channel `john.doe`)
3. Press "Test Slack Id" button to see if Id is correct. 
Button will turn green if so (and you'll get a private message from Slack), red otherwise.
4. Specify your BitBucket Id - look up your profile in BB right corner, Id is located under full name
5. Press "Add" button. New row will be created in red color indicating that data isn't saved yet.
6. Press "Save User Mappings" at the bottom of the table to send mappings to the Notifier
7. After data is saved and turned white - "Test Mapping" button will become available - press it to test resulting mapping
through the Bot itself. If button is green you should receive a message from Bot.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
