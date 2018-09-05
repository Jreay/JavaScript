// var {getAge} = require('./b.js');

// getAge();
// var bb =212;
// console.error(bb);
// alert(11);


// var a = '{"a":1}';
// // console.log(typeof JSON.parse(a))
// // console.log(JSON.parse(a))
// // console.log(JSON.parse(a) instanceof Object);

class People{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(){
        return this.x + this.y
    }
}

const m = new People(1,2);
console.log(m.add());
//继承
class Man extends People{
    constructor(x,y){
        super(x,y);
    }

    sub(){
        return this.x-this.y;
    }
}

class Woman extends People{
    constructor(x,y){
        super(x,y);
    }
}

let n = new Man(10,4);
let nm = new Woman(10,4);
console.log(n.sub());
console.log(n.add());
