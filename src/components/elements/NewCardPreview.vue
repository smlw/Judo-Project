<template lang="pug">
  .new-card
    slot(name="image")
    .new-card_description
      .new-card_description_gradient
        .new-card_description_date
          slot(name="date")
        .new-card_description_text
          slot(name="text")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
card-width = 355px
card-height = 256px
.new-card
  width 100%
  height 153px
  margin 0 0 15px 0
  @media screen and (min-width: lg)
    height 195px
    width 280px
  @media screen and (min-width: xl)
    width 355px
    height 256px

  p
    margin 0
    padding 0
    line-height 25px
    font-size 18px
  h3
    padding 0
    margin 0
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-weight bold
    font-size 24px
    line-height 33px
  img 
    height 100%
    width 100%
    object-fit cover
    display flex
  &_description
    flexbox(column, wrap, flex-end, flex-start, flex-start)
    height card-height
    margin-top -(card-height)
    color #fff
    line-height normal
    font-family 'Noto Sans', sans-serif
    &_date
      font-size 24px
      font-weight bold
    &_text
      font-size 18px
      height 50%
      overflow hidden
    &_gradient
      height 60%
      width 100%
      overflow hidden
      background rgba(0,0,0,0.7)
      background linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 96.87%)
      box-sizing border-box
      padding 50px 18px 12px
    &:hover
      .new-card_description_gradient
        transition all 0.25s ease
        background rgba(0,0,0,0.7)
        height 100%
        padding 11px 18px
        .new-card_description_text
          transition all 0.25s ease
          height auto

.new-card_description
  height 153px
  margin-top -153px
  .new-card_description_gradient
    height 100%
  @media screen and (min-width: lg)
    height 195px
    margin-top -195px
    .new-card_description_gradient
      height 60%
  @media screen and (min-width: xl)
    height 256px
    margin-top -256px
</style>

