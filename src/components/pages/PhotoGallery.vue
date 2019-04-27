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
            .photo-gallery_content
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")
              .photo-gallery_content_image
                img(src="../../assets/images/events_1.png")

</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
export default {
  beforeMount () {
    this.$route.meta.breadcrumbs[3].name = 'Название альбома из запроса'
  },
  components: { MainLayout, BreadCrumbs }   
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
      &:nth-child(4n)
        margin 0 0 20px 0
      img 
        width 100%
        height 100%
</style>

