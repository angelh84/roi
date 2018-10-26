  <template>
  <div class="container processing-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>What CRM or shopping cart platform are you<br> currently using to manage your orders?</h2>
        </div>
      </div>
    </div> <!-- .row END -->

    <div class="row">
      <div class="col-sm-12">
        <div class="crm-options-wrap">
          <button type="button" class="crm-button shopify" @click="next">
            <img src="@/assets/images/shopify.png" alt="Shopify">
          </button>
          <button type="button" class="crm-button konnektive" @click="next">
            <img src="@/assets/images/konnektive.png" alt="Konnektive">
          </button>
          <button type="button" class="crm-button limelight" @click="next">
            <img src="@/assets/images/limelight.png" alt="LimeLight">
          </button>
          <button type="button" class="crm-button orange-crm" @click="next">
            <img src="@/assets/images/orange-crm.png" alt="Orange CRM">
          </button>
          <button type="button" class="crm-button woocommerce" @click="next">
            <img src="@/assets/images/woocommerce.png" alt="Woo Commerce">
          </button>
          <button type="button" class="crm-button magento" @click="next">
            <img src="@/assets/images/magento.png" alt="Magento">
          </button>
          <button type="button" class="crm-button other" @click="next('crm-other')">
            <img src="@/assets/images/question.png" alt="Other">
          </button>
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'crm',
  data () {
    return {
      setNextRoute: {
        set: 'contact',
        showNext: false
      },
      setPreviousRoute: 'chargeback-management',
      routeProgress: 70
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'progress'
    ])
  },
  methods: {
    next: function (route) {
      route === 'crm-other'
        ? this.$router.push(route)
        : this.$router.push(this.nextRoute)
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

  .crm-content {
    .view-headline {
      br {
        display: none;
      }
    }
  }

  .crm-options-wrap {
    text-align: center;
    margin: 0 auto;
  }

  .crm-button {
    display: inline-block;
    width: 110px;
    height: 110px;
    margin: 9px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    border: 4px solid transparent;

    &:hover,
    &:focus {
      outline: none;
      border: 4px solid $primary-color;
    }

    &.shopify img {
      width: 60px;
    }

    &.orange-crm img {
      width: 50px;
    }

    &.other img {
      width: 50px;
    }

    img {
      width: 70px;
      margin: 0 auto;
    }
  }

  @media(min-width: 375px) {

    .crm-options-wrap {
      width: 300px;
    }

    .crm-button {
      margin: 15px;
    }

  }

  @media(min-width: 480px) {
  }

  @media(min-width: 600px) {
    .crm-content {
      .view-headline {
        br {
          display: block;
        }
      }
    }

    .crm-options-wrap {
      width: 575px;
    }
  }

  @media(min-width: 768px) {
  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
