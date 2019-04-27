<template lang="pug">
  button.btn
    slot
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.news_btn
  .btn
    width 268px
    padding 7px 40px
.hall_btn
  .btn
    width 349px
    height 68px
    padding 12px 40px
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
