**开发背景：**

实现类似钉钉单人头像

### 1.查看示例
![示例](https://s1.ax1x.com/2020/05/12/YthYjA.png)


### 2.在项目中使用

```
npm i -S vue-cnname-avatar
```
``` vue
<template>
  <div id="app" class="center">
    <div class="mr" >
      <name-avatar scale='2' name="李亨达"></name-avatar>
    </div>
    <div>
      <name-avatar scale='2' faceUrl="https://c-ssl.duitang.com/uploads/item/201809/21/20180921212643_omxtr.jpg"></name-avatar>
    </div>
  </div>
</template>
<script>
import nameAvatar from "vue-cnname-avatar";
export default {
  name: "app",
  components: {
    nameAvatar
  },
  data() {
    return {};
  }
};
</script>
```

### 3.可选配置说明

| 属性            | 说明                       | 类型   | 默认值                 |
|-----------------|----------------------------|--------|------------------------|
| scale           | 缩放比例（选填）           | String | 1                      |
| num             | 显示+num数字               | String | -                      |
| name            | 中文名                     | String | -                      |
| mode            | 选择显示圆形还是方形的头像 | String | 填入square显示方形头像 |
| fontColor       | 字体颜色                   | String | #fff                   |
| backgroundColor | 背景颜色                   | String | #3696F2                |
| faceUrl         | 图片地址                   | String | -                      |



### 更新日志
v1.0.6
更新说明
  
