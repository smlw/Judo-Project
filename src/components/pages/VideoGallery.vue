<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          .video-gallery
            .video-gallery_header
              h2 Дзюдо: турнир памяти Н.С. Мусатова
              .video-gallery_date 21.02.2019
            .video-gallery_content
              .video-gallery_content_main
                .video-gallery_content_main_video
                  .video_content_playvideo
                    a(href="/")
                      .gallery_card_video
                        img(src="../../assets/images/events_1.png")
                        .gallery_card_video_description
                          .gallery_card_video_play_content
                            .gallery_card_video_play   
                .video-gallery_content_main_description
                  h3 Бой Иванова и Петрова
                  p Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание
              .video-gallery_content_second 
                .swiper-slider
                  swiper(:options='swiperOption')
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                            .gallery_card_video_small_description_date
                              h3 Мастер-класс от Колесникова Сергея Викторовича
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                            .gallery_card_video_small_description_date
                              h3 13 апреля
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                            .gallery_card_video_small_description_date
                              h3 13 апреля
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                          .gallery_card_video_small_description_date
                              h3 13 апреля
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                            .gallery_card_video_small_description_date
                              h3 13 апреля
                    swiper-slide 
                      a(href="/")
                        .gallery_card_video_small
                          img(src="../../assets/images/events_1.png")
                          .gallery_card_video_small_description
                            .gallery_card_video_play_content
                              .gallery_card_video_small_play 
                            .gallery_card_video_small_description_date
                              h3 13 апреля
                  .swiper-button-prev(slot='button-prev')
                  .swiper-button-next(slot='button-next')      
</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  components: { MainLayout, BreadCrumbs, swiper, swiperSlide }   
}
</script>

<style lang="stylus" scoped>
.gallery_card_video_small
  width 364px
  height 203px
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
    height 203px
    margin -203px 0 0 0
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content space-between
    align-items flex-end
    align-content stretch
    line-height 25px
    &_date
      padding 8px
.video-gallery
  h2
    font-size 48px
    line-height 57px
  &_header
    margin 0 0 30px 0
  &_date
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-weight normal
    font-size 24px
    line-height 42px
    color #868686
  &_content
    &_second
      margin 50px 0 0 0
    &_main
      display flex
      flex-direction row
      justify-content flex-start
      &_video
        margin 0 40px 0 0
      &_description
        h3 
          font-family 'Noto Sans', sans-serif
          font-style normal
          font-weight bold
          font-size 28px
          line-height 38px
          margin 0 0 28px 0
        p 
          font-family 'Noto Sans', sans-serif
          font-style normal
          font-weight normal
          font-size 20px
          line-height 35px

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
  p
    font-size 20px

  &_card_video
    width 669px
    height 357px
    color #fff
    font-family 'Noto Sans', sans-serif
    img
      width 100%
      height 100%
      object-fit cover
    &_play
      width 80px
      height 80px
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
      height 357px
      margin -357px 0 0 0
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      align-items flex-end
      align-content stretch
      &_date
        padding 19px
</style>

