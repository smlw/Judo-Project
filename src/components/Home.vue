<template lang="pug">
  .wrapper
    header header
    main main
    footer footer
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 1440px
</style>
