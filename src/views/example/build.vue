<template>
  <div class="container">
    <th-gltf
      :src="src"
      :rotation="rotation"
      :hl-intensity="hlIntensity"
      :dl-intensity="dlIntensity"
      mode="dev"
      background-color="#648e93"
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
      src: '/build/scene.gltf',
      rotation: [0, -2.2, 0],
      dlIntensity: 0.6,
      hlIntensity: 0.8
    }
  },

  methods: {
    loadHandle(gltf) {
      console.log(gltf)
    },
    // 双击事件处理函数
    thDbClickHandle(intersect) {
      console.log(intersect.object.name)
      alert(intersect.object.name)
    },
    // hover事件处理函数
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
