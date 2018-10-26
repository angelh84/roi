  <template>
  <div class="container third-party-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="view-headline">
          <h2>Who is the third party?</h2>
        </div>
        <div class="input-box">
          <p class="validation-message hide">Enter a valid number</p>

          <input
            type="text"
            class="input-text"
            placeholder="enter name"
            :disabled="noIdeaCheck"
            v-model="inputVal" >

          <div class="checkmark-holder" @click="checkClick()">
            <i class="material-icons checkmark" :class="{'checked': noIdeaCheck}">
                {{ noIdeaCheck ? 'check_box' : 'check_box_outline_blank' }}
            </i>
            {{ noInputText }}
          </div>
        </div>
      </div>
    </div> <!-- .row END -->
  </div> <!-- .container END -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ThirdParty',
  data () {
    return {
      setNextRoute: {
        set: 'chargeback-wins-third-party',
        showNext: true,
        disableNextButton: true
      },
      setPreviousRoute: 'chargeback-management',
      routeProgress: 65,
      noIdeaCheck: false,
      inputVal: '',
      input: {
        key: 'thirdParty',
        val: ''
      },
      noInputText: 'I have no idea!'
    }
  },
  watch: {
    inputVal: function (val, oldVal) {
      if (val) {
        this.$store.dispatch('disableNextButton', false)
      } else if (!val && !this.noIdeaCheck) {
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
    checkClick: function () {
      this.noIdeaCheck = !this.noIdeaCheck
      if (this.noIdeaCheck) {
        this.inputVal = this.noInputText
        this.$store.dispatch('disableNextButton', false)
      } else {
        this.inputVal = ''
      }
      if (!this.noIdeaCheck && !this.inputVal) {
        this.$store.dispatch('disableNextButton', true)
      }
    }
  },
  mounted: function () {
    this.inputVal = this.userInput[this.input.key] !== ''
      ? this.userInput[this.input.key]
      : this.inputVal
    if (this.inputVal === this.noInputText) {
      this.noIdeaCheck = true
    }
    this.$store.dispatch('updateProgress', this.routeProgress)
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
  },
  beforeDestroy: function () {
    this.input.val = this.inputVal
    this.$store.dispatch('updateUserInput', this.input)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .third-party-route {
    .view-headline {
      br {
        display: block;
      }
    }
  }

  .input-box {
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

    .input-box {
      width: 300px;
    }

  }

  @media(min-width: 480px) {

    .input-box {
      width: 400px;
    }

  }

  @media(min-width: 768px) {

    .third-party-route {
      .view-headline {
        br {
          display: none;
        }
      }
    }

  }

</style>
