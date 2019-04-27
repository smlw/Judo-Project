<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          article.article
            h2 Как правильно сформировать рацион ребенка, чтобы укрепить имунитет и увеличить его продуктивность. Еще линнее название для статьи мне не придумать    
            p Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку. Тут будет статья, если такая имеется, а если не имеется, то не беда, на странице будет отображаться документ-ссылка. Если имеется видео, то оно будет размещено ниже. Если такого не имеется, то тоже не беда, можно останить название учебного материала и документ-ссылку
            Attach(icon="writting", type="link") Ссылка на прикрепленный файл
</template>

<script>
import Attach from '../../components/elements/UI/Attach'
export default {
  beforeMount () {
    this.$route.meta.breadcrumbs[2].name = 'Название статьи из запроса'
  },
  components: { Attach }   
}
</script>

<style lang="stylus" scoped>
.attach
  margin 30px 0 0 0
h2
  font-size 48px
  line-height normal
  margin 0 0 32px 0
p
  font-family 'Noto Sans', sans-serif
  font-style normal
  font-weight normal
  font-size 20px
  line-height 35px
</style>

