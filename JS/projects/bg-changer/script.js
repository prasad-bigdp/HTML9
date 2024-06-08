let colors= ["red","blue","yellow","green","orange","grey"]
function change ()
{
    let randomIndex= Math.floor(Math.random()*6)
    document.body.style.backgroundColor= colors[randomIndex]
}
 function change2() {
     let randomNumber = Math.round(Math.random() * 10000000).toString(16)
		 document.body.style.backgroundColor = "#"+randomNumber
 }
/* 1. imagine all colors in a array and select random index every time
   2. generate random hex code
   3. generate 3 random numbers from 0 to 255 and try rgb
   4. generate two random hex code and try linear gradient
*/







