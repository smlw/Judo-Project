<template lang="pug">
  MainLayout
    template(v-slot:content)
      .wrapper-fluid
        .wrapper-fluid_content
          j-breadcrumbs
          LinkHeader
          .hall
            .hall-container
              .hall-container_header
                h2 Призеры юношеских соревнований
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name М. Егоров- Цимбалист
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
            .hall-container
              .hall-container_header
                h2 Призеры студенческих соревнований
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name М. Егоров- Цимбалист
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
            .hall-container
              .hall-container_header
                h2 Галерея мастеров
                a(href="/").link_full-list
                  span.link_full-list_text Полный список
                  span.link_full-list_icon
              .swiper-slider
                swiper(:options='swiperOption')
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name М. Егоров- Цимбалист
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge I спортивный разряд
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                  swiper-slide 
                    .hall-container_portrait
                      img(src="../../assets/images/face_coach.png")
                      .hall-container_portrait_name О. В. Долганов
                      .hall-container_portrait_discharge КМС России
                .swiper-button-prev(slot='button-prev')
                .swiper-button-next(slot='button-next')    
</template>

<script>
import LinkHeader from '../../components/elements/UI/LinkHeader'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 20,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: { swiper, swiperSlide, LinkHeader }   
}
</script>

<style lang="stylus" scoped>
.link-header
  margin 0 0 86px 0
