  <template>
  <div class="container chargebacks-in-house-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>What percentage of chargebacks do you win?</h2>
        </div>
        <div class="input-slider-box">
          <p class="validation-message hide">Enter a valid number</p>

          <input
            type="number"
            class="input-text"
            :disabled="noIdeaCheck"
            min="0"
            v-model="scrubVal"
            ref="input"
            @input="isNumber"
            pattern="\d*">

          <Slider
            class="slider-comp"
            endCharacter="%"
            :startVal="scrubVal"
            :minVal="0"
            :maxVal="80"
            :valOverride="inputVal"
            @on-scrub-val="getRangeVal" />

          <div class="checkmark-holder" @click="checkClick" ref="check">
            <i class="material-icons checkmark" :class="{'checked': noIdeaCheck}">
                {{ noIdeaCheck ? 'check_box' : 'check_box_outline_blank' }}
            </i>
            I have no idea!
          </div>
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
        set: 'crm',
        showNext: true
      },
      setPreviousRoute: 'chargeback-management',
      routeProgress: 65,
      scrubVal: 30,
      input: {
        key: 'chargebackWinRate',
        val: ''
      },
      noIdeaCheck: false
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
      if (val !== 30) {
        this.noIdeaCheck = false
      }
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
    },
    checkClick: function (e) {
      this.noIdeaCheck = !this.noIdeaCheck
      this.scrubVal = 30
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
    if (this.scrubVal > 80) {
      this.scrubVal = 80
    } else if (this.scrubVal < 0) {
      this.scrubVal = 0
    } else if (typeof this.scrubVal !== 'number') {
      this.scrubVal = 0
    }
    this.input.val = parseInt(this.scrubVal)
    this.$store.dispatch('updateUserInput', this.input)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

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

  .checkmark-holder {
    margin-top: 60px;
    text-align: center;
    font-size: 20px;
    color: $headline-color;
    width: 230px;
    margin: 60px auto 0;

    &:hover {
      cursor: pointer;
    }

    .checkmark {
      margin-right: 5px;
      margin-top: -3px;
      vertical-align: middle;
      transition: all 0.20s;

      &.checked {
        color: $primary-color;
      }
    }
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

    .chargeback-wins-route {
      .view-headline {
        br {
          display: none;
        }
      }
    }

  }

</style>
