  <template>
  <div class="container sales-method-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>What is your primary sales method?</h2>
        </div>
      </div>
    </div> <!-- .row END -->

    <div class="row sales-method-row">
      <div class="col-sm-3">
        <div class="sales-method-box ecommerce" :class="{selected: userChoice(0)}" @click="next(userOptions[0])">
            <img src="@/assets/images/ecommerce.png">
        </div>
        <p>Online</p>
      </div>
      <div class="col-sm-3">
        <div class="sales-method-box phone" :class="{selected: userChoice(1)}" @click="next(userOptions[1])">
            <img src="@/assets/images/phone.png">
        </div>
        <p>By Phone</p>
      </div>
      <div class="col-sm-3">
        <div class="sales-method-box mail-order" :class="{selected: userChoice(2)}" @click="next(userOptions[2])">
          <img src="@/assets/images/mail-order.png">
        </div>
        <p>Mail Order</p>
      </div>
      <div class="col-sm-3 storefront-col">
        <div class="sales-method-box storefront" :class="{selected: userChoice(3)}" @click="next(userOptions[3])">
          <img src="@/assets/images/storefront.png">
        </div>
        <p>In Store</p>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SalesMethod',
  data () {
    return {
      setNextRoute: {
        set: 'chargebacks',
        showNext: false
      },
      setPreviousRoute: 'industry',
      routeProgress: 30,
      input: {
        key: 'salesMethod',
        val: ''
      },
      userOptions: [
        'E-commerce',
        'Phone',
        'Mail Order',
        'Storefront'
      ]
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
    userChoice: function (num) {
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

  .sales-method-box {
    background-color: #fff;
    margin: 0 auto;
    border: 4px solid transparent;
    border-radius: 15px;
    width: 140px;
    height: 130px;
    padding-top: 22px;
    box-shadow: 5px 4px 8px rgba(0,0,0,0.15);

    &.selected {
      border: 4px solid $primary-color;
      cursor: pointer;
    }

    img {
      margin: 0 auto;
      width: 100px;
    }

    &.storefront {
      img {
        width: 115px;
      }
    }

    &.mail-order {
      img {
        width: 85px;
      }
    }

    &.phone {
      img {
        width: 90px;
      }
    }

  }

  .sales-method-row {
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: $headline-color;
      margin-top: 25px;
      margin-bottom: 35px;
    }
  }

  .storefront-col p {
    margin-bottom: 0;
  }

  @media(min-with: 480px) {
  }

  @media(min-width: 768px) {
    .sales-method-row {
      margin-top: 25px;

      p {
        margin-bottom :0;
      }
    }

    .sales-method-box {
      &:hover {
        border: 4px solid #dcdcdc;
        cursor: pointer;
      }
    }
  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
