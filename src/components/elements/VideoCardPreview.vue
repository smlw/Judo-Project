<template lang="pug">
  .video-card
    slot(name="image")
    .video-card_description
      .video-card_play_content
        .video-card_play
      .video-card_description_date
        .video-card_title
          slot(name="title")
</template>

<script>
export default {
  props: ['settings']
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.video-card

  // Education material page styles
  &_material
    width 100%
    height 200px
    margin 0 0 20px
    .video-card_description
      height 200px
      margin-top -200px 
    @media screen and (min-width: lg)
      width 364px
      height 269px
      .video-card_description
        height 269px
        margin-top -269px

  // Home page styles
  &_home
    width 100%
    height 200px
    .video-card_description
      height 200px
      margin-top -200px 
    @media screen and (min-width: lg)
      width 364px
      height 269px
      .video-card_description
        height 269px
        margin-top -269px

  // Video page styles
  &_news
    width 100%
    height 200px
    margin 0 0 20px 0
    .video-card_description
      height 200px
      margin-top -200px 
    @media screen and (min-width: lg)
      width 297px
      height 250px
      .video-card_description
        height 250px
        margin-top -250px
        &_date
          padding 10px 14px
    @media screen and (min-width: xl)
      width 354px
      height 285px
      .video-card_description
        height 285px
        margin-top -285px
        &_date
          padding 10px 14px
    
  // Video gallery page styles
  &_video
    width 100%
    height 200px
    margin 0 0 20px 0
    .video-card_description
      height 200px
      margin-top -200px 
    // @media screen and (min-width: lg)
    //   width 364px
    //   height 203px
    //   .video-card_description
    //     height 203px
    //     margin-top -203px
    //     &_date
    //       padding 10px 14px
    @media screen and (min-width: xl)
      width 364px
      height 203px
      .video-card_description
        height 203px
        margin-top -203px
        &_date
          padding 10px 14px

  color #fff
  font-family 'Noto Sans', sans-serif
  h3
    font-size 18px
    line-height normal
    font-weight bold
    margin 0
    padding 0
  p
    font-size 20px
    margin 0
    padding 0
  img 
    width 100%
    height 100%
    object-fit cover
    display flex
  &_play
    flexbox(row, nowrap, center, center, stretch)
    width 80px!important
    height 80px!important
    background-size contain!important
    background-repeat no-repeat!important
    background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg==')!important
    &:hover
      background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg==')!important
    &_content
      flexbox(row, nowrap, center, center, stretch)
      top 0
      width 100%
      height 100%
      position absolute
      .small
        width 69px
        height 69px
  &_description
    flexbox(row, nowrap, space-between, flex-end, stretch)
    position relative
    background rgba(0, 0, 0, 0.39)
    &_date
      padding 19px
</style>

