<template>
  <div class="sx-view">
    <x-header title="DEMOS"></x-header>
    <view-box ref="viewBox" class="demo-list">
      <flexbox :gutter="0" v-for="(list, index) in componentList" :key="index">
        <flexbox-item
          :span="1/3"
          v-for="component in list"
          :key="component.name"
          class="list-box"
          @click.native="go(component.name.toLowerCase(), component.hasHome)">
          <div>
            <span class="sxh-vux-icon list-icon" v-html="component.icon" :style="{color: component.color}"></span>
            <br>
            <span class="text">{{ component.name }}</span>
          </div>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
import componentList from '../../datas/vux_component_list.json'

export default {
  name: 'demoList',
  data () {
    return {
      componentList: this.split(componentList)
    }
  },
  mounted() {
    this.$nextTick(function() {
      // console.log(this.componentList)
    })
  },
  methods: {
    split (array) {
      let chunks = []
      let count = Math.ceil(array.length / 3)
      while (count > 0) {
        chunks.push(array.slice((count - 1) * 3, count * 3))
        console.log()
        count--
      }
      chunks = chunks.reverse()
      return chunks
    },
    go (name, hasHome) {
      console.log(name, hasHome)
      if (!hasHome) {
        this.$router.push(`component/${name}`)
      } else {
        console.log('需要增加一个 compoent home')
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/vuxfont.less';
</style>

<style lang="less" scoped>
.demo-list {
  .list-icon {
    color: green;
    font-size: 28px;
  }
  .list-box {
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid #e3e2e1;
    border-right: 1px solid #e3e2e1;

    .text {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>




