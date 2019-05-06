<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          .human(v-if="oneStaff")
            .human_photo
              img( :src='`${mediaUrl}/${oneStaff.photo}`' )
            .human_content
              h2 {{ `${oneStaff.name} ${oneStaff.patronymic} ${oneStaff.family}`}}
              .human_info(v-for="(info, index) in oneStaff.info")
                .human_info_title {{info.name}}
                .human_info_descr {{info.content}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      staffId: this.$route.params.id
    }
  },
  created () {
    this.$store.dispatch('getOneStaff', this.staffId)
      .then( () => {
        this.addBread()
      })
  },
  methods: {
    addBread () {
      this.$route.meta.breadcrumbs[1].name = `${this.$store.state.staff.oneStaff.name} ${this.$store.state.staff.oneStaff.patronymic} ${this.$store.state.staff.oneStaff.family} `
    }
  },
  computed: {
    ...mapGetters(['oneStaff'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.human
  flexbox(column, nowrap, flex-start, stretch, stretch)
  @media screen and (min-width: md)
    flexbox(row, nowrap, flex-start, stretch, stretch)
  &_photo
    width 100%
    flex-shrink 0
    margin 0
    @media screen and (min-width: md)
      width 380px
      height 442px
      margin 0 10px 0 0
    @media screen and (min-width: lg)
      width 380px
      height 442px
      margin 0 55px 0 0
    img 
      width 100%
      height 100%
  &_content
    h2
      font-size 28px
      line-height 37px
      margin 0 0 8px 0
      text-align center
      @media screen and (min-width: md)
        font-size 48px
        line-height 57px
        text-align left
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

