// 之前的构造函数
// function Student(name,age){
//     this.name = name
//     this.age = age
// }
// Student.prototype.say = function(){
//     console.log('hi '+ this.name)
// }
// var p = new Student('rain',18)
// p.say()

// class:es5中是保留字，在es6中是关键字
// class:基于原型
class Person {
    // 模拟构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 两个方法之间不需要写逗号隔开
    say() {
        console.log('hi ' + this.name)
    }
    run() {
        console.log('running')
    }
}
// 必须用new调用class
var p1 = new Person('sunny', 18)
// console.log(p1)
// p1.say( )
// console.log(Person.prototype)
// p1.run()
// 遍历原型上的方法，原型上的方法不可枚举
// console.log(Object.keys(Person.prototype))

// 继承
class Coder extends Person {
    constructor(name, age, money) {
        super(name, age) //父类的东西
        this.money = money
    }
}
var c1 = new Coder('lin', 20, 50000)
console.log(c1)