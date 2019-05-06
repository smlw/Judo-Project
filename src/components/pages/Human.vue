<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container(v-if="oneHuman")
        .wrapper-fluid_content
          j-breadcrumbs
          .human
            .human_photo
              img(:src='`${mediaUrl}/${oneHuman.photo}`')
            .human_content
              .human_header
                h2 {{ `${oneHuman.name} ${oneHuman.family}` }}
                .human_old {{ currentAge() }}
              .human_info
                .human_info_text
                  p {{ oneHuman.description }}
          .human-progress
            h2 Достижения
            .human-progress_content(v-if="oneHuman.medals")
              .human-progress_item(v-for="(progress, index) in oneHuman.medals" :key="index")
                .human-progress_item_icon(:class="progress.medal")
                .human-progress_item_text {{ progress.title }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      humanId: this.$route.params.id,
    }
  },
  created () {
    this.$store.dispatch('getOneHuman', this.humanId)
      .then( () => {
        this.addBread()
      })
  },
  methods: {
    currentAge () { 
      const date = this.$store.state.human.oneHuman.birthday;
      const years = (new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0
      const titles = ['год', 'года', 'лет']
      const cases = [2, 0, 1, 1, 1, 2];  
      const title = titles[ (years%100>4 && years%100<20)? 2 : cases[(years%10<5)?years%10:5] ]; 

      return `${years} ${title}`
    },
    addBread () {
      this.$route.meta.breadcrumbs[2].name = `${this.$store.state.human.oneHuman.name} ${this.$store.state.human.oneHuman.family}`
    }
  },
  computed: {
    ...mapGetters(['oneHuman'])
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
  h2
    font-size 28px
    line-height 37px
    margin 0 0 8px 0
    text-align center
    @media screen and (min-width: md)
      font-size 48px
      line-height 57px
      text-align left
  &_old
    font-family 'Noto Sans', sans-serif
    font-style italic
    font-weight normal
    font-size 24px
    line-height normal
    color #868686
  &_photo
    width 100%
    margin 0 55px 0 0
    flex-shrink 0
    @media screen and (min-width: md)
      width 380px
      height 442px
    img 
      width 100%
      height 100%
  &_content
    flex 2
    margin 0 0 20px 0
  &_info
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-size 18px
    line-height 32px
    margin 0 0 18px 0
    &_text
      margin 36px 0 0 0
      line-height 32px
      font-size 18px
      font-family 'Noto Sans', sans-serif  
    &_description
      font-weight normal
    &_title
      font-weight bold
.human-progress
  margin 70px 0 0 0
  h2
    margin 0 0 45px 0
  &_item
    flexbox(row, nowrap, flex-start, stretch, stretch)
    margin 0 0 30px 0
    &_icon
      margin 0 14px 0 0 
      flex-shrink 0
      @media screen and (min-width md)
        margin  0 7px 0 0
    &_text
      font-size 19px
      line-height 26px
      font-family 'Noto Sans', sans-serif
      font-style normal
      font-weight normal
      @media screen and (min-width md)
        font-size 22px
        line-height 39px
.gold
  width 32px
  height 43px
  background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAzMyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMzc2OSAwQzcuMzQ2NyAwIDAgNy4zNDY3IDAgMTYuMzc2OUMwIDIyLjE2MjkgMy4wMTYwNSAyNy4yNTc3IDcuNTU4NTkgMzAuMTcxN1Y0MS43NDAyQzcuNTU4NTkgNDIuMjA0OCA3LjgxNDMyIDQyLjYzMTcgOC4yMjM5MSA0Mi44NTA5QzguNjMzNTkgNDMuMDcwMiA5LjEzMDYxIDQzLjA0NjEgOS41MTcxMSA0Mi43ODg0TDE2LjM3NjkgMzguMjE1MkwyMy4yMzY4IDQyLjc4ODRDMjMuNjIzMSA0My4wNDYgMjQuMTIwMSA0My4wNzAzIDI0LjUzIDQyLjg1MDlDMjQuOTM5NiA0Mi42MzE3IDI1LjE5NTMgNDIuMjA0OCAyNS4xOTUzIDQxLjc0MDJWMzAuMTcxN0MyOS43Mzc4IDI3LjI1NzcgMzIuNzUzOSAyMi4xNjI5IDMyLjc1MzkgMTYuMzc2OUMzMi43NTM5IDcuMzQ2NyAyNS40MDcyIDAgMTYuMzc2OSAwWk0yMi42NzU4IDM5LjM4NjNMMTcuMDc1NyAzNS42NTI5QzE2LjY1MjYgMzUuMzcwOCAxNi4xMDEyIDM1LjM3MDggMTUuNjc4MSAzNS42NTI5TDEwLjA3ODEgMzkuMzg2M1YzMS40OTM0QzEyLjAxODIgMzIuMzA0OCAxNC4xNDYgMzIuNzUzOSAxNi4zNzY5IDMyLjc1MzlDMTguNjA3OSAzMi43NTM5IDIwLjczNTcgMzIuMzA0OCAyMi42NzU4IDMxLjQ5MzRWMzkuMzg2M1pNMTYuMzc2OSAzMC4yMzQ0QzguNzM1OTcgMzAuMjM0NCAyLjUxOTUzIDI0LjAxNzkgMi41MTk1MyAxNi4zNzY5QzIuNTE5NTMgOC43MzU5NyA4LjczNTk3IDIuNTE5NTMgMTYuMzc2OSAyLjUxOTUzQzI0LjAxNzkgMi41MTk1MyAzMC4yMzQ0IDguNzM1OTcgMzAuMjM0NCAxNi4zNzY5QzMwLjIzNDQgMjQuMDE3OSAyNC4wMTggMzAuMjM0NCAxNi4zNzY5IDMwLjIzNDRaIiBmaWxsPSIjRkZENjZDIi8+PHBhdGggZD0iTTI2LjM5NTIgMTMuNDI5OUMyNi4yNDc5IDEyLjk2OTkgMjUuODUwNiAxMi42MzQ2IDI1LjM3MjMgMTIuNTY2N0wxOS45Mjk4IDExLjc5NDZMMTcuNTAxMyA2Ljk5MDI3QzE3LjI4NyA2LjU2NjIzIDE2Ljg1MjIgNi4yOTg4MyAxNi4zNzcgNi4yOTg4M0MxNS45MDE4IDYuMjk4ODMgMTUuNDY3MSA2LjU2NjIzIDE1LjI1MjcgNi45OTAyN0wxMi44MjQyIDExLjc5NDZMNy4zODE3MiAxMi41NjY3QzYuOTAzNTEgMTIuNjM0NiA2LjUwNjE4IDEyLjk2OTkgNi4zNTg4NyAxMy40Mjk5QzYuMjExNTYgMTMuODg5OCA2LjM0MDMxIDE0LjM5MzYgNi42OTAxOSAxNC43MjY2TDEwLjYxMDIgMTguNDU3M0w5LjY4NjI0IDIzLjcxNzVDOS42MDM1MiAyNC4xODg1IDkuNzk0NTkgMjQuNjY1OCAxMC4xNzk2IDI0Ljk0OTVDMTAuNTY0NSAyNS4yMzMzIDExLjA3NjkgMjUuMjc0NiAxMS41MDIzIDI1LjA1NjJMMTYuMzc3IDIyLjU1NDFMMjEuMjUxNyAyNS4wNTYzQzIxLjY3OCAyNS4yNzUxIDIyLjE5MDMgMjUuMjMyOCAyMi41NzQ1IDI0Ljk0OTZDMjIuOTU5NCAyNC42NjU5IDIzLjE1MDQgMjQuMTg4NiAyMy4wNjc4IDIzLjcxNzZMMjIuMTQzOCAxOC40NTc0TDI2LjA2MzkgMTQuNzI2N0MyNi40MTM3IDE0LjM5MzYgMjYuNTQyNSAxMy44ODk5IDI2LjM5NTIgMTMuNDI5OVpNMTkuOTE3NyAxNy4wOTc4QzE5LjYxMjIgMTcuMzg4NSAxOS40NzI0IDE3LjgxMjkgMTkuNTQ1NCAxOC4yMjgzTDIwLjE0NzggMjEuNjU3NkwxNi45NTIzIDIwLjAxNzNDMTYuNTkxMSAxOS44MzIgMTYuMTYyOSAxOS44MzIgMTUuODAxNyAyMC4wMTczTDEyLjYwNjIgMjEuNjU3NkwxMy4yMDg2IDE4LjIyODNDMTMuMjgxNiAxNy44MTI5IDEzLjE0MTkgMTcuMzg4NSAxMi44MzYzIDE3LjA5NzhMMTAuMzEyNCAxNC42OTU3TDEzLjgyODkgMTQuMTk2OUMxNC4yMzY3IDE0LjEzOSAxNC41OTA1IDEzLjg4NTUgMTQuNzc2MyAxMy41MThMMTYuMzc3IDEwLjM1MTFMMTcuOTc3OCAxMy41MTc5QzE4LjE2MzUgMTMuODg1NSAxOC41MTczIDE0LjEzOSAxOC45MjUxIDE0LjE5NjhMMjIuNDQxNiAxNC42OTU3TDE5LjkxNzcgMTcuMDk3OFoiIGZpbGw9IiNGRkQ2NkMiLz48L3N2Zz4=')
.silver
  width 32px
  height 43px
  background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAzMyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMzc2OSAwQzcuMzQ2NyAwIDAgNy4zNDY3IDAgMTYuMzc2OUMwIDIyLjE2MjkgMy4wMTYwNSAyNy4yNTc3IDcuNTU4NTkgMzAuMTcxN1Y0MS43NDAyQzcuNTU4NTkgNDIuMjA0OCA3LjgxNDMyIDQyLjYzMTcgOC4yMjM5MSA0Mi44NTA5QzguNjMzNTkgNDMuMDcwMiA5LjEzMDYxIDQzLjA0NjEgOS41MTcxMSA0Mi43ODg0TDE2LjM3NjkgMzguMjE1MkwyMy4yMzY4IDQyLjc4ODRDMjMuNjIzMSA0My4wNDYgMjQuMTIwMSA0My4wNzAzIDI0LjUzIDQyLjg1MDlDMjQuOTM5NiA0Mi42MzE3IDI1LjE5NTMgNDIuMjA0OCAyNS4xOTUzIDQxLjc0MDJWMzAuMTcxN0MyOS43Mzc4IDI3LjI1NzcgMzIuNzUzOSAyMi4xNjI5IDMyLjc1MzkgMTYuMzc2OUMzMi43NTM5IDcuMzQ2NyAyNS40MDcyIDAgMTYuMzc2OSAwWk0yMi42NzU4IDM5LjM4NjNMMTcuMDc1NyAzNS42NTI5QzE2LjY1MjYgMzUuMzcwOCAxNi4xMDEyIDM1LjM3MDggMTUuNjc4MSAzNS42NTI5TDEwLjA3ODEgMzkuMzg2M1YzMS40OTM0QzEyLjAxODIgMzIuMzA0OCAxNC4xNDYgMzIuNzUzOSAxNi4zNzY5IDMyLjc1MzlDMTguNjA3OSAzMi43NTM5IDIwLjczNTcgMzIuMzA0OCAyMi42NzU4IDMxLjQ5MzRWMzkuMzg2M1pNMTYuMzc2OSAzMC4yMzQ0QzguNzM1OTcgMzAuMjM0NCAyLjUxOTUzIDI0LjAxNzkgMi41MTk1MyAxNi4zNzY5QzIuNTE5NTMgOC43MzU5NyA4LjczNTk3IDIuNTE5NTMgMTYuMzc2OSAyLjUxOTUzQzI0LjAxNzkgMi41MTk1MyAzMC4yMzQ0IDguNzM1OTcgMzAuMjM0NCAxNi4zNzY5QzMwLjIzNDQgMjQuMDE3OSAyNC4wMTggMzAuMjM0NCAxNi4zNzY5IDMwLjIzNDRaIiBmaWxsPSIjQkJCQkJCIi8+PHBhdGggZD0iTTI2LjM5NTIgMTMuNDI5OUMyNi4yNDc5IDEyLjk2OTkgMjUuODUwNiAxMi42MzQ2IDI1LjM3MjMgMTIuNTY2N0wxOS45Mjk4IDExLjc5NDZMMTcuNTAxMyA2Ljk5MDI3QzE3LjI4NyA2LjU2NjIzIDE2Ljg1MjIgNi4yOTg4MyAxNi4zNzcgNi4yOTg4M0MxNS45MDE4IDYuMjk4ODMgMTUuNDY3MSA2LjU2NjIzIDE1LjI1MjcgNi45OTAyN0wxMi44MjQyIDExLjc5NDZMNy4zODE3MiAxMi41NjY3QzYuOTAzNTEgMTIuNjM0NiA2LjUwNjE4IDEyLjk2OTkgNi4zNTg4NyAxMy40Mjk5QzYuMjExNTYgMTMuODg5OCA2LjM0MDMxIDE0LjM5MzYgNi42OTAxOSAxNC43MjY2TDEwLjYxMDIgMTguNDU3M0w5LjY4NjI0IDIzLjcxNzVDOS42MDM1MiAyNC4xODg1IDkuNzk0NTkgMjQuNjY1OCAxMC4xNzk2IDI0Ljk0OTVDMTAuNTY0NSAyNS4yMzMzIDExLjA3NjkgMjUuMjc0NiAxMS41MDIzIDI1LjA1NjJMMTYuMzc3IDIyLjU1NDFMMjEuMjUxNyAyNS4wNTYzQzIxLjY3OCAyNS4yNzUxIDIyLjE5MDMgMjUuMjMyOCAyMi41NzQ1IDI0Ljk0OTZDMjIuOTU5NCAyNC42NjU5IDIzLjE1MDQgMjQuMTg4NiAyMy4wNjc4IDIzLjcxNzZMMjIuMTQzOCAxOC40NTc0TDI2LjA2MzkgMTQuNzI2N0MyNi40MTM3IDE0LjM5MzYgMjYuNTQyNSAxMy44ODk5IDI2LjM5NTIgMTMuNDI5OVpNMTkuOTE3NyAxNy4wOTc4QzE5LjYxMjIgMTcuMzg4NSAxOS40NzI0IDE3LjgxMjkgMTkuNTQ1NCAxOC4yMjgzTDIwLjE0NzggMjEuNjU3NkwxNi45NTIzIDIwLjAxNzNDMTYuNTkxMSAxOS44MzIgMTYuMTYyOSAxOS44MzIgMTUuODAxNyAyMC4wMTczTDEyLjYwNjIgMjEuNjU3NkwxMy4yMDg2IDE4LjIyODNDMTMuMjgxNiAxNy44MTI5IDEzLjE0MTkgMTcuMzg4NSAxMi44MzYzIDE3LjA5NzhMMTAuMzEyNCAxNC42OTU3TDEzLjgyODkgMTQuMTk2OUMxNC4yMzY3IDE0LjEzOSAxNC41OTA1IDEzLjg4NTUgMTQuNzc2MyAxMy41MThMMTYuMzc3IDEwLjM1MTFMMTcuOTc3OCAxMy41MTc5QzE4LjE2MzUgMTMuODg1NSAxOC41MTczIDE0LjEzOSAxOC45MjUxIDE0LjE5NjhMMjIuNDQxNiAxNC42OTU3TDE5LjkxNzcgMTcuMDk3OFoiIGZpbGw9IiNCQkJCQkIiLz48L3N2Zz4=')
.bronze
  width 32px
  height 43px
  background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAzMyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMzc2OSAwQzcuMzQ2NyAwIDAgNy4zNDY3IDAgMTYuMzc2OUMwIDIyLjE2MjkgMy4wMTYwNSAyNy4yNTc3IDcuNTU4NTkgMzAuMTcxN1Y0MS43NDAyQzcuNTU4NTkgNDIuMjA0OCA3LjgxNDMyIDQyLjYzMTcgOC4yMjM5MSA0Mi44NTA5QzguNjMzNTkgNDMuMDcwMiA5LjEzMDYxIDQzLjA0NjEgOS41MTcxMSA0Mi43ODg0TDE2LjM3NjkgMzguMjE1MkwyMy4yMzY4IDQyLjc4ODRDMjMuNjIzMSA0My4wNDYgMjQuMTIwMSA0My4wNzAzIDI0LjUzIDQyLjg1MDlDMjQuOTM5NiA0Mi42MzE3IDI1LjE5NTMgNDIuMjA0OCAyNS4xOTUzIDQxLjc0MDJWMzAuMTcxN0MyOS43Mzc4IDI3LjI1NzcgMzIuNzUzOSAyMi4xNjI5IDMyLjc1MzkgMTYuMzc2OUMzMi43NTM5IDcuMzQ2NyAyNS40MDcyIDAgMTYuMzc2OSAwWk0yMi42NzU4IDM5LjM4NjNMMTcuMDc1NyAzNS42NTI5QzE2LjY1MjYgMzUuMzcwOCAxNi4xMDEyIDM1LjM3MDggMTUuNjc4MSAzNS42NTI5TDEwLjA3ODEgMzkuMzg2M1YzMS40OTM0QzEyLjAxODIgMzIuMzA0OCAxNC4xNDYgMzIuNzUzOSAxNi4zNzY5IDMyLjc1MzlDMTguNjA3OSAzMi43NTM5IDIwLjczNTcgMzIuMzA0OCAyMi42NzU4IDMxLjQ5MzRWMzkuMzg2M1pNMTYuMzc2OSAzMC4yMzQ0QzguNzM1OTcgMzAuMjM0NCAyLjUxOTUzIDI0LjAxNzkgMi41MTk1MyAxNi4zNzY5QzIuNTE5NTMgOC43MzU5NyA4LjczNTk3IDIuNTE5NTMgMTYuMzc2OSAyLjUxOTUzQzI0LjAxNzkgMi41MTk1MyAzMC4yMzQ0IDguNzM1OTcgMzAuMjM0NCAxNi4zNzY5QzMwLjIzNDQgMjQuMDE3OSAyNC4wMTggMzAuMjM0NCAxNi4zNzY5IDMwLjIzNDRaIiBmaWxsPSIjRjVCNzU5Ii8+PHBhdGggZD0iTTI2LjM5NTIgMTMuNDI5OUMyNi4yNDc5IDEyLjk2OTkgMjUuODUwNiAxMi42MzQ2IDI1LjM3MjMgMTIuNTY2N0wxOS45Mjk4IDExLjc5NDZMMTcuNTAxMyA2Ljk5MDI3QzE3LjI4NyA2LjU2NjIzIDE2Ljg1MjIgNi4yOTg4MyAxNi4zNzcgNi4yOTg4M0MxNS45MDE4IDYuMjk4ODMgMTUuNDY3MSA2LjU2NjIzIDE1LjI1MjcgNi45OTAyN0wxMi44MjQyIDExLjc5NDZMNy4zODE3MiAxMi41NjY3QzYuOTAzNTEgMTIuNjM0NiA2LjUwNjE4IDEyLjk2OTkgNi4zNTg4NyAxMy40Mjk5QzYuMjExNTYgMTMuODg5OCA2LjM0MDMxIDE0LjM5MzYgNi42OTAxOSAxNC43MjY2TDEwLjYxMDIgMTguNDU3M0w5LjY4NjI0IDIzLjcxNzVDOS42MDM1MiAyNC4xODg1IDkuNzk0NTkgMjQuNjY1OCAxMC4xNzk2IDI0Ljk0OTVDMTAuNTY0NSAyNS4yMzMzIDExLjA3NjkgMjUuMjc0NiAxMS41MDIzIDI1LjA1NjJMMTYuMzc3IDIyLjU1NDFMMjEuMjUxNyAyNS4wNTYzQzIxLjY3OCAyNS4yNzUxIDIyLjE5MDMgMjUuMjMyOCAyMi41NzQ1IDI0Ljk0OTZDMjIuOTU5NCAyNC42NjU5IDIzLjE1MDQgMjQuMTg4NiAyMy4wNjc4IDIzLjcxNzZMMjIuMTQzOCAxOC40NTc0TDI2LjA2MzkgMTQuNzI2N0MyNi40MTM3IDE0LjM5MzYgMjYuNTQyNSAxMy44ODk5IDI2LjM5NTIgMTMuNDI5OVpNMTkuOTE3NyAxNy4wOTc4QzE5LjYxMjIgMTcuMzg4NSAxOS40NzI0IDE3LjgxMjkgMTkuNTQ1NCAxOC4yMjgzTDIwLjE0NzggMjEuNjU3NkwxNi45NTIzIDIwLjAxNzNDMTYuNTkxMSAxOS44MzIgMTYuMTYyOSAxOS44MzIgMTUuODAxNyAyMC4wMTczTDEyLjYwNjIgMjEuNjU3NkwxMy4yMDg2IDE4LjIyODNDMTMuMjgxNiAxNy44MTI5IDEzLjE0MTkgMTcuMzg4NSAxMi44MzYzIDE3LjA5NzhMMTAuMzEyNCAxNC42OTU3TDEzLjgyODkgMTQuMTk2OUMxNC4yMzY3IDE0LjEzOSAxNC41OTA1IDEzLjg4NTUgMTQuNzc2MyAxMy41MThMMTYuMzc3IDEwLjM1MTFMMTcuOTc3OCAxMy41MTc5QzE4LjE2MzUgMTMuODg1NSAxOC41MTczIDE0LjEzOSAxOC45MjUxIDE0LjE5NjhMMjIuNDQxNiAxNC42OTU3TDE5LjkxNzcgMTcuMDk3OFoiIGZpbGw9IiNGNUI3NTkiLz48L3N2Zz4=')
</style>

