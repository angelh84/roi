<template>
  <div class="container not-found">
      <h1>This page is not found</h1>
  </div> <!-- .container END -->
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      setNextRoute: {
        set: '/',
        showNext: false
      },
      setPreviousRoute: '/'
    }
  },
  mounted: function () {
    this.$store.dispatch('updateNextRoute', this.setNextRoute)
    this.$store.dispatch('updateRouteHistory', this.setPreviousRoute)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .v404-route {
    .progress-container {
      display: none;
    }
  }

  .not-found {
    h1 {
      font-size: 40px;
      text-align: center;
    }
  }

  @media(min-with: 480px) {
  }

  @media(min-width: 768px) {
  }

  @media(min-width: 1200px) {
  }

  @media(max-height: 700px) and (min-width: 1200px) {
  }

</style>
