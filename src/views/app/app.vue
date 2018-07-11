<template>
  <div class="sx-app">
    <x-header
      title="HOME"
      :left-options="{ showBack: false }"></x-header>
    <div class="vux-demo">
      <img class="logo" src="../../images/vux_logo.png">
      <div class="text">v2.9.2</div>
    </div>
    <group>
      <cell class="demo-cell" title="VUX DEMO" link="/home/demo">
        <span class="sxh-vux-icon demo-cell-icon" slot="icon">&#xe633;</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less">

</style>

<style lang="less" scoped>
.vux-demo {
  text-align: center;
  padding-top: 20px;

  .logo {
    width: 70px;
    height: 70px;
  }
  .text {
    font-size: 16px;
    color: #666;
  }
}
.sx-app {
  .demo-cell {
    font-size: 16px;
  }
  .demo-cell-icon {
    color: #F70968;
    margin-right: 8px;
    font-size: 20px;
  }
}
</style>

