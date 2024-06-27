const items = JSON.parse(localStorage.getItem('items'))
console.log(items)
const cartDiv= document.getElementById('cart')
function displayData (data)
{
    cartDiv.textContent=""
    data.forEach((data,index) =>
    {
        const div = document.createElement('div');
        div.classList.add('cartitem')
        const name = document.createElement('h3');
        name.textContent= data.title
        const price = document.createElement('p');
        price.textContent="$"+ data.price
        const removeButton = document.createElement('button');
        removeButton.textContent = "❎"
        removeButton.addEventListener('click',()=>removeItems(index))
        div.append(name, price, removeButton)
        cartDiv.appendChild(div)
   })
}
displayData(items)
const calculateTotal = (items) =>
{
    document.getElementById("total").textContent ="$"+ Math.round(
			items.reduce((pre, cu) => pre + cu.price, 0),
		)
}
calculateTotal(items)
const removeItems = (i) =>
{
    items.splice(i, 1)
    displayData(items)
    calculateTotal(items)
    let count = localStorage.getItem('count');
    console.log(count)
    count--;
    console.log(count)
    localStorage.setItem("count", count)
    console.log(localStorage)
    localStorage.setItem("items", JSON.stringify(items))
}