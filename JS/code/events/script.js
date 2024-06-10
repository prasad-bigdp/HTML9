// // let c = 0;
// // function myFun ()
// // {
// //     document.getElementById('para').innerHTML = "<b>bye world</b>";
// //     c++;
// // }
// // document.getElementById('btn').addEventListener('mouseover', function ()
// // {
// //     document.body.style.backgroundColor="red"
// // })
// // document.getElementById("btn").addEventListener("mouseout", function () {
// // 	document.body.style.backgroundColor = "white"
// // })
// // document.getElementById("btn").addEventListener('dblclick', function () {
// // 	document.body.style.backgroundColor = "black"
// // })

// //  // take a button in html in html and use addeventlistenr to it to trigger increment of a value


// const gpDiv=document.getElementById('gp')
// const pDiv = document.getElementById("p")
// const cDiv = document.getElementById("c")
// const button = document.getElementById("btn")
// button.addEventListener(
// 	"click",
// 	function () {
// 		alert("button called")
// 	},
// 	true,
// )
// gpDiv.addEventListener('click', function(){alert("gp called")},true)
// pDiv.addEventListener("click", function () {
// alert("parent called")
//  },true)
// cDiv.addEventListener("click", function () {
// 	alert("child called")
// }, true)


document.getElementById("buttons").addEventListener('click', function (e)
{
    alert(e.target.textContent+"button clicked")
})










