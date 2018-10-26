  <template>
  <div class="container contact-content">
    <div class="row">
      <div class="col-sm-12">
        <div class="contact-wrap app-box-shadow">
          <div class="view-headline">
            <h2><strong>Share your contact information</strong> and we’ll<br> email you a copy of the results.</h2>
            <p>(We’re calculating your personalized ROI estimate right now<br> and will display it on the next screen!)</p>
          </div>
          <div class="form-wrap">
            <div class="row">
              <div class="col-sm-6">
                <input type="text" class="input-text" ref="first" placeholder="First Name" required>
              </div>
              <div class="col-sm-6">
                <input type="text" class="input-text" ref="last" placeholder="Last Name" required>
              </div>
              <div class="col-sm-12">
                <input type="text" class="input-text" ref="company" placeholder="Company" required>
              </div>
              <div class="col-sm-12">
                <input type="email" class="input-text" ref="email" placeholder="Email" required>
              </div>
              <div class="col-sm-12">
                <button type="button" class="primary-button calculate-button" @click="next">CALCULATE MY ROI</button>
              </div>
            </div>
          </div>
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
        set: 'calculating',
        showNext: false
      },
      setPreviousRoute: 'crm',
      routeProgress: 80
    }
  },
  computed: {
    ...mapState(['nextRoute', 'userInput'])
  },
  methods: {
    next: function () {
      for (let key in this.$refs) {
        this.validation(key)
      }
      if (!document.querySelector('.required')) {
        for (let key in this.$refs) {
          this.userInput.contactInfo[key] = this.$refs[key].value
        }
        this.$router.push(this.nextRoute)
      }
    },
    validation: function (ref) {
      if (!this.$refs[ref].value) {
        this.$refs[ref].parentElement.classList.add('required')
      } else {
        this.$refs[ref].parentElement.classList.remove('required')
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

  .contact-wrap {
    margin: 0 auto;
    text-align: center;
  }

  .calculate-button {
    margin: 15px auto 0;
    padding-left: 30px;
    padding-right: 30px;
  }

  .contact-content {
    .view-headline {
      h2 {
        font-weight: normal;
        line-height: 1.2em;
        font-size: 25px;

        strong {
          font-weight: 600;
        }
      }

      p {
        margin-top: 30px;
        line-height: 1.5em;
        font-size: 12px;
      }

      br {
        display: none;
      }
    }
  }

  .form-wrap {
    .row {
      padding-left: 0;
      padding-right: 0;

      & > div {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }

  @media(min-width: 414px) {
    .contact-content {
      .view-headline {
        h2 {
          font-size: 30px;
        }
      }
    }
  }

  @media(min-width: 480px) {

    .form-wrap {
      .row {
        padding-left: 20px;
        padding-right: 20px;

        & > div {
          padding: 10px;
        }
      }
    }

    .contact-content {
      .view-headline {
        p {
          font-size: 14px;
        }
      }
    }

  }

  @media(min-width: 600px) {
  }

  @media(min-width: 768px) {

    .contact-wrap {
      width: 660px;
      margin-top: -35px;
      padding-top: 35px;
      padding-bottom: 35px;
      background-color: #fff;
    }

    .contact-content {
      .view-headline {
        br {
          display: block;
        }
      }
    }
  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
