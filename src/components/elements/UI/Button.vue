<template lang="pug">
  button.btn
    slot
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/mixins/flexbox'
@import '../../../assets/stylus/base/breakpoints'
.news_btn
  .btn
    width 268px
    padding 7px 40px
.hall_btn
  .btn
    width 100%
    height 68px
    padding 0 40px
    @media screen and (min-width: lg)
      width 300px
    @media screen and (min-width: xl)
      width 349px
.btn
  padding 12px 70px
  border 2px solid #e8d35f
  font-size 18px
  line-height normal
  color #000
  background #fff
  text-align center
  font-family "Noto Sans", sans-serif
  display flex
  align-items center
  justify-content center
  &:hover
    background #E8D35F
    cursor pointer
    transition all .2s ease
  &:active
    background #E6CF51
</style>
