<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-list">
        <li v-for="item in navbarItems" class="navbar-item">
          <a :href="item.url" class="navbar-link">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'Vuex'

export default {
  name: 'topNavbar',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['navbarItems'])
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .navbar {
    background-color: $nufc-blue;
    width: 100%;
  }
  .navbar-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: flex-start;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  .navbar-item {
    display: inline-block;
    padding: 8px 30px;
    border-left: 1px dotted #2982bd;
    &:last-child {
      border-right: 1px dotted #2982bd;
    }
    &:hover {
      background-color: #2982bd;
    }
  }
  .navbar-link {
    font-family: $nufc-text;
    font-weight: 400;
    font-size: 14px;
    color: white;
    text-decoration: none;
  }

</style>
