<template>
  <header class="hello">
    <top-navbar/>
    <top-logo/>
  </header>
</template>

<script>
import topNavbar from './mainHeader/topNavbar'
import topLogo from './mainHeader/topLogo'
import axios from 'axios'

export default {
  name: 'mainHeader',
  components: {
    topNavbar,
    topLogo
  },
  async asyncData ({params}) {
    const { list } = await axios.get('http://www.nufcblog.com/wp-json/wp-api-menus/v2/menus/415')
    return {
      navbar: list
    }
  },
  fetch ({store}) {
    return store.dispatch('LOAD_MAIN_NAVBAR')
  },
  methods: {
    // ...mapActions(['LOAD_MAIN_NAVBAR'])
  },
  created: function () {
    // this.LOAD_MAIN_NAVBAR()
  }
}
</script>
