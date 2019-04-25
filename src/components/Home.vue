<template lang="pug">
  MainLayout
    template(v-slot:content)
      .carousel_main
        swiper(:options="swiperMain")
          swiper-slide
            img(src="../assets/images/slider-1.png")
          swiper-slide
            img(src="../assets/images/slider-1.png")
          .swiper-pagination(slot="pagination")
      .wrapper-fluid
        .events
          h2 События
          .events_cards
            Card( v-for="(card, index) in eventCard" :key="index" )
              h3(slot="date") {{ card.date }}
              p(slot="text") {{ card.text }}

          .events_button
            a(href="/") 
              Button Больше событий

        .article
          h2 Об отделении дзюдо в ДЮСШ "Буревестник"
          .article_content
            p 
              img(src="../assets/images/events_1.png")
              span Основной целью деятельности школы является образовательная деятельность по дополнительным общеобразовательным программам в сфере физической культуры и спорта для детей до 18 лет: бокс, гандбол, дзюдо, карате, плавание, футбол. Основным видом деятельности Учреждения является дополнительное образование детей и взрослых: 1) реализация дополнительных предпрофессиональных программ 1) реализация дополнительных предпрофессиональных программ в области физической культуры и спорта; 2) реализация дополнительных общеразвивающих программ. Обучение в спортивной школе "Буревестник" ведется на бесплатной основе.
        
        .gallery
          .gallery_photo
            h2 Фото
            .gallery_photo_content
              .gallery_photo_content_main
                a(href="/")
                  .gallery_card()
                    img(src="../assets/images/events_1.png")
                    .gallery_card_description()
                      .gallery_card_description_gradient
                        .gallery_card_description_date
                          h3 13 апреля
                        .gallery_card_description_text
                          p Мастер-класс от Колесникова Сергея Викторовича
              .gallery_photo_content_second
                a(href="/")
                  .gallery_card.gallery_card_small()
                    img(src="../assets/images/events_1.png")
                    .gallery_card_small_description()
                      .gallery_card_small_description_gradient
                        .gallery_card_description_date
                          h3 13 апреля
                a(href="/")
                  .gallery_card.gallery_card_small()
                    img(src="../assets/images/events_1.png")
                    .gallery_card_small_description()
                      .gallery_card_small_description_gradient
                        .gallery_card_description_date
                          h3 13 апреля
            .events_button
              a(href="/") 
                Button Перейти к альбомам
            
          .gallery_video
            h2 Видео
            .gallery_video_content
              a(href="/")
                .gallery_card_video
                  img(src="../assets/images/events_1.png")
                  .gallery_card_video_description
                    .gallery_card_video_play_content
                      .gallery_card_video_play
                        .gallery_card_video_play_triangle
                    .gallery_card_video_description_date
                      h3 13 апреля
            .events_button
              a(href="/") 
                Button Все видео

        .coach-staff
          h2 Тренерский состав
          swiper(:options='swiperOption')
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            swiper-slide 
              .coach-staff_portrait
                img(src="../assets/images/face_coach.png")
                .coach-staff_portrait_name О. В. Долганов
            .swiper-button-prev(slot='button-prev')
            .swiper-button-next(slot='button-next')



</template>

<script>
import MainLayout from '../components/layouts/MainLayout'
import Card from '../components/elements/Card'
import Button  from '../components/elements/UI/Button'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста',
      swiperMain: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      eventCard: [
        { linkTo: '/link/1', img: '~/../../assets/images/events_1.png', date: '12 апреля 2018', text: 'С 22 апреля по 18 мая 2019 года в Свердловской области пройдет эко-марафон переработка «Сдай макулатуру – спаси дерево!». Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'},
        { linkTo: '/link/2', img: '123', date: '13 апреля 2018', text: 'Дзюдо: мастер класс от Колесникова Сергея Викторовича'},
        { linkTo: '/link/3', img: '123', date: '14 апреля 2018', text: 'Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'}
      ],
      galleryCard: [
        { linkTo: '/link/1', img: '123', date: '12 апреля 2018', text: 'С 22 апреля по 18 мая 2019 года в Свердловской области пройдет эко-марафон переработка «Сдай макулатуру – спаси дерево!». Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'},
        { linkTo: '/link/2', img: '123', date: '13 апреля 2018', text: 'Дзюдо: мастер класс от Колесникова Сергея Викторовича'},
        { linkTo: '/link/3', img: '123', date: '14 апреля 2018', text: 'Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'}
      ],
    }
  },
  components: { MainLayout, Card, swiper, swiperSlide, Button }
}
</script>

