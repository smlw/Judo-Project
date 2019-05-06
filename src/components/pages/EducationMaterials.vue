<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .education-materials
            h2 Учебные материалы  
            .education-materials_container
              router-link(:to="`education-materials/${material.id}`" v-for="(material, index) in materials" :key="index")
                Attach(icon="doc") {{ material.title}}
</template>

<script>
import {mapGetters} from 'vuex'
import Attach from '../../components/elements/UI/Attach'
export default {
  created () {
    this.$store.dispatch('getMaterials')
  },
  computed: {
    ...mapGetters(['materials'])
  },
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

