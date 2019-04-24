<template lang="pug">
  .bread-crumbs
    .bread-crumbs_item
      a(href="/") Главная
    .bread-crumbs_item
      a(href="/") Новости
    .bread-crumbs_item
      a(href="/") Видеогалерея
    .bread-crumbs_item
      a(href="/") "Название альбома"
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped> 
.bread-crumbs
  font-family 'Noto Sans', sans-serif
  font-style normal
  font-weight normal
  font-size 22px
  line-height normal
  color #868686
  display flex
  align-items flex-start
  flex-direction row
  margin 0 0 37px 0
  &_item
    display flex
    flex-direction row
    a
      text-decoration-line underline
      &:hover
        text-decoration-line none
    &:before
      content '>'
      margin 0 15px
    &:first-child
      &:before
        content ''
        margin 0
    &:last-child
      color #000
      a
        text-decoration-line none
</style>
