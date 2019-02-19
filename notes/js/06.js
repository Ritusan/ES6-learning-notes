// chrome控制台的performance下有个垃圾桶，能够手动回收垃圾
// WeakMap不能以非对象作为键名
// Map是强引用，即使置为null也不会被垃圾回收机制回收
// WeakMap是弱引用，内存释放之后会被回收
// 不可以用来遍历
var wm = new WeakMap()
var stu1 = {
    name: 'li',
    age: 18
}
var stu2 = {
    name: 'lili',
    age: 19
}
wm.set(stu1, 'hi')
wm.set(stu2, 'hello')
console.log(wm)