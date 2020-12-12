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
      src: '/tufu/scene.gltf',
      scale: [0.1, 0.1, 0.1]
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
