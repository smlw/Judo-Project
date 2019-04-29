<template lang="pug">
  vue-plyr(:options="plyrSettings" controls ref="plyr")
    video(poster='poster.png', src='video.mp4')
      source(src='../../assets/video.mp4', type='video/mp4', size='720')


</template>

<script>
export default {
  data () {
    return {
      plyrSettings: {
        enabled: true,
        controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'settings', 'fullscreen'],
        hideControls: true,
        debug: true
        // disableContextMenu: true
        // displayDuration: false
        // tooltips: { controls: true, seek: true }
        // settings: ['captions', 'quality', 'speed', 'loop']
        // iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDEwOSAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NC41IDEwOUM4NC41OTk1IDEwOSAxMDkgODQuNTk5NSAxMDkgNTQuNUMxMDkgMjQuNDAwNSA4NC41OTk1IDAgNTQuNSAwQzI0LjQwMDUgMCAwIDI0LjQwMDUgMCA1NC41QzAgODQuNTk5NSAyNC40MDA1IDEwOSA1NC41IDEwOVpNMzkuODc4NCA4MC43MjEzTDgzLjc0NDIgNTQuNDk5OUwzOS44Nzg0IDI4LjI3ODZMMzkuODc4NCA4MC43MjEzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41OCIvPjwvc3ZnPg=='
      }
    }
  }
  // props: ['settings']
}
</script>
<style lang="stylus" scoped>

</style>

