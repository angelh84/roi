<template>
  <div class="tooltip-container">

    <button
      type="button"
      class="tooltip-button"
      v-doc-click="hide"
      @click="toggleShow">
        {{ icon }}
    </button>

    <div class="tooltip-pop" :class="{ show: showPop }">
      <p class="tooltip-message" v-html="message"></p>
    </div>

  </div> <!-- .container END -->
</template>

<script>
import DocClick from '@/directives/docClick'

export default {
  name: 'Tooltip',
  data () {
    return {
      icon: '?',
      showPop: false
    }
  },
  props: {
    message: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    toggleShow () {
      this.showPop = !this.showPop
    },
    hide () {
      this.showPop = false
    }
  },
  directives: {
    DocClick: DocClick
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .tooltip-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
    text-align: left;
  }

  .tooltip-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    color: #fff;
    padding: 0;
    text-align: center;
    box-shadow: 0 1px 5px rgba(0,0,0,0.15);

    &:hover,
    &:focus {
      outline: none;
      background-color: #81b2d2;
      box-shadow: none;
    }
  }

  .tooltip-pop {
    opacity: 0;
    display: table;
    position: absolute;
    top: -30px;
    right: 30px;
    z-index: 100;
    width: 300px;
    height: 80px;
    background-color: #f8f8f8;
    transition: opacity 0.25s;
  }

  .tooltip-pop.show {
    opacity: 1;
  }

  .tooltip-message {
    display: table-cell;
    vertical-align: middle;
    border-right: 5px solid #81b2d2;
    font-size: 12px;
    line-height: 1.3em;
    padding-left: 30px;
    padding-right: 15px;

    a {
      text-decoration: underline;
      color: #81b2d2;
    }
  }

  @media(min-width: 480px) {

    .tooltip-container {
      padding-left: 15px;
    }

  }

  @media(min-width: 768px) {
    .tooltip-pop {
      width: 390px;
    }
  }

  @media(min-width: 1200px) {
    .tooltip-pop {
      left: 45px;
    }
    .tooltip-message {
      border-left: 5px solid #81b2d2;
      border-right: 0;
    }
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
