// es6---str

// es5,判断字符串中是否包含某个字符
var str = 'cheerful'
console.log(str.indexOf('fu') != -1)

// es6中，有更加语义化的方法
console.log(str.includes('fu')) //直接返回true或false

// 判断以什么开头
console.log(str.startsWith('ch'))
// 判断以什么结尾
console.log(str.endsWith('ful'))
// 重复字符串
console.log(str.repeat(3))
// 超级字符串，模板字符串
var classStr = 'hidden'
var html = 
`
<div>
    <span class='left'></span>
    <span></span>
    <span class='${classStr}'></span>
</div>
`
console.log(html)
var m = 1
var n = 2
console.log(`m+n=${m+n}`)

var isRaining = true
console.log(`今天天气是 ${ isRaining ? '雨天':'晴天'}`)

function fn(){
    return 'sunshine'
}
console.log(`fn执行结果是 ${ fn() }`)