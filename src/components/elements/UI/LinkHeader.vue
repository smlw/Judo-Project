<template lang="pug">
  .link-header
    a(href="/") 
      v-button Для родителей
    a(href="/") 
      v-button Для студентов
    a(href="/") 
      v-button Буревестник
</template>

<script>
import VButton from '../UI/Button'
export default {
 components: { VButton }   
}
</script>

<style lang="stylus" scoped>
.link-header
  display flex
  flex-direction row
  justify-content space-between
  margin 0 0 45px 0
  
</style>

