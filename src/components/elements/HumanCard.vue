<template lang="pug">
  .coach-staff_portrait
    slot(name="image")
    .coach-staff_portrait_name
      slot(name="humanName")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.coach-staff
  width 100%
  &_portrait
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
</style>

