import {Scene,Color,AmbientLight,Fog,Mesh,PlaneBufferGeometry,
  MeshPhongMaterial,GridHelper,HemisphereLightHelper,
  DirectionalLightHelper,MeshLambertMaterial} from 'three'
import {directionalLight,behindDirectionalLight,
  leftDirectionalLight,rightDirectionalLight,hemisphereLight} from './LightPlugin'

export default function createScene(backgroundColor,AmbientLightColor,mode){
  const scene = new Scene()

  // 设置背景颜色
  scene.background = new Color(backgroundColor)
  scene.fog = new Fog( scene.background, 1, 1000 )

  // 地面网格
  const grid = new GridHelper( 2000, 40, 0x000000, 0x000000 )
  grid.material.opacity = 0.2
  grid.material.transparent = true
  scene.add( grid )

  // scene.add(new AmbientLight(AmbientLightColor)) // 添加一个全局环境光

  scene.add(directionalLight) // 添加平行光
  const dirLightHelper = new DirectionalLightHelper( directionalLight, 10 )

  // scene.add(behindDirectionalLight) // 添加背部光源
  // scene.add(leftDirectionalLight) // 添加左侧光源
  // scene.add(rightDirectionalLight) // 添加右侧光源

  scene.add(hemisphereLight) // 添加半球光
  const hemiLightHelper = new HemisphereLightHelper( hemisphereLight, 10 )
  

  if(mode==='dev'){
    scene.add( dirLightHelper )
    scene.add( hemiLightHelper )
  }

  return scene
}