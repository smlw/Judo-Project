<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .album
            h2 Видеоальбомы
            .album_content
              .album_content_item(v-for="(photoCard, index) in 4" :key="index")
                router-link(:to="`/video-gallery/${index}`")
                  j-photo-preview.photo-card_album()
                    img(slot="image" src="../../assets/images/events_2.png")
                    h3(slot="date") Мастер-класс от Колесникова Сергея Викторовича
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.album_content
  flexbox(row, wrap, flex-start, stretch, stretch)
  margin 35px 0 0 0
  &_item
    margin 15px 0
    width 100%
    @media screen and (min-width: md)
      width 210px
      margin 0 30px 30px 0
      &:nth-child(3n)
        margin 0 0 15px 0
    @media screen and (min-width: lg)
      width 210px
      margin 0 30px 30px 0
      &:nth-child(3n)
        margin 0 30px 30px 0
      &:nth-child(4n)
        margin 0 0 15px 0
    @media screen and (min-width: xl)
      margin 0 24px 25px 0
      width 350px
      &:nth-child(3n)
        margin 0 0 15px 0
</style>

