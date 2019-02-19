var arr = [100, 200, 300];
// 有遍历接口的可以遍历到数组的每一项，而不是数组的下标
for (var attr of arr) {
    console.log(attr)
}
// 数组天生有遍历接口，类数组，set，map:都部署有遍历接口
// console.log( arr[Symbol.iterator] );
// var k = arr.keys();
// console.log( k.next() );
// console.log( k.next() );
// console.log( k.next() );
// console.log( k.next() );

var k = i(arr);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

function i(obj) {
    var index = -1;
    return {
        next: function () {
            index++
            return index < obj.length ?
                {
                    value: index,
                    done: false
                } :
                {
                    value: undefined,
                    done: true
                }
        }
    }
}