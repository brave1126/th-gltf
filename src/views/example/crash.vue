<template>
  <div class="container">
    <th-gltf
      :src="src"
      background-color="#648e93"
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
      src: '/crash/scene.gltf'
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
