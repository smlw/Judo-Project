<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .album
            h2(v-if="videoAlbum") Видеоальбом {{ videoAlbum.title }}
            .album_content(v-if="relatedVideos")
              .album_content_item(v-for="(relVideo, index) in relatedVideos.videos" :key="index")
                router-link(:to="`/video-gallery/${relatedVideos.id}/${relVideo.id}`")
                  j-video-preview.video-card_video
                    img(slot="image" :src='`${mediaUrl}/${relVideo.cover}`')
                    h3(slot="title") {{ relVideo.title }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      albumId: this.$route.params.album
    }
  },
  created () {
    this.$store.dispatch('getRelatedVideos', this.albumId)
    this.$store.dispatch('getVideoAlbum', this.albumId)
      .then(() => {
        this.addBread()
      })
  },
  computed: {
    ...mapGetters(['relatedVideos', 'videoAlbum'])
  },
  methods: {
    addBread () {
      this.$route.meta.breadcrumbs[3].name = `${this.$store.getters.videoAlbum.title}`
    }
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

