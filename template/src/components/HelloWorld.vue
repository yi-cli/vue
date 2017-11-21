<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <img src="../assets/images/yuyi.png" alt="">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br/>
      <li><a href="https://yi-cli.github.io/yi-cli/" target="_blank">Yi-Cli</a></li>
      <li><a href="https://github.com/yi-cli" target="_blank">This Template</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js project'
    }
  },
  created() {
    this.$store.dispatch('info', 'hello world')
  },
  methods: {
    async getMsg() {
      let params = {id: 1, name: 'yuyi', age: 12}
      let response = await this.$http.get(`users/yi-cli/repos`, {params})
      console.log(response)
    }
  }
}
</script>
<style scoped>
.hello {
  padding-top: 80px;
  text-align: center;
}
h2 {
  color: #42b983;
}
img {
  display: inline-block;
  width: 100px;
  margin: 36px 0 60px 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  line-height: 40px;
}
a {
  color: #e96900;
}
</style>

