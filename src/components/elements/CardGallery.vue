<template lang="pug">
  a(href="/")
    .card()
      img(src="/")
      .card_description()
        .card_description_gradient
          .card_description_date
            slot(name="date")
          .card_description_text
            slot(name="text")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.gallery_video_content

.gallery_photo_content
  &_main
    .card_description_gradient
      padding 70px 18px 12px
    .card_description_text
      height 65%
  &_second
    .card_description
      &:hover
        .card_description_gradient
          padding 50px 5px 5px
      &_gradient
        padding 50px 5px 5px
.card
  width 365px
  height 256px
  img 
    height 100%
  &_description
    &:hover
      .card_description_gradient
        transition all 0.25s ease
        background rgba(0,0,0,0.7)
        height 100%
        padding 11px 18px
        .card_description_text
          transition all 0.25s ease
          height 100%
    display flex
    flex-direction column
    flex-wrap wrap
    justify-content flex-end
    align-content flex-start
    align-items flex-start
    line-height normal
    font-family 'Noto Sans', sans-serif
    color #fff
    margin -256px 0 0 0
    height 256px
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

