<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .video-gallery
            .video-gallery_header
              h2 Дзюдо: турнир памяти Н.С. Мусатова
              .video-gallery_date 21.02.2019
            .video-gallery_content
              .video-gallery_content_main
                .video-gallery_content_main_video
                  .video_content_playvideo
                    vue-plyr(:options="plyrSettings" controls ref="plyr")
                      video(poster='poster.png', src='video.mp4')
                        source(src='../../assets/video.mp4', type='video/mp4', size='720')
                .video-gallery_content_main_description
                  h3 Бой Иванова и Петрова
                  p Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание
              .video-gallery_content_second 
                .swiper-slider
                  swiper(:options='swiperOption')
                    swiper-slide(v-for="(item, index) in 8" :key="index")
                      router-link(:to="`/video-gallery/${index}`")
                        j-video-preview.video-card_video()
                          img(slot="image" src="../../assets/images/slider-1.png")
                          h3(slot="title") Мастер-класс от Колесникова Сергея Викторовича

                  .swiper-button-prev(slot='button-prev')
                  .swiper-button-next(slot='button-next')      
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      plyrSettings: {
        enabled: true,
        controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'settings', 'fullscreen'],
        hideControls: true,
        debug: true
        // disableContextMenu: true
        // displayDuration: false
        // tooltips: { controls: true, seek: true }
        // settings: ['captions', 'quality', 'speed', 'loop']
        // iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg=='
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1140: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        }
      }
    }
  },
  beforeMount () {
    this.$route.meta.breadcrumbs[3].name = 'Название видеоальбома из запроса'
  },
  components: { swiper, swiperSlide }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.video
  &_content
    &_playvideo
      width 100%
      @media screen and (min-width: lg)
        width 669px
.video-gallery
  h2
    font-size 48px
    line-height 57px
    margin 0
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
      flexbox(column, nowrap, flex-start, stretch, stretch)
      @media screen and (min-width: sm)
        flexbox(row, nowrap, flex-start, stretch, stretch)
        &_video
          margin 0 40px 0 0
      &_description
        h3 
          font-family 'Noto Sans', sans-serif
          font-style normal
          font-weight bold
          font-size 28px
          line-height 38px
          @media screen and (min-width md)
            margin 0 0 28px 0
        p 
          font-family 'Noto Sans', sans-serif
          font-style normal
          font-weight normal
          font-size 20px
          line-height 35px

</style>

