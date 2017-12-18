/**
 * 测试导出
 */

 var sum  = function (num1,num2){
 	return num1 + num2;
 }

 var subtract = function (num1, num2){
 	return num1 - num2;
 }
 var multiply = function (num1, num2){
 	return num1 * num2;
 }
 var divide  = function (num1, num2){
 	return num1 / num2;
 }

	//导出方法：

	//方式1：
	// exports.sum = sum ;
	// exports.subtract = subtract;
	// exports.multiply = multiply;
	// exports.divide = divide;

	//方式2
	module.exports = {
		sum : sum,
		subtract : subtract,
		multiply : multiply,
		divide : divide
	}


