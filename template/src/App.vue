<template lang="html">
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    console.log('hello vue.js ～～～')
  },
  methods: {

  }
}
</script>
<style>

</style>
