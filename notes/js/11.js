// es6中键名和键值相同时可以省略键值来写,函数也可以简写
var a = 1
var obj = {
    a,
    fn(){
        console.log('fn')
    },
}
console.log(obj)
var attrname = 'width'
var attrobj = {}
var attrfn = 'fn'
var obj1 = {
    // 方括号里写变量，对象不支持以对象作为key 
    [attrname]:100,
    [attrobj]:'hi',
    [attrfn](){
        console.log('attrfn')
    }
}
console.log(obj1)

console.log(Object.is(NaN,NaN))

function move(obj){
    var defaultObj = {
        ease: 'liner',
        duration: 1000
    }
    // var para = {
    //     ease: obj.ease || defaultObj.ease,
    //     duration: obj.duration || defaultObj.duration
    // }  //手动合并比较麻烦
    var para = {}
    // 会修改传进来的第一个参数，后面的都会往前面进行合并，越往后写的会保留下来，后面的会融合前面的，以后面的内容为准
    Object.assign(para,defaultObj,obj)
    // console.log(para)
    console.log(para)
}
move({
    ease: 'easeIn',
    // duration: 2000 
})

//-----------------------------------------------------------
var obj2 = {
    a: 1,
    b: 2
}
// for of 无法直接遍历对象
// for(var attr of obj2){
//     console.log(attr)
// }
// 返回对象可遍历的所有key，存到一个数组里,因为数组上面部署了遍历接口，所以后面可以遍历到对象
console.log(Object.keys(obj2)) 
for(var attr of Object.keys(obj2)){
    console.log(attr)
}
// 返回对象可遍历的所有value
console.log(Object.values(obj2)) 
for(var attr of Object.values(obj2)){
    console.log(attr)
}

// 返回二维数组，第一项是key,第二项是value
console.log(Object.entries(obj2)) 
// for(var attr of Object.entries(obj2)){
//     console.log(attr)
// }
// 利用解构
for(var [key,val] of Object.entries(obj2)){
    console.log(key,val)
}

//---------------------------------------------------
// 扩展运算符
var obj3 = {
    a: 1,
    b: 2
}
// var res = {
//     a: 1,
//     b: 2,
//     c: 3 
// }
var res3 = {
    ...obj3,  //...:把一个对象打散成参数的形式
    c: 3
}
console.log(res3)

var arr3 = [1,2,3,4]
console.log(arr3)
console.log(...arr3)  //把arr打散成4个参数

// ...应用场景
// 取参数中的最大值
// console.log(Math.max(1,23,66)) 
var arr4 = [1,23,66]
console.log(Math.max(...arr4))  //把数组打散成参数 

// 数组去重
var arr5 = [1,2,1,3,5,6,6,5]
// 打散set结构
var res5 = [...new Set(arr5)]
console.log(...res5)