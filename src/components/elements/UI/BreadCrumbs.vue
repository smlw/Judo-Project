<template lang="pug">
  .bread-crumbs
    .bread-crumbs_item( v-for="(breadcrumb, index) in breadCrumbsList" 
                        :key="index"
                        @click="routeTo(index)"
                      )
      router-link(:to="breadcrumb.link", tag="a") {{breadcrumb.name}}

</template>

<script>
export default {
  name: 'Bread',
  data () {
    return {
      breadCrumbsList : []
    }
  },
  mounted () {
    this.updateList()
  },
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  methods: {
    routeTo (pRouteTo) {
      if ( this.breadCrumbsList[pRouteTo].link ) this.$router.push(this.breadCrumbsList[pRouteTo].link)
    },
    updateList () {
      this.breadCrumbsList = this.$route.meta.breadcrumbs
    }
  }
}
</script>

<style lang="stylus" scoped> 
@import '../../../assets/stylus/mixins/flexbox'
@import '../../../assets/stylus/base/breakpoints'
.bread-crumbs
  font-family 'Noto Sans', sans-serif
  font-style normal
  font-weight normal
  font-size 22px
  line-height normal
  color #868686
  flexbox(column, nowrap, stretch, flex-start, stretch)
  margin 20px 0
  @media screen and (min-width: md)
    flexbox(row, nowrap, flex-start, stretch, stretch)
    margin 50px 0 37px 0

  &_item
    display flex
    flex-direction row
    a
      text-decoration-line underline
      color #868686
      &:hover
        text-decoration-line none
    &:before
      content '>'
      margin 0 15px 0 0
    &:first-child
      &:before
        content ''
        margin 0
    &:last-child
      color #000
      a
        color #000
        text-decoration-line none
    @media screen and (min-width: md)
      &:before
        margin 0 15px
</style>
