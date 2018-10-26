<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <p>&copy; 2013 - {{ getYear }} All Rights Reserved</p>
        </div>
        <div class="col-sm-6">
          <a class="privacy-policy" href="#" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      'getYear': new Date().getFullYear()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .footer {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F4F4F4;

    &.sticky {
      position: fixed;
      bottom: 0;
    }

    p,
    a {
      font-size: 11px;
      color: #4c4c4c;
      line-height: 1em;
    }
  }

  .privacy-policy {
    display: inline-block;
  }

  @media(min-width: 480px) {
    .footer {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

  @media(min-width: 768px) {

  }

  @media(min-width: 1200px) {
    .footer {
      position: fixed;
      bottom: 0;
    }
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
