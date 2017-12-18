/**
 * 测试导入
 */
var module = require('./05.js');
console.log(module);

//方式1调用导入的模块
//console.log('使用方式1调用导入的模块');

// var sum = module.sum(1,2);
// console.log("1+2= " + sum);

// var subtract = module.subtract(1,2);
// console.log("1-2= " + subtract);

// var multiply = module.multiply(1,2);
// console.log("1*2= " + multiply);

// var divide = module.divide(1,2);
// console.log("1/2= " + divide);

//方式2 调用导入的模块：
console.log("使用方式2调用导入的模块")

var sum = module.sum(1,2);
console.log("1+2 = " + sum);

var subtract = module.subtract(1,2);
console.log("1-2 = " + subtract);

var multiply = module.multiply(1,2);
console.log("1*2 = " +multiply);

var divide = module.divide(1,2);
console.log("1/2 = " + divide);

