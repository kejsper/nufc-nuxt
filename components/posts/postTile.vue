<template>
  <article class="article">
    <!-- <router-link> -->
      <div class="post-img" :style="{backgroundImage: imageUrl (post)}"></div>
    <!-- </router-link> -->
    <h5 class="post-title">{{post.post_title}}</h5>
    <p class="post-muted">{{date(post)}} - {{post.comment_count}} comments</p>
  </article>
</template>

<script>

export default {
  name: 'postTile',
  data () {
    return {
    }
  },
  props: ['post'],
  computed: {
  },
  methods: {
    imageUrl (post) {
      if (post.image) {
        return 'url(' + post.image + ')'
      }
    },
    date (post) {
      const myDate = new Date(post.date)
      return myDate
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .article {
    width: 100%;
    padding: 30px 10px 0 10px;
    box-sizing: border-box;
  }

  .post-img {
    height: 250px;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }
  .post-title {
    font-family: $nufc-text;
    font-size: 18px;
    color: $nufc-black;
    margin: 10px 0 5px 0;
  }

  .post-muted {
    font-family: $nufc-text-alt;
    font-size: 13px;
    color: #636c72;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .article {
      width: 45%;
      padding: 40px 10px 0px 10px;
      box-sizing: border-box;
    }
  }

</style>
