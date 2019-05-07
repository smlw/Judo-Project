<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .article(v-if="oneNew")
            .article_info
              h2 {{oneNew.title}}
              .article_info_date {{ dateFormat() }}
            .article_content
              p 
                img(:src='`${mediaUrl}/${oneNew.mainimg}`')
                span {{ oneNew.text }}
            a(:href="`${mediaUrl}/${oneNew.file}`" download="")
              Attach(icon="doc", type="link" v-if="oneNew.file") Протокол соревнований    

</template>

<script>
import {mapGetters} from 'vuex'
import Attach from '../../components/elements/UI/Attach'
export default {
  data () {
    return {
      oneNewId: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getOneNew', this.oneNewId)
      .then( () => {
        this.addBread()
      })
  },
  methods: {
    addBread () {
      this.$route.meta.breadcrumbs[2].name = `${this.$store.state.news.oneNew.title}`
    },
    dateFormat () {
      const date = this.$store.state.news.oneNew.created
      const d = new Date(date);
      const formatDate = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear() + ' г.' ;

      return formatDate
    }
  },
  components: { Attach },
  computed: {
    ...mapGetters(['oneNew'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
h2
  margin 0
.attach
  margin 70px 0 0 0
.article
  margin 0 0 95px 0
  display inline-block
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
      width 100%
      float left
      object-fit cover
      @media screen and (min-width md)
        width 456px
        height 338px
        margin 0 20px 20px 0
      @media screen and (min-width lg)
        width 556px
</style>

