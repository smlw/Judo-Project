<template lang="pug">
  .human-card
    slot(name="image")
    .human-card_name
      slot(name="humanName")
    .human-card_discharge
      slot(name="discharge")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.human-card
  width 172px
  text-align center
  img 
    width 100%
    height 215px
  &_name
    font-family 'Noto Sans', sans-serif
    font-size 18px
    line-height normal
    margin 20px 0 0 0
  &_discharge
    font-family 'Noto Sans', sans-serif
    font-style italic
    font-weight normal
    font-size 16px
    line-height 22px
    color #868686
</style>

