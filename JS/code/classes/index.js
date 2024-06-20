// class Food
// {
//     taste="bad";    color; quantity;
//     making ()
//     {
//      console.log("making")
//     }
// }
// let dosa= new Food()
// dosa.taste = "good"
// console.log(dosa.taste)
// dosa.making();
// let idli = new Food()
// console.log(idli.taste)

// class Car
// {
//     speed; color;
//     constructor(s,c)
//     {
//         this.speed = s;
//         this.color = c;
//     }
//     move ()
//     {
//       console.log("car is moving with speed "+this.speed+"and color is "+this.color)
//     }
// }
// console.log(typeof (Car))
// let porche = new Car(200,"black")
// porche.move()

// class Human
// {
//     body; empathy;
//     talk ()
//     {
//         console.log("i'm talking")
//     }
//     walk ()
//     {
//         console.log("Walking")
//     }
// }
// class SuperHuman extends Human
// {
//     speed;
//     fly ()
//     {
//         console.log("i'm flying")

//     }
//     walk(){console.log("i'm not walking , i'm flying")}
// }
// let obj = new SuperHuman()
// obj.walk()

// class Special
// {
//      x = 20;
// }
// let obj2 = new Special()
// obj2.x = 30;
// let obj3 = new Special()
// obj3.x = 40;
// let obj4 = new Special()
// obj3.x = 50;

class Student {
    name; rno; clas
	constructor(name, rno, clas) { this.name = name; this.rno = rno; this.clas = clas;}
    study (){  console.log(this.name+" is studying")}
}
class Topper extends Student
{
    rank;
    constructor(n, rno, c, r) { super(n,rno,c); this.rank = r }
    award (){  console.log("i'm getting award")} 
}
let std = new Topper("raj",25,10,2)
console.log(std.name)

 title="radhe shyam"
let obj5 = {
    title: "RRR",
    year: "2023",
    success:  function()
    {
        console.log(this)
    }
}

obj5.success()

document.getElementById('btn').addEventListener('click', function ()
{
    console.log(this)
})

function display(){console.log(this)}
display()




























