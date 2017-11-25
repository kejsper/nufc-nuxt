<template>
  <footer class="footer">
    <div class="container footer-wrapper">
      <footer-quote></footer-quote>
      <footer-charity></footer-charity>
      <footer-links></footer-links>
    </div>
    <div class="footer-copyrights">
      <h5 class="footer-copyrights__header">Copyrights {{ currentYear }} - The Newcastle United Blog</h5>
    </div>
  </footer>
</template>

<script>
// import { mapActions } from 'vuex'

import footerQuote from './mainFooter/footerQuote'
import footerCharity from './mainFooter/footerCharity'
import footerLinks from './mainFooter/footerLinks'

export default {
  name: 'mainFooter',
  components: {
    footerQuote,
    footerCharity,
    footerLinks
  },
  data () {
    return {

    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .footer {
    background-color: $nufc-dark;
    padding-top: 70px;
  }
  .footer-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .footer-copyrights {
    width: 100%;
    background-color: $nufc-light;
    padding: 15px 0;
    text-align: center;
  }
  .footer-copyrights__header {
    margin: 0;
    font-family: $headers;
    font-size: 18px;
    font-weight: 400;
    color: $nufc-white;
  }
</style>
