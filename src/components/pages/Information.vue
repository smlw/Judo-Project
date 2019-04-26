<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          LinkHeader
          .information
            .information_container
              h2 Для родителей
              Attach(icon="info") Какие документы необходимы для поступления в ДЮСОШ «Буревестник»
              Attach(icon="info") Как правильно сформировать рацион ребенка, чтобы укрепить имунитет и увеличить его продуктивность. Еще линнее название для статьи мне не придумать
              Attach(icon="info") Летний лагерь и что для этого требуется
            .information_container
              h2 Для студентов
              Attach(icon="info") Как все успевать? Краткий курс по выживанию
              Attach(icon="info") Дзюдо и как применить хорошо знакомые навыки в плохо знакомой жизни
              Attach(icon="info") Документы, необходимые для того, чтобы в начале года начать обучение на кафедре физической культуры УрФУ
            .information_container
              h2 Отделение дзюдо ДЮСШ «Буревестник»
              Attach(icon="info") О “Буревестнике”
</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
import LinkHeader from '../../components/elements/UI/LinkHeader'
import Attach from '../../components/elements/UI/Attach'
export default {
 components: { MainLayout, BreadCrumbs, LinkHeader, Attach }   
}
</script>

<style lang="stylus">
.information
  &_container
    margin-bottom 60px
    &:last-child
      margin-bottom 0
  h2
    margin-bottom 15px
  .attach
    margin 0 0 22px 0
    .info
      width 14px
      height 18px
      margin-top 9px
    &_content
      &_text 
        font-size 20px
</style>

