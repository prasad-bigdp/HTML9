const movies = [
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},

	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
    	{
		title: "RRR",
		poster:
			"https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)",
	},
	{
		title: "Pushpa",
		poster:
			"https://static.toiimg.com/thumb/msid-88663652,width-400,resizemode-4/88663652.jpg ",
	},
	{
		title: "shawshank redemption",
		poster:
			"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
	},
    
]
const mainDiv= document.getElementById('main')
function displayData ()
{
    movies.forEach(function (val)
    {
        const myDiv = document.createElement('div') // <div> </div>
        myDiv.classList.add('movie') // <div class="movie"></div>
         const image = document.createElement("img") // <img />
					image.src = val.poster//<img src="value" />
					image.alt = val.title//<img src="value" alt="" />
					const title = document.createElement("h2") //<h2></h2>
					title.textContent = val.title//<h2>jhgfjhdg</h2>
        myDiv.append(image, title)
        mainDiv.appendChild(myDiv)
    })
   

}
displayData()