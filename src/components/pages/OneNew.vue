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
                span В минувшую субботу, в городе Озёрск, проходил традиционный XXXV турнир памяти Н.С. Мусатова среди юношей 2006-2008 г.р. Спортсмены из Челябинской, Пермской и Свердловской областей посетили соревнование и поборолись за медали. От ДЮСШ "Буревестник" в турнире приняли участие 4 спортсмена. Кузнецов Егор, в/к 66 кг. занял III место и получил специальный приз "За волю к победе".
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
      width 556px
      height 338px
      float left
      padding 0 20px 20px 0
      object-fit cover
</style>

