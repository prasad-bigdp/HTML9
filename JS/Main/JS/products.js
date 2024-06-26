const productsDiv = document.getElementById("products")
const count = document.getElementById("count")
let c=0;
count.textContent = localStorage.getItem("count") ?? 0
let items = localStorage.getItem("items") ?? []
async function fetchdata ()
{
    const res = await fetch("https://dummyjson.com/products")
	const data = await res.json()
	displayData(data.products)
}
fetchdata()
function displayData (data)
{
    productsDiv.textContent=""
    data.forEach((p) =>
    {
        const div = document.createElement('div')
        div.classList.add('product')
        div.classList.add("card")
        const image = document.createElement('img');
        image.src = p.thumbnail;
        image.alt = p.title
        image.classList.add('card-img-top');
        const div2 = document.createElement("div")
        div2.classList.add('card-body')
        const title = document.createElement('h3');
        title.textContent = p.title
        title.classList.add('card-title')
        const link = document.createElement('a');
        link.href= `./product.html?pid=${p.id}`
        const price = document.createElement('p');
        price.textContent = "$" + p.price
        price.classList.add('card-text')
        const addCartButton = document.createElement('button');
        addCartButton.textContent = "Add to Cart";
        addCartButton.addEventListener('click',()=>addCart(p))
        addCartButton.classList.add(['btn','btn-primary'])
        link.appendChild(title);
        div.append(image,link,price,addCartButton)
         productsDiv.appendChild(div)
})

}

const addCart = (prod) =>
{
    c++;
    count.textContent = c;
    items.push(JSON.stringify(prod))
    localStorage.setItem('count', c);
    localStorage.setItem('items',items)
}