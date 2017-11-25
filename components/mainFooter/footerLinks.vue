<template>
  <div class="footer-links">
    <h4 class="nufc-header">blogroll</h4>
    <ul class="links-list">
      <li v-for="link in footerLinks" class="links-item">
        <i class="fa fa-futbol-o" aria-hidden="true"></i>
        {{ link.title.rendered }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'footerLinks',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['footerLinks'])
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .footer-links {
    width: 100%;
    text-align: center;
    padding-bottom: 40px;
  }
  .links-list {
    list-style: none;
    font-family: $nufc-text;
    font-size: 15px;
    color: $nufc-white;
    text-align: left;
  }
  .fa {
    padding-right: 5px;
  }
  .links-item {
    margin: 0 0 10px 15px;
  }

  @media screen and (min-width: 768px) {
    .footer-links {
      width: 50%;
    }
  }

  @media screen and (min-width: 960px) {
    .footer-links {
      width: 33%;
    }
  }
</style>
