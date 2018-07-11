<template>
  <div class="sx-view">
    <keep-alive>
      <demo-list></demo-list>
    </keep-alive>
  </div>
</template>

<script>
import DemoList from './demo-list.vue'

export default {
  components: {
    DemoList
  },
  data () {
    return {

    }
  }
}
</script>

