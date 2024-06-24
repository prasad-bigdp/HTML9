const c= document.getElementById('main')
const ctx = c.getContext('2d')
ctx.fillStyle="red"
ctx.fillRect(0, 0, 150, 150);

document.getElementById('dr').addEventListener('dragend', () =>
{
    alert("dragging")
})