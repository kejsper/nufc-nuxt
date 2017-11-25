<template>
  <div class="footer-charity">
    <section class="socials">
      <h4 class="nufc-header">social media</h4>
      <a href="" class="social-icon fb">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="" class="social-icon tw">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="" class="social-icon gplus">
        <i class="fa fa-google-plus" aria-hidden="true"></i>
      </a>
      <a href="" class="social-icon rss">
        <i class="fa fa-rss" aria-hidden="true"></i>
      </a>
    </section>
    <section class="charity">
      <h4 class="nufc-header">we support</h4>
      <a href="http://www.nufoundation.org.uk/" class="charity-link" target="_blank"><img src="~static/logos/nufcfoundation2.jpg" class="charity-image" alt="Newcastle United Foundation"></a>
      <a href="http://sirbobbyrobsonfoundation.org.uk/" class="charity-link" target="_blank"><img src="~static/logos/sirbobbyfoundation.png" class="charity-image" alt="Sir Bobby Robson Foundation"></a>
      <a href="http://www.alanshearerfoundation.org.uk/" class="charity-link" target="_blank"><img src="~static/logos/alanshearerfoundation2.jpg" class="charity-image" alt="Alan Shearer Foundation"></a>
    </section>
  </div>
</template>

<script>

export default {
  name: 'footerCharity',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .footer-charity {
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }

  .social-icon {
    display: inline-block;
    width: 33px;
    height: 43px;
    font-size: 35px;
    margin-top: 20px;
    margin-right: 5px;
    padding: 8px 16px;
    &:hover {
      background-color: $nufc-white;
    }
    &:hover i {
      color: $nufc-dark;
    }
    i {
      color: $nufc-white;
    }
  }
  .fb {
    background-color: #3b5998;
  }
  .tw {
    background-color: #1da1f2;
  }
  .gplus {
    background-color: #dd4b39;
  }
  .rss {
    background-color: #f26522;
  }

  .charity {
    margin-top: 40px;
    margin-bottom: 80px;
  }

  .charity-link {
    display: block;
    width: 240px;
    margin: 15px auto 10px auto;
    padding: 4px;
    border-radius: 4px;
    background-color: $nufc-white;
  }

  .charity-image {
    width: 240px;
    height: auto;
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    .footer-charity {
      width: 50%;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 960px) {
    .footer-charity {
      width: 33%;
    }
  }

</style>
