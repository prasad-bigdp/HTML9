// print numbers from 1 to 10
let num = 1
while (num <= 10) {
	console.log(num)
	num++
}
// using while try to print given name letters in reverse
let nam = "prasad"
let len = nam.length - 1
while (len >= 0) {
	console.log(nam[len])
	len--
}
// do while will be used when we need loop to execute atleast once no matter the input is

let num2 = 55;
do
{
    console.log(num2); num2--;
}while(num2>=56)

// for loop
for (let x = 1; x <= 10; x++)
{
    console.log(x);
}
// using standard for print odd values from 20 to 1 in reverse
for (let x = 19; x >= 0; x-=2)
{
  console.log(x)
}
    
// using for loop print the values of an array
let arr = [2, 5, 6, 9, 4];
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
// for ...... of  - used to iterate the values of array
for (let i of arr){
    console.log(i)
}
// for---in  - usually for in is used for objects but we can also use it for arrays
for (let i in arr) {
	console.log(arr[i])
}

//for..each

// check whether given number is even or odd for array of values
function evenOdd (num)
{
    if (num % 2 == 0)
        console.log(`${num} is even`)
    else
       console.log(`${num} is Odd`)
}
arr.forEach(evenOdd)
//take a sentence and convert first letter of every word in sentence to captial
// input: js is very easy ==> output: Js Is Very Easy
let str = "js is very easy"
let arr2=[]
str.split(' ').forEach(function (ele)
{
  arr2.push(ele[0].toUpperCase()+ele.slice(1))    
})
console.log(arr2.join(' '))










































    






















































