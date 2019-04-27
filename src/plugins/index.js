import VideoPlayer from '../components/elements/VideoCardPreview.vue'
import PhotoPreview from '../components/elements/PhotoCardPreview.vue'
import NewCardPreview from '../components/elements/NewCardPreview.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import BreadCrumbs from '../components/elements/UI/BreadCrumbs.vue'
import HumanCard from '../components/elements/HumanCard.vue'

export default {
  install (Vue) {
    Vue.component('MainLayout', MainLayout),
    Vue.component('j-video-preview', VideoPlayer),
    Vue.component('j-photo-preview', PhotoPreview),
    Vue.component('j-new-preview', NewCardPreview),
    Vue.component('j-breadcrumbs', BreadCrumbs),
    Vue.component('j-human-card', HumanCard)
  }
}

