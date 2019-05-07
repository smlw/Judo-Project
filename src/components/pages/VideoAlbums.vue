<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .album
            h2 Видеоальбомы
            .album_content
              .album_content_item(v-for="(videoCard, index) in videoAlbums" :key="index")
                router-link(:to="`/video-gallery/${videoCard.id}`")
                  j-photo-preview.photo-card_album
                    img(slot="image" :src='`${mediaUrl}/${videoCard.cover}`')
                    h3(slot="date") {{ videoCard.title }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  created () {
    this.$store.dispatch('getVideoAlbums')
  },
  computed: {
    ...mapGetters(['videoAlbums'])
  }
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
    height 210px
    @media screen and (min-width: md)
      width 210px
      margin 0 30px 30px 0
      &:nth-child(3n)
        margin 0 0 30px 0
    @media screen and (min-width: lg)
      width 290px
      margin 0 30px 30px 0
      &:nth-child(3n)
        margin 0 0 30px 0
    @media screen and (min-width: xl)
      margin 0 24px 30px 0
      width 350px
</style>

