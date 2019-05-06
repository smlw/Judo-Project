<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container(v-if="information")
        .wrapper-fluid_content
          j-breadcrumbs
          LinkHeader
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
import LinkHeader from '../../components/elements/UI/LinkHeader'
import Attach from '../../components/elements/UI/Attach'
export default {
  created () {
    this.$store.dispatch('getInformation')
  },
  computed: {
    ...mapGetters(['information', 'informationParents', 'informationChildren', 'informationOther'])
  },
  components: { LinkHeader, Attach }   
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

