<template>
  <div class="container">
    <th-gltf
      :src="src"
      :scale="scale"
      background-color="#e9d7df"
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
      src: '/matilda/scene.gltf',
      scale: [0.15, 0.15, 0.15]
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
