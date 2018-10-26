  <template>
  <div class="container crm-content">
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
          <button type="button" class="crm-button shopify" :class="{selected: userChoice(0)}" @click="next(userOptions[0])">
            <img src="@/assets/images/shopify.png" alt="Shopify">
          </button>
          <button type="button" class="crm-button konnektive" :class="{selected: userChoice(1)}" @click="next(userOptions[1])">
            <img src="@/assets/images/konnektive.png" alt="Konnektive">
          </button>
          <button type="button" class="crm-button limelight" :class="{selected: userChoice(2)}" @click="next(userOptions[2])">
            <img src="@/assets/images/limelight.png" alt="LimeLight">
          </button>
          <button type="button" class="crm-button orange-crm" :class="{selected: userChoice(3)}" @click="next(userOptions[3])">
            <img src="@/assets/images/orange-crm.png" alt="Orange CRM">
          </button>
          <button type="button" class="crm-button woocommerce" :class="{selected: userChoice(4)}" @click="next(userOptions[4])">
            <img src="@/assets/images/woocommerce.png" alt="Woo Commerce">
          </button>
          <button type="button" class="crm-button magento" :class="{selected: userChoice(5)}" @click="next(userOptions[5])">
            <img src="@/assets/images/magento.png" alt="Magento">
          </button>
          <button type="button" class="crm-button other" ref="other" @click="otherClick">
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
      routeProgress: 70,
      userOptions: [
        'Shopify',
        'Konnektive',
        'Limelight',
        'Orange CRM',
        'Woo Commerce',
        'Magento',
        'Other'
      ],
      input: {
        key: 'crm',
        val: ''
      }
    }
  },
  computed: {
    ...mapState(['nextRoute', 'userInput'])
  },
  methods: {
    next: function (choice) {
      this.input.val = choice
      this.$router.push(this.nextRoute)
    },
    userChoice: function (num) {
      return this.userInput[this.input.key] === this.userOptions[num]
    },
    otherClick: function () {
      this.input.val = ''
      this.$router.push('crm-other')
    }
  },
  mounted: function () {
    let chargebackManagementType = this.userInput.chargebackManagement

    if (!document.querySelector('.selected') && this.userInput.crm !== '') {
      this.$refs.other.classList.add('selected')
    }

    if (chargebackManagementType === 'In-house') {
      this.setPreviousRoute = 'chargeback-wins-in-house'
    } else if (chargebackManagementType === 'Third-party') {
      this.setPreviousRoute = 'chargeback-wins-third-party'
    }

    this.$store.dispatch('updateProgress', this.routeProgress)
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
  },
  beforeDestroy: function () {
    this.$store.dispatch('updateUserInput', this.input)
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

    &.selected {
      border: 4px solid $primary-color;
      cursor: pointer;
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
    .crm-button {
      &:hover {
        outline: none;
        border: 4px solid #dcdcdc;
        cursor: pointer;
      }
    }
  }

</style>
