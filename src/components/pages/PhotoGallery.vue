<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          .photo-gallery
            .photo-gallery_header
              h2 Дзюдо: турнир памяти Н.С. Мусатова
              .photo-gallery_date 21.02.2019
            .photo-gallery_content(v-viewer="options")
              template(v-for='{source, thumbnail} in images')
                img.photo-gallery_content_image(:src='thumbnail' :data-source="source" :key='source')
</template>

<script>
export default {
  data () {
    return {
      options: {  "inline": false, "button": true, "navbar": false, "title": true, "toolbar": true, 
                  "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, 
                  "scalable": true, "transition": true, 
                  "fullscreen": false, "keyboard": true, 
                  "url": "data-source" },
      images: [
        {thumbnail: 'https://picsum.photos/200/200?image=100', source: 'https://picsum.photos/1200/1200?image=100'},
        {thumbnail: 'https://picsum.photos/200/200?image=101', source: 'https://picsum.photos/1200/720?image=101'},
        {thumbnail: 'https://picsum.photos/200/200?image=102', source: 'https://picsum.photos/1200/720?image=102'},
        {thumbnail: 'https://picsum.photos/200/200?image=103', source: 'https://picsum.photos/1200/720?image=103'},
        {thumbnail: 'https://picsum.photos/200/200?image=104', source: 'https://picsum.photos/1200/720?image=104'},
        {thumbnail: 'https://picsum.photos/200/200?image=200', source: 'https://picsum.photos/1200/720?image=200'}
      ]
    }
  },
  beforeMount () {
    this.$route.meta.breadcrumbs[3].name = 'Название альбома из запроса'
  }   
}
</script>

<style lang="stylus" scoped>
.photo-gallery
  h2
    font-size 48px
    line-height 57px
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
    display flex
    flex-direction row
    justify-content flex-start
    flex-wrap wrap
    &_image
      width 268px
      height 180px
      margin 0 20px 20px 0
      &:hover
        cursor pointer
      &:nth-child(4n)
        margin 0 0 20px 0
      img 
        width 100%
        height 100%
</style>

