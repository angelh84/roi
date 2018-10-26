<template>
  <div class="container nav-container" :class="{show: showNav}">
    <div class="row">
      <div class="col-sm-12">
        <button type="button" class="nav-previous-button" @click="goRoute(routeHistory)">
          <i class="material-icons back-arrow">arrow_back</i>Previous
        </button>
        <button
          type="button"
          class="primary-button nav-next-button"
          @click="goRoute(nextRoute)"
          v-if="showNextButton"
          :disabled="nextButtonDisable">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  data () {
    return {
      showNav: true
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'routeHistory',
      'showNextButton',
      'nextButtonDisable'
    ])
  },
  methods: {
    goRoute (route) {
      this.$router.push(route)
    }
  },
  watch: {
    $route (to, from) {
      this.showNav = !this.showNav
      setTimeout(() => {
        this.showNav = !this.showNav
      }, 250)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .nav-previous-button {
    font-size: 20px;
    color: $primary-color;
    background-color: transparent;

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }

  .back-arrow {
    font-weight: bold;
    padding-right: 10px;
    vertical-align: middle;
    margin-bottom: 3px;
  }

  .nav-next-button {
    float: right;
    width: 110px;
  }

  .nav-container {
    opacity: 0;
    transition: all 0.25s
  }

  .nav-container.show {
    opacity: 1;
  }

  @media (min-width: 375px) {
    .nav-next-button {
      width: 150px;
    }
  }

</style>
