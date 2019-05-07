import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import PhotoAlbums from '../components/pages/PhotoAlbums.vue'
import VideoAlbums from '../components/pages/VideoAlbums.vue'
import VideoAlbum from '../components/pages/VideoAlbum.vue'
import OneNew from '../components/pages/OneNew.vue'
import Staff from '../components/pages/Staff.vue'
import Human from '../components/pages/Human.vue'
import OneInformation from '../components/pages/OneInformation.vue'
import Information from '../components/pages/Information.vue'
import EducationMaterials from '../components/pages/EducationMaterials.vue'
import OneEducationMaterial from '../components/pages/OneEducationMaterial.vue'
import PhotoGallery from '../components/pages/PhotoGallery.vue'
import VideoGallery from '../components/pages/VideoGallery.vue'
import HallOfFame from '../components/pages/HallOfFame.vue'
import News from '../components/pages/News.vue'
import HallOfFameCategory from '../components/pages/HallOfFameCategory.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: 'Главная страница'}
    },
    {
      path: '/photo-gallery',
      component: PhotoAlbums,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: 'Фотогалерея', link: '' }
        ],
        title: 'Альбомы'
      }
    },
    {
      path: '/video-gallery',
      component: VideoAlbums,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: 'Видеогалерея', link: '/'},
        ],
        title: 'Видеоальбомы'
      }
    },
    {
      path: '/video-gallery/:album',
      component: VideoAlbum,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: 'Видеогалерея', link: '/video-gallery'},
          { name: 'Название альбома', link: '/'},
        ],
        title: 'Видеоальбомы'
      }
    },
    {
      path: '/news/:id',
      component: OneNew,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: '', link: ''}
        ],
        title: 'Новость'
      }
    },
    {
      path: '/staff/:id',
      component: Staff,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: '', link: '/'}
        ],
        title: 'Тренер'
      }
    },
    {
      name: 'human profile',
      path: '/human/:id',
      component: Human,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Доска почета', link: '/hall'},
          { name: '', link: '/'}
        ],
        title: 'Профиль'
      }
    },
    {
      path: '/information/:id',
      component: OneInformation,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Информация', link: '/information'},
          { name: '', link: '/'}
        ],
        title: 'Статья'
      }
    },
    {
      path: '/information',
      component: Information,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Информация', link: '' }
        ],
        title: 'Информация'
      }
    },
    {
      path: '/education-materials',
      component: EducationMaterials,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Учебные материалы', link: '' }
        ],
        title: 'Информация'
      }
    },
    {
      path: '/education-materials/:id',
      component: OneEducationMaterial,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Учебные материалы', link: '/education-materials'},
          { name: '', link: '/'}
        ],
        title: 'Учебные материалы'
      }
    },
    {
      path: '/photo-gallery/:id',
      component: PhotoGallery,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: 'Фотогалерея', link: '/photo-gallery' },
          { name: '', link: '' }
        ],
        title: 'Фотогалерея'
      }
    },
    {
      path: '/video-gallery/:album/:video',
      component: VideoGallery,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '/news'},
          { name: 'Видеогалерея', link: '/video-gallery' },
          { name: '', link: '/video-gallery/'},
          { name: '', link: '' }
        ],
        title: 'Видеогалерея'
      }
    },
    {
      path: '/hall',
      component: HallOfFame,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Доска почета', link: '' }
        ],
        title: 'Доска почета'
      }
    },
    {
      path: '/hall/:category',
      component: HallOfFameCategory,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Доска почета', link: '/hall' },
          { name: '', link: '' }
        ],
        title: 'Новости'
      }
    },
    {
      path: '/news',
      component: News,
      meta: {
        breadcrumbs: [
          { name: 'Главная', link: '/'},
          { name: 'Новости', link: '' }
        ],
        title: 'Новости'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
