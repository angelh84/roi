<template>
  <div id="app" :class="showRouteClass" ref="app">
    <Header />
    <section class="main-content">
      <transition name="fade" mode="out-in">
        <router-view class="view-content" />
      </transition>
      <Navigation />
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import Navigation from '@/components/shared/navigation'

export default {
  name: 'App',
  data () {
    return {
      showRouteClass: this.$route.name + '-route'
    }
  },
  components: {
    Header,
    Footer,
    Navigation
  },
  computed: {
    ...mapState(['userInput'])
  },
  watch: {
    $route (to, from) {
      this.forceHome()
      setTimeout(() => {
        this.showRouteClass = this.$route.name + '-route'
      }, 300)
    }
  },
  methods: {
    resizeFunc: function () {
      let contentHeight = this.$refs.app.offsetHeight
      let windowHeight = window.innerHeight
      let $footer = document.querySelector('.footer')

      if (contentHeight < windowHeight) {
        $footer.classList.add('sticky')
      } else {
        $footer.classList.remove('sticky')
      }
    },
    forceHome: function () {
      if (this.userInput.productType === '' && this.$route.name !== 'product') {
        this.$router.push('/')
      }
    }
  },
  beforeMount: function () {
    this.forceHome()
  },
  updated: function () {
    this.$nextTick(() => {
      this.resizeFunc()
    })
  },
  mounted: function () {
    window.addEventListener('resize', this.resizeFunc, false)
    this.$nextTick(() => {
      this.resizeFunc()
    })
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/reset.scss';
  @import '@/assets/scss/grid.scss';
  @import '@/assets/scss/helpers.scss';
  @import '@/assets/scss/variables.scss';

  html {
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    width: 100%;
    min-height: 100%;
    color: $text-color;
    background: url('./assets/images/background.png') repeat-y 0 0;
    background-size: 1000px;
    overflow-x: hidden;
    line-height: 1.5em;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3 {
    font-family: inherit;
    font-weight: 600;
    color: $headline-color
  }

  h2 {
    text-align: center;
    font-size: 21px;
    margin-bottom: 35px;
    line-height: 1.5em;
  }

  a {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
  }

  p,
  li,
  a,
  button,
  span {
    font-family: inherit;
    color: $text-color;
  }

  button[disabled] {
    &:hover {
      background-color: $primary-color;
    }
  }

  #app {
    float: left;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .25s;
  }

  .fade-enter,
  .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .input-text {
    margin: 0 auto;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #e6e6e6;

    &:focus {
      border: 1px solid #afd35b;
    }

    &[disabled] {
      background-color: #f3f3f3;
      color: #b5b5b5;

      &:hover {
        cursor: not-allowed;
      }
    }
  }

  .main-content {
    margin-top: 47px;
    margin-bottom: 80px;
  }

  .primary-button {
    display: block;
    background-color: #AFD25C;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.20s;
    padding-top: 25px;
    padding-bottom: 25px;

    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      background-color: $primary-offset-bright;
    }
  }

  .view-content {
    padding-top: 42px;
    margin-bottom: 50px;
  }

  .view-headline {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      display: inline;
      vertical-align: middle;

      br {
        display: none;
      }
    }
  }

  .required {
    text-align: left;
    position: relative;

    input {
      border: 1px solid $validation-color;
      &:focus {
        border: 1px solid $validation-color;
      }
    }

    &::before {
      content: 'Required field';
      color: $validation-color;
      font-size: 12px;
      position: absolute;
      top: -4px;
      line-height: 1em;
    }
  }

  /* Media Queries */

  @media(min-width: 480px) {

    .main-content {
      margin-top: 85px;
    }

    h2 {
      font-size: 24px;
    }

    .view-headline {
      h2 br {
        display: block;
      }
    }
  }

  @media(min-width: 768px) {

    .view-content {
      padding-top: 67px;
      margin-bottom: 100px;
    }

    .app-box-shadow {
      box-shadow: 5px 5px 10px rgba(0,0,0,0.15);
    }

  }

  @media(min-width: 992px) {

    body {
      background-size: 1440px;
    }

  }

</style>
