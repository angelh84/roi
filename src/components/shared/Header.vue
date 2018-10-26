<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <a href="#" class="logo"><img src="@/assets/images/logo.png"></a>
          <Progress />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Progress from '@/components/shared/Progress'
export default {
  name: 'Header',
  components: {
    Progress
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '@/assets/scss/variables.scss';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #E6E6E6;
    background-color: #fff;
  }

  .logo {
    float: left;
    width: 41px;
  }

  @media(min-width: 600px) {

    .header {
      padding-top: 10px;
      padding-bottom: 10px;
      height: 85px;
    }

    .logo {
      width: 65px;
      padding: 0;
          margin-left: 20px;
    }

  }

  @media(min-width: 768px) {

    .privacy-policy {
      float: right;
    }

  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
