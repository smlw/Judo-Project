<template lang="pug">
  .link-header
    router-link(:to="`${link.to}`" v-for="(link, index) in this.links" :key="index")
      v-button.link-header_button {{ link.name }}
</template>

<script>
import VButton from '../UI/Button'
export default {
  props: ['links'],
  components: { VButton }   
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/mixins/flexbox'
@import '../../../assets/stylus/base/breakpoints'
.link-header
  margin 0 0 45px 0
  flexbox(column, nowrap, space-between, stretch, stretch)
  .btn
    @media screen and (max-width sm)
      margin 10px auto
    @media screen and (min-width md)
      margin 10px auto
      padding 7px
      width 200px
    @media screen and (min-width xl)
      width 268px
      padding 7px 40px
    margin 0 0 10px 0
  @media screen and (min-width: lg)
    flexbox(row, nowrap, space-between, stretch, stretch)
</style>

