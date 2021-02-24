import { Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 相机控制配置
export default function(camera, dom) {
  const cameraControl = new OrbitControls(camera, dom)
  // 是否开启当前的控制器 默认值为true
  cameraControl.enabled = true

  // 设置当前控制器的焦点 默认为原点位置
  cameraControl.target = new Vector3()

  // 控制器控制相机可移动的距离焦点的最远距离和最近距离 默认值是0到无限远的距离 此属性适用于透视相机 PerspectiveCamera
  cameraControl.minDistance = 0
  cameraControl.maxDistance = Infinity

  // 控制器控制相机可移动的距离焦点的最远距离和最近距离 默认值是0到无限远的距离 此属性适用于正交相机 OrthographicCamera
  cameraControl.minZoom = 0
  cameraControl.maxZoom = Infinity

  // 相机垂直方向移动的弧度，默认从顶部九十度到底部九十度 默认值是0和Math.PI
  cameraControl.minPolarAngle = 0 // 弧度
  cameraControl.maxPolarAngle = Math.PI // 弧度

  // 当前相机水平位置下在焦点的z轴正方向可以偏转的弧度，默认无限旋转。
  // 如果不可以无限旋转，只能够从左方和右方旋转180度，可以设置成minAzimuthAngle = - Math.PI maxAzimuthAngle = Math.PI
  cameraControl.minAzimuthAngle = -Infinity // 弧度
  cameraControl.maxAzimuthAngle = Infinity // 弧度

  // 是否开启拖拽后的惯性（停止拖拽后，相机会慢慢停下来），如果开启了当前的属性，还需要在动画循环中调用相机的update()更新位置
  cameraControl.enableDamping = true
  cameraControl.dampingFactor = 0.25 // 设置当前的惯性的阻力，值越小阻力越小

  // 设置控制器是否缩放以及缩放速度
  cameraControl.enableZoom = true
  cameraControl.zoomSpeed = 1.0

  // 设置控制器是否可以旋转以及旋转速度
  cameraControl.enableRotate = true
  cameraControl.rotateSpeed = 0.8

  // 是否开启改变视角焦点中心以及移动视角中心的速度
  cameraControl.enablePan = true
  cameraControl.panSpeed = 1.0
  cameraControl.screenSpacePanning = false // 移动相机位置焦点默认是修改x轴和z轴方向，如果将此值修改为true，焦点位置将修改x轴和y轴方向
  cameraControl.keyPanSpeed = 7.0	// 修改焦点位置移动的速度

  // 设置当前是否自动旋转
  cameraControl.autoRotate = false
  cameraControl.autoRotateSpeed = 2.0 // 默认速度为30秒旋转一周的速度，一秒60帧的情况下

  // 是否开启键盘控制
  cameraControl.enableKeys = true

  // 控制焦点的位置偏移的键盘按键 默认是上下左右键的 keyCode
  cameraControl.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }

  // 控制相机控制器的鼠标按键设置 默认左键旋转，中键缩放，右键移动焦点位置 手动配置会导致mac触控板失效
  // this.cameraControl.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT }
  return cameraControl
}
