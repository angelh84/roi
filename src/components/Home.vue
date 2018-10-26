<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-7 col-lg-6">
        <div class="home-left-content">
          <h1>Calculate Your ROI</h1>
          <p>How would our outcome compare to your current chargeback management efforts? Enter a few numbers into our ROI calculator and see for yourself!</p>
          <button type="button" class="primary-button start-button" @click="next">START</button>
        </div>
      </div>
      <div class="col-sm-5 col-lg-6">
        <div class="home-right-content clearfix">
          <img src="@/assets/images/calculate.png" class="calculator-img">
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      setNextRoute: {
        set: 'product'
      },
      setPreviousRoute: '/',
      routeProgress: 0
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'userInput'
    ])
  },
  methods: {
    next: function () {
      this.$router.push(this.nextRoute)
    }
  },
  mounted: function () {
    this.$store.dispatch('updateProgress', this.routeProgress)
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/assets/scss/variables.scss';

  .home-route {
    .nav-container {
      display: none;
    }

    .progress-container {
      opacity: 0;
      transition: none;
    }
  }

  h1 {
    font-size: 33px;
    margin-bottom: 50px;
    letter-spacing: -2px;
  }

  .home-left-content {
    margin-bottom: 50px;
    text-align: center;

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 1.5em;
      margin-bottom: 45px;
    }
  }

  .start-button {
    width: 149px;
    margin: 0 auto;
  }

  .calculator-img {
    width: 510px;
    margin: 0 auto;
  }

  @media(min-width: 375px) {

    h1 {
      font-size: 40px;
    }

  }

  @media(min-width: 615px) {

    .home-left-content {
      p {
        padding-left: 60px;
        padding-right: 60px;
      }
    }

  }

  @media(min-width: 768px) {

    .home-left-content {
      padding-top: 0;
      padding-right: 50px;
      margin-top: 42px;

      p {
        padding-left: 0;
        padding-right: 0;
        font-size: 20px;
      }
    }

    .calculator-img {
      float: right;
    }
  }

  @media(min-width: 992px) {

    .home-left-content {
      margin-top: 100px;
    }

    .home-right-content {
      margin-top: 68px;
    }

    h1 {
      font-size: 52px;
    }

  }

  @media(min-width: 1200px) {

    .home-left-content {
        margin-top: 155px;
    }

    .home-right-content {
      margin-top: 70px;
    }

  }

  @media(max-height: 700px) and (min-width: 768px) {

    .home-left-content {
      margin-top: 85px;
    }

    .home-right-content {
      margin-top: 0;
    }

  }

</style>
