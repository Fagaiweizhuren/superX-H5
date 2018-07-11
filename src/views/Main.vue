<template>
  <div class="main-page">
    <div class="sx-page">
      <transition name="sx-slide-fade" mode="out-in">
        <router-view class="sx-in-router"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      countOne: 100
    }
  },
  computed: {
    ...mapState('app', [
      // isNavActive
    ]),
    countTwo () {
      return this.$store.state.app.count
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$store.state.app.isNavActive = this.$route.path
    },
    goNav (toNav) {
      this.$store.commit('app/changeNav', { navTo: toNav })
    }
  },
  created () {

  },
  watch: {
    'isNavActive': function(newValue, oldValue) {
      // console.log('watch', newValue)
    }
  }
}
</script>

<style lang="less">
@import '../styles/app.less';
</style>

<style lang="less" scoped>

</style>


