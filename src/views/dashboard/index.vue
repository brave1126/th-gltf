<template>
  <div class="dashboard-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Th-Gltf 0.1.1</span>
      </div>
      <div>用最简单的方式展示gltf格式模型，并提供简单的交互功能（悬浮、双击）</div>
      <div>只需要提供简单的配置:</div><br>
      <div class="scene">
        <th-gltf src="/crash/scene.gltf" />
      </div>
    </el-card>
  </div>
</template>

<script>
import ThGltf from '@/components/ThGltf/index.vue'
export default {
  name: 'Dashboard',
  components: {
    ThGltf
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.scene {
    width: 240px;
    height: 180px;
    border:1px #42b983 solid;
  }
</style>
