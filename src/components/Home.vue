<template lang="pug">
.hello
  h1 {{ h1 }}
  p {{ p }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      h1: 'Шрифт заголовков Behrens AntiqaC',
      p: 'Шрифт основного текста'
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  color red
</style>
