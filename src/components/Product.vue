<template>
  <div class="container product-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>What type of products<br> do you sell?</h2>
        </div>
      </div>
    </div> <!-- .row END -->

    <div class="row product-type-container">
      <div class="col-sm-4">
        <div class="product-box digital-goods-box" :class="{selected: setUserInput(0)}" @click="next(userOptions[0])">
          <img src="@/assets/images/digital-goods.png">
          <p>Digital Goods</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="product-box physical-goods-box" :class="{selected: setUserInput(1)}" @click="next(userOptions[1])">
          <img src="@/assets/images/physical-goods.png">
          <p>Physical Goods</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="product-box services-box" :class="{selected: setUserInput(2)}" @click="next(userOptions[2])">
          <img class="services-icon" src="@/assets/images/services.png">
          <p>Services</p>
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
      setNextRoute: {
        set: 'industry',
        showNext: false
      },
      setPreviousRoute: '/',
      routeProgress: 10,
      input: {
        key: 'productType',
        val: ''
      },
      userOptions: ['Digital Goods', 'Physical Goods', 'Services']
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'userInput'
    ])
  },
  methods: {
    next: function (choice) {
      this.input.val = choice
      this.$store.dispatch('updateUserInput', this.input)
      this.$router.push(this.nextRoute)
    },
    setUserInput: function (num) {
      return this.userInput[this.input.key] === this.userOptions[num]
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

  .product-content {
    h2 br {
      display: block;
    }
  }

  .product-type-container {
    p {
      text-align: center;
    }
  }

  .product-box {
    width: 235px;
    margin: 0 auto 25px;
    padding-top: 25px;
    padding-bottom: 25px;
    border: 3px solid transparent;
    border-radius: 5px;

    &.selected {
      border: 3px solid $primary-color;
      cursor: pointer;
    }

    img {
      margin: 0 auto;
      width: 150px;
      margin-bottom: 35px;

      &.services-icon {
        width: 113px;
      }
    }

    p {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .services-icon {
    width: 110px;
  }

  .services-box {
    margin-bottom: 0;
  }

  @media(min-width: 480px) {
      .product-content {
        h2 br {
          display: none;
        }
      }
  }

  @media(min-width: 768px) {

    .digital-goods-box {
      float: right;
    }

    .services-box {
      float: left;
    }

    .product-box {
      margin-bottom: 0;

      &:hover {
        border: 3px solid #dcdcdc;
        cursor: pointer;
      }
    }

  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
