# 移动端多页基础模版

```
  开启项目 gulp dev
  打包项目 gulp bulid
```

## 旧项目模版

## 项目结构
```
└── src
  ├── html              页面
    ├── template         模版页面    
      ├── template.js    js
      ├── template.html  html

  ├── images            图片
  ├── assets            公共资源文件
    ├── rem             rem适配js
    ├── util            js工具库
    ├── plugin          插件
  ├── api               接口文件
  ├── scss              样式库
    ├── component       基本样式模块
    ├── commom.scss     公共样式
    ├── template.scss   模块样式

├── dist                打包后项目文件

├── node_modules        项目依赖

├── gulpfile.js         gulp配置文件

├── package.json        项目依赖配置文件

```
## 项目规范

### 目录规范


### 样式规范

- 小写，下划线 '_' 连接

##  修改目录结构

##  添加gulp工作流

- scss 编译压缩
- 压缩图片
- 增加本地服务器