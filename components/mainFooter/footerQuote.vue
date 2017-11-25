<template>
  <section class="footer-quote">
    <div class="quote-image"></div>
    <div class="quote-text">
      <h4 class="nufc-header">football club</h4>
      <p class="quote-content">
        It’s the noise, the passion, the feeling of belonging, the pride in your city.
        It’s a small boy clambering up stadium steps for the very first time, gripping his father’s hand,
        gawping at that hallowed stretch of turf beneath him and, without being able
        to do a thing about it, falling in love.
      </p>
      <p class="quote-author">
        Sir Bobby Robson
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'footerQuote',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .footer-quote {
    width: 100%;
  }
  .quote-image {
    width: 300px;
    height: 300px;
    background-image: url('~/static/logos/nufclogo.png');
    background-size: contain;
    margin: 0 auto;
  }
  .quote-text {
    margin-top: 50px;
    text-align: center;
  }
  .quote-content {
    font-family: $nufc-text;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    color: #bbbdbf;
    margin: 20px 10px;
  }
  .quote-author {
    font-family: $nufc-text;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    color: $nufc-gold;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    .footer-quote {
      width: 50%;
    }
  }

  @media screen and (min-width: 960px) {
    .footer-quote {
      width: 33%;
    }
  }

  @media screen and (min-width: 1200px) {
    .quote-image {
      width: 350px;
      height: 350px;
    }
  }

</style>
