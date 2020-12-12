<template>
  <div class="container">
    <th-gltf
      :src="src"
      @thLoad="loadHandle"
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
      src: '/crash/scene.gltf',
      scale: [3, 3, 3],
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    }
  },

  methods: {
    loadHandle(gltf) {
      console.log(gltf)
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
