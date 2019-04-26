<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          BreadCrumbs
          .human
            .human_photo
              img(src='../../assets/images/face_coach.png')
            .human_content
              h2 Олег Владиславович Долганов
              .human_info
                .human_info_title Уровень образования, квалификация
                .human_info_descr Высшее образование.
              .human_info
                .human_info_title Квалификационная категория: 
                .human_info_descr Высшая квалификационная категория
              .human_info
                .human_info_title Курсы повышения квалификации: 
                .human_info_descr 
              .human_info
                .human_info_title Ученая степень: 
                .human_info_descr Кандидат педагогических наук.
              .human_info
                .human_info_title Общий стаж работы:
                .human_info_descr 
              .human_info
                .human_info_title Стаж работы по специальности:
                .human_info_descr 
</template>

<script>
import MainLayout from '../../components/layouts/MainLayout'
import BreadCrumbs from '../../components/elements/UI/BreadCrumbs'
export default {
  beforeMount () {
    this.$route.meta.breadcrumbs[1].name = 'Имя тренера из запроса'
  },
  components: { MainLayout, BreadCrumbs }   
}
</script>

<style lang="stylus" scoped>
.human
  display flex
  flex-direction row
  justify-content flex-start
  &_photo
    width 380px
    height 442px
    margin 0 30px 0 0 
    flex-shrink 0
    img 
      width 100%
  &_content
    h2
      margin 0 0 20px 0
  &_info
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-size 18px
    line-height 32px
    margin 0 0 18px 0
    &_description
      font-weight normal
    &_title
      font-weight bold
</style>

