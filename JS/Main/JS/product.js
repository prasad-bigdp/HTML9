const proDiv= document.getElementById('product')
const params = new URLSearchParams(window.location.search)
const id = params.get('pid');
const fetchdata=() =>
{
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
    .then((data)=>displayData(data))
}
fetchdata()
function displayData (data)
{
    const leftDiv = document.createElement('div')
    const productImage = document.createElement('img');
    productImage.classList.add('productImage')
    productImage.src = data.thumbnail;
    productImage.alt = data.title
    const imagesDiv = document.createElement('div')
    data.images.forEach((i) =>
    {
        const image = document.createElement('img')
        console.log(i)
        image.src = i;
        image.alt = "image"
        image.height="100"
        image.addEventListener('click', function ()
        {
            productImage.src = i 
            console.log("clicked")
        })
        imagesDiv.append(image)
    })
    leftDiv.append(productImage,imagesDiv)
    const rightdiv = document.createElement('div')
    const title = document.createElement('h3');
    title.textContent = data.title;
    const desc = document.createElement('p');
    desc.textContent = data.description;
    const price = document.createElement('p');
    price.textContent = "$" + data.price;
    const addButton = document.createElement('button');
    addButton.textContent = "Add to Cart"
    addButton.addEventListener('click',()=>addCart(data))
    rightdiv.append(title,desc,price,addButton)
    proDiv.append(leftDiv, rightdiv)  
}
let items = JSON.parse(localStorage.getItem("items")) || []

let c = localStorage.getItem('count');
document.getElementById("count").textContent=c
const addCart = (prod) =>
{
    console.log("clicked")
    items.push(prod);
    c++;
    console.log("items added")
    localStorage.setItem("count", c)
    localStorage.setItem("items", JSON.stringify(items))
    document.getElementById("count").textContent = localStorage.getItem("count")

}