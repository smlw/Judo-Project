<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .link-header
            router-link(:to="`${link.to}`" v-for="(link, index) in headerLinks" :key="index")
              j-button.link-header_button {{ link.name }}
          .news
            // Block of news
            .news_news
              h2 Новости
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(card, index) in news" :key="index")
                    router-link(:to="`/news/${card.id}`" )
                      j-new-preview
                        img(slot="image" :src='`${mediaUrl}/${card.mainimg}`')
                        h3(slot="date") 12 апреля
                        p(slot="text") {{ card.title }}
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')  
              .news_button
                router-link(to='/news')
                  j-button Больше событий
            .news_events
              h2 Грядущие события
              .swiper-slider
                swiper(:options='swiperEvents')
                  swiper-slide(v-for="(event, index) in events" :key="index")
                    router-link(:to="`news/${event.id}`")
                      j-upcoming-card
                        img(slot="image" :src='`${mediaUrl}/${event.mainimg}`')
                        h3(slot="title") {{ event.title }}
                        p(slot="description") {{ event.anons }}
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')  
            .news_album
              h2 Фотогалерея
              .album_content
                .album_content_item(v-for="(photoCard, index) in 3" :key="index")
                  router-link(:to="`/photo-gallery/${photoCard.id}`")
                    j-photo-preview.photo-card_news
                      img(slot="image" :src='`${mediaUrl}/${photoCard.prev}`')
                      h3(slot="date") {{ photoCard.title}}
              .news_button
                router-link(to="/photo-gallery")
                  j-button Перейти ко всем альбомам

            .news_video_album
              h2 Видео
              .news_video_album_content
                .news_video_album_content_item(v-for="(videoCard, index) in videoAlbums" :key="index")
                  router-link(:to="`/video-gallery/${videoCard.id}`" )
                    j-video-preview.video-card_news
                      img(slot="image" :src='`${mediaUrl}/${videoCard.cover}`')
                      h3(slot="title") {{videoCard.title}}
              .news_button
                router-link(to="/video-gallery")
                  j-button Больше видео
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      headerLinks: [
        {name: 'Новости', to: '/news'},
        {name: 'Грядущие события', to: '/news'},
        {name: 'Фотогалерея', to: '/photo-gallery'},
        {name: 'Видеогалерея', to: '/video-gallery'},
      ],
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
          }
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
  created () {
    this.$store.dispatch('getNews')
    this.$store.dispatch('getPhotoAlbums')
    this.$store.dispatch('getVideoAlbums')
  },
  computed: {
    ...mapGetters(['news', 'events', 'photoAlbums', 'videoAlbums'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.link-header
  flexbox(column, nowrap, space-between, stretch, stretch)
  margin 0 0 45px 0
  @media screen and (min-width: lg)
    flexbox(row, nowrap, space-between, stretch, stretch)
  .link-header_button
    @media screen and (max-width sm)
      margin 10px auto
      width 100%
    @media screen and (min-width md)
      margin 10px auto
      padding 7px
      width 200px
    @media screen and (min-width xl)
      width 268px
      padding 7px 40px

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

.new-card,
.upcoming-card
  margin 0 auto!important

.news_video_album
  &_content
    flexbox(column, wrap, flex-start, flex-start, stretch)
    @media screen and (min-width: md)
      flexbox(row, wrap, space-between, flex-start, stretch)

.album_content,
.news_video_album_content
  flexbox(row, wrap, flex-start, flex-start, stretch)
  &_item
    margin 0 0 10px 0
    @media screen and (max-width sm)
      width 100%
    @media screen and (min-width md)
      padding 0 24px 25px 0
      width 50%
      &:nth-child(3n)
        margin 0 0 15px 0
    @media screen and (min-width lg)
      padding 10px
      width 33.333%
      .photo-card_news,
      .video-card_news
        width 100%
      &:nth-child(3n)
        margin 0 0 15px 0
      
.gallery
  flexbox(row, nowrap, space-between, flex-start, stretch)
</style>

