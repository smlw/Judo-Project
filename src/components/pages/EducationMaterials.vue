<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          .education-materials
            h2 Учебные материалы  
            .education-materials_container
              Attach(icon="doc") Дзюдо и как применить хорошо знакомые навыки в плохо знакомой жизни
              Attach(icon="doc") Как правильно сформировать рацион ребенка, чтобы укрепить имунитет и увеличить его продуктивность. Еще линнее название для статьи мне не придумать
              Attach(icon="doc") Как все успевать? Краткий курс по выживанию
              Attach(icon="doc") Приемы дзюдо и как выучить их у себя дома не вставая с дивана, но лучше все-таки иногда вставать и пробовать
              Attach(icon="doc") Как быть молодцом?
</template>

<script>
import Attach from '../../components/elements/UI/Attach'
export default {
  components: { Attach } 
}
</script>

<style lang="stylus">
.education-materials
  h2
    margin-bottom 15px
  &_container
    margin-bottom 60px
    &:last-child
      margin-bottom 0
  .attach
    margin 0 0 22px 0
    .doc
      width 20px
      height 18px
      margin-top 9px
    &_content
      &_text 
        font-size 20px
</style>

