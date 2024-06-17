const button = document.getElementById('btn')
const mainDiv = document.getElementById('main')
button.addEventListener('click', fetchData)
function fetchData ()
{
    const inp = document.getElementById('inp')
    fetch(`https://www.omdbapi.com/?s=${inp.value}&apikey=5175740d`)
        .then(function (res) { return res.json() })
        .then(function (data) { displayData(data.Search) })
    .catch(function(err){console.log("error"+err)})
}
function displayData (data)
{
    mainDiv.textContent=""
    data.forEach(function (m)
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImage = document.createElement('img');
        movieImage.src = m.Poster;
        movieImage.alt = m.Title;
        const link = document.createElement('a')
        link.href = `https://www.imdb.com/title/${m.imdbID}`
        link.target="_blank"
        const movieName = document.createElement('h2');
        movieName.textContent = m.Title;
        link.appendChild(movieName)
        movieDiv.append(movieImage, link)
        mainDiv.appendChild(movieDiv)
 })   
}