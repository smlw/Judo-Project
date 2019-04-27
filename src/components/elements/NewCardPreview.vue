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
card-width = 365px
card-height = 256px
.new-card
  width card-width
  height card-height
  img 
    height 100%
    width 100%
    object-fit cover
  &_description
    &:hover
      .new-card_description_gradient
        transition all 0.25s ease
        background rgba(0,0,0,0.7)
        height 100%
        padding 11px 18px
        .new-card_description_text
          transition all 0.25s ease
          height 100%
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
</style>

