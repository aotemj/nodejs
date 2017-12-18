/*
	模块化开发
	传统非模块化开发的缺点:
		1.命名冲突
		2.文件依赖

	前端标准的模块化规范：
		1.AMD - requirejs
		2.CMD - seajs

	服务器端的模块化规范：
		1.CommonJS - Node.js


	模块化相关的规则：
		1.如何定义模块： 一个js文件就是一个模块，模块内的成员（变量、函数）都是相互独立的
		2.模块成员的导出和引入：

		模块的导出以 module.exports 为准

		module.exports 和 exoprts 的关系
		module.exports = exports = {};

		如果要导出的成员较少，推荐使用exprots
		如果要导出的成员较多，推荐使用module.exports
		这两种方式不可以同时使用
 */

//定义模块

var sum = function(num1,num2){
	return num1 + num2;
}

//导出模块：
//方式1:
exports.sum1 = sum;

//方式2:
module.exports = sum;





