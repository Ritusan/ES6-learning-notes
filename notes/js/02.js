// es6解构赋值
// 1.对象的解构赋值
var stu = {
    name: 'sunny',
    age: 18,
    xh: 111
}
// 在声明时进行解构赋值
var { name,age } = stu
console.log(name,age)

// 在声明之后进行解构赋值
var xh = '';
({ xh } = stu) //加了括号变成独立的部分，不加会报错
console.log(xh)

// 重命名(别名) 用:
var { name: xm } = stu
console.log(xm)

// 访问没有的属性,当stu里的值是undefined或不存在时，用默认值，0代表false(等于0时取的是0)
// 默认值用 =
// var { height } = stu
// console.log(height) // undefined 
var { height = 170 } = stu
console.log(height) // 170

// 同时使用别名和默认值，数组也适用
var { gender: g='female' } = stu
console.log(g)

// 2.数组的解构赋值
var arr = "sunny12345".split('')
console.log(arr)
// 数组的解构赋值是严格按照数组的先后顺序，是按照数组下标的先后顺序进行解构的
var [first,second,,,five] = arr  //中间跳过了两个数，用逗号把位置占住
console.log(first,second,five)

// 剩余模式,剩余的值都存到一个数组里，对象也适用
var [a,b,c,...r] = arr
console.log(a,b,c,r )