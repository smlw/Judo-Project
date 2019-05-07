<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .one-education-material(v-if="oneMaterial")
            h2 {{ oneMaterial.title }}
            .one-education-material_text
              p {{ oneMaterial.text }}
            router-link(:to="`${oneMaterial.file}`" v-if="oneMaterial.file")
              Attach(icon="writting", type="link") Прикрепленный фай
            .video(v-if="oneMaterial.video.trener != null || oneMaterial.video.cover != null")
              h2 Видеоматериал
              .video_content
                .video_content_playvideo(v-if="oneMaterial.video.video")
                  router-link(:to="`/video-gallery/${oneMaterial.video.video}`")
                    j-video-preview.video-card_material
                      img(slot="image" :src='`${mediaUrl}/${oneMaterial.video.cover}`')
                .video_content_info(v-if="oneMaterial.video.trener")
                  .video_content_info_header(v-if="oneStaff")
                    .video_content_info_header_photo
                      img(:src='`${mediaUrl}/${oneStaff.photo}`')
                    .video_content_info_header_title {{oneStaff.initials}} {{oneStaff.family}} 
                  .video_content_info_text
                    p {{oneMaterial.video.comment}}
                
                
</template>

<script>
import {mapGetters} from 'vuex'
import Attach from '../../components/elements/UI/Attach'
export default {
  data () {
    return {
      materialId: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getOneMaterial', this.materialId)
      .then(() => {
        this.addBread()
        this.$store.dispatch('getOneStaff', this.$store.state.material.oneMaterial.video.trener)
      })
  },
  computed: {
    ...mapGetters(['oneMaterial', 'oneStaff'])
  },
  methods: {
    addBread () {
      this.$route.meta.breadcrumbs[2].name = this.$store.state.material.oneMaterial.title
    }
  },
  components: { Attach } 
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.video
  margin 80px 0 0 0
.video_content
  flexbox(column, nowrap, space-between, stretch, stretch)
  @media screen and (min-width: md)
    flexbox(row, nowrap, flex-start, stretch, stretch)
    &_playvideo
      margin 0 60px 0 0
  &_info
    &_text
      font-family Noto Sans
      font-style normal
      font-weight normal
      font-size 18px
      line-height 32px
  &_info_header
    flexbox(row, nowrap, flex-start, center, stretch)
    margin 0 0 17px 0
    &_photo
      width 84px
      height 84px
      img 
        width 100%
        height 100%
        border-radius 50px
        object-fit cover
    &_title
      margin 0 0 0 25px
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight normal
      font-size 24px
      line-height 33px

.one-education-material
  h2
    margin-bottom 35px
    font-size 48px
  &_text
    margin 0 0 20px 0
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-weight normal
    font-size 20px
    line-height 35px
</style>

