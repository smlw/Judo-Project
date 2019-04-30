<template lang="pug">
  .card_upcoming
    slot(name="image")
    .card_upcoming_description
      .card_upcoming_description_gradient
        .card_upcoming_description_date
          slot(name="title")
        .card_upcoming_description_text
          slot(name="description")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.card_upcoming
  width 100%
  height 293px
  margin 0 auto
  @media screen and (min-width md)
    width 268px
    height 293px
  h3
    margin 0
  img 
    height 100%
    width 100%
    object-fit cover
    display flex
  &_description
    flexbox(column, wrap, flex-end, flex-start, flex-start)
    line-height normal
    font-family 'Noto Sans', sans-serif
    color #fff
    margin -293px 0 0 0
    height 293px
    &_date
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight bold
      font-size 20px
      line-height 27px
      // margin 0 0 9px 0
    &_text
      font-family 'Noto Sans', sans-serif
      font-style italic
      font-weight normal
      font-size 18px
      line-height 29px
      display flex
      height 100%
      overflow hidden
      p
        line-height 29px
        font-size 18px
    &_gradient
      height 100%
      width 100%
      overflow hidden
      background rgba(0, 0, 0, 0.4)
      backdrop-filter blur(4px)
      box-sizing border-box
      padding 10px 14px
</style>

