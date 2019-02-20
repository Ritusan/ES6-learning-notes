// es6---箭头函数

// function add(a,b){
//     var _b = b === undefined ? 1 : b
//     return a+_b
// }
// 如果函数少传参数，要进行默认处理
// function add(a,b=100){
//     return a+b
// }
// console.log(add(10,0))

//-------------------------------------------------
// 剩余参数
function fn(a,...r){
    // console.log(a,arguments)
    console.log(a, r)
}
fn(1,2,3,4,5)

//-------------------------------------------------
// 箭头函数 
// var add = (a,b) => {
//     return a+b
// }
// 如果箭头函数里语句只有一条，并且有返回值，可以省略return和花括号
// var add = (a,b) => a+b
// console.log(add(10,20))

// 如果参数只有一个，也可以使用变体,当参数只有一个时，可以省略花括号，如果没有参数，则不能省略花括号
var add = a => a*100
console.log(add(2))

//-------------------------------------------------
// 用箭头函数，简化写法
var arr = [10,20,30,40,50]
// var res = arr.filter(function(item){
//     return item > 20
// })
var res = arr.filter(item => item>20)
console.log(res)

//-------------------------------------------------

// 箭头函数中this指向，this指当函数创建时的this，箭头函数创建的时候this也已经确定了
// 箭头函数不能通过new进行调用，不是一个构造器
var fn1 = (...r) => {
    console.log(this)
    // 在箭头函数中没有arguments,如果想拿到参数，用剩余参数...来模拟arguments
    // console.log(arguments)
    console.log(r)
}
fn1(1,2,3)
// fn1.bind({a:1})  //用bind修改箭头函数的this指向无效 
// document.onclick = fn1

// 普通函数中this指向，什么时候调用会去改变this到底指向谁 
var fn2 = function(){
    console.log(this)
}
fn2()
//-------------------------------------------------
