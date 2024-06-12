let c = 0
let max = 20;
function myFun ()
{
    
    let dt= new Date()
    document.getElementById('t').textContent = dt.toLocaleTimeString()
    if (c < 20)
    {
        c++;
        document.getElementById("sec").textContent=c
    }
}
setInterval(myFun, 1000)
console.log("hiiiiiiiii")
setTimeout(function ()
{
    document.getElementById("modal").style.display="block"
},10000)