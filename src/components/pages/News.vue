<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          LinkHeader
          .news
            .news_news
              h2 Новости
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                  swiper-slide 
                    a(href="/")
                      .card
                        img(src="../../assets/images/events_1.png")
                        .card_description
                          .card_description_gradient
                            .card_description_date
                              h3 13 апреля
                            .card_description_text
                              p Эко-марафон «Сдай макулатуру – спаси дерево! 
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')  
              .news_button
                a(href="/") 
                  Button Больше событий
            .news_events
              h2 Грядущие события
              .swiper-slider
                swiper(:options='swiperEvents')
                  swiper-slide 
                    a(href="/")
                      .card_upcoming
                        img(src="../../assets/images/events_1.png")
                        .card_upcoming_description
                          .card_upcoming_description_gradient
                            .card_upcoming_description_date
                              h3 "Зажги синим!" 2 апреля
                            .card_upcoming_description_text
                              p Масштабная городская акция «Зажги синим», приуроченная ко Всемирному дню распространения информации о проблеме аутизма.
                  swiper-slide 
                    a(href="/")
                      .card_upcoming
                        img(src="../../assets/images/events_1.png")
                        .card_upcoming_description
                          .card_upcoming_description_gradient
                            .card_upcoming_description_date
                              h3 ГОиЧС: безопасность весной
                            .card_upcoming_description_text
                              p С наступлением весны лед на реках становится рыхлым, «съедается» сверху солнцем, талой водой, а снизу подтачивается течением
                  swiper-slide 
                    a(href="/")
                      .card_upcoming
                        img(src="../../assets/images/events_1.png")
                        .card_upcoming_description
                          .card_upcoming_description_gradient
                            .card_upcoming_description_date
                              h3 Летняя оздоровительная кампания: 22 загородных и 132 городских лагеря
                            .card_upcoming_description_text
                              p Летняя оздоровительная кампания начнется 1 апреля...
                  swiper-slide 
                    a(href="/")
                      .card_upcoming
                        img(src="../../assets/images/events_1.png")
                        .card_upcoming_description
                          .card_upcoming_description_gradient
                            .card_upcoming_description_date
                              h3 Первенство Свердловской области 21.02.2019 город Екатеринбург.
                            .card_upcoming_description_text
                              p Уже сегодня пройдёт Первенство Свердловской области по дзюдо среди юношей и девушек до 13 лет...
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')  
            .news_album
              h2 Фотогалерея
              .album_content
                .album_content_item
                  a(href="/")
                    .gallery_card()
                      img(src="../../assets/images/events_1.png")
                      .gallery_card_description()
                        .gallery_card_description_gradient
                          .gallery_card_description_date
                            h3 Первенство Свердловской области 21.02.2019 город Екатеринбург
                .album_content_item
                  a(href="/")
                    .gallery_card()
                      img(src="../../assets/images/events_1.png")
                      .gallery_card_description()
                        .gallery_card_description_gradient
                          .gallery_card_description_date
                            h3 Первенство Свердловской области 21.02.2019 город Екатеринбург
                .album_content_item
                  a(href="/")
                    .gallery_card()
                      img(src="../../assets/images/events_1.png")
                      .gallery_card_description()
                        .gallery_card_description_gradient
                          .gallery_card_description_date
                            h3 Мастер-класс от Колесникова Сергея Викторовича
              .news_button
                a(href="/") 
                  Button Перейти ко всем альбомам

            .news_video_album
              h2 Видео
              .news_video_album_content
                a(href="/")
                  .gallery_card_video_small
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_video_small_description
                      .gallery_card_video_play_content
                        .gallery_card_video_small_play 
                      .gallery_card_video_small_description_date
                        h3 13 апреля
                a(href="/")
                  .gallery_card_video_small
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_video_small_description
                      .gallery_card_video_play_content
                        .gallery_card_video_small_play 
                      .gallery_card_video_small_description_date
                        h3 13 апреля
                a(href="/")
                  .gallery_card_video_small
                    img(src="../../assets/images/events_1.png")
                    .gallery_card_video_small_description
                      .gallery_card_video_play_content
                        .gallery_card_video_small_play 
                      .gallery_card_video_small_description_date
                        h3 13 апреля
            .news_button
              a(href="/") 
                Button Перейти ко всем альбомам
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
import LinkHeader from '../../components/elements/UI/LinkHeader'
import Button  from '../../components/elements/UI/Button'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperEvents: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: { MainLayout, BreadCrumbs, LinkHeader, swiper, swiperSlide, Button}
}
</script>

