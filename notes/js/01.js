// 先声明后使用，否则报错
// let 声明的变量不支持变量预解析（不存在变量提升）
// let 不支持重复声明
// let 块级作用域，在代码块外面访问不到里面的变量，在块作用域里面可以访问到
let a = 1
console.log(a) // 1

// console.log(b) // Uncaught ReferenceError: b is not defined
let b = 2

let c = 3
// let c = 4
console.log(c) // Uncaught SyntaxError: Identifier 'c' has already been declared

{
    let d = 1
    console.log(d)
}
// console.log(d) // Uncaught ReferenceError: d is not defined

// const 声明一个只读的常量，后期再赋值时会报错
// 一旦声明，常量的值就不能改变，必须立即初始化，不然会报错
// const 不支持预解析，不支持重复声明，支持块级作用域
// const 不能直接修改对象，但可以修改对象内部的键值对
const A = 10
// A = 100
console.log(A) // Uncaught TypeError: Assignment to constant variable.

// const B // Uncaught SyntaxError: Missing initializer in const declaration

const obj = {}
// obj = 1 // Uncaught TypeError: Assignment to constant variable.
obj.name = 'aaa'
console.log(obj)