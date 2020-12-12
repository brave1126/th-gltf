<template>
  <div id="container" ref="container" />
</template>

<script>
import resize from './mixin/resize'
import createRenderer from './plugins/RendererPlugin'
import createScene from './plugins/ScenePlugin'
import getCamera from './plugins/CameraPlugin'
import CameraControlPlugin from './plugins/CameraControlPlugin'
import Raycaster from './plugins/RaycasterPlugin'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

export default {
  mixins: [resize],
  props: {
    src: {
      type: String,
      required: true
    },
    scale: {
      type: Array,
      default: () => [3, 3, 3]
    },
    position: {
      type: Array,
      default: () => [0, 0, 0]
    },
    rotation: {
      type: Array,
      default: () => [0, 0, 0]
    },
    backgroundColor: {
      type: String,
      default: '#e0e0e0'
    },
    // 环境光未使用
    ambientLightColor: {
      type: String,
      default: '0x404040'
    },
    mode: {
      type: String,
      default: 'prod'
    },
    // 平行光光强
    dlIntensity: {
      type: Number,
      default: 0.6
    },
    // 半球光光强
    hlIntensity: {
      type: Number,
      default: 0.8
    }
  },
  data() {
    return {
      container: undefined,
      renderer: undefined,
      scene: undefined,
      camera: undefined,
      cameraControl: undefined,
      animateId: undefined,
      // threejs转换后坐标
      threeCoordinate: {
        x: undefined,
        y: undefined
      },
      // 全局坐标 单位px
      globalCoordinate: {
        x: undefined,
        y: undefined
      }
    }
  },

  mounted() {
    this.init()
    this.animate()
    this.windowAdaptation()
    this.initModel()
    this.initEventListener()
  },

  beforeDestroy() {
    this.destroyEventListener()
    cancelAnimationFrame(this.animateId)
    this.cleanThreeV()
    console.log('内存清理结果:', this.renderer.info.memory) // 输出内存使用
  },

  deactivated() {
    this.destroyEventListener()
    cancelAnimationFrame(this.animateId)
    this.cleanThreeV()
  },

  methods: {
    init() {
      this.container = this.$refs['container']
      this.scene = createScene(this.backgroundColor, this.ambientLightColor, this.mode, this.dlIntensity, this.hlIntensity)
      this.renderer = createRenderer(this.container)
      this.container.appendChild(this.renderer.domElement)
      this.camera = getCamera(this.container)
      this.cameraControl = CameraControlPlugin(this.camera, this.renderer.domElement)
    },

    animate() {
      this.animateId = requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.getHoverMesh()
    },

    initModel() {
      const gltfLoader = new GLTFLoader()
      gltfLoader.load(this.src, (gltf) => {
        gltf.scene.traverse(function(child) {
        })
        gltf.scene.scale.set(this.scale[0], this.scale[1], this.scale[2])
        // 位置 (左右,上下，前后)
        gltf.scene.position.set(this.position[0], this.position[1], this.position[2])
        // 欧拉角
        gltf.scene.rotation.set(this.rotation[0], this.rotation[1], this.rotation[2])
        this.$emit('thLoad', gltf)
        this.scene.add(gltf.scene)
      })
    },

    // 事件初始化
    initEventListener() {
      this.container.addEventListener('mousemove', this.onDocumentMouseMove, false)
      this.container.addEventListener('dblclick', this.onDblClick, false)
    },

    // 鼠标移动事件的回调
    onDocumentMouseMove(event) {
      // 获取dom元素到窗口左上角的偏移量
      const left = this.container.getBoundingClientRect().left
      const top = this.container.getBoundingClientRect().top
      this.threeCoordinate.x = ((event.clientX - left) / this.container.offsetWidth) * 2 - 1
      this.threeCoordinate.y = -((event.clientY - top) / this.container.offsetHeight) * 2 + 1
      this.globalCoordinate.x = event.clientX - left
      this.globalCoordinate.y = event.clientY - top
    },

    // 双击事件的回调
    onDblClick() {
      Raycaster.setFromCamera(this.threeCoordinate, this.camera)
      const dblclickIntersects = Raycaster.intersectObjects(this.scene.children, true)
      // 返回点击的物体
      if (dblclickIntersects.length > 0) {
        this.$emit('thDbClick', dblclickIntersects[0])
      }
    },

    // 获取鼠标悬浮物体 (每一帧都会调用)
    getHoverMesh() {
      Raycaster.setFromCamera(this.threeCoordinate, this.camera)
      const hoverIntersects = Raycaster.intersectObjects(this.scene.children, true)
      // 处理操作
      if (hoverIntersects.length > 0) {
        if (
          hoverIntersects[0].object.type === 'Mesh'
        ) {
          this.$emit('thHoverClick', hoverIntersects[0])
        }
      }
    },

    destroyEventListener() {
      this.container.removeEventListener('mousemove', this.onDocumentMouseMove, false)
      this.container.removeEventListener('dblclick', this.onDblClick, false)
    },

    windowAdaptation() {
      const _this = this
      window.onresize = function() {
        // 重新设置渲染器尺寸
        _this.renderer.setSize(_this.container.offsetWidth, _this.container.offsetHeight)
        // 重新设置相机长宽度比
        _this.camera.aspect = _this.container.offsetWidth / _this.container.offsetHeight
        // 刷新（矩阵）
        _this.camera.updateProjectionMatrix()
      }
    },

    resize() {
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
      this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
      this.camera.updateProjectionMatrix()
    },

    // 内存清理
    dispose(parent, child) {
      if (child.children.length) {
        const arr = child.children.filter(x => x)
        arr.forEach(a => {
          this.dispose(child, a)
        })
      }
      if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
        if (child.material.map) child.material.map.dispose()
        child.material.dispose()
        child.geometry.dispose()
      } else if (child.material) {
        child.material.dispose()
      }
      child.remove()
      parent.remove(child)
    },

    cleanThreeV() {
      const arr = this.scene.children.filter(x => x)
      arr.forEach(a => {
        this.dispose(this.scene, a)
      })
      this.scene.remove()
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.content = null
      this.renderer.domElement = null
    }

  }

}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
