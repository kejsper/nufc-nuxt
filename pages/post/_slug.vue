<template>
  <section class="single-post">
    <single-post :post="post[0]"/>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

import singlePost from '~/components/post/singlePost'

export default {
  components: {
    singlePost
  },
  computed: {
    ...mapGetters(['post'])
  },
  methods: {
  },
  async fetch ({ store, params }) {
    // const config = {
    //   headers: {
    //     'Cache-Control': 'no-store, no-cache'
    //   }
    // }
    const post = await axios.get('http://www.nufcblog.com/wp-json/wp/v2/posts?slug=' + params.slug)
    store.commit('SET_POST', {post: post.data})
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/_variables.scss";

</style>
