<template lang="pug">
.hello
  h1 {{ msg }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  color red
</style>
