<template lang="pug">
  .wrapper
    header
      .wrapper-fluid
        .logotypes
          img(src="../../assets/images/urfuLogo.png")
          img(src="../../assets/images/adminLogo.png")
        nav.header-navigation
          ul
            li
              a(href="/") Новости
            li
              a(href="/") Информация
            li
              a(href="/") Учебные материалы
            li
              a(href="/") Доска почета
    // Content wrapper
    main
      slot(name='content')
    footer
      span footer
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.wrapper-fluid
  width 1440px
  margin 0 auto
  padding 0 150px
  box-sizing border-box
  display flex
  flex-direction row
  flex-wrap: nowrap
  justify-content space-between
  align-content stretch
  align-items center
header
  background #2B6CA8
.header-navigation
  ul
    display flex
    flex-direction row
    flex-wrap: nowrap
    justify-content space-between
    align-content stretch
    align-items flex-start
  a
    padding 30px 20px 37px
    font-size 22px
  li
    color: #fff
    margin 0 47px 0 0
    &:last-child
      margin 0
    &:hover
      background #24649E
      cursor pointer
    &:active
      background: rgb(36,100,158);
      background: linear-gradient(180deg, rgba(36,100,158,1) 0%, rgba(255,255,255,1) 100%);
.logotypes
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  img
    margin 0 23px 0 0
</style>
