<template lang="pug">
  .link-header
    router-link(:to="`${link.to}`" v-for="(link, index) in this.links" :key="index")
      v-button.link-header_button {{ link.name }}
</template>

<script>
import VButton from '../UI/Button'
export default {
  props: ['links'],
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