.link_full-list
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  &_text
    border-bottom 2px solid #E8D35F
    font-family 'Noto Sans', sans-serif
    font-style normal
    font-weight normal
    font-size 18px
    line-height 25px
  &_icon
    width 14px
    height 11px
    margin 0 0 0 8px
    background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMC43ODY5NTYgNy4wOTc3OUwwLjc2NTEwMiA3LjA5MzAxTDEwLjEzMzMgNy4wOTMwMUw3LjE4ODI2IDEwLjA0NDVDNy4wNDQwNSAxMC4xODg2IDYuOTY0OTQgMTAuMzgzOCA2Ljk2NDk0IDEwLjU4ODdDNi45NjQ5NCAxMC43OTM2IDcuMDQ0MDUgMTAuOTg3NCA3LjE4ODI2IDExLjEzMThMNy42NDY1IDExLjU5MDNDNy43OTA2IDExLjczNDQgNy45ODI2MSAxMS44MTQxIDguMTg3MzggMTEuODE0MUM4LjM5MjI2IDExLjgxNDEgOC41ODQzOSAxMS43MzUgOC43Mjg0OCAxMS41OTA5TDEzLjc3NjggNi41NDMwM0MxMy45MjE1IDYuMzk4MzYgMTQuMDAwNiA2LjIwNTY2IDE0IDYuMDAwNjdDMTQuMDAwNiA1Ljc5NDU0IDEzLjkyMTUgNS42MDE3MyAxMy43NzY4IDUuNDU3MjlMOC43Mjg0OSAwLjQwODk4M0M4LjU4NDM5IDAuMjY0OTk5IDguMzkyMzcgMC4xODU3NzkgOC4xODczOCAwLjE4NTc3OUM3Ljk4MjYyIDAuMTg1Nzc5IDcuNzkwNiAwLjI2NTExMiA3LjY0NjUgMC40MDg5ODNMNy4xODgyNiAwLjg2NzQ1NEM3LjA0NDA1IDEuMDExMzIgNi45NjQ5NCAxLjIwMzQ1IDYuOTY0OTQgMS40MDgzM0M2Ljk2NDk0IDEuNjEzMSA3LjA0NDA1IDEuNzk1MSA3LjE4ODI2IDEuOTM5MDhMMTAuMTY2NSA0LjkwNzA4TDAuNzc2NDg0IDQuOTA3MDhDMC4zNTQ1NDkgNC45MDcwOCAtMy4yNDI2NmUtMDYgNS4yNzA3NCAtMy4yNzk1M2UtMDYgNS42OTI0NEwtMy4zMzYyMWUtMDYgNi4zNDA4OEMtMy4zNzMwOGUtMDYgNi43NjI1OSAwLjM2NTAyMSA3LjA5Nzc5IDAuNzg2OTU2IDcuMDk3NzlaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==')
  &:active
    .link_full-list_text
      transition all .2s ease
      color #E0BF00
      border-bottom 2px solid #E0BF00
    .link_full-list_icon
      transition all .2s ease
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMC43ODY5NTYgNy4wOTc3OUwwLjc2NTEwMiA3LjA5MzAxTDEwLjEzMzMgNy4wOTMwMUw3LjE4ODI2IDEwLjA0NDVDNy4wNDQwNSAxMC4xODg2IDYuOTY0OTQgMTAuMzgzOCA2Ljk2NDk0IDEwLjU4ODdDNi45NjQ5NCAxMC43OTM2IDcuMDQ0MDUgMTAuOTg3NCA3LjE4ODI2IDExLjEzMThMNy42NDY1IDExLjU5MDNDNy43OTA2IDExLjczNDQgNy45ODI2MSAxMS44MTQxIDguMTg3MzggMTEuODE0MUM4LjM5MjI2IDExLjgxNDEgOC41ODQzOSAxMS43MzUgOC43Mjg0OCAxMS41OTA5TDEzLjc3NjggNi41NDMwM0MxMy45MjE1IDYuMzk4MzYgMTQuMDAwNiA2LjIwNTY2IDE0IDYuMDAwNjdDMTQuMDAwNiA1Ljc5NDU0IDEzLjkyMTUgNS42MDE3MyAxMy43NzY4IDUuNDU3MjlMOC43Mjg0OSAwLjQwODk4M0M4LjU4NDM5IDAuMjY0OTk5IDguMzkyMzcgMC4xODU3NzkgOC4xODczOCAwLjE4NTc3OUM3Ljk4MjYyIDAuMTg1Nzc5IDcuNzkwNiAwLjI2NTExMiA3LjY0NjUgMC40MDg5ODNMNy4xODgyNiAwLjg2NzQ1NEM3LjA0NDA1IDEuMDExMzIgNi45NjQ5NCAxLjIwMzQ1IDYuOTY0OTQgMS40MDgzM0M2Ljk2NDk0IDEuNjEzMSA3LjA0NDA1IDEuNzk1MSA3LjE4ODI2IDEuOTM5MDhMMTAuMTY2NSA0LjkwNzA4TDAuNzc2NDg0IDQuOTA3MDhDMC4zNTQ1NDkgNC45MDcwOCAtMy4yNDI2NmUtMDYgNS4yNzA3NCAtMy4yNzk1M2UtMDYgNS42OTI0NEwtMy4zMzYyMWUtMDYgNi4zNDA4OEMtMy4zNzMwOGUtMDYgNi43NjI1OSAwLjM2NTAyMSA3LjA5Nzc5IDAuNzg2OTU2IDcuMDk3NzlaIiBmaWxsPSIjRTBCRjAwIi8+PC9zdmc+')
  &:hover
    .link_full-list_text
      transition all .2s ease
      color #E8D35F
    .link_full-list_icon
      transition all .2s ease
      background-image url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMC43ODY5NTYgNy4wOTc3OUwwLjc2NTEwMiA3LjA5MzAxTDEwLjEzMzMgNy4wOTMwMUw3LjE4ODI2IDEwLjA0NDVDNy4wNDQwNSAxMC4xODg2IDYuOTY0OTQgMTAuMzgzOCA2Ljk2NDk0IDEwLjU4ODdDNi45NjQ5NCAxMC43OTM2IDcuMDQ0MDUgMTAuOTg3NCA3LjE4ODI2IDExLjEzMThMNy42NDY1IDExLjU5MDNDNy43OTA2IDExLjczNDQgNy45ODI2MSAxMS44MTQxIDguMTg3MzggMTEuODE0MUM4LjM5MjI2IDExLjgxNDEgOC41ODQzOSAxMS43MzUgOC43Mjg0OCAxMS41OTA5TDEzLjc3NjggNi41NDMwM0MxMy45MjE1IDYuMzk4MzYgMTQuMDAwNiA2LjIwNTY2IDE0IDYuMDAwNjdDMTQuMDAwNiA1Ljc5NDU0IDEzLjkyMTUgNS42MDE3MyAxMy43NzY4IDUuNDU3MjlMOC43Mjg0OSAwLjQwODk4M0M4LjU4NDM5IDAuMjY0OTk5IDguMzkyMzcgMC4xODU3NzkgOC4xODczOCAwLjE4NTc3OUM3Ljk4MjYyIDAuMTg1Nzc5IDcuNzkwNiAwLjI2NTExMiA3LjY0NjUgMC40MDg5ODNMNy4xODgyNiAwLjg2NzQ1NEM3LjA0NDA1IDEuMDExMzIgNi45NjQ5NCAxLjIwMzQ1IDYuOTY0OTQgMS40MDgzM0M2Ljk2NDk0IDEuNjEzMSA3LjA0NDA1IDEuNzk1MSA3LjE4ODI2IDEuOTM5MDhMMTAuMTY2NSA0LjkwNzA4TDAuNzc2NDg0IDQuOTA3MDhDMC4zNTQ1NDkgNC45MDcwOCAtMy4yNDI2NmUtMDYgNS4yNzA3NCAtMy4yNzk1M2UtMDYgNS42OTI0NEwtMy4zMzYyMWUtMDYgNi4zNDA4OEMtMy4zNzMwOGUtMDYgNi43NjI1OSAwLjM2NTAyMSA3LjA5Nzc5IDAuNzg2OTU2IDcuMDk3NzlaIiBmaWxsPSIjRThEMzVGIi8+PC9zdmc+')
.hall-container
  width 100%
  margin 0 0 80px 0
  .swiper-button-next,
  .swiper-button-prev
    margin-top -80px
  &:last-child
    margin 0
  &_header
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    margin 0 0 20px 0
  &_portrait
    width 172px
    text-align center
    img 
      width 100%
      height 215px
    &_name
      font-family 'Noto Sans', sans-serif
      font-size 18px
      line-height normal
      margin 20px 0 0 0
    &_discharge
      font-family 'Noto Sans', sans-serif
      font-style italic
      font-weight normal
      font-size 16px
      line-height 22px
      color #868686
</style>

