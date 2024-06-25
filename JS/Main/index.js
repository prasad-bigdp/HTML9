const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: true,
	effect: "flip",
	flipEffect: {
		slideShadows: false,
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

function fetchdata ()
{

}
fetchdata()
function displayData ()
{
    
}