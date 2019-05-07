import VideoPlayerPreview from '../components/elements/VideoCardPreview.vue'
import PhotoPreview from '../components/elements/PhotoCardPreview.vue'
import NewCardPreview from '../components/elements/NewCardPreview.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import BreadCrumbs from '../components/elements/UI/BreadCrumbs.vue'
import HumanCard from '../components/elements/HumanCard.vue'
import UpcomingEventCard from '../components/elements/UpcomingEventCard.vue'
import Button from '../components/elements/UI/Button.vue'

export default {
  install (Vue) {
    Vue.mixin({
      computed: {
          mediaUrl () {
              return process.env.VUE_APP_BACK_URL
          },
      }
    })

    Vue.component('MainLayout', MainLayout),
    Vue.component('j-video-preview', VideoPlayerPreview),
    Vue.component('j-photo-preview', PhotoPreview),
    Vue.component('j-new-preview', NewCardPreview),
    Vue.component('j-breadcrumbs', BreadCrumbs),
    Vue.component('j-human-card', HumanCard),
    Vue.component('j-upcoming-card', UpcomingEventCard),
    Vue.component('j-button', Button)
  }
}

