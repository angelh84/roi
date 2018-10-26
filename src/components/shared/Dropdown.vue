<template>
  <div class="dropdown-gator" v-doc-click="dropGatorHide">

    <div class="placeholder clearfix" @click="dropGatorToggle">
      <p>{{ dropText }}</p>
      <button
        type="button"
        class="primary-button dropdown-show-button">
          <i class="material-icons">expand_more</i>
      </button>
    </div>

    <div ref="listHolder" class="list-holder">
      <ul ref="list">
        <li v-for="item in items" :key="item" @click="dropGatorUpdate(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DocClick from '@/directives/docClick'

export default {
  name: 'Dropdown',
  props: ['placeholder', 'items', 'setState'],
  data () {
    return {
      showStatus: false,
      dropText: this.placeholder
    }
  },
  computed: {
    ...mapState([
      'userInput'
    ])
  },
  methods: {
    // ------------ INIT -------------
    dropGatorInit: function () {
      const list = this.$refs.list
      const listHolder = this.$refs.listHolder
      const listHeight = list.offsetHeight.toString()

      this.dropText = this.userInput[this.setState] === ''
        ? this.dropText
        : this.userInput[this.setState]
      list.style.marginTop = -listHeight + 'px'
      listHolder.style.height = listHeight + 'px'
      listHolder.classList.add('hide')
    },

    // ------------ HIDE -------------
    dropGatorHide: function () {
      if (this.showStatus === true) {
        const list = this.$refs.list
        const listHolder = this.$refs.listHolder
        const listHeight = list.offsetHeight.toString()

        list.style.marginTop = -listHeight + 'px'
        listHolder.style.height = listHeight + 'px'

        setTimeout(() => {
          list.scrollTop = 0
          listHolder.classList.add('hide')
          this.showStatus = false
        }, 300)
      }
    },

    // ------------ SHOW -------------
    dropGatorShow: function () {
      const list = this.$refs.list
      this.$refs.listHolder.classList.remove('hide')
      setTimeout(() => {
        list.removeAttribute('style')
        list.style.opacity = '1'
        this.showStatus = true
      }, 50)
    },

    // ----------- TOGGLE ------------
    dropGatorToggle: function () {
      this.showStatus ? this.dropGatorHide() : this.dropGatorShow()
    },

    // ------------ UPDATE -------------
    dropGatorUpdate: function (item) {
      this.dropText = item
      this.userInput[this.setState] = item
      this.$emit('choice-text', item)
      this.dropGatorHide()
    }
  },
  directives: {
    DocClick: DocClick
  },
  mounted () {
    this.dropGatorInit()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .dropdown-gator {
    position: relative;
    z-index: 10;
    margin: 0 auto;

    .placeholder {
      position: relative;
      z-index: 11;
      background-color: #fff;
      color: #9b9b9b;
      font-size: 20px;
      font-weight: 600;

      &:hover,
      &:focus {
        cursor: pointer;

        .dropdown-show-button{
          outline: none;
          background-color: $primary-offset-bright;
        }
      }

      p {
        width: 100%;
        padding-right: 50px;
        height: 50px;
        line-height: 48px;
        text-align: center;
        border: 1px solid #e6e6e6;
      }
    }

    .list-holder {
      position: absolute;
      overflow: hidden;
      z-index: 9;
      width: 100%;
      margin-bottom: 25px;
    }

    ul {
      position: absolute;
      z-index: 9;
      opacity: 0;
      width: 100%;
      max-height: 230px;
      transition: margin-top 0.30s ease-out;
      padding-top: 20px;
      padding-bottom: 20px;
      border: 1px solid #f3f3f3;
      background-color: #fff;
      overflow: auto;
    }

    li {
      padding-top: 15px;
      padding-right: 15px;
      padding-bottom: 15px;
      padding-left: 30px;
      font-weight: normal;

      &.selected {
        color: $primary-color;
      }

      &:hover {
        cursor: pointer;
        background-color: #f6f6f6;
        // color: $primary-color;
      }
    }

  }

  .dropdown-show-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    padding: 0;

    i {
      display: block;
    }
  }

  @media(min-width: 375px) {
    .dropdown-gator {
      width: 300px;
    }
  }

  @media(min-width: 480px) {
    .dropdown-gator {
      width: 400px;
    }
  }

  @media(min-width: 768px) {
    .dropdown-gator {
      ul {
        max-height: 369px
      }
    }
  }

  @media(max-width: 991px) {
    .dropdown-gator ul {
      &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        height: 7px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0,0,0,.5);
        -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
      }
    }
  }

</style>
