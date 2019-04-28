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
.card_upcoming
  width 268px
  height 293px
  img 
    height 100%
    object-fit cover
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
      margin 0 0 9px 0
    &_text
      font-family 'Noto Sans', sans-serif
      font-style italic
      font-weight normal
      font-size 18px
      line-height 29px
      display flex
      height 100%
      overflow hidden
    &_gradient
      height 100%
      width 100%
      overflow hidden
      background rgba(0, 0, 0, 0.4)
      backdrop-filter blur(4px)
      box-sizing border-box
      padding 10px 14px
</style>

