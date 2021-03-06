// es6----set

// set:ES6中新增的一种数据结构，通过new构造函数创建
// set下面的方法：
// size
var s = new Set(['a', 'b', 'c'])
console.log(s)
console.log(s.size) //3

// add()
// d只会添加一次，set：数组只会保存唯一的值，值不重复，不会对里面的内容进行重复添加
s.add('d').add('e').add('d')
// NaN === NaN :false, 但是set中会检测到NaN，不会重复添加多个NaN进去
// s.add(NaN).add(NaN)
// console.log(s)

// delete()，有返回值
// var res = s.delete('a')
// console.log(s)
// console.log(res) //true
// var res2 = s.delete('z')
// console.log(res2) //false

// has():判断某一个值在数据结构中存不存在,存在返回true，不存在返回false
console.log(s.has('b')) //true

// clear():把set结构清空
// s.clear()
// console.log(s)

// forEach():遍历
// 函数参数：
// item:当前循环的那一项
// index:当前项的索引（在set数据结构中，项和索引一样）
// set:完整的set数据结构
s.forEach(function (item, index, set) {
    // console.log(item,index,set)
})

// 其他方式遍历：keys():返回一个遍历接口
// var keys = s.keys()
// console.log(keys)
// // next()：把set数据结构中按照插入的顺序一个一个遍历
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())

// 在set中因为item和index相同，所以keys()方法和values()方法的返回值一样
// var values = s.values()
// console.log(values)
// // next()：把set数据结构中按照插入的顺序一个一个遍历
// console.log(values.next())
// console.log(values.next())
// console.log(values.next())
// console.log(values.next())
// console.log(values.next())
// console.log(values.next())

// var entries = s.entries()
// console.log(entries.next())
// console.log(entries.next())
// console.log(entries.next())
// console.log(entries.next())
// console.log(entries.next())
// console.log(entries.next())

// 数组去重:利用set的特点：不会对里面的内容进行重复添加
var list = [12, 24, 34, 2, 3, 12, 34, 3]
var ss = new Set(list)
console.log(ss)