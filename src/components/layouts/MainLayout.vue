<template lang="pug">
  .wrapper
    header
      span header
    // Content wrapper
    main
      slot(name='content')
    footer
      span footer
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

</style>
