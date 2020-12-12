import {PerspectiveCamera,Vector3} from 'three'
// 初始化相机
export default function(container) {
  const camera = new PerspectiveCamera(
    75,
    container.offsetWidth/container.offsetHeight,
    0.1,
    1000
  )
  // 相机位置 默认（0，0，0）
  camera.position.set(0, 30, 60)

  // 相机焦点方向
  camera.lookAt(new Vector3(0, 0, 0))

  return camera
}

