<template>
  <div class="container calculating-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="calculating-wrap">
          <div class="view-headline">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h2>Just one moment, we’re calculating your ROI...</h2>
          </div>
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'calculating',
  data () {
    return {
      routeProgress: 90
    }
  },
  computed: {
    ...mapState([
      'progress'
    ])
  },
  methods: {
    routeToResults: function () {
      this.getResults = setTimeout(() => {
        this.$router.push('results')
      }, 3000)
    }
  },
  mounted: function () {
    this.$store.dispatch('updateProgress', this.routeProgress)
    this.routeToResults()
  },
  destroyed: function () {
    clearTimeout(this.getResults)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .calculating-route {
    .nav-container {
      display: none;
    }
    .footer {
      position: fixed;
      bottom: 0;
    }
  }

  .lds-roller {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 64px;
    height: 64px;
    margin-bottom: 25px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: $primary-color;
    margin: -3px 0 0 -3px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 50px;
    left: 50px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 54px;
    left: 45px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 57px;
    left: 39px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 58px;
    left: 32px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 57px;
    left: 25px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 54px;
    left: 19px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 50px;
    left: 14px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 45px;
    left: 10px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media(min-width: 375px) {
  }

  @media(min-width: 480px) {
  }

  @media(min-width: 600px) {
  }

  @media(min-width: 768px) {
  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
