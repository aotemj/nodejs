/**
 * 导入模块
 *
 */

 var module = require('./03.js');

 //调用模块：
 //方式1 ：
 // var res = module.sum1(1,2);
 // console.log(res);

 //方式2 ：
 var res = module(1,2);
 console.log(res);
