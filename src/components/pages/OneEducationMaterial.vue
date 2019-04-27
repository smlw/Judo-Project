<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          .one-education-material
            h2 Название учебного материала
            .one-education-material_text
              p Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку. Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку.
            Attach(icon="writting", type="link") Ссылка на прикрепленный файл
            .video
              h2 Видеоматериал
              .video_content
                .video_content_playvideo
                  j-video-preview(:settings="videoCardSettings")
                    img(slot="image" src="../../assets/images/slider-1.png")
                .video_content_info
                  .video_content_info_header
                    .video_content_info_header_photo
                      img(src="../../assets/images/face_coach.png")
                    .video_content_info_header_title О. В. Долганов
                  .video_content_info_text
                    p Если тренер захочет оставить свой комментарий, то это будет отображаться рядом с видео. Если видео отсутствует, но тренер желает прокомментировать учебный материал, то это так же отображается ниже, под документом
                
                
</template>

<script>
import Attach from '../../components/elements/UI/Attach'
export default {
  data () {
    return {
      videoCardSettings: {
        width: '475px',
        height: '254px',
        titleClass: 'normal'
      },
    }
  },
  beforeMount () {
    this.$route.meta.breadcrumbs[2].name = 'Название учебного материала из запроса'
  },
  components: { Attach } 
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
.video
  margin 80px 0 0 0
.video_content
  flexbox(row, nowrap, space-between, stretch, stretch)
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

