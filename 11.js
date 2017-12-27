//计算器功能：
	//加
	var sum = function (num1,num2){
		return num1 + num2;
	}
	//减：
	var subtract = function (num1,num2){
		return num1 - num2;
	}
	//乘
	var multiply = function (num1,num2){
		return num1 * num2
	}
	//除
	var divide = function  (num1,num2){
		return num1 / num2
	}

	//导出成员：
	module.exports = {
		sum:sum,
		subtract:subtract,
		multiply:multiply,
		divide:divide
	}
