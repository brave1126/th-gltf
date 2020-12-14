<template>
  <div class="container">
    <th-gltf
      :src="src"
      :scale="scale"
    />
  </div>
</template>

<script>
import ThGltf from '@/components/ThGltf/index.vue'
export default {
  components: {
    ThGltf
  },
  data() {
    return {
      src: '/bike/scene.gltf',
      scale: [7, 7, 7]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
