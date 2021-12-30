# 永辉职能前端 vue 项目组件库

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build site app,

```bash
$ npm run build
```

## 目录结构

docs  
┣ fis-meng-ui  
┃ ┣ page  
┃ ┃ ┗ README.md  
┃ ┗ README.md  
┣ fn-ihr-ui  
┃ ┣ button  
┃ ┃ ┗ README.md  
┃ ┣ input  
┃ ┃ ┗ README.md  
┃ ┗ README.md  
┣ fn-zs-ui  
┃ ┣ select  
┃ ┃ ┗ README.md  
┃ ┗ README.md  
┗ README.md  

| 目录名称    | 说明           |
| ----------- | -------------- |
| fis-meng-ui | 慧共享项目组件 |
| fn-ihr-ui   | IHR 项目组件库 |
| fn-zs-ui    | 招商项目组件库 |

### 引入组件
#### 安装依赖  

慧共享

```
npm i fis-meng-ui -S
```

IHR

```
npm i fn-ihr-ui -S
```

招商

```
npm i fn-zs-ui -S
```

#### 注册组件  
安装好组件依赖之后需要在docs/.vuepress/enhanceApp.js 文件中将所依赖的组件引入，参考如下  
  
```
import fnIhrUi from 'fn-ihr-ui';
import fnZsUi from 'fn-zs-ui';

export default ({ Vue, options, router }) => {
  Vue.use(fnIhrUi);
  Vue.use(fnZsUi);
};   
```  

#### 在markdow中使用vue组件

与 dumi 有所不一样，vuepress 并不能自动将代码转换为组件预览状态，因此我们需要引入组件显示，同时增加对应的组件代码
(其实就是将组件写两遍，一遍写在代码块中)

> &lt;el-button type="primary"&gt;test&lt;/el-button&gt;    
>\```   
>&lt;el-button type="primary"&gt;test&lt;/el-button&gt;  
>\```  

可以得到如下效果
<img src='./assets/截图1.png'>

参考 [fn-ihr-ui/README.md](./docs/fn-ihr-ui/README.md)

## nav 和 sidebar 配置

与dumi的约定路由不同，vuepress的路由大多需要手工配置
在 docs/.vuepress/config.js 中配置，目前只发现能省去最后的*.md名称  
参考[config.js](./docs/.vuepress/config.js)  

```
{
  theme: "@vuepress-dumi/dumi",
  title: "永辉职能前端vue组件库",
  description: "永辉职能前端vue组件库",
  themeConfig: {
    nav: [
      { text: "慧共享", link: "/fis-meng-ui/" },
    ],
    sidebar: {
      "/fn-ihr-ui": [
        {
          title: "开始使用",
          collapsable: false,
          children: [
            ["/fn-ihr-ui/", "安装"],
          ],
        },
        {
          title: "组件",
          collapsable: false,
          children: [
            ["/fn-ihr-ui/button/", "Button 按钮"],
            ["/fn-ihr-ui/input/", "Input 按钮"],
          ],
        },
      ],
      "/fn-zs-ui": [["/fn-zs-ui/select/", "Select 按钮"]],
      "/fis-meng-ui": [["/fis-meng-ui/", "Page 按钮"]],
    },
  },
};
```

| 字段                  | 说明                                                                             |
| --------------------- | -------------------------------------------------------------------------------- |
| nav.text              | 右上角 nav 菜单标题                                                              |
| nav.link              | 右上角 nav 菜单链接                                                              |
| sidebar[key]          | 需要和 nav.link 中的链接对应上 ，左侧菜单配置，不同的 navlink 显示不同的 sidebar |
| sidebar[key].title    | 左侧 sidebar 分组的菜单名称                                                      |
| sidebar[key].children | 左侧 sidebar 菜单名称和链接，采用 [链接，菜单名称] 格式                          |
