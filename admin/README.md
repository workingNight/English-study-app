## 后台管理


### 关于文件的下载处理
excel用node-xlsx挺方便的

### 关于单词上传处理
单词文件是json文件，用antd的上传文件插件。
但是有一个问题就是：传文件是传到哪里，传了之后怎么处理到数据库。
上传的概念，是将本地文件传到远程服务器上的操作。
通过stream流的方式上传文件。[参考文章](https://segmentfault.com/a/1190000020239877)
单个文件可以使用getFileStream方法获取文件流


### 对于单词数据的编辑
弄一个组件，引入。
给其传入id或者初始值，点击进行编辑。一个表单。
对某一个数据的编辑有两种方式：
1. 点击添加进入一个页面进行编辑。
详情---》  
```
页面跳转应该是怎么样的呢,也要做一个子路由进行编辑
 <Switch>
        <Route path='/product' component={ProductHome} exact/> {/*路径完全匹配*/}
        <Route path='/product/addupdate' component={ProductAddUpdate}/>
        <Route path='/product/detail' component={ProductDetail}/>
        <Redirect to='/product'/>
</Switch>
```
2. 把form组件放入model里面，点击之后弹出一个form来进行内容的编辑。
再进一步简单介绍一下model放框的逻辑。框是事先放在页面的，只是隐藏了起来如果点击某个按钮时就会把这个组件展示出来。



### 对于首页轮播图的管理
逻辑上的操作是，后台管理系统上面把本地图片上传到七牛云，然后七牛云返回一个图片链接给你，然后我们再把这个图片链接存到数据库里面去。视频的管理应该也是类似。


### 一个坑
表单初始值，需要表单项name属性和那个属性一样

