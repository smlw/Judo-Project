import VideoPlayer from '../components/elements/VideoCardPreview.vue'
import PhotoPreview from '../components/elements/PhotoCardPreview.vue'
import NewCardPreview from '../components/elements/NewCardPreview.vue'

export default {
  install (Vue) {
    Vue.component('j-video-preview', VideoPlayer),
    Vue.component('j-photo-preview', PhotoPreview),
    Vue.component('j-new-preview', NewCardPreview)
  }
}

