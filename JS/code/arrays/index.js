//Arrays -  collection of  elements

let arr = [5, 9, 8, 7, 6, 4, 3, 7]
console.log(arr[3] + arr[2])//7+8
console.log(arr.length)
arr.push(5, 8, 9)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(1, 2, 3)
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(3,2)
console.log(arr)
arr.splice(3, 0, 11, 12, 13)
console.log(arr)
const arr2=arr.concat(["raj", "vani", "john"])
console.log(arr2)
console.log([5,6,7,5,8].indexOf(5,2))
arr.fill(2,3,7)
console.log(arr)
	/* most important array methods */
const arr3 = ["raj", "prasad", "vani"]
arr3.forEach(function (p)
{
	console.log(p)
})
console.log(arr)
const newArr=arr.forEach(function (num)
{
    if (num % 2 == 0) return "even"
    else return "odd"
})
console.log(newArr)
const newArr2 = arr.map(function (num) {
	if (num % 2 == 0) return "even"
	else return "odd"
})
console.log(newArr2)

const arr4=["raj dixit","amit patel","jona patel","vani doobey"]
const resultArr = arr4.map(function (name)
{
    if (name.endsWith("patel"))
        return true;
})
console.log(resultArr)
const resultArr2 = arr4.filter(function (name) {
	return name.endsWith("patel")
})
console.log(resultArr2)
console.log(arr)
const result4 = arr.reduce(function (p, c) { return p + c }, 0)
console.log(
	arr4.findIndex(function (str) {
		return str.endsWith("patel")
	}),
)
const arr5=[5,8,7,6,9,3,12,33,66,333,35]
console.log(arr5.sort())
console.log(arr5.reverse())


console.log("prasad".split("").reverse().join(""))
//This is javascript
const str = "This is javascript"
const reverseArr=str.split(" ").map(function (word)
{
    return word.split("").reverse().join("")
})
console.log(reverseArr.join(" "))
let arr7=[6,8,5]
let result6 = arr7.some(function (num)
{
    return num%2==0
})
console.log(result6)

let obj = {
    name: "raj",
    age: 50,
    fun: function ()
    {
        console.log("hello world")
    }    
}
console.log(obj['name'])
obj.fun()
























































































