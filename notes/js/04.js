// es6---Map

// 一个对象作为另一个对象的key进行存储，普通的对象做不到，map可以做到
// map中的键或值都可以是任何一种数据结构
// 在map中以键值对的表现方式呈现
var m = new Map([
    ["name", "sunny"],
    ["age", 20]
]); //二维数组
console.log(m)
// console.log( m.size );  
// get:获取键对应的值
// console.log( m.get( "name" ) )

// set:设置新内容
m.set("height", 160);
// var jan = { name: "jan" };
// m.set( jan,1 );

// var res = m.delete( jan );
// var res = m.delete( "z" );

// console.log( m.has( momo ) );
// console.log( m.has( "z" ) );

// m.clear()

m.forEach(function (item, key, map) {
    console.log(item, key, map)
})

// var res = m.keys();
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );

// var res = m.values();
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );

// var res = m.entries();
// console.log( res )
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );
// console.log( res.next() );

// m.set( {},2 );
// m.set( {},3 );
// 每次的{}都是一个新对象，地址都是不一样的
// console.log( m.get( {} ) ); 

// var obj = {};
// m.set( obj,2 );
// m.set( obj,3 );
// console.log( m.get( obj ) );