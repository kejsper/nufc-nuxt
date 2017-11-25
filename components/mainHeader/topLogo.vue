<template>
  <div class="top-wrapper" :style="{backgroundImage: randomImage}">
    <div class="top-container">
      <div class="container logo">
        <div class="logo-image_container">
          <img src="/logos/nufclogo.png" class="logo-image">
        </div>
        <div class="logo-text">
          <h2 class="logo-subheader">Ed Harrison's</h2>
          <h1 class="logo-header">The Newcastle United Blog</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topLogo',
  data () {
    return {

    }
  },
  computed: {
    randomImage () {
      return 'url(/background/' + Math.floor((Math.random() * 4) + 1) + '.jpg)'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .top-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 150px;
    background-position: 50% 12%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .top-container {
    background-color: $nufc-dark;
    height: 100%;
    width: 100%;
  }

  .logo {
    display: flex;
    flex-direction: row;
  }

  .logo-image_container {
    display: none;
  }

  .logo-image {
    height: 110px;
    width: auto;
  }
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
  }
  .logo-subheader {
    font-family: $nufc-ed;
    font-size: 32px;
    color: $nufc-white;
    font-weight: 400;
    margin: 0;
    line-height: 48px;
  }
  .logo-header {
    font-family: $nufc-header;
    font-size: 34px;
    color: $nufc-white;
    letter-spacing: 4px;
    font-weight: 700;
    margin: 0;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
  }


  @media screen and (min-width: 1200px) {
    .top-wrapper {
      height: 500px;
    }
    .top-container {
      height: 120px;
    }
    .logo-image_container {
      display: block;
      height: 100%;
      padding: 5px 0;
    }
    .logo-text {
      padding-left: 20px;
      padding-top: 5px;
      height: 120px;
      align-items: flex-start;
    }
    .logo-subheader {
      font-size: 38px;
    }
    .logo-header {
      font-size: 54px;
    }
  }

  @media screen and (min-width: 1200px) and (max-height: 768px) {
    .top-wrapper {
      height: 325px;
    }
  }

</style>
