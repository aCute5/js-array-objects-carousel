const arrImages = [
	{
		image:"01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image:'02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]


const eleContainer = document.querySelector(".container-blur") //Appendo al container con innerHtml la mia card


				   
for (let i = 0; i < arrImages.length; i++) { 
	eleContainer.innerHTML +=
                     `
					   <div class="slider"> 
					   <div class="slider-viewer">
						   <img src="img/${arrImages[i].image}" class = "slider-img currentimage" ">
						   <div class="info">
							   <h4>${arrImages[i].title}</h4> 
							   <span>${arrImages[i].text}</span> 
						   </div>
					   </div>
					   <div class="thumbs">
						   <div class="controls">
							   <div class="btn-left">&lt;</div>
							   <div class="btn-right">&gt;</div>
						   </div>
					   </div>
				   </div>
				   `
const eleSlider = document.querySelector(".slider")
const eleImg = document.querySelector("#currentimage")
const eleInfo = document.querySelector(".info")
	if (i === 0) {
		eleSlider.classList.add("active")
}
	const eleSliderThumbs = document.querySelector(".thumbs")
	const eleThumb = document.createElement("img")
	eleThumb.classList.add("currentimage")
	eleThumb.classList.add('thumb-img');
	eleThumb.src = `"img/${arrImages[i].image}"`
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);

	
}