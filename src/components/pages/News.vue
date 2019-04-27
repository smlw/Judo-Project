<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          LinkHeader
          .news
            // Block of news
            .news_news
              h2 Новости
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(card, index) in newsCard" :key="index")
                    router-link(:to="`${card.linkTo}`" )
                      j-new-preview
                        img(slot="image" src="../../assets/images/events_1.png")
                        h3(slot="date") {{ card.date }}
                        p(slot="text") {{ card.text }}
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
                .album_content_item(v-for="(photoCard, index) in 4" :key="index")
                  router-link(to="/test")
                    j-photo-preview(:settings="photoCardSettings")
                      img(slot="image" src="../../assets/images/events_1.png")
                      h3(slot="date") Мастер-класс от Колесникова Сергея Викторовича
              .news_button
                a(href="/") 
                  Button Перейти ко всем альбомам

            .news_video_album
              h2 Видео
              .news_video_album_content
                router-link(to="/video-gallery/1" v-for="(videoCard, index) in 3" :key="index")
                  j-video-preview(:settings="videoCardSettings")
                    img(slot="image" src="../../assets/images/slider-1.png")
                    h3(slot="title") Первенство Свердловской области 21.02.2019 город Екатеринбург.
              .news_button
                a(href="/") 
                  Button Больше видео
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LinkHeader from '../../components/elements/UI/LinkHeader'
import Button  from '../../components/elements/UI/Button'
export default {
  data () {
    return {
      newsCard: [
        { linkTo: '/link/1', img: '~/../../assets/images/events_1.png', date: '12 апреля 2018', text: 'С 22 апреля по 18 мая 2019 года в Свердловской области пройдет эко-марафон переработка «Сдай макулатуру – спаси дерево!». Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'},
        { linkTo: '/link/2', img: '123', date: '13 апреля 2018', text: 'Дзюдо: мастер класс от Колесникова Сергея Викторовича'},
        { linkTo: '/link/3', img: '123', date: '14 апреля 2018', text: 'Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'}
      ],
      photoCardSettings: {
        width: '364px',
        height: '201px',
        titleClass: 'sm-padding',
        small: false
      },
      videoCardSettings: {
        width: '364px',
        height: '285px',
        titleClass: 'sm-padding'
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
  components: { LinkHeader, swiper, swiperSlide, Button}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.link-header
  margin 0 0 55px 0 
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

.news_video_album
  &_content
    flexbox(row, nowrap, space-between, flex-start, stretch)

.album_content
  flexbox(row, wrap, flex-start, flex-start, stretch)
  &_item
    margin 0 24px 25px 0
    &:nth-child(3n)
      margin 0 0 15px 0
      
.gallery
  flexbox(row, nowrap, space-between, flex-start, stretch)
</style>

