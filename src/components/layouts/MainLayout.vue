<template lang="pug">
  .wrapper
    header
      .container
        .header
          .logotypes
            // Поменяю на svg позже.
            img(src="../../assets/images/urfuLogo.png")
            img(src="../../assets/images/adminLogo.png")
          //- button.menu-show(@click="isMenuShow = !isMenuShow") Меню
          nav.header-navigation(v-if="isMenuShow")
            ul
              router-link(
                v-for="(item, index) in menuItems" :key="index"
                :to="item.to"
                tag="a"
              )
                span {{ item.name }}
    // Content wrapper
    main
      slot(name='content')
    footer.footer
      .container
        .footer-content
          .footer-menu
            .footer-menu_column(v-for="(item, index) in menuItems" :key="index")
              router-link.footer-menu_column_title(:to="item.to")
                span {{ item.name }}
              router-link.footer-menu_column_sublink(v-for="(item, index) in item.nested" :to="item.to" :key="index")
                span {{ item.name }}
          .footer-bottom
            .footer-bottom_partners
              // Поменяю на svg позже
              img(src="../../assets/images/fd.png")
              img(src="../../assets/images/adminLogo.png")
              img(src="../../assets/images/bfr.png")
            .footer-bottom_contacts
              address
                div +01234567891
                div Июлская 22, г. Екатеринбург
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
      isMenuShow: true,
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
        {to: '/education-materials', name: 'Учебные материалы'},
        {to: '/hall', name: 'Доска почета'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
header
  background #2B6CA8
.header
  width 100%
  box-sizing border-box
  padding 10px 0
  flexbox(column, nowrap, center, stretch, stretch)
  @media screen and (min-width: md)
    flexbox(row, nowrap, space-between, center, center)
  @media screen and (min-width: lg)
    padding 0

.header-navigation ul
  flexbox(column, nowrap, space-between, stretch, flex-start)
  a
    font-family 'Noto Sans', sans-serif
    line-height 27px
    font-size 20px
    padding 10px
    color #fff
    &:last-child
      margin 0
    &:hover
      background #24649E
      cursor pointer
    &:active
      background rgb(36,100,158);
      background linear-gradient(180deg, rgba(36,100,158,1) 0%, rgba(255,255,255,1) 100%)
  @media screen and (min-width: md)
    flexbox(row, nowrap, flex-end, stretch, flex-start)
    a
      padding 7px 3px
      margin 0 5px 0 0
      font-size 15px
  @media screen and (min-width: lg)
    flexbox(row, nowrap, space-between, stretch, flex-start)
    a
      padding 30px 10px 30px
      font-size 20px
  @media screen and (min-width: xl)
    a
      margin 0 50px 0 0

.header-navigation
  flexbox(row, nowrap, flex-start, stretch, flex-start)
.logotypes
  flexbox(row, nowrap, flex-start, stretch, flex-start)
  @media screen and (min-width: md)
    flexbox(row, nowrap, center, stretch, flex-start)
  img
    margin 0 23px 0 0

.footer
  padding 29px 0 37px
  margin 150px 0 0 0
  &-menu
    flexbox(column, nowrap, flex-end, stretch, flex-start)
    @media screen and (min-width: md)
      flexbox(row, nowrap, flex-start, stretch, flex-start)

    &_column
      margin 0 0 10px 0
      @media screen and (min-width: md)
        margin 0 100px 0 0

      &_sublink
        font-size 14px
        line-height 23px
      a 
        color #fff
        font-family 'Noto sans', sans-serif
        display flex
        &:hover
          text-decoration underline 

      &_title
        font-size 20px
        @media screen and (min-width: md)
          margin 0 0 14px 0
  &-content
    width 100%
    flexbox(column, nowrap, flex-end, stretch, flex-start)

  &-bottom
    flexbox(column-reverse, nowrap, flex-end, stretch, flex-start)
    @media screen and (min-width: md)
      flexbox(row, nowrap, space-between, space-between, flex-end)
    &_contacts
      text-align right
      flexbox(column, nowrap, flex-start, stretch, flex-end)
      address
        font-style normal
        font-size 18px
        line-height 25px
        @media screen and (min-width: md)
          margin 0 0 20px 0
      &_soc-links
        flexbox(row, nowrap, center, center, stretch)
        margin 15px 0
        @media screen and (min-width: md)
          flexbox(row, nowrap, flex-end, center, stretch)
        a
          margin 0 16px 0 0
          &:last-child
            margin 0
    &_partners
      flexbox(row, nowrap, space-between, center, center)
      @media screen and (min-width: md)
        flexbox(row, nowrap, flex-start, flex-end,center)
        img 
          margin 0 35px 0 0
footer
  font-family 'Noto Sans', sans-serif
  background #2B6CA8
  color #fff
</style>
