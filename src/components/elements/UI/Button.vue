<template lang="pug">
  button.btn
    slot
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.btn
  padding 12px 70px
  border 2px solid #e8d35f
  font-size 18px
  line-height normal
  color #000
  background #fff
  text-align center
  font-family "Noto Sans", sans-serif
  &:hover
    background #E8D35F
    cursor pointer
    transition all .2s ease
  &:active
    background #E6CF51
</style>
