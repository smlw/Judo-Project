<template lang="pug">
  MainLayout
    template(v-slot:content)
      span content
</template>

<script>
import MainLayout from '../components/layouts/MainLayout'
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста'
    }
  },
  components: { MainLayout }
}
</script>

<style lang="stylus" scoped>
</style>