<style lang="stylus" scoped>
.news
  &_events,
  &_video_album,
  &_album
    margin 80px 0 0 0
h2
  margin  0 0 22px 0
.news_button
  display flex
  flex-direction row
  justify-content center
  margin 25px 0 0 0
.card_upcoming
  width 268px
  height 293px
  img 
    height 100%
    object-fit cover
  &_description
    display flex
    flex-direction column
    flex-wrap wrap
    justify-content flex-end
    align-content flex-start
    align-items flex-start
    line-height normal
    font-family 'Noto Sans', sans-serif
    color #fff
    margin -293px 0 0 0
    height 293px
    &_date
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight bold
      font-size 20px
      line-height 27px
      margin 0 0 9px 0
    &_text
      font-family 'Noto Sans', sans-serif
      font-style italic
      font-weight normal
      font-size 18px
      line-height 29px
    &_gradient
      height 100%
      width 100%
      overflow hidden
      background rgba(0, 0, 0, 0.4)
      backdrop-filter blur(4px)
      box-sizing border-box
      padding 10px 14px
.card
  width 365px
  height 256px
  img 
    height 100%
  &_description
    &:hover
      .card_description_gradient
        transition all 0.25s ease
        background rgba(0,0,0,0.7)
        height 100%
        padding 11px 18px
        .card_description_text
          transition all 0.25s ease
          height 100%
    display flex
    flex-direction column
    flex-wrap wrap
    justify-content flex-end
    align-content flex-start
    align-items flex-start
    line-height normal
    font-family 'Noto Sans', sans-serif
    color #fff
    margin -256px 0 0 0
    height 256px
    &_date
      font-size 24px
      font-weight bold
    &_text
      font-size 18px
      height 50%
      overflow hidden
    &_gradient
      height 60%
      width 100%
      overflow hidden
      background rgba(0,0,0,0.7)
      background linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 96.87%)
      box-sizing border-box
      padding 50px 18px 12px
.news_video_album
  &_content
    display flex
    flex-direction row
    justify-content space-between

.album_content
  display flex
  flex-wrap wrap
  flex-direction row
  justify-content flex-start
  align-content stretch
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
      font-size 18px
      line-height normal
      word-break break-all
    &_description
      height 219px
      margin -219px 0 0 0
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      align-items flex-end
      align-content stretch
      &_gradient
        height 60%
        width 100%
        overflow hidden
        background rgba(0,0,0,0.8)
        background linear-gradient(180deg, rgba(0, 31, 49, 0) 0%, rgba(0, 23, 36, 0.8) 76.09%, rgba(0, 0, 0, 0.8) 96.87%)
        box-sizing border-box
        padding 65px 20px 15px

.gallery_card_video_small
  width 364px
  height 285px
  color #fff
  font-family 'Noto Sans', sans-serif
  img
    width 100%
    height 100%
    object-fit cover
  &_play
    width 69px
    height 69px
    display flex
    justify-content center
    align-items center
    background-size contain
    background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg==')
    &_content
      position absolute
      top 0
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
  &_description
    position relative
    background rgba(0, 0, 0, 0.39)
    height 285px
    margin -285px 0 0 0
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content space-between
    align-items flex-end
    align-content stretch
    line-height 25px
    &_date
      padding 8px

.gallery
  &_card_video
    &_play
      &_content
        position absolute
        top 0
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
</style>

