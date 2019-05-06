<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          article.article(v-if="oneInformation")
            h2 {{oneInformation.title}}
            p {{oneInformation.text}}
            a(:href="`${mediaUrl}/${oneInformation.file}`" download="" v-if="oneInformation.file")
              Attach(icon="writting", type="link") Прикрепленный файл
</template>

<script>
import {mapGetters} from 'vuex'
import Attach from '../../components/elements/UI/Attach'
export default {
  data () {
    return {
      informationId: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getOneInformation', this.informationId)
      .then(() => {
        this.addBread()
      })
  },
  methods: {
    addBread () {
      this.$route.meta.breadcrumbs[2].name = this.$store.state.information.oneInformation.title
    }
  },
  computed: {
    ...mapGetters(['oneInformation'])
  },
  components: { Attach }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.attach
  margin 30px 0 0 0
h2
  font-size 24px
  line-height normal
  margin 0 0 32px 0
  @media screen and (min-width md)
    font-size 48px
p
  font-family 'Noto Sans', sans-serif
  font-style normal
  font-weight normal
  font-size 16px
  line-height 20px
  @media screen and (min-width md)
    font-size 20px
    line-height 35px
</style>

