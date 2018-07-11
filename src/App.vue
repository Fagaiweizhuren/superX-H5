<template>
  <div class="sxh">
    <div class="content-box">
      <router-view></router-view>
    </div>
    <div class="content-footer">
      <tabbar class="vux-demo-tabbar">
        <tabbar-item link="/home/app" :selected="path === '/home/app'">
          <span class="sxh-vux-icon" slot="icon">&#xe637;</span>
          <span class="sxh-nav-text" slot="label">HOME</span>
        </tabbar-item>
        <tabbar-item link="/home/demo" :selected="path === '/home/demo' || componentPahtCheck">
          <span class="sxh-vux-icon" slot="icon">&#xe633;</span>
          <span class="sxh-nav-text" slot="label">DEMOS</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import superx from './components/superx'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    superx
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path
    }),
    componentPahtCheck () {
      let value
      /^\/home\/component/.test(this.path) ? value = true : value = false
      return value
    }
  },
  mounted () {
    this.$nextTick(function() {
      console.log('DOM 挂载之后')
    })
  },
  beforeDestroy () {

  },
  methods: {
    init () {
      // this.$router.push({ name: 'mainPage' })
    }
  },
  created () {
    console.log('app created')
    this.init()
  },
  watch: {
    // 'route': function(route) {
    //   console.log(route)
    // },
    // 'path': function(path) {
    //   console.log(path)
    // }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/reset.less';
  @import './styles/vuxfont.less';
  @import './styles/app.less';
  @import '~vux/src/styles/1px.less';
</style>

<style lang="less" scoped>
  .vux-demo-tabbar .weui-bar__item_on .sxh-vux-icon {
    color: #F70968;
  }
  .vux-demo-tabbar .weui-bar__item_on .sxh-nav-text {
    color: rgb(53, 73, 94) !important;
  }
</style>


