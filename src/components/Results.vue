<template>
  <div class="container fluid results-content">

    <div class="container">

      <div class="row">
        <div class="col-sm-12 top-headline-col">
          <div class="view-headline">
            <h2>You could recover more than <strong>${{ headlineSavings }} a<br> month</strong> in lost revenue!</h2>
            <span class="headline-divider"></span>
          </div>
        </div>
      </div> <!-- .row END -->

      <div class="row">
        <div class="col-sm-8 personalized-calculations-col">
          <div class="app-box-shadow">
            <table>
              <thead>
                <tr>
                  <th colspan="2">
                    <div class="results-headline">YOUR PERSONALIZED CALCULATIONS</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chargebacks per month</td>
                  <td>{{ formatNum(userInput.chargebackCount) }}</td>
                </tr>
                <tr>
                  <td>Average ticket size</td>
                  <td>${{ formatNum(userInput.averageTicket) }}</td>
                </tr>
                <tr>
                  <td>Estimated labor costs</td>
                  <td>${{ formatNum(laborCost) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total cost of chargebacks</td>
                  <td><strong>${{ formatNum(totalCostOfChargebacks) }}</strong> <span class="per-month">/mo</span></td>
                </tr>
              </tfoot>
            </table>
            <!-- <router-link to="/" class="primary-button start-over-button">Start Over</router-link> -->
          </div>
          <div class="app-box-shadow">
            <table>
              <thead>
                <tr>
                  <th colspan="3">
                    <div class="results-headline">ESTIMATED ROI FOR CHARGEBACK MANAGEMENT</div>
                  </th>
                </tr>
                <tr class="table-subhead">
                  <th>&nbsp;</th>
                  <th>CURRENT</th>
                  <th>WITH US</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chargeback win rate</td>
                  <td>{{ userInput.chargebackWinRate }}%</td>
                  <td>{{ midigatorWinRate }}%</td>
                </tr>
                <tr>
                  <td>Monthly recovered revenue</td>
                  <td>${{ formatNum(currentMonthlyRecovered) }}</td>
                  <td>${{ formatNum(midiMonthlyRecovered) }}</td>
                </tr>
                <tr>
                  <td class="labor-cost">
                    Estimated cost of labor
                    <Tooltip
                      class="labor-cost-tooltip"
                      message="See how we <a href='#'
                      target='_blank'>calculate the cost of labor</a>." />
                  </td>
                  <td>${{ formatNum(laborCost) }}</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td class="service-cost">
                    Estimated cost of services
                    <Tooltip
                      class="services-cost-tooltip"
                      message="Based on average market value for chargeback management services" />
                  </td>
                  <td>${{ formatNum(currentCostOfServices) }}</td>
                  <td>${{ formatNum(midiCostOfServices) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Net monthly profit</strong></td>
                  <td><strong>${{ formatNum(currentMonthlyProfit) }}</strong></td>
                  <td><strong>${{ formatNum(midiMonthlyProfit) }}</strong></td>
                </tr>
                <tr>
                  <td><strong>Monthly return on investment</strong></td>
                  <td><strong>{{ formatNum(currentMonthlyROI) }}%</strong></td>
                  <td><strong class="final-estimated-savings">{{ formatNum(midiMonthlyROI) }}%</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="col-sm-4 graph-col">
          <div class="results-headline">BREAKDOWN</div>
          <div class="app-box-shadow">
            <p class="text-center">Monthly Chargeback Revenue Recovery</p>
            <div class="circle-chart">
              <div class="circle-inner">
                <p>Receive a</p>
                <p class="circle-savings"><strong v-html="midiMonthlyROI"></strong><span>%</span></p>
                <p>ROI</p>
              </div>
            </div>
            <div class="line-chart-box clearfix">
              <p class="float-left">Current</p>
              <p class="line-chart-price">${{ formatNum(currentMonthlyRecovered) }} / ${{ formatNum(_chargebackCost) }}</p>
              <div class="line-chart-bg line-chart-current">
                <div class="line-chart-current-progress" :style="currentLineCalc"></div>
              </div>
            </div>
            <div class="line-chart-box clearfix">
              <p class="float-left">With Us</p>
              <p class="line-chart-price"><strong>${{ formatNum(midiMonthlyRecovered) }} / ${{ formatNum(_chargebackCost) }}</strong></p>
              <div class="line-chart-bg line-chart-midigator">
                <div class="line-chart-midigator-progress" :style="midiLineCalc"></div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- .row END -->

    </div> <!-- .container END -->

    <div class="container-fluid">
      <div class="row recovered-revenue-row">
        <div class="col-sm-12 recovered-revenue-bg">&nbsp;</div>
        <div class="col-sm-12">
          <div class="view-headline">
            <h2>Annual Savings With Us</h2>
            <span class="headline-divider"></span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="recovered-revenue-box app-box-shadow current">
            <p class="recovered-number">${{ formatNum(currentAnual) }}</p>
            <p>Current Solution</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="recovered-revenue-box app-box-shadow midigator">
            <p class="recovered-number">${{ formatNum(midiAnual) }}</p>
            <p>With Us</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="recovered-revenue-box app-box-shadow savings">
            <p class="recovered-number recovered-savings">+ ${{ formatNum(yearlySavings) }}</p>
            <p>Increased Annual Savings</p>
          </div>
        </div>
      </div> <!-- .row END -->
    </div>

    <!-- <div class="fluid demo-row-fluid">
      <div class="demo-row-bg">&nbsp;</div>
      <div class="container">
        <div class="row demo-row">
          <div class="col-sm-7">
            <h2>Request a Demo Today!</h2>
            <p>Our team is eager to find out how Midigator can help keep your business protected and profitable. Click the button below to request a free demo!</p>
            <button class="primary-button demo-button">REQUEST A DEMO</button>
          </div>
          <div class="col-sm-5 demo-img-col">
            <img class="midigator-screenshot" src="@/assets/images/midigator-platform.png" alt="Midigator Platform">
            <img class="midigator-savings" src="@/assets/images/midigator-chart.png" alt="Midigator Savings">
          </div>
        </div>
      </div>
    </div> -->

  </div> <!-- .container.fluid END -->

</template>

<script>
import { mapState } from 'vuex'
import Tooltip from '@/components/shared/Tooltip'
// import axios from 'axios'

export default {
  name: 'results',
  components: {Tooltip},
  data () {
    return {
      routeProgress: 100,
      midigatorWinRate: 75
    }
  },
  computed: {
    ...mapState([
      'userInput',
      'sendInput'
    ]),

    /**
     * HEADLINE ==================================================================
     */
    headlineSavings: function () {
      let calc = Math.round(this._chargebackCost * (this.midigatorWinRate / 100))
      return this.formatNum(calc)
    },

    /**
     * PERSONALIZED CALCULATIONS =================================================
     */

    laborCost: function () {
      let laborType = this.userInput.chargebackManagement
      let chargebacks = this.userInput.chargebackCount
      return laborType === 'In-house' ? chargebacks * 10 : 0
    },

    totalCostOfChargebacks: function () {
      return this._chargebackCost + this.laborCost
    },

    /**
     * ESTIMATED ROI =============================================================
     */

    currentMonthlyRecovered: function () {
      return this._chargebackCost * (this.userInput.chargebackWinRate / 100)
    },

    midiMonthlyRecovered: function () {
      return this._chargebackCost * (this._midiWinRate / 100)
    },

    currentCostOfServices: function () {
      return this.userInput.chargebackManagement === 'Third-party'
        ? this.userInput.chargebackCount * 12
        : 0
    },

    midiCostOfServices: function () {
      return this.userInput.chargebackCount * 8
    },

    currentMonthlyProfit: function () {
      return this.currentMonthlyRecovered - this.laborCost - this.currentCostOfServices
    },

    midiMonthlyProfit: function () {
      return this.midiMonthlyRecovered - this.midiCostOfServices
    },

    currentMonthlyROI: function () {
      let costOfInvestment = this.laborCost + this.currentCostOfServices
      let costs = (this.currentMonthlyProfit - costOfInvestment) / costOfInvestment * 100
      return isNaN(costs) ? 0 : costs.toFixed(2)
    },

    midiMonthlyROI: function () {
      let costs = (this.midiMonthlyProfit - this.midiCostOfServices) / this.midiCostOfServices * 100
      return costs.toFixed(2)
    },

    /**
     * MIDIGATOR DIFFERENCE ======================================================
     */
    circleSavings: function () {
      let midiSavings = Math.round(this.midiMonthlyRecovered)
      let userSavings = Math.round(this.currentMonthlyRecovered)
      let calc = ((midiSavings - userSavings) / userSavings * 100).toFixed(2)
      return this.userInput.chargebackWinRate === 0
        ? '<div class="midi-recovered"><span>$</span> ' + this.formatNum(this.midiMonthlyRecovered) + '</div>'
        : calc + '<span>%</span>'
    },

    currentLineCalc: function () {
      let calc = (Math.round(this.currentMonthlyRecovered) / Math.round(this._chargebackCost)) * 100
      let calcString = Math.round(calc).toString()
      return 'width:' + calcString + '%'
    },

    midiLineCalc: function () {
      let calc = (Math.round(this.midiMonthlyRecovered) / Math.round(this._chargebackCost)) * 100
      let calcString = Math.round(calc).toString()
      return 'width:' + calcString + '%'
    },

    /**
     * ANUAL RECOVERED ===========================================================
     */
    currentAnual: function () {
      return this.currentMonthlyProfit * 12
    },

    midiAnual: function () {
      return this.midiMonthlyProfit * 12
    },

    yearlySavings: function () {
      return (Math.round(this.midiMonthlyProfit * 12) - Math.round(this.currentMonthlyProfit * 12))
    },

    /**
     * PRIVATE FUNCTIONS =========================================================
     */

    _chargebackCost: function () {
      return this.userInput.chargebackCount * this.userInput.averageTicket
    },

    _midiWinRate: function () {
      let userWinRate = this.userInput.chargebackWinRate
      return userWinRate >= 75
        ? userWinRate + 5
        : 75
    }
  },

  methods: {
    formatNum: function (num) {
      return Math.round(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') // e.g. $1,000 | $10,000
    },

    winRateAdjust: function () {
      let userWinRate = this.userInput.chargebackWinRate
      this.midigatorWinRate = userWinRate >= this.midigatorWinRate
        ? userWinRate + 5
        : this.midigatorWinRate
    }
  },

  beforeMount: function () {
    this.winRateAdjust()
  },

  mounted: function () {
    this.$store.dispatch('updateProgress', this.routeProgress)
    /* eslint-disable */
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'AW-944877468');
    // gtag('event', 'conversion', {'send_to': 'AW-944877468/njqBCLCFo2cQnN_GwgM'})
    /* eslint-enable */
  },

  created: function () {
    // if (this.sendInput) {
    //   axios.post('https://hooks.zapier.com/hooks/catch/1780841/q4wu0v/', JSON.stringify(this.userInput))
    //     .then(response => {
    //       // JSON responses are automatically parsed.
    //       // this.info = response.data
    //       this.$store.dispatch('httpFlag', false)
    //       // console.log(response.data)
    //     })
    //     .catch(e => {
    //       console.log(this.errors)
    //     })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .results-route {
    .nav-container {
      display: none;
    }
    .main-content {
      margin-bottom: 0;
    }
  }

  .results-content {
    margin-bottom: 0;
  }

  .top-headline-col {
    .view-headline {
      margin-bottom: 75px;
    }
  }

  .per-month {
    font-size: 12px;
  }

  .results-content {
    color: #4A4A4A;

    h2 {
      line-height: 1.2em;
      font-size: 30px;
      font-weight: normal;

      br {
        display: none;
      }

      strong {
        font-weight: bold;
      }
    }

    strong {
      font-weight: 600;
    }

    .app-box-shadow {
      background-color: transparent;
      margin-bottom: 40px;
    }

    table {
      width: 100%;
      text-align: left;

      th {
        padding-top: 15px;
      }

      td {
        padding-top: 30px;
        padding-right: 10px;
        padding-bottom: 30px;
        padding-left: 10px;
        border-top: 1px solid #E6E6E6;
        font-size: 15px;
      }

      tbody tr:first-child {
        td {
          border-top: 0;
        }
      }
    }
  }

  .results-headline {
    font-weight: 600;
    border-bottom: 1px solid $primary-color;
    padding-bottom: 15px;
    letter-spacing: 1px;
    line-height: 1.3em;
    color: #4A4A4A;
  }

  .table-subhead th {
    font-size: 12px;
    font-weight: 600;
    color: #4A4A4A;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 30px !important;
    padding: 30px 0 15px 10px;
  }

  .graph-col {
    .app-box-shadow {
      padding: 20px;
    }

    .results-headline {
      margin-top: 10px;
      margin-bottom: 40px;
    }

    p {
      line-height: 1.3em;
    }
  }

  .start-over-button {
    width: 250px;
    margin: 0 auto
  }

  .headline-divider {
    display: block;
    margin: 0 auto;
    width: 110px;
    height: 25px;
    border-bottom: 2px solid $primary-color;
  }

  .circle-chart {
    display: table;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 5px solid $primary-color;
    margin-top: 25px;
    margin-bottom: 35px;
    margin-right: auto;
    margin-left: auto;
  }

  .circle-inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .circle-savings {
    font-size: 45px;
    color: #4A4A4A;

    span {
      font-size: 32px;
      color: #4a4a4a;
      font-weight: normal;
    }
  }

  .midi-recovered {
    font-size: 36px;
  }

  .line-chart-box {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .line-chart-bg {
    width: 100%;
    height: 30px;
    clear: both;
    background-color: #E6E6E6;
  }

  .line-chart-price {
    float: right;
    margin-bottom: 10px;
  }

  .line-chart-current-progress {
    height: 30px;
    background-color: #81b2d2;
    transition: width 0.5s;
  }

  .line-chart-midigator-progress {
    height: 30px;
    background-color: $primary-color;
    transition: width 0.5s;
  }

  .final-estimated-savings {
    color: $primary-color;
    font-size: 18px;
  }

  .recovered-revenue-row {
    position: relative;
    text-align: center;
    overflow: hidden;
    margin-bottom: 25px;
    padding-bottom: 80px;

    .view-headline {
      margin-bottom: 80px;
    }

    .col-sm-4 {
      position: relative;
    }
  }

  .recovered-revenue-bg {
    display: none;
  }

  .recovered-revenue-box {
    width: 270px;
    margin: 0 auto;
    border-right: 5px solid $primary-color;

    &.app-box-shadow {
      padding-top: 20px;
      padding-right: 15px;
      padding-bottom: 10px;
      padding-left: 15px;

      &.savings {
        margin-bottom: 0;
      }
    }
  }

  .recovered-number {
    font-size: 38px;
    font-weight: bold;
    color: #9B9B9B;
    margin-bottom: 35px;
  }

  .recovered-savings {
    color: #4a4a4a;
  }

  .demo-row-fluid {
    position: relative;
    overflow: hidden;
  }

  .demo-row {
    h2 {
      text-align: left;
      margin-top: 60px;

      &+ p {
        font-size: 20px;
        line-height: 1.5em;
      }
    }
  }

  .demo-button {
    width: 210px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .midigator-savings {
    width: 260px;
    margin-top: -140px;
  }

  .midigator-screenshot {
    padding-left: 50px;
  }

  .labor-cost-tooltip,
  .services-cost-tooltip {
    .tooltip-button {
      width: 15px;
      height: 15px;
    }
    .tooltip-pop {
      width: 280px;
    }
  }

  @media(min-width: 375px) {

    .table-subhead th {
      font-size: 15px;
    }

    .results-content {
      table {
        td {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }

    .recovered-revenue-box {
      width: 300px;
    }

    .recovered-number {
      font-size: 41px;
    }

  }

  @media(min-width: 480px) {

    .results-content {

      table {
        td {
          font-size: 16px;
        }
      }

      .app-box-shadow {
        margin-bottom: 50px;
      }

    }

    .table-subhead th {
      font-size: 16px;
    }

    .final-estimated-savings {
      font-weight: bold;
      font-size: 20px;
    }

  }

  @media(min-width: 600px) {

    .results-content {
      h2 {
        line-height: 1.5em;
      }
    }

    .demo-row {
      h2 {
        &+ p {
          padding-right: 100px;
        }
      }
    }

  }

  @media(min-width: 768px) {

    .results-content {
      h2 {
        font-size: 37px;
      }

      .app-box-shadow {
        background-color: #fff;
        margin-bottom: 100px;
      }
    }

    .graph-col .results-headline {
      margin-top: 30px;
    }

    .personalized-calculations-col {
      padding-right: 7%;
    }

    .app-box-shadow {
      padding: 35px;
    }

    .graph-col .results-headline {
      margin-top: 50px;
    }

    .recovered-revenue-row {
      .view-headline {
        margin-bottom: 165px;
      }
    }

    .recovered-revenue-box {
      width: 225px;

      &.app-box-shadow {
        padding-top: 0;
        padding-right: 15px;
        padding-bottom: 40px;

        &.savings {
          padding-top: 110px;
          margin-top: -110px;
        }

        &.midigator {
          padding-top: 75px;
          margin-top: -75px;
        }

        &.current {
          padding-top: 40px;
          margin-top: -40px;
        }
      }
    }

    .recovered-revenue-bg {
      display: block;
      position: absolute;
      background-color: #f9f9f9;
      width: 100%;
      height: 410px;
      bottom: 0;
      transform: rotate(-5deg);
      margin-bottom: -63px;
    }

    .midigator-savings {
      margin-left: -100px;
    }

    .midigator-screenshot {
      padding-left: 0;
      margin-top: 135px;
    }

  }

  @media(min-width: 768px) and (max-width: 991px) {

    .recovered-number {
      font-size: 30px;
    }

    .circle-chart {
      width: 200px;
      height: 200px;
    }

    .midi-recovered {
      font-size: 30px;
    }

  }

  @media(min-width: 992px) {

    .results-content {
      h2 {
        font-size: 40px;

        br {
          display: block;
        }
      }
    }

    .graph-col .results-headline {
      margin-top: 50px;
    }

    .recovered-revenue-box {
      width: 300px;
    }

    .recovered-number {
      font-size: 43px;
    }

    .circle-chart {
      width: 250px;
      height: 250px;
    }

    .midigator-screenshot {
      margin-top: 70px;
    }

    .circle-savings {
      padding-top: 10px;
      padding-bottom: 10px;
    }

  }

  @media(max-width: 1200px) {
    .labor-cost,
    .service-cost {
      position: relative;
    }

    .results-content {
      .tooltip-container {
        position: absolute;
        left: -25px;
        top: 29px;

        .tooltip-pop {
          left: 40px;
          right: auto;

          .tooltip-message {
            border-left: 5px solid #81b2d2;
            border-right: 0;
          }
        }
      }
    }
  }

  @media(min-width: 1200px) {

    .circle-chart {
      width: 300px;
      height: 300px;
    }

    .recovered-revenue-box {
      &.savings {
        float: left;
      }

      &.current {
        float: right;
      }
    }

    .midigator-screenshot {
      margin-top: 0;
    }

  }

</style>
