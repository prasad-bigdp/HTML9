const paracount = document.getElementById('count');
let c = paracount.textContent;
function incr ()
{
    c++;
    paracount.textContent=c
}
function decr ()
{
    c--;
    paracount.textContent = c;
}
function reset ()
{
    c = 0;
    paracount.textContent=c
}






