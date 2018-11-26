详解defer和async的原理及应用



### JS模版引擎
handlebars.js


### 事件流的三个阶段
> 事件冒泡(由内到外) 事件捕获(由外到内)
> addEventListener方法带有三个参数，分别是：eventType、handler、useCapture
> stopPropagation 阻止冒泡
1. 事件捕获阶段
2. 处于目标阶段
2. 事件冒泡阶段


### JS继承的方法
1. 原型链继承
function Cat(){}
Cat.prototype = new Animal()
2. 构造继承
function Cat(){
	Animals.call(this)
}
3. 实例继承
function Cat(){
	var instance = new Animals()
	instance.name = "Tom"
	return instance;
}
4. copy
function Cat(){
	var instance = new Animals()
	for(var i in instance){
		Cat.prototype[i] = instance[i]
	}
}
5. 组合继承
function Cat(){
	Animals.call(this)
} 
Cat.prototype = new Animal()


### 创建对象的方法
1. new Object
2. {}
3. function(){ 
	  return new Object() 
   }
4. new fn()
5. fn.prototype.name = "Tom"
5. fn.prototype.fn1 = function(){}


### 常见Http状态码
2x. 请求阶段
	200 请求正常返回
	204 no content 
	206 partiral content
3x. 重定向相关
	301 永久重定向
	302 临时重定向
	303 see other, 同302, 使用GET请求新URL
	304 表示请求的内容没有改变, 使用本地缓存来呈现
	307 临时重定向, 不允许POST变为GET

4x. 客户端请求错误
	400 Bad request
	401 Unauthorised
	403 Forbidden
	404 Not Found


5x. 服务器错误
	500 internal server error
	502 Bad Gateway 网关错误
	503 service unavaliable


#### React生命周期函数
//Init
constructor
ComponentWillMount 组件将要挂载
ComponentDidMount 组件已经挂载 (Do Ajax)
 
//Update
componentWillReceiveProps (nextProps)
shouldComponentUpdate (props, state)
componentWillUpdate
render
componentDidUpdate 

//unmount
componentWillUnmount