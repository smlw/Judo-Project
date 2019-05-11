<template lang="pug">
  .asd
    //
    // Slider block
    //
    .carousel_main
      swiper(:options="swiperMain")
        swiper-slide
          img(src="../../assets/images/slider-1.png")
          h1 Отделение дзюдо УрФУ
        swiper-slide
          img(src="../../assets/images/slider-1.png")
        .swiper-pagination(slot="pagination")
    .container
      //
      // Events block
      //
      .events(v-if="news")
        h2 События
        .events_cards
          router-link(:to="`/news/${card.id}`" v-for="(card, index) in news.slice(0, 3)" :key="index")
            j-new-preview
              img(slot="image" :src='`${mediaUrl}/${card.mainimg}`')
              h3(slot="date") {{getDateYear(card.created)}}
              p(slot="text") {{ card.anons }}
          .show_more_button
            router-link(to="/news/")
              j-button Больше событий
      //
      // About block
      //
      .article
        h2 Об отделении дзюдо в ДЮСШ "Буревестник"
        .article_content
          p 
            img(src="../../assets/images/events_1.png")
            span Основной целью деятельности школы является образовательная деятельность по дополнительным общеобразовательным программам в сфере физической культуры и спорта для детей до 18 лет: бокс, гандбол, дзюдо, карате, плавание, футбол. Основным видом деятельности Учреждения является дополнительное образование детей и взрослых: 1) реализация дополнительных предпрофессиональных программ 1) реализация дополнительных предпрофессиональных программ в области физической культуры и спорта; 2) реализация дополнительных общеразвивающих программ. Обучение в спортивной школе "Буревестник" ведется на бесплатной основе.
      //
      // Gallery block
      //
      .gallery
        .gallery_photo(v-if="albumns")
          h2 Фото
          .gallery_photo_content
            .gallery_photo_content_main
              router-link.gallery_photo_content_main_item(:to="`photo-gallery/${albumns[0].id}`")
                j-photo-preview.photo-card_home
                  img(slot="image" :src="`${mediaUrl}/${albumns[0].prev}`")
                  h3(slot="date") {{getDate(albumns[0].created)}}
                  p(slot="text") {{albumns[0].title}}
            .gallery_photo_content_second(v-if="albumns[1]")
              router-link.gallery_photo_content_second_item(:to="`photo-gallery/${albumns[1].id}`" v-if="albumns[1]")
                j-photo-preview.photo-card_home_small
                  img(slot="image" :src="`${mediaUrl}/${albumns[1].prev}`")
                  h3(slot="date") {{getDate(albumns[1].created)}}
              router-link.gallery_photo_content_second_item(:to="`photo-gallery/${albumns[1].id}`" v-if="albumns[2]")
                j-photo-preview.photo-card_home_small
                  img(slot="image" :src="`${mediaUrl}/${albumns[2].prev}`")
                  h3(slot="date") {{getDate(albumns[2].created)}}
          .show_more_button
            router-link(to="/photo-gallery") 
              j-button Перейти к альбомам
        .gallery_video(v-if="videoAlbum")
          h2 Видео
          .gallery_video_content
            router-link(:to="`/video-gallery/${videoAlbum[0].id}`")
              j-video-preview.video-card_home
                img(slot="image" :src='`${mediaUrl}/${videoAlbum[0].cover}`')
                h3(slot="title") {{getDate(videoAlbum[0].created)}}
          .show_more_button
            router-link(to="/video-gallery") 
              j-button Все видео
      //
      // Coach block
      //
      .coach-staff(v-if="staff")
        h2 Тренерский состав
        .swiper-slider
          swiper(:options='swiperOption')
            swiper-slide(v-for="(staff, index) in staff" :key="index")
              router-link(:to='`staff/${staff.id}`')
                j-human-card
                  img(slot="image" :src='`${mediaUrl}/${staff.photo}`')
                  span(slot="humanName") {{ staff.initials }} {{ staff.family }}
          .swiper-button-prev(slot='button-prev')
          .swiper-button-next(slot='button-next')
</template>


<script>
import {mapGetters} from 'vuex'
export default {
data () {
  return {
    albumns: null,
    videoAlbum: null,
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
  }
},
created () {
  this.$store.dispatch('getStaff')
  this.$store.dispatch('getNews')
  this.$store.dispatch('getPhotoAlbums')
    .then(() => {
      this.albumns = this.getLastPhotoAlbumns()
    })
  this.$store.dispatch('getVideoAlbums')
    .then(() => {
      this.videoAlbum = this.getLastVideoAlbumns()
    })
},
computed: {
  ...mapGetters(['staff', 'news', 'photoAlbums', 'videoAlbums'])
},
methods: {
  getLastPhotoAlbumns () {
    return this.photoAlbums.slice(0, 3)
  },
  getLastVideoAlbumns () {
    return this.videoAlbums.slice(0,1)
  },
  getDate (date) {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
          "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    const myDate = new Date(date)
    return `${myDate.getDate()} ${months[myDate.getMonth()]}`
  },
  getDateYear (date) {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
          "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    const myDate = new Date(date)
    return `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}`
  }
}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
h2
  margin 0 0 25px 0
.carousel_main
  display none
  @media screen and (min-width: md)
    display flex
    .swiper-container 
      margin 0
      padding 0
      height 300px
      img 
        width 100%
    .swiper-pagination
      display flex
      flex-direction row
      justify-content center
      padding 0 0 10px 0
    h1
      font-family 'Behrens Antiqua', sans-serif
      font-style normal
      font-weight normal
      font-size 64px
      line-height 76px
      color #FFFFFF
      margin -150px 0 0 0
      text-align center
  @media screen and (min-width: lg)
    .swiper-container 
      height 430px
    h1
      margin -150px 0 0 0
  @media screen and (min-width: xl)
    h1
      margin -220px 0 0 0
    .swiper-container 
      height 635px
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
      flexbox(row, nowrap, center, flex-start, stretch)
    &_main_item
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
        @media screen and (min-width: md)
          &:nth-child(2)
            margin 10px 0 0 0
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
      display flex
      @media screen and (min-width: md)
        padding 0 24px 15px 0 
        width 420px
        height 258px
.events,
.coach-staff
  margin 30px 0
  @media screen and (min-width: sm)
    margin 40px 0 0 0
  @media screen and (min-width: lg)
    margin 67px 0 0 0
.show_more_button
  flexbox(row, nowrap, center, stretch, stretch)
  width 100%
  margin 25px 0 0 0
.events_cards
  flexbox(column, wrap, space-between, center, stretch)
  @media screen and (min-width: md)
      flexbox(row, wrap, space-between, stretch, stretch)
</style>

