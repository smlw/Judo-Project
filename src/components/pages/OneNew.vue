<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          .article
            .article_info
              h2 Дзюдо: турнир памяти Н.С. Мусатова
              .article_info_date 21.02.2019 г.
            .article_content
              p 
                img(src="../../assets/images/events_1.png")
                span Основной целью деятельности школы является образовательная деятельность по дополнительным общеобразовательным программам в сфере физической культуры и спорта для детей до 18 лет: бокс, гандбол, дзюдо, карате, плавание, футбол. Основным видом деятельности Учреждения является дополнительное образование детей и взрослых: 1) реализация дополнительных предпрофессиональных программ 1) реализация дополнительных предпрофессиональных программ в области физической культуры и спорта; 2) реализация дополнительных общеразвивающих программ. Обучение в спортивной школе "Буревестник" ведется на бесплатной основе.
            Attach(icon="doc", type="link") Протокол соревнований    

</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
import Attach from '../../components/elements/UI/Attach'
export default {
 components: { MainLayout, BreadCrumbs, Attach }   
}
</script>

<style lang="stylus" scoped>
.attach
  margin 70px 0 0 0
.article
  margin 0 0 95px 0
  &_info
    margin 0 0 30px 0  
    &_date
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight normal
      font-size 24px
      line-height 42px
      color #868686
  &_content
    p
      line-height 35px
      font-size 20px
    img
      width 420px
      height 258px
      float left
      padding 0 24px 15px 0
</style>

