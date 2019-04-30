<template lang="pug">
  MainLayout
    template(v-slot:content)
      .carousel_main
        swiper(:options="swiperMain")
          swiper-slide
            img(src="../assets/images/slider-1.png")
            h1 Отделение дзюдо УрФУ
          swiper-slide
            img(src="../assets/images/slider-1.png")
          .swiper-pagination(slot="pagination")
      .container
        .events
          h2 События
          .events_cards
            router-link(:to="`/test/${index}`" v-for="(card, index) in eventCard" :key="index")
              j-new-preview
                img(slot="image" src="../assets/images/events_1.png")
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
                router-link.gallery_photo_content_main_item(to="/test")
                  j-photo-preview.photo-card_home()
                    img(slot="image" src="../assets/images/events_2.png")
                    h3(slot="date") 13 апреля
                    p(slot="text") Мастер-класс от Колесникова Сергея Викторовича
              .gallery_photo_content_second
                router-link.gallery_photo_content_second_item(to="/test/2")
                  j-photo-preview.photo-card_home_small()
                    img(slot="image" src="../assets/images/events_1.png")
                    h3(slot="date") 13 апреля
                router-link.gallery_photo_content_second_item(to="/test/3")
                  j-photo-preview.photo-card_home_small()
                    img(slot="image" src="../assets/images/events_3.png")
                    h3(slot="date") 13 апреля
            .events_button
              a(href="/") 
                Button Перейти к альбомам
            
          .gallery_video
            h2 Видео
            .gallery_video_content
              router-link(to="/video-gallery/1")
                j-video-preview.video-card_home
                  img(slot="image" src="../assets/images/slider-1.png")
                  h3(slot="title") 13 апреля
            .events_button
              a(href="/") 
                Button Все видео

        .coach-staff
          h2 Тренерский состав
          .swiper-slider
            swiper(:options='swiperOption')
              swiper-slide(v-for="(human, index) in 12" :key="index")
                router-link(:to='`staff/${index}`')
                  j-human-card
                    img(slot="image" src="../assets/images/face_coach.png")
                    span(slot="humanName") О. В. Долганов
            .swiper-button-prev(slot='button-prev')
            .swiper-button-next(slot='button-next')



</template>

<script>
import Button  from '../components/elements/UI/Button'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Home',
  data () {
    return {
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
  components: { swiper, swiperSlide, Button }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixins/flexbox'
@import '../assets/stylus/base/breakpoints'
h2
  margin 0 0 25px 0
.carousel_main
  display none
  @media screen and (min-width lg)
    display flex
    h1
      font-family 'Behrens Antiqua', sans-serif
      font-style normal
      font-weight normal
      font-size 64px
      line-height 76px
      color #FFFFFF
      margin -215px 0 0 0
      text-align center
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
    padding 0 0 10px 0
.gallery
  flexbox(column, nowrap, space-between, flex-start, stretch)
  width 100%
  margin 10px 0
  &_video
    margin 30px 0
    @media screen and (min-width sm)
      margin 0
  @media screen and (min-width: lg)
    flexbox(row, nowrap, space-between, flex-start, stretch)
    margin 65px 0 0 0
  &_photo_content
    flexbox(column, nowrap, space-between, flex-start, stretch)
    @media screen and (min-width: md)
      flexbox(row, nowrap, space-between, flex-start, stretch)
    &_main
      &_item
        display flex
        width 100%
        @media screen and (min-width: md)
          margin 0 11px 0 0
    &_second
      flexbox(column, nowrap, space-between, flex-start, stretch)
      width 100%
      &_item
        width 100%
        display flex
        &:last-child
          margin 0
.article
  margin 30px 0
  @media screen and (min-width xl)
    margin 95px 0 0 0
  &_content
    p
      line-height 35px
      font-size 20px
    img
      float left
      box-sizing border-box
      object-fit cover
      width 100%
      @media screen and (min-width: md)
        padding 0 24px 15px 0 
        width 420px
        height 258px
.events
  margin 30px 0
  @media screen and (min-width: md)
    margin 67px 0 0 0
.events_button
  display flex
  flex-direction row
  justify-content center
  margin 25px 0 0 0
.events_cards
  flexbox(column, wrap, space-between, center, stretch)
  @media screen and (min-width: md)
    flexbox(row, wrap, space-between, stretch, stretch)
</style>
