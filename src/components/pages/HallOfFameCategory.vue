<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          .hall
            .hall-container
              .hall-container_header
                h2 Призеры юношеских соревнований
              .hall-container_content
                j-human-card(v-for="(human, index) in 20" :key="index")
                  img(slot="image" src="../../assets/images/face_coach.png")
                  span(slot="humanName") О. В. Долганов
                  span(slot="discharge") {{ index }} спортивный разряд
</template>

<script>
import LinkHeader from '../../components/elements/UI/LinkHeader'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 20,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: { swiper, swiperSlide, LinkHeader }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.hall-container_content
  flexbox(row, wrap, flex-start, stretch, stretch)
  .human-card
    margin 0 20px 60px 0
    &:nth-child(6n)
      margin 0 0 60px 0
</style>

