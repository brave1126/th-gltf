import {WebGLRenderer,sRGBEncoding} from 'three'

/** 渲染器配置 */ 
export default function createRenderer(container){
  const renderer = new WebGLRenderer({
    //抗锯齿
    antialias:true,
    // canvas透明度 (在scene没有背景颜色时alpha:false会是黑的背景)
    alpha:true
  })
  
  // 生产环境关闭着色器检查 优化性能 （开发环境建议开启）
  renderer.debug.checkShaderErrors = false

  // 色彩空间转换配置
  renderer.outputEncoding = sRGBEncoding; 

  // 设置像素比 解决了mac输出模糊
  renderer.setPixelRatio( window.devicePixelRatio )
  
  renderer.setSize(container.offsetWidth,container.offsetHeight)
  
  return renderer
}