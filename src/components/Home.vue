<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .events
          h2 События
          .events_cards
            a(href="/")
              .events_cards_one
                img(src="../assets/images/events_1.png")
                .events_cards_one_description
                  .events_cards_one_description_gradient
                    .events_cards_one_description_date
                      h3 13апреля 2018
                    .events_cards_one_description_text
                      p С 22 апреля по 18 мая 2019 года в Свердловской области пройдет эко-марафон переработка «Сдай макулатуру – спаси дерево!». Основная задача акции – привлечь внимание людей к ресурсосбережению, заставить задуматься над...
            a(href="/")
              .events_cards_one
                img(src="../assets/images/events_2.png")
                .events_cards_one_description
                  .events_cards_one_description_gradient
                    .events_cards_one_description_date
                      h3 14 апреля 2018
                    .events_cards_one_description_text
                      p Дзюдо: турнир памяти Н.С. Мусатова
            a(href="/")
              .events_cards_one
                img(src="../assets/images/events_3.png")
                .events_cards_one_description
                  .events_cards_one_description_gradient
                    .events_cards_one_description_date
                      h3 15 апреля 2018
                    .events_cards_one_description_text
                      p Дзюдо: мастер класс от Колесникова Сергея Викторовича


        .about
          h2 Об отделении дзюдо в ДЮСШ "Буревестник"
          .about_content
            p 
              img(src="../assets/images/events_1.png")
              span Основной целью деятельности школы является образовательная деятельность по дополнительным общеобразовательным программам в сфере физической культуры и спорта для детей до 18 лет: бокс, гандбол, дзюдо, карате, плавание, футбол. Основным видом деятельности Учреждения является дополнительное образование детей и взрослых: 1) реализация дополнительных предпрофессиональных программ 1) реализация дополнительных предпрофессиональных программ в области физической культуры и спорта; 2) реализация дополнительных общеразвивающих программ. Обучение в спортивной школе "Буревестник" ведется на бесплатной основе.
</template>

<script>
import MainLayout from '../components/layouts/MainLayout'
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста'
    }
  },
  components: { MainLayout }
}
</script>

<style lang="stylus" scoped>
h2
  margin 0 0 25px 0
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
.events
  width 100%
  margin 0 0 95px 0
.events_cards
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items flex-start
  align-content stretch
  &_one
    width 365px
    height 256px
    &_description
      &:hover
        .events_cards_one_description_gradient
          transition all 0.25s ease
          background rgba(0,0,0,0.7)
          height 100%
          padding 11px 18px
          .events_cards_one_description_text
            transition all 0.25s ease
            height 100%
      height 256px
      margin -256px 0 0 0
      display flex
      flex-direction column
      flex-wrap wrap
      justify-content flex-end
      align-content flex-start
      align-items flex-start
      line-height normal
      font-family 'Noto Sans', sans-serif
      color #fff
      &_date
        font-size 24px
        font-weight bold
      &_text
        font-size 18px
        height 50%
        overflow hidden
      &_gradient
        height 60%
        overflow hidden
        background rgba(0,0,0,0.7)
        background linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 96.87%)
        box-sizing border-box
        padding 50px 18px 12px
</style>
