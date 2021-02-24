import { Scene, Color, Fog,
  GridHelper, HemisphereLightHelper,
  DirectionalLight, Vector3, HemisphereLight,
  DirectionalLightHelper } from 'three'

export default function createScene(backgroundColor, AmbientLightColor, mode, dlIntensity, hlIntensity) {
  const scene = new Scene()

  // 设置背景颜色
  scene.background = new Color(backgroundColor)
  scene.fog = new Fog(scene.background, 1, 1000)

  // 地面网格
  const grid = new GridHelper(2000, 40, 0x000000, 0x000000)
  grid.material.opacity = 0.2
  grid.material.transparent = true
  scene.add(grid)

  // 添加平行光
  const directionalLight = new DirectionalLight(0xffffff, dlIntensity) //  添加了一个白色的平行光(颜色,光强)
  directionalLight.position.set(0, 30, 30) //  设置光源位置
  directionalLight.lookAt(new Vector3())
  scene.add(directionalLight)
  const dirLightHelper = new DirectionalLightHelper(directionalLight, 10)

  // 添加半球光
  const hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, hlIntensity)
  hemisphereLight.position.set(0, 30, 0)
  scene.add(hemisphereLight)
  const hemiLightHelper = new HemisphereLightHelper(hemisphereLight, 10)

  if (mode === 'dev') {
    scene.add(dirLightHelper)
    scene.add(hemiLightHelper)
  }

  return scene
}
