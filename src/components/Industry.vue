<template>
  <div class="container industry-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>What industry do you<br> sell in?</h2>
          <Tooltip message="Don't see your industry here? Click Other ..."></Tooltip>
        </div>
        <div class="dropdown-container">
          <Dropdown
            placeholder="Choose your industry"
            :items="dropdownItems"
            @choice-text="getText"
            :setState="setState"/>
          <input
            type="text"
            placeholder="Enter your industry name"
            class="input-text"
            v-if="showIndustryInput"
            v-model="inputVal">
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'
import Tooltip from '@/components/shared/Tooltip'
import Dropdown from '@/components/shared/Dropdown'

export default {
  name: 'Home',
  components: {
    Tooltip,
    Dropdown
  },
  data () {
    return {
      setNextRoute: {
        set: 'sales-method',
        showNext: false,
        disableNextButton: true
      },
      setPreviousRoute: 'product',
      dropdownItems: [
        'Automotive',
        'Car Rental',
        'College or University',
        'Credit Repair',
        'Cruise',
        'Dating',
        'Debt Management',
        'Education',
        'Event Ticketing',
        'Furniture',
        'Gaming/Gambling',
        'Hospitality',
        'Multi-Level Marketing',
        'Vapes or E-cigarettes',
        'Other'
      ],
      showIndustryInput: false,
      inputVal: '',
      routeProgress: 20,
      setState: 'industry'
    }
  },
  watch: {
    // whenever input value changes, this function will run
    inputVal: function (val, oldVal) {
      if (val.length > 0) {
        this.$store.dispatch('disableNextButton', false)
        this.$store.dispatch('updateUserInput', {
          key: this.setState,
          val: this.inputVal
        })
      } else {
        this.$store.dispatch('disableNextButton', true)
      }
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'userInput'
    ])
  },
  methods: {
    // emit method
    getText: function (text) {
      if (text.toLowerCase() === 'other') {
        this.showIndustryInput = true
        this.$store.dispatch('toggleNextButton', true)
      } else {
        setTimeout(() => {
          this.showIndustryInput = false
          this.$store.dispatch('toggleNextButton', false)
          this.$router.push(this.nextRoute)
        }, 300)
      }
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

  .industry-content {
    .dropdown {
      margin: 0 auto;
    }
    .input-text {
      margin-top: 35px;
    }
  }

  .industry-next-button-box {
    margin: 35px auto 0;
  }

  @media(min-width: 375px) {

    .industry-content {
      h2 br {
        display: none;
      }

      .input-text {
        width: 300px;
      }
    }

    .industry-next-button-box {
      width: 300px;
    }

  }

  @media(min-width: 480px) {

    .industry-content {
      .input-text {
        width: 400px;
      }
    }

    .industry-next-button-box {
      width: 400px;
    }

  }

</style>
