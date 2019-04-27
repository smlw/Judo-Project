<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
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
                    j-video-preview(:settings="mainVideoCardSettings")
                      img(slot="image" src="../../assets/images/slider-1.png")
                .video-gallery_content_main_description
                  h3 Бой Иванова и Петрова
                  p Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание боя или комментарий тренера уже на усмотрение заказчика Здесь буде описание
              .video-gallery_content_second 
                .swiper-slider
                  swiper(:options='swiperOption')
                    swiper-slide(v-for="(item, index) in 8" :key="index")
                      router-link(:to="`/video-gallery/${index}`")
                        j-video-preview(:settings="secondVideoCardSettings")
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
      mainVideoCardSettings: {
        width: '669px',
        height: '357px',
        titleClass: 'normal'
      },
      secondVideoCardSettings: {
        width: '364px',
        height: '203px',
        titleClass: 'sm-padding',
        icon: 'small'
      },
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
          margin 0 0 28px 0
        p 
          font-family 'Noto Sans', sans-serif
          font-style normal
          font-weight normal
          font-size 20px
          line-height 35px

</style>

