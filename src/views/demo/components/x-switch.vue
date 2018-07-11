<template>
  <div>
    <x-header title="x-switch"></x-header>
    <group>
      <x-switch title="基本使用" v-model="switchValue"></x-switch>
    </group>
    <div class="text-value">{{ switchValue }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switchValue: false
    }
  }
}
</script>

<style lang="less">
@import '../style/demo.less';
</style>



