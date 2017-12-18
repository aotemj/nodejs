/**
 * 使用global导出模块
 */

// 定义变量
var flag = "这是通过添加全局方法增加的属性";

// 将当前变量添加到global的对象中
global.flag = flag;
