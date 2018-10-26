  <template>
  <div class="container chargebacks-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>About how many chargebacks<br> do you receive per month?</h2>
        </div>
        <div class="input-slider-box">
          <p class="validation-message hide">Enter a valid number</p>
          <input
            type="number"
            class="input-text"
            min="1"
            v-model="scrubVal"
            ref="input"
            @input="isNumber"
            pattern="\d*">
          <Slider
            class="slider-comp"
            :startVal="scrubVal"
            endCharacter="+"
            :minVal="1"
            :maxVal="5000"
            :valOverride="inputVal"
            @on-scrub-val="getRangeVal" />
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'
import Slider from '@/components/shared/slider'

export default {
  name: 'Chargebacks',
  components: {
    Slider
  },
  data () {
    return {
      setNextRoute: {
        set: 'average-ticket',
        showNext: true
      },
      setPreviousRoute: 'sales-method',
      routeProgress: 40,
      scrubVal: 300,
      input: {
        key: 'chargebackCount',
        val: ''
      }
    }
  },
  computed: {
    ...mapState([
      'nextRoute',
      'userInput'
    ]),
    inputVal: function () {
      return parseInt(this.scrubVal)
    }
  },
  methods: {
    // emit value
    getRangeVal: function (val) {
      this.scrubVal = val
      this.checkInputLength()
    },
    isNumber: function (evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode
      this.checkInputLength()
      return charCode > 31 && (charCode < 48 || charCode > 57)
    },
    checkInputLength: function () {
      if (this.$refs.input.value.length === 0) {
        this.$store.dispatch('disableNextButton', true)
      } else {
        this.$store.dispatch('disableNextButton', false)
      }
    },
    formatNumber: function (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  },
  mounted: function () {
    this.scrubVal = this.userInput[this.input.key] !== ''
      ? this.userInput[this.input.key]
      : this.scrubVal
    this.$store.dispatch('updateProgress', this.routeProgress)
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
  },
  beforeDestroy: function () {
    if (this.scrubVal > 5000) {
      this.scrubVal = 5000
    } else if (this.scrubVal < 1) {
      this.scrubVal = 1
    } else if (typeof this.scrubVal !== 'number') {
      this.scrubVal = 1
    }
    this.input.val = parseInt(this.scrubVal)
    this.$store.dispatch('updateUserInput', this.input)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .chargebacks-route {
    .view-headline {
      br {
        display: block;
      }
    }
  }

  .slider-comp {
    margin-top: 45px;
  }

  .input-slider-box {
    margin: 0 auto;
  }

  .validation-message {
    margin-bottom: 10px;
    color: #ff0000;
  }

  @media(min-width: 375px) {

    .input-slider-box {
      width: 300px;
    }

  }

  @media(min-width: 480px) {

    .input-slider-box {
      width: 400px;
    }

  }

  @media(min-width: 768px) {
  }

</style>
