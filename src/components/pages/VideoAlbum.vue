<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          .album
            h2 Видеоальбомы
            .album_content
              .album_content_item(v-for="(photoCard, index) in 4" :key="index")
                router-link(:to="`/video-gallery/${index}`")
                  j-photo-preview(:settings="photoCardSettings")
                    img(slot="image" src="../../assets/images/events_2.png")
                    h3(slot="date") Мастер-класс от Колесникова Сергея Викторовича
</template>

<script>
export default {
  data () {
    return { 
      photoCardSettings: {
        width: '364px',
        height: '211px',
        titleClass: 'sm-padding',
        small: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.album_content
  flexbox(row, wrap, flex-start, stretch, stretch)
  margin 35px 0 0 0
  &_item
    margin 0 24px 25px 0
    &:nth-child(3n)
      margin 0 0 15px 0
</style>

