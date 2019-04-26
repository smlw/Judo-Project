<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          .one-education-material
            h2 Название учебного материала
            .one-education-material_text
              p Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку. Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку.
            Attach(icon="writting", type="link") Ссылка на прикрепленный файл
            .video
              h3 Видеоматериал
              .video_content
                .video_content_playvideo
                  a(href="/")
                    .gallery_card_video
                      img(src="../../assets/images/events_1.png")
                      .gallery_card_video_description
                        .gallery_card_video_play_content
                          .gallery_card_video_play
                .video_content_info
                  .video_content_info_header
                    .video_content_info_header_photo
                      img(src="../../assets/images/face_coach.png")
                    .video_content_info_header_title О. В. Долганов
                  .video_content_info_text
                    p Если тренер захочет оставить свой комментарий, то это будет отображаться рядом с видео. Если видео отсутствует, но тренер желает прокомментировать учебный материал, то это так же отображается ниже, под документом
                
                
</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
import Attach from '../../components/elements/UI/Attach'
export default {
  components: { MainLayout, BreadCrumbs, Attach } 
}
</script>

<style lang="stylus" scoped>
h3
  font-size: 40px
  line-height normal
  font-family "Behrens Antiqua", sans-serif
  margin 0 0 20px 0
.video
  margin 80px 0 0 0
.video_content
  display flex
  flex-direction row
  justify-content space-between
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
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
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
  .gallery
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content space-between
    align-items flex-start
    align-content stretch
    h3
      font-size 18px
      line-height normal
      font-weight bold
    p
      font-size 20px

    &_card_video
      width 475px
      height 254px
      color #fff
      font-family 'Noto Sans', sans-serif
      img
        width 100%
        height 100%
        object-fit cover
      &_play
        width 80px
        height 80px
        display flex
        justify-content center
        align-items center
        background-size contain
        background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg==')
        &_content
          position absolute
          top 0
          width 100%
          height 100%
          display flex
          justify-content center
          align-items center
      &_description
        position relative
        background rgba(0, 0, 0, 0.39)
        height 475px
        margin -254px 0 0 0
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        align-items flex-end
        align-content stretch
        &_date
          padding 19px
    &_card
      width 460px
      height 269px
      color #fff
      font-family 'Noto Sans', sans-serif
      h3
        font-size 18px
        line-height normal
        word-break break-all
      p
        font-size 20px
        line-height normal
      &_description
        height 269px
        margin -269px 0 0 0
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        align-items flex-end
        align-content stretch
        &_gradient
          height 60%
          width 100%
          overflow hidden
          background rgba(0,0,0,0.8)
          background linear-gradient(180deg, rgba(0, 31, 49, 0) 0%, rgba(0, 23, 36, 0.8) 76.09%, rgba(0, 0, 0, 0.8) 96.87%)
          box-sizing border-box
          padding 65px 20px 15px
        &_text
          overflow hidden

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

