import VideoPlayer from '../components/elements/VideoCardPreview.vue'
import PhotoPreview from '../components/elements/PhotoCardPreview.vue'

export default {
  install (Vue) {
    Vue.component('j-video-preview', VideoPlayer),
    Vue.component('j-photo-preview', PhotoPreview)
  }
}

