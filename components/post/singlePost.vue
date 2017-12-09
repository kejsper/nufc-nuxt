<template>
  <article class="post">
    <h1 class="post-title">{{post.title.rendered}} </h1>

  </article>
</template>

<script>

export default {
  name: 'singlePost',
  data () {
    return {
    }
  },
  props: ['post'],
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

</style>
