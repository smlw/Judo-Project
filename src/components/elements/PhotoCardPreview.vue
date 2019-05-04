<template lang="pug">
  .photo-card()
    slot(name="image")
    .photo-card_description()
      .photo-card_description_gradient()
        .photo-card_description_date()
          slot(name="date")
        .photo-card_description_text()
          slot(name="text")
</template>

<script>
export default {
  props: ['settings']
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.photo-card
  height 100%
  // Home page styles
  &_home
    width 100%
    height 269px
    .photo-card_description
      height 269px
      margin -269px 0 0 0
      &_gradient
        padding 0px 20px 15px
    @media screen and (min-width: md)
      width 460px
      height 269px
      margin 0 10px 0 0 
      .photo-card_description
        height 269px
        margin -269px 0 0 0
        &_gradient
          padding 0px 20px 15px
    @media screen and (min-width: lg)
      width 310px
    @media screen and (min-width: xl)
      width 460px
  &_home_small
    width 100%
    height 129px
    margin 10px 0 0 0
    .photo-card_description
      height 129px
      margin -129px 0 0 0
      &_gradient
        padding 0px 9px 9px
    @media screen and (min-width: md)
      &:last-child
        margin 0
    @media screen and (min-width: lg)
      width 181px

  // Albums page styles
  &_album
    .photo-card_description
      height 219px
      margin -219px 0 0 0
      &_gradient
        padding 0px 20px 15px

  // News page styles
  &_news
    width 100%
    height 269px
    margin 0 0 10px 0
    .photo-card_description
      height 219px
      margin -219px 0 0 0
      &_gradient
        padding 0px 20px 15px
    @media screen and (min-width: lg)
      width 354px
      height 201px

    
  color #fff
  font-family 'Noto Sans', sans-serif
  h3
    font-size 18px
    line-height normal
    word-break break-word
    font-weight bold
    padding 0
    margin 0
  p
    font-size 20px
    line-height normal
    margin 0
    padding 0
  img 
    width 100%
    height 100%
    object-fit cover
    display flex
  &_description
    flexbox(row, nowrap, space-between, flex-end, stretch)
    &_gradient
      width 100%
      overflow hidden
      justify-content flex-end
      background rgba(0,0,0,0.8)
      background linear-gradient(180deg, rgba(0, 31, 49, 0) 0%, rgba(0, 23, 36, 0.8) 76.09%, rgba(0, 0, 0, 0.8) 96.87%)
      box-sizing border-box
    &_text
      overflow hidden
</style>