<style lang="stylus" scoped>
h2
  margin 0 0 25px 0
.carousel_main
  img 
    width 100%
  .swiper-container 
    margin 0
    padding 0
    height 635px
  .swiper-pagination
    display flex
    flex-direction row
    justify-content center
    padding 0 0 16px 0
.coach-staff
  width 100%
  .swiper-button-next
    background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMC45OTk5OTkgMUwxNCAxMS41TDEgMjIiIHN0cm9rZT0iI0E0QTRBNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')
    box-shadow 0px 0px 15px rgba(0, 0, 0, 0.2)
    border-radius 50px
    padding 5px
    height 50px
    width 50px
    box-sizing border-box
    background-size 13px
  .swiper-button-prev
    background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQgMjJMMSAxMS41TDE0IDAuOTk5OTk5IiBzdHJva2U9IiNBNEE0QTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')
    box-shadow 0px 0px 15px rgba(0, 0, 0, 0.2)
    border-radius 50px
    padding 5px
    height 50px
    width 50px
    box-sizing border-box
    background-size 13px
  &_portrait
    width 172px
    text-align center
    img 
      width 100%
      height 215px
    &_name
      font-family 'Noto Sans', sans-serif
      font-size 18px
      line-height normal
      margin 20px 0 0 0
  .swiper-container
    width 100%
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
  img
    width 100%
    height 100%
    object-fit cover
  &_card_video
    width 364px
    height 269px
    color #fff
    font-family 'Noto Sans', sans-serif
    &_play
      width 80px
      height 80px
      background rgba(140,140,140, .8)
      border-radius 50px
      display flex
      justify-content center
      align-items center
      &_triangle
        width 0
        height 0
        border-style solid
        border-width 19px 0 19px 35px
        border-color transparent transparent transparent #c4c4c4
        margin 0 -8px 0 0 
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
      height 269px
      margin -269px 0 0 0
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      align-items flex-end
      align-content stretch
      &_date
        padding 19px
  &_card
    width 460px
    height 269px
    color #fff
    font-family 'Noto Sans', sans-serif
    h3
      font-size 18px
      line-height normal
      word-break break-all
    p
      font-size 20px
      line-height normal
    &_description
      height 269px
      margin -269px 0 0 0
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
      &_text
        overflow hidden
  &_card_small
    width 181px
    height 129px
    &_description
      height 129px
      margin -129px 0 0 0
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
        background rgba(0,0,0,0.5)
        background linear-gradient(180deg, rgba(0, 31, 49, 0) 0%, rgba(0, 23, 36, 0.5) 76.09%, rgba(0, 0, 0, 0.5) 96.87%)
        box-sizing border-box
        padding 45px 9px 5px
  &_photo
    &_content
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      align-items flex-start
      align-content stretch
      &_main
        a
          margin 0 11px 0 0
      &_second
        a
          margin 0 0 11px 0
.article
  margin 0 0 95px 0
  &_content
    p
      line-height 35px
      font-size 20px
    img
      width 420px
      height 258px
      float left
      padding 0 24px 15px 0 
.events,
.gallery
  width 100%
  margin 95px 0
.events_button
  display flex
  flex-direction row
  justify-content center
  margin 25px 0 0 0
.events_cards
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items flex-start
  align-content stretch
</style>
