<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .events
          h2 События
          .events_cards
            Card( v-for="(card, index) in eventCard" :key="index"
                  width="365px", height="256px", margin="-256px"
                  :img="card.img"
                  :linkTo="card.linkTo"
                )
              h3(slot="date") {{ card.date }}
              p(slot="text") {{ card.text }}

        .about
          h2 Об отделении дзюдо в ДЮСШ "Буревестник"
          .about_content
            p 
              img(src="../assets/images/events_1.png")
              span Основной целью деятельности школы является образовательная деятельность по дополнительным общеобразовательным программам в сфере физической культуры и спорта для детей до 18 лет: бокс, гандбол, дзюдо, карате, плавание, футбол. Основным видом деятельности Учреждения является дополнительное образование детей и взрослых: 1) реализация дополнительных предпрофессиональных программ 1) реализация дополнительных предпрофессиональных программ в области физической культуры и спорта; 2) реализация дополнительных общеразвивающих программ. Обучение в спортивной школе "Буревестник" ведется на бесплатной основе.
        .gallery
          .gallery_photo
            h2 Фото
            .gallery_photo_content
              .gallery_photo_content_main
                .events_cards_one
                  img(src="../assets/images/events_2.png")
                  .events_cards_one_description
                    .events_cards_one_description_gradient
                      .events_cards_one_description_date
                        h3 14 апреля 2018
                      .events_cards_one_description_text
                        p Дзюдо: турнир памяти Н.С. Мусатова
              .gallery_photo_content_second

          .gallery_video
            h2 Видео
            .gallery_video_content
              
</template>

<script>
import MainLayout from '../components/layouts/MainLayout'
import Card from '../components/elements/Card'
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста',
      eventCard: [
        { linkTo: '/link/1', img: '~/../../assets/images/events_1.png', date: '12 апреля 2018', text: 'С 22 апреля по 18 мая 2019 года в Свердловской области пройдет эко-марафон переработка «Сдай макулатуру – спаси дерево!». Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'},
        { linkTo: '/link/2', img: '123', date: '13 апреля 2018', text: 'Дзюдо: мастер класс от Колесникова Сергея Викторовича'},
        { linkTo: '/link/3', img: '123', date: '14 апреля 2018', text: 'Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...'}
      ]
    }
  },
  components: { MainLayout, Card }
}
</script>

<style lang="stylus" scoped>
h2
  margin 0 0 25px 0
.gallery
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items flex-start
  align-content stretch
  &_photo
    flex-grow 2
  &_video
    flex-grow 1
.about
  margin 0 0 95px 0
  &_content
    p
      line-height 35px
      font-size 20px
    img
      width 420px
      height 258px
      float left
      padding 0 24px 15px 0 
.events,
.gallery
  width 100%
  margin 0 0 95px 0
.events_cards
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items flex-start
  align-content stretch
</style>
