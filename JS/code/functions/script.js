function display() {
	// declaration- prototype
	console.log("my name is Prasad")
	console.log("welcome all for functions")
	// function definition
}
display() // function call
display()
display()
// write a simple function which prints your name and batch in console and call it

// functions with parameters
function displayName(str /**arguments / parameters */) {
	console.log(`my name is ${str}`)
}
displayName("shekhar")
displayName("jolly")
// write a function which takes two paramers (numbers) and add them and print result in console and call it

function sum(a, b) {
	console.log(`the addition of given numbers is ${a + b}`)
}
sum(8, 6)

// write a function which prints area of circle by giving input as radius

// functions with return types
function sub(a, b) {
	let c = a - b
	return c
}
let result = sub(8, 3)
console.log(`the subtraction is ${result}`)

// write a function which accepts a string and returns the number of characters in the string
function strLength(s) {
	return s.length
}
let len = strLength("prasad")
console.log(len)

// write a function which accepts a sentense  and return vowels and consonants number . hint , you can use if..else
function vowelsConsonants(str) {
	let s = str.toLowerCase()
	let v = 0,
		c = 0,
		sp = 0
	for (let i = 0; i < s.length; i++) {
		if (
			s[i] == "a" ||
			s[i] == "e" ||
			s[i] == "i" ||
			s[i] == "o" ||
			s[i] == "u"
		) {
			v++
		} else if (s[i] == " ") {
			sp++
		} else {
			c++
		}
	}
	return [v, c, sp]
}
const result3 = vowelsConsonants("js is very easy")
console.log(result3)

// you can also use functions inside functions - nested functions
function a() {
	function b() {}
	b()
}
a()

// write a basic js program which takes different functions for addition, subtraction, multiplication and division an dtake inputs using prompt
function calculator() {
	const operator = prompt("enter + or - or * or /")
	const a = +prompt("enter first value")
	const b = +prompt("enter b value")
	switch (operator) {
		case "+":
			console.log(a + b)
			break
		case "-":
			console.log(a - b)
			break
		case "*":
			console.log(a * b)
			break
		case "/":
			console.log(a / b)
			break
		default:alert("Please enter valid input: + or - or * or /")
	}
}

// write a function take a string and try to reverse each word of sentence and return new sentence
//eg: js is very easy ====> sj si yrev ysae

// fuction expressions
function Outer ()
{
    console.log("hi")
}
const x = function ()
{
    console.log("bye")
}
console.log(x)
console.log(Outer)

//callbacks

function mad ()
{
    console.log("I'm mad")
}
// function bad (y)
// {
//     y()
// }
// bad(function ()
// {
//     console.log("my wish")
// })



//IIFE - Immediate Invoke function Expressions
(function ()
{
    var x = 50;
        console.log("hellllllllllllllllooo")
})();
    

//closures
function Out ()
{
    let x = 25;
    function Inner ()
    {  x++; console.log(x) }
    return Inner;
}
const result2 = Out()
console.log(result2)
result2()
result2()










































