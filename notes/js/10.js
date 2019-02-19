// Array.of()：可以写多项或一项，之前的Array写一项代表数组的长度
var arr = Array.of(10,20,30)
// console.log(arr)
// 判断是不是数组
// console.log(Array.isArray(arr))

// var els = document.all  类数组，返回false
var els = document.getElementsByTagName('*')
// Array.from()转成数组，输出true
var arrEls = Array.from(els)
console.log(Array.isArray(els))  //false
console.log(Array.isArray(arrEls))  //true

var list = [10,70,50,40,30,60]
// 找首次合适的值
var res = list.find(function(item){
    console.log(item) 
    return item > 50
})
// 找首次出现的下标
var resIndex = list.findIndex(function(item){
    // console.log(item) 
    return item > 50
})
console.log(res)
console.log(resIndex)