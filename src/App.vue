<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../">
            Bulma Admin
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="admin.html">
              Home
            </a>
            <a class="navbar-item" href="admin.html">
              Orders
            </a>
            <a class="navbar-item" href="admin.html">
              Payments
            </a>
            <a class="navbar-item" href="admin.html">
              Exceptions
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
