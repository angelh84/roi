<template>
  <div class="progress-box clearfix">
    <div class="progress-bg">
      <div class="progress-bar" :style="'width:' + progress.toString() + '%'"></div>
    </div>
    <div class="progress-percent" v-html="progressEnd"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Progress',
  computed: {
    ...mapState(['progress']),
    progressEnd: function () {
      if (this.progress === 100) {
        return '<i class="material-icons">check</i>'
      } else {
        return this.progress + '%'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '@/assets/scss/variables.scss';

  .progress-container {
    opacity: 1;
    padding-top: 25px;
    transition: all 0.25s;
  }

  .progress-box {
    float: right;
    position: relative;
    width: 40%;
    margin-top: 14px;
    margin-right: 20px;
  }

  .progress-bg {
    float: left;
    width: 100%;
    height: 13px;
    background-color: #f6f6f6;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
  }

  .progress-bar {
    width: 0;
    height: 11px;
    background-color: $primary-color;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .progress-percent {
    position: absolute;
    top: 0;
    right: -30px;
    color: $primary-color;
    font-size: 12px;
    line-height: 1em;
    text-align: right;

    i {
      font-size: 20px;
      font-weight: bold;
      margin-top: -5px;
      margin-left: -30px;
    }
  }

  @media(min-width: 375px) {
    .progress-box {
      width: 160px;
    }
  }

  @media(min-width: 400px) {
    .progress-box {
      width: 50%;
    }
  }

  @media(min-width: 480px) {

    .progress-box {
      width: 250px;
      float: right;
    }

  }

  @media(min-width: 600px) {
    .progress-box {
      margin-top: 26px;
      margin-right: 30px;
    }
  }

  @media(min-width: 768px) {

    .progress-box {
      width: 380px;
    }

  }

</style>
