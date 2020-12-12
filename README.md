# 介绍

> 这是一个极简的 gltf查看插件，模版使用: [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建。

## Build Setup

```bash
# 克隆项目
git clone https://github.com/brave1126/th-gltf.git

# 进入项目目录
cd th-gltf

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 使用文档

<!-- ### props
名称                      			简介                    		  	类型			默认值
src						gltf文件路径				String			必填
scale					放大级别					Array			[3, 3, 3]
position					位置					Array			[0, 0, 0]
rotation					旋转					Array			[0, 0, 0]
backgroundColor			scene背景色				String			#e0e0e0
mode					模式（是否显示辅助内容）	String			prod

### events
thLoad					模型加载完毕未加入scene
thDbClick				mesh双击
thHoverClick				mesh悬浮 -->

## Demo

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2017-present brave1126


