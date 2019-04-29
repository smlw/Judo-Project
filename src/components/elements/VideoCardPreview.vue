<template lang="pug">
  .video-card(:style="`width: ${this.settings.width}; height: ${this.settings.height}`")
    slot(name="image")
    .video-card_description(:style="`height: ${this.settings.height}; margin-top: -${this.settings.height}`")
      .video-card_play_content
        .video-card_play(:class="this.settings.icon")
      .video-card_description_date(:class="this.settings.titleClass")
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
.video-card
  color #fff
  font-family 'Noto Sans', sans-serif
  h3
    font-size 18px
    line-height normal
    font-weight bold
  p
    font-size 20px
  img 
    width 100%
    height 100%
    object-fit cover
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
    .sm-padding
      padding 8px 13px
    &_date
      padding 19px
</style>

