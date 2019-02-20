// 异步编程解决方案Promise
// promise一旦进入成功或失败的状态就无法改变
var p = new Promise((resolve,reject)=>{
    console.log('实例化'); //在创建实例的时候直接执行
    return resolve('成功') //用return来阻止后续代码的执行
    reject();
    console.log('aaa')
})
// console.log(p)
// then里面的参数data是promise的resolve里的实参
// p.then((data)=>{
//     console.log('then:',data)
// })

// 宏任务
console.log(1)

// 推到任务队列里，下一轮执行的任务里，在本轮中不会立刻执行，即使时间写成0也会被推到任务队列里
setTimeout(()=>{
    console.log(2)
})
setTimeout(()=>{
    console.log(3)
})
// setTimeout(()=>{
//     console.log('----------------------------------------')
// })
var p1 = new Promise((res,rej)=>{
    console.log(4)
    res()
})
p1.then(()=>{
    // 微任务
    // 先执行本轮当中的宏任务，再执行本轮当中的微任务，然后开始下一轮执行
    // then方法建立在p的实例上面
    console.log(5)
})
console.log(6)

//------------------------------------------------------------
var p2 = new Promise((res,rej)=>{
    res('成功')
    // rej()
})
// 监听成功
// 当then方法调用完之后会再返回一个Promise对象，所以then后面可以继续调用then（链式调用）
p2.then((data)=>{
    console.log(data)
})
.then(()=>{
    console.log('then2')
    // a
})  //这两个then返回的Promise对象不相等
.catch((err)=>{
    console.log(err)
})  //捕获错误信息，出错时会在控制台打印出错误的信息，好处：不会影响后续外面代码的执行
.finally(()=>{
    console.log('执行完了……')
})  //不管是成功还是失败，（不管走到then还是catch，最后都会执行）
// 监听失败
// p2.catch(()=>{
//     console.log('失败')
// })

// Promise内部有两个东西：状态和值 

//----------------------------------------------------------------------
// Promise的一些静态方法
// Promise.resolve(data):返回一个成功的Promise
// Promise.reject(data):返回一个失败的Promise
// Promise.all():把多个Promise合并成一个
var pro1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('a')
    },1000)
})
var pro2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('b')
    },1500)
})
var pro3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('c')
    },500)
})
// 3个Promise全部都执行完的结果,then的data返回的是一个数组
var pro = Promise.all([pro1,pro2,pro3])
console.log('pro-all: ',pro)
pro.then((data)=>{
    console.log('pro-data: ',data)
})

// Promise.race():赛跑，Promise的值是最先执行完的那个，data是最先执行完的那个值
var prom = Promise.race([pro1,pro2,pro3])
console.log('prom-race: ',prom)
prom.then((data)=>{
    console.log('prom-data: ',data)
})

//---------------------------------------------------------------------
// Promise改写运动