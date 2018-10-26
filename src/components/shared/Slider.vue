<template>
  <div class="slider-gator">
    <div class="slide-holder">
      <input
        type="range"
        class="slider"
        ref="slider"
        :min="minVal"
        :max="maxVal"
        v-model="rangeVal"
        @mouseup="mouseUp">
    </div>

    <div class="slider-range clearfix">
      <p class="float-left">{{ currency + minVal + endCharacter }}</p>
      <p class="float-right">{{ currency + this.formatNumber(maxVal) + endCharacter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    startVal: {
      default: 200
    },
    minVal: {
      type: Number,
      default: 1
    },
    maxVal: {
      type: Number,
      default: 500,
      required: true
    },
    valOverride: {
      default: ''
    },
    currency: {
      default: ''
    },
    endCharacter: {
      default: ''
    }
  },
  data () {
    return {
      rangeVal: this.startVal
    }
  },
  watch: {
    rangeVal: function (val) {
      this.$emit('on-scrub-val', val)
    },
    valOverride: function (val) {
      this.rangeVal = val
    }
  },
  methods: {
    formatNumber: function (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    mouseUp: function () {
      this.$emit('test', this.$refs.slider.value)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .slider-gator {
    .slide-holder {
      width: 100%;
    }

    .slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      background: $grey-light;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;

      &:hover {
        opacity: 1;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: $primary-color;
        border: 0;
        cursor: pointer;
      }

      &::-moz-range-track {
        background-color: $grey-light;
      }

      &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0;
        background: $primary-color;
        cursor: pointer;
      }
    }

    .slider-range {
      padding-top: 15px;
      font-size: 14px;
    }
  }

</style>
