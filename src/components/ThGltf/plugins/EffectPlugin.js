// 未使用
import * as THREE from 'three'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'

// 后处理通道
export function outlineEffect(vm) {
  const outlinePass = new OutlinePass(new THREE.Vector2(vm.container.offsetWidth, vm.container.offsetHeight), vm.scene, vm.camera)
  outlinePass.visibleEdgeColor.set('#42b983')
  outlinePass.edgeStrength = Number(3)
  outlinePass.edgeThickness = Number(2)
  return outlinePass
}
