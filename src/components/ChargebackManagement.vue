<template>
  <div class="container chargeback-management-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>How are you currently managing chargebacks?</h2>
        </div>
      </div>
    </div> <!-- .row END -->

    <div class="row chargeback-management-row">
      <div class="col-sm-4">
        <div class="chargeback-management-box in-house" :class="{selected: userChoice(0)}" @click="next('chargeback-wins-in-house', userOptions[0])">
            <img src="@/assets/images/in-house.png">
        </div>
        <p>We manage<br> entirely in-house.</p>
      </div>
      <div class="col-sm-4">
        <div class="chargeback-management-box third-party" :class="{selected: userChoice(1)}" @click="next('third-party', userOptions[1])">
            <img src="@/assets/images/third-party.png">
        </div>
        <p>We receive assistance<br> from a third-party<br> service provider.</p>
      </div>
      <div class="col-sm-4">
        <div class="chargeback-management-box not-sure" :class="{selected: userChoice(2)}" @click="next('crm', userOptions[2])">
          <img src="@/assets/images/not-sure.png">
        </div>
        <p>Not doing anything.</p>
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
        set: '',
        showNext: false
      },
      setPreviousRoute: 'average-ticket',
      routeProgress: 60,
      input: {
        key: 'chargebackManagement',
        val: ''
      },
      userOptions: [
        'In-house',
        'Third-party',
        'Nothing'
      ]
    }
  },
  computed: {
    ...mapState(['nextRoute', 'userInput'])
  },
  methods: {
    next: function (route, choice) {
      if (choice === this.userOptions[2]) {
        this.$store.dispatch('updateUserInput', {key: 'chargebackWinRate', val: 0})
      }
      this.input.val = choice
      this.$store.dispatch('updateUserInput', this.input)
      this.$router.push(route)
    },
    userChoice: function (num) {
      return this.userInput[this.input.key] === this.userOptions[num]
    }
  },
  mounted: function () {
    this.$store.dispatch('updateProgress', this.routeProgress)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .chargeback-management-box {
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

    &.third-party {
      img {
        width: 110px;
      }
    }

    &.in-house {
      img {
        width: 94px;
      }
    }

    &.not-sure {
      img {
        width: 94px;
      }
    }

  }

  .chargeback-management-row {
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: $headline-color;
      margin-top: 25px;
      margin-bottom: 35px;
      line-height: 1.5em;
    }
  }

  .storefront-col p {
    margin-bottom: 0;
  }

  @media(min-with: 480px) {
  }

  @media(min-width: 768px) {
    .chargeback-management-row {
      margin-top: 25px;

      p {
        margin-bottom :0;
      }
    }

    .chargeback-management-box {
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
