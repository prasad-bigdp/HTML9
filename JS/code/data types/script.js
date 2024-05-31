let x = 25.6589;
console.log(x, typeof (x))
console.log(x.toFixed(3))
console.log(x.toPrecision(3))
const y=25
console.log(y.toString(2))
console.log(2 + +"2", +true + +"4")

//default methods used for mathematical operations are called Math methods
console.log(Math.sqrt(16))//4
console.log(Math.cbrt(27))//3
console.log(Math.abs(-10))//10
console.log(Math.max(Math.max(5, 9), 2, 3, 5, 6, 7, 10))//10
console.log(Math.min(5, 6, 2, 8, 9))//2
console.log(Math.floor(-2.3))
console.log(Math.ceil(2.1))
console.log(Math.round(2.5))
console.log(Math.round(Math.random() * 10000))//0.0-1.0 -->OTP,capcha,password

console.log(Math.PI,Infinity,Math.pow(2,3),2**3)


// strings
// here strings are defined by '' and ""
console.log("the time is 5'0 clock")
console.log('the kalam said,"Dream high"')
let str = "prasad"
console.log(str, typeof str)
console.log(str[6])
//strings are immutable
str = "raj"
console.log(str)
str= "RAJ"
console.log(str.toUpperCase(),str)
console.log(str.toLowerCase())
str="prasad"
console.log(str.replaceAll('a', 'k'))
console.log(str.startsWith("ar"))
console.log(str.endsWith("ar"))
console.log(str.lastIndexOf('a'))
console.log(str.includes("sa"))
console.log(str.length, str.charAt(3))
console.log(str.substring(2,5))
console.log(str.slice(2, 5))
str="js is very easy"
console.log(str.split(""))
console.log(["raj","prasad"].join(" "))
console.log("    r aj     ".trim())
x = "      ja va       "
console.log(x.length, x.trimEnd())
x = "raj";z="prasad"
console.log("the name is " + x + " " + z)
// template literals
let p = 55
console.log("the price is " + p)
console.log(`The price is ${p}`)

// write a basic logic to convert every first letter or every word in a sentence to convert into uppercase
// this is js basics===> This Is Js Basics
let str1 = "this is js basics"
let arr = str1.split(" ")
let str2=""
for (let i = 0; i < arr.length; i++)
{
    arr[i].replace(arr[i][0],arr[i][0].toUpperCase())
    word=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    str2=str2+word+" "
}
console.log(str2)
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")

console.log("hi")
console.log("hi")

//Boolean is used to store true or false. sometime js coverts true to 1 and false to zero
let isLogin = false
//Booleans are used for Decision making

//undefined and null
// undefined and null both represents an absence of value
// undefined expects future occurence of value
// null defines end of the value

console.log(a)
var a=null
// undefined vs null
console.log(a)//undefined
var a = 20;
var a = 25
a = 26
console.log(b)
let b = 25;
 b = 20
function fun ()
{
    if (true)
    {
        let x = 55;
    }   
    console.log(x)
}
fun()





















    






















































































