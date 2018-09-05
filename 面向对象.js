function Person(name,age) {
    this.sex = 'Man';
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log(this.name+"要吃饭了");
    }
    this.getAge = function () {
        console.log(this.name+"今年"+this.age);
    }
};


//通过prototype我们还可以很方便的扩展系统对象
Person.prototype.Man = function () {
        console.log(this.name + "吃完了");
};


function Animal(name,age) {
    Person.call(this,name,age);//继承父类的构造方法
    this.type = "animal";
}
Animal.prototype = new Person();//继承父类的实例

//TODO    console.log()
var sp = new Person("猪精",22);
console.log(sp.name);
console.log(sp.age);
sp.eat();
sp.getAge();
sp.Man();

var an = new Animal('dog',10);
console.log(an.type);
console.log(an.name);
console.log(an.age);
an.eat();
an.getAge();
an.Man();


console.log(12);
//TODO    console.log()
console.error(123);
//TODO
console.log(parseInt(1123.1));
console.log(Number.parseInt(1123.456));

let a = 'ab',b = 'b';
let json = {
    [a+b]:'撒把'
};
json[b+a]  = "jaljdlj";
console.log(json.abb);
console.log(json.bab);


