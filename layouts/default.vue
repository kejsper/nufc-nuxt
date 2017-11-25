<template>
  <div>
    <main-header/>
    <div class="container main-content">
      <nuxt/>
      <div class="sidebar"></div>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import mainHeader from '~/components/mainHeader'
import mainFooter from '~/components/mainFooter'

export default {
  components: {
    mainHeader,
    mainFooter
  }

}
</script>


<style lang="scss" scoped>
  @import "assets/scss/_variables.scss";

  .main-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .sidebar {
    display: none;
  }

  @media screen and (min-width: 960px) {
    .sidebar {
      display: block;
      width: 200px;
      height: 10px;
    }
  }

  @media screen and (min-width: 960px) {
    .sidebar {
      width: 250px;
    }
  }
</style>
