const mainDiv = document.getElementById("main")
function fetchData() {
    fetch("https://api.quotable.io/random")
        .then(function (r) { return r.json() })
        .then(function(data){displayData(data)})
        .catch(function(err){console.log(err)})
}
fetchData()
document.getElementById('btn').addEventListener('click',fetchData)
function displayData (data)
{
    mainDiv.textContent=""
    const con = document.createElement('h2');
    con.textContent= data.content
    const para = document.createElement('p')
    para.textContent = data.author
    mainDiv.append(con,para)
}






