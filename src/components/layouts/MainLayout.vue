<template lang="pug">
  .wrapper
    header
      .wrapper-fluid
        .logotypes
          // Поменяю на svg позже.
          img(src="../../assets/images/urfuLogo.png")
          img(src="../../assets/images/adminLogo.png")
        nav.header-navigation
          ul
            router-link(
              v-for="(item, index) in menuItems" :key="index"
              :to="item.to"
              tag="li"
            )
              a {{ item.name }}
    // Content wrapper
    main
      slot(name='content')
    footer.footer
      .wrapper-fluid
        .footer-content
          .footer-menu
            .footer-menu_column
              h3 Новости
              span Новости и события
              span Фотогалерея
              span Видео
            .footer-menu_column
              h3 Информация
              span Тренерский состав
              span Ученический состав
              span Для студентов
              span Для родителей
              span Буревестник
            .footer-menu_column
              h3 Учебные материалы
            .footer-menu_column
              h3 Доска почета
          .footer-bottom
            .footer-bottom_partners
              img(src="../../assets/images/fd.png")
              img(src="../../assets/images/adminLogo.png")
              img(src="../../assets/images/bfr.png")
            .footer-bottom_contacts
              .footer-bottom_contacts
                address
                  span +01234567891
                  span Июлская 22, г. Екатеринбург
                .footer-bottom_contacts_soc-links
                  a
                    img(src="../../assets/images/vk.png")
                  a
                    img(src="../../assets/images/insta.png")
                  a
                    img(src="../../assets/images/youtube.png")
              

</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { 
          to: '/news', 
          name: 'Новости', 
          nested: [
            { to: '/', name: 'Новости и события' },
            { to: '/', name: 'Фотогалерея' },
            { to: '/', name: 'Видео' },
          ]
        },
        {
          to: '/information',
          name: 'Информация',
          nested: [
            { to: '/', name: 'Тренерский состав' },
            { to: '/', name: 'Ученический состав' },
            { to: '/', name: 'Для студентов' },
            { to: '/', name: 'Для родителей' },
            { to: '/', name: 'Буревестник' },
          ]
        },
        {to: '/materials', name: 'Учебные материалы'},
        {to: '/hall', name: 'Доска почета'},
      ]
    }
  }
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
.footer
  padding 29px 0 37px
  &-menu
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content flex-start
    align-content stretch
    align-items flex-start
    &_column
      margin 0 100px 0 0
    span 
      font-size 14px
      line-height 23px
    h3
      font-size 20px
      margin 0 0 14px 0
  &-content
    width 100%
  &-bottom
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content space-between
    align-content space-between
    align-items flex-end
    &_contacts
      // text-align right
      display flex
      flex-direction column
      flex-wrap nowrap
      justify-content flex-start
      align-content stretch
      align-items flex-end
      text-align right
      address
        margin 0 0 47px 0 
        line-height normal
      &_soc-links
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content flex-start
        align-content stretch
        align-items center
        a
          margin 0 16px 0 0
          &:last-child
            margin 0
    &_partners
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content flex-start
      align-content stretch
      align-items center
      img 
        margin 0 35px 0 0
footer
  font-family 'Noto Sans', sans-serif
  background #2B6CA8
  color #fff
</style>
