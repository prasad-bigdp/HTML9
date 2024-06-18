const mainDiv = document.getElementById('main')
const Input = document.getElementById('inp')
const fetchData = async () =>
{
    try
    {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Input.value}`)
    const data = await res.json()
    displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }

}
Input.addEventListener("change", fetchData)
const displayData = (data) =>
{
    const Image = document.createElement('img');
    Image.src = data.sprites.front_default;
    Image.alt= data.name
    const height = document.createElement('h2');
    height.textContent = "Height:" + data.height
    const weight = document.createElement("h2")
    weight.textContent = "Weight:" + data.weight;
    const moves = document.createElement('p')
        data.moves.forEach((m) =>
        {
            const move = document.createElement('span');
            move.textContent = m.move.name+" ,";
            moves.appendChild(move)
    })
    mainDiv.append(Image,height,weight,moves)
}