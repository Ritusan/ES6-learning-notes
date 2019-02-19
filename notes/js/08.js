// symbol代表独一无二的值
var s = Symbol('a') //a只是用来标识s的，不含有其它作用
console.log(typeof s)
console.log(s)
var s2 = Symbol('b')
console.log(s2)
console.log(s === s2)

// symbol不能通过new创建或调用
// 无法进行加减乘除之类的运算
// 无法进行字符串拼接
// 转不成字符串与数字，但可以转成布尔值
// symbol主要用于对象内部会进行覆盖的情况