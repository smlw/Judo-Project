<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .photo-gallery(v-if="albumPhotos")
            .photo-gallery_header
              h2 {{ albumPhotos.title }}
              .photo-gallery_date {{ dateFormat() }}
            .photo-gallery_content(v-viewer="options")
              template(v-for='{photo, photo_s} in albumPhotos.photos')
                img.photo-gallery_content_image(:src='`${mediaUrl}/${photo_s}`' :data-source="`${mediaUrl}/${photo}`" :key='photo')
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      date: null,
      albumId: this.$route.params.id,
      options: {  
        "inline": false, "button": true, "navbar": false, "title": true, "toolbar": true, 
        "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, 
        "scalable": true, "transition": true, 
        "fullscreen": false, "keyboard": true, 
        "url": "data-source" 
      }
    }
  },
  methods: {
    dateFormat () {
      const date = this.$store.state.photoGallery.albumPhotos.created
      const d = new Date(date);
      const formatDate = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear() + ' г.' ;
      
      return formatDate
    },
    addBread () {
      this.$route.meta.breadcrumbs[3].name = `${this.$store.state.photoGallery.albumPhotos.title}`
    },
  },
  created () {
    this.$store.dispatch('getAlbumPhotos', this.albumId)
      .then(() => {
        this.addBread()
      })
  },
  computed: {
    ...mapGetters(['albumPhotos'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.photo-gallery
  h2
    font-size 48px
    line-height 57px
    margin 0
  &_header
    margin 0 0 30px 0
  &_date
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-weight normal
    font-size 24px
    line-height 42px
    color #868686
  &_content
    flexbox(column, nowrap, flex-start, stretch, stretch)
    @media screen and (min-width: sm)
      flexbox(row, wrap, flex-start, stretch, stretch)
    &_image
      width 100%
      height 180px
      margin 0 0 20px 0
      object-fit cover
      display flex
      @media screen and (min-width: sm)
        width 157px
        height 150px
        margin 0 20px 20px 0
      @media screen and (min-width: lg)
        width 217px
        height 180px
        margin 0 20px 20px 0
      &:hover
        cursor pointer
      &:nth-child(4n)
        margin 0 0 20px 0
      @media screen and (min-width: xl)
        width 262px
</style>

