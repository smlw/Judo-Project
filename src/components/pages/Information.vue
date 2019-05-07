<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container(v-if="information")
        .wrapper-fluid_content
          j-breadcrumbs
          .link-header
            router-link(:to="`${link.to}`" v-for="(link, index) in headerLinks" :key="index")
              j-button.link-header_button {{ link.name }}
          .information
            .information_container
              h2 Для родителей
              router-link(:to="`information/${info.id}`" v-for="(info, index) in informationParents" :key="index")
                Attach(icon="info") {{info.title}}
            .information_container
              h2 Для детей
              router-link(:to="`information/${info.id}`" v-for="(info, index) in informationChildren" :key="index")
                Attach(icon="info") {{info.title}}
            .information_container
              h2 Другое
              router-link(:to="`information/${info.id}`" v-for="(info, index) in informationOther" :key="index")
                Attach(icon="info") {{info.title}}
</template>

<script>
import {mapGetters} from 'vuex'
import Attach from '../../components/elements/UI/Attach'
export default {
  data () {
    return {
      headerLinks: [
        {name: 'Для родителей', to: '/information'},
        {name: 'Для детей', to: '/information'},
        {name: 'Другое', to: '/information'},
      ]
    }
  },
  created () {
    this.$store.dispatch('getInformation')
  },
  computed: {
    ...mapGetters(['information', 'informationParents', 'informationChildren', 'informationOther'])
  },
  components: { Attach }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.link-header
  flexbox(column, nowrap, space-between, stretch, stretch)
  margin 0 0 45px 0
  @media screen and (min-width: lg)
    flexbox(row, nowrap, space-between, stretch, stretch)
  .link-header_button
    @media screen and (max-width sm)
      margin 10px auto
      width 100%
    @media screen and (min-width md)
      margin 10px auto
      padding 7px
      width 200px
    @media screen and (min-width xl)
      width 349px
      padding 7px 40px

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

