import { sum, sub, x, arr, Employee } from "./index.js"
import prasad from './index.js'
console.log(prasad)
let result = sum(3, 4, 5)
console.log(result)
console.log(x)
class Manager extends Employee
{
    pos;
    constructor(s, i, n, p)
    {
        super(s, i, n);
        this.pos=p
    }
}





//this
name="raj"
let obj2 = {
    name: "shekhar",
    salary: 25000,
    run:function(){console.log(this.name+" is running")}
}
function display (a,b)
{
    console.log(this.name,a+b)
}

obj2.run();
display.call(obj2,5,3)
display.apply(obj2,[5,3])

let newFun = display.bind(obj2);



newFun(5,3);


newFun(5, 3)

// map,filter,reduce
//rest vs spread
// call,apply,bind



































