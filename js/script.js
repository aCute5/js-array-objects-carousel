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

const eleContainer = document.querySelector('.container-blur');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');


for (let i = 0; i < arrImages.length; i++) {
	 eleContainer.innerHTML += 
		`
    	<div class="slider"> 
		<div class="slider-viewer">
        <img src="img/${arrImages[i].image} class = "slider-img">
        <h4>${arrImages[i].title}</h4> 
        <span>${arrImages[i].text}</span> 
        </div>
		<div class="thumbs">
		<div class="controls">
			<div class="btn-left">&lt;</div>
			<div class="btn-right">&gt;</div>
		</div>
		</div>
        </div>
    	`;
	
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	// creare i tag immagine che vanno nella sezione .thumbs
	const eleThumb = document.createElement('img');
	eleThumb.src == arrImages[i].image;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;
document.body.style.backgroundImage = `url('${arrImages[activeIndex].image}')`;
document.body.style.backgroundSize = 'cover';

// aggiungere gli event listeners ai due bottoni
eleBtnRight.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	// incrementare l'active index con reset per slider infinito
	/*
	if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}
	*/

	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});

eleBtnLeft.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	// decrementare l'active index con reset per slider infinito
	/*
	if (activeIndex === 0) {
		activeIndex = listEleImg.length - 1;
	} else {
		activeIndex--;
	}
	*/

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex].image}')`;
	document.body.style.backgroundSize = 'cover';
});