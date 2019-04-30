<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          LinkHeader.hall_btn(:links="headerLinks")
          .hall
            .hall-container
              .hall-container_header
                h2 Призеры юношеских соревнований
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(human, index) in 7" :key="index")
                    .hall-container_portrait
                      router-link(:to="`human/${index}`")
                        j-human-card
                          img(slot="image" src="../../assets/images/face_coach.png")
                          span(slot="humanName") О. В. Долганов
                          span(slot="discharge") {{ index }} спортивный разряд
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
            .hall-container
              .hall-container_header
                h2 Призеры студенческих соревнований
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(human, index) in 8" :key="index")
                    .hall-container_portrait
                      router-link(:to="`human/${index}`")
                        j-human-card
                          img(slot="image" src="../../assets/images/face_coach.png")
                          span(slot="humanName") О. В. Петров
                          span(slot="discharge") {{ index }} спортивный разряд
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
            .hall-container
              .hall-container_header
                h2 Галерея мастеров
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(human, index) in 9" :key="index")
                    .hall-container_portrait
                      router-link(:to="`human/${index}`")
                        j-human-card
                          img(slot="image" src="../../assets/images/face_coach.png")
                          span(slot="humanName") О. В. Веселов
                          span(slot="discharge") {{ index }} спортивный разряд
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
</template>

<script>
import LinkHeader from '../../components/elements/UI/LinkHeader'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      headerLinks: [
        {name: 'Призеры юношеских соревнований', to: '/hall/1'},
        {name: 'Призеры студенческих соревнований', to: '/hall/2'},
        {name: 'Галерея мастеров', to: '/hall/3'},
      ],
      swiperOption: {
        slidesPerView: 6,
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
            slidesPerView: 6,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        }
      },
    }
  },
  components: { swiper, swiperSlide, LinkHeader }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.link-header
  margin 0 0 86px 0

</style>

