// Library is prewritten code for a specific purpose
//JQuery - is a library of javascript useful for DOM Manipulation
//Typed js - typing effect
//AOS - animations on scrolling
$("#btn")
	.click(function (e) {
	   $('#myDiv').fadeToggle(2000)
    })
    
    let typed = new Typed("#details", {
			strings: ["full stack developer", "trainer", "sdjgjhgsh"],
			typeSpeed: 30,
			backSpeed: 100,
			loop: true,
			loopCount: Infinity,
    })
        gsap.to('#box',{rotation:60,x:200,duration:2})