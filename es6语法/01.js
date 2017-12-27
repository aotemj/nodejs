let {length} = 'helloz';
console.log(length);

// let {foo:abc ='hello',bar } = {bar:'hi'};
// console.log(abc,bar);

let {foo:abc = 'hello',bar} = {foo:'newHello',bar:'hi'}
console.log(abc,bar);

// includes() 检测当前字符串中是否包含指定的子串
let str = 'hello world';
let res = str.includes('world');
let res1 = str.includes('wrold');
console.log(res);//true
console.log(res1);//false


