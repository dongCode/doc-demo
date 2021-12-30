# vuepress doc demo

#### 注册组件  
安装好组件依赖之后需要在docs/.vuepress/enhanceApp.js 文件中将所依赖的组件引入，参考如下  
  
```
import Element from 'elememt-ui';

export default ({ Vue, options, router }) => {
  Vue.use(Element);
};   
```  
                     |
