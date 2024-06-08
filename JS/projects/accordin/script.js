const que = document.querySelectorAll(".heading")
const para= document.querySelectorAll('.para')
function clickChange ()
{
    console.log()
    para[0].classList.toggle('hide')
    document.getElementById("head").classList.add("animate__zoomIn")
}
que[0].addEventListener('click', clickChange)
