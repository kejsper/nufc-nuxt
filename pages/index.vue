<template>
  <main class="main">
    <div class="header-wrapper">
      <h3 class="nufc-header">
        latest news
      </h3>
    </div>
    <div class="posts-wrapper">
      <post-tile v-for="post in posts" :post="post" :key="post.id"></post-tile>
    </div>

  </main>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'Vuex'

import postTile from '~/components/posts/postTile'

export default {
  components: {
    postTile
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
  },
  async fetch ({ store }) {
    const config = {
      headers: {
        'Cache-Control': 'no-store, no-cache'
      }
    }
    const posts = await axios.get('http://www.nufcblog.com/wp-json/nufcblog/v1/posts', config)
    store.commit('SET_POSTS', {posts: posts.data})
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/_variables.scss";

  .main {
    width: 100%;
    box-sizing: border-box;
    margin: 30px 0 30px 0;
    border: 1px solid $nufc-dark;
  }
  .header-wrapper {
    padding: 10px 0 5px 10px;
    background-color: $nufc-dark;
    text-transform: uppercase;
    background: repeating-linear-gradient(90deg,#231f20,#231f20 50px,#3d2a2f 50px,#3d2a2f 100px);
  }
  .posts-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
