<template lang="pug">
  .photo-card(:style="`width: ${this.settings.width}; height: ${this.settings.height}`" :class="this.settings.class")
    slot(name="image")
    .photo-card_description(:style="`height: ${this.settings.height}; margin-top: -${this.settings.height}`")
      .photo-card_description_gradient()
        .photo-card_description_date(:class="this.settings.titleClass")
          slot(name="date")
        .photo-card_description_text(v-if="!this.settings.small")
          slot(name="text")
</template>

<script>
export default {
  props: ['settings']
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.photo-card
  color #fff
  font-family 'Noto Sans', sans-serif
  h3
    font-size 18px
    line-height normal
    word-break break-word
    font-weight bold
  p
    font-size 20px
    line-height normal
  img 
    width 100%
    height 100%
    object-fit cover
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
  .sm-padding
    padding 8px 13px
  &_normal
    .photo-card_description
      &_gradient
        padding 0px 20px 15px
  &_small
    .photo-card_description
      &_gradient
        padding 0px 9px 9px
</style>

