<template>
  <div class="container">
    <th-gltf
      :src="src"
      @thLoad="loadHandle"
      @thDbClick="thDbClickHandle"
      @thHoverClick="thHoverClickHandle"
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
      src: '/build/scene.gltf'
    }
  },

  methods: {
    loadHandle(gltf) {
      console.log(gltf)
    },
    thDbClickHandle(intersect) {
      console.log(intersect.object.name)
      alert(intersect.object.name)
    },
    thHoverClickHandle(intersect) {
      // console.log(intersect.object)
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
