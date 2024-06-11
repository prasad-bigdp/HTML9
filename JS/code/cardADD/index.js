const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const button = document.getElementById('btn')
button.addEventListener('click', myFun)
function myFun ()
{

    const myDiv = document.createElement('div')
    myDiv.classList.add('card')
    const image = document.createElement('img');
    image.src = urlInput.value
    image.alt = titleInput.value;
    const title = document.createElement('h2');
    title.textContent = titleInput.value
    myDiv.append(image, title);
    document.getElementById('output').appendChild(myDiv)
    urlInput.value = ""
    titleInput.value=""
}