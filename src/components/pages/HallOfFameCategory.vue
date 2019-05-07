<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .hall()
            .hall-container
              .hall-container_header
                h2 {{title}}
              .hall-container_content
                router-link(:to="`/human/${human.id}`" v-for="(human, index) in oneHuman" :key="index")
                  j-human-card
                    img(slot="image" :src='`${mediaUrl}/${human.photo}`')
                    span(slot="humanName") {{human.initials}} {{ human.family }}
                    span(slot="discharge") {{human.discharge}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      category: this.$route.params.category,
      title: null
    }
  },
  created () {
    this.$store.dispatch('getOneHuman', this.category)
    this.getTitle()
    this.addBread()
  },
  computed: {
    ...mapGetters(['oneHuman'])
  },
  methods: {
    getTitle () {
      switch (this.category) {
        case "unosha":
          this.title = 'Призеры юношеских соревнований'
          break;
        case "student":
          this.title = 'Призеры студенческих соревнований'
          break;
        case "master":
          this.title = 'Галерея мастеров'
          break;
      }
    },
    addBread () {
      this.$route.meta.breadcrumbs[2].name = this.title
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.hall-container_content
  flexbox(row, wrap, flex-start, stretch, stretch)
  .human-card
    width 250px
    img
      height 300px
    @media screen and (min-width: md)
      width 164px
      margin 0 auto
      img
        width 100%
        height 190px
    @media screen and (min-width: xl)
      margin 0 13px 40px 0
      width 172px
      img 
        height 210px

</style>

