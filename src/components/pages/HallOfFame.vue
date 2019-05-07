<template lang="pug">
  MainLayout
    template(v-slot:content)
      .container
        .wrapper-fluid_content
          j-breadcrumbs
          LinkHeader.hall_btn(:links="headerLinks")
          .hall
            .hall-container(v-for="(category, index) in fullHallOfFame" :key="index")
              .hall-container_header
                h2 {{category.name}}
                router-link(:to="`hall/${category.link}`").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide(v-for="(human, index) in category.humans" :key="index")
                    .hall-container_portrait
                      router-link(:to="`human/${human.id}`")
                        j-human-card
                          img(slot="image" :src='`${mediaUrl}/${human.photo}`')
                          span(slot="humanName") {{human.initials}} {{ human.family }}
                          span(slot="discharge") {{human.discharge}}
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next') 
</template>

<script>
import {mapGetters} from 'vuex'
import LinkHeader from '../../components/elements/UI/LinkHeader'
export default {
  data () {
    return {
      headerLinks: [
        {name: 'Призеры юношеских соревнований', to: '/hall/junior'},
        {name: 'Призеры студенческих соревнований', to: '/hall/student'},
        {name: 'Галерея мастеров', to: '/hall/master'},
      ],
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1140: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        }
      },
    }
  },
  created () {
    this.$store.dispatch('getHumansJunior')
    this.$store.dispatch('getHumansStudent')
    this.$store.dispatch('getHumansMaster')
  },
  computed: {
    ...mapGetters(['fullHallOfFame'])
  },
  components: { LinkHeader }   
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.link-header
  margin 0 0 86px 0

</style>

