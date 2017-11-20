import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('组件加载后，title应该是Holle world', () => {
    const Constructor = Vue.extend(HelloWorld)

  })
})