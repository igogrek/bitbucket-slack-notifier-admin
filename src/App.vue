<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="#">
            BitBucket Slack Notifier Admin
          </a>
          <div class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a class="is-active">User Mappings</a></li>
              <li><a>Other</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
    props: {
      source: String
    }
  }
</script>
