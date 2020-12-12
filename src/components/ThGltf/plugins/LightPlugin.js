// 未使用

import { DirectionalLight, Vector3, HemisphereLight } from 'three'
// 平行光不衰减
const directionalLight = new DirectionalLight(0xffffff, 0.6) //  添加了一个白色的平行光(颜色,光强)
directionalLight.position.set(0, 30, 30) //  设置光源位置
directionalLight.lookAt(new Vector3())

// 背后平行光
const behindDirectionalLight = new DirectionalLight(0xffffff, 1)
behindDirectionalLight.position.set(0, 30, -30)
behindDirectionalLight.lookAt(new Vector3())

// 左侧平行光
const leftDirectionalLight = new DirectionalLight(0xffffff, 1)
leftDirectionalLight.position.set(30, 30, 0)
leftDirectionalLight.lookAt(new Vector3())

// 右侧平行光
const rightDirectionalLight = new DirectionalLight(0xffffff, 1)
rightDirectionalLight.position.set(-30, 30, 0)
rightDirectionalLight.lookAt(new Vector3())

// 半球光
const hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.8)
hemisphereLight.position.set(0, 30, 0)

export { directionalLight, behindDirectionalLight, leftDirectionalLight, rightDirectionalLight, hemisphereLight }
