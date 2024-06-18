const mainDiv = document.getElementById("main")
const fetchData = () => {
	fetch("https://official-joke-api.appspot.com/random_joke")
		.then((res) => res.json())
		.then((data) => displayData(data))
		.catch((err) => console.log(err))
}
fetchData()
setInterval(fetchData, 5000)
const displayData = (data) => {
	mainDiv.textContent = ""
	const setup = document.createElement("h2")
	setup.textContent = data.setup
	const punch = document.createElement("p")
	punch.textContent = data.punchline
	mainDiv.append(setup, punch)
}
