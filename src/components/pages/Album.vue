<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          .album
            h2 Альбомы
            .album_content
              .album_content_item
                a(href="/")
                  .gallery_card()
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_date
                        h3 Первенство Свердловской области 21.02.2019 город Екатеринбург
              .album_content_item
                a(href="/")
                  .gallery_card()
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_date
                        h3 Первенство Свердловской области 21.02.2019 город Екатеринбург
              .album_content_item
                a(href="/")
                  .gallery_card()
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_date
                        h3 Мастер-класс от Колесникова Сергея Викторовича
              .album_content_item
                a(href="/")
                  .gallery_card()
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_date
                        h3 Мастер-класс от Колесникова Сергея Викторовича
              .album_content_item
                a(href="/")
                  .gallery_card()
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_date
                        h3 Мастер-класс от Колесникова Сергея Викторовича
</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
export default {
  components: { MainLayout, BreadCrumbs }   
}
</script>

<style lang="stylus" scoped>
.album_content
  display flex
  flex-wrap wrap
  flex-direction row
  justify-content flex-start
  align-content stretch
  margin 35px 0 0 0
  &_item
    margin 0 24px 25px 0
    &:nth-child(3n)
      margin 0 0 15px 0
.gallery
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items flex-start
  align-content stretch
  h3
    font-size 18px
    line-height normal
    font-weight bold
  &_card
    width 364px
    height 219px
    color #fff
    font-family 'Noto Sans', sans-serif
    img 
      width 100%
      height 100%
    h3
      line-height normal
      word-break break-word
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight bold
      font-size 18px
      line-height 25px
    &_description
      height 219px
      margin -219px 0 0 0
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      align-items flex-end
      align-content stretch
      overflow hidden
      background rgba(0, 0, 0, 0.39)
      box-sizing border-box
      padding 9px
</style>

