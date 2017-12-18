// 设定定时器
var timer = setTimeout(function(){
	console.log("1s后触发");
},1000);

// 清除定时器
setTimeout(function(){
	clearTimeout(timer);
},1000);

//global, 相当于浏览器中的window对象
global.console.log("这是通过global对象打印的数据");

//process.argv, 输出的第一个参数为当前系统的node环境路径， 第二个参数为 当前运行的文件的路径，从第三个参数开始为 命令行参数
console.log(process.argv);

//process.arch, 输出当前系统的架构（64位或32位）
console.log(process.arch);


