/*
VARIABLE
*/
var nbSlides;
var slider;
var slides;
var animation;




document.addEventListener('DOMContentLoaded', function () {
	nbSlides = document.querySelectorAll('.imgCont');

	slider = document.querySelector('.slider');

	slides = document.querySelector('.slides');

	widthSlide();

	initialisationSlide();

	miseEnPlace();

	double();
	animationSlide();

	document.querySelector('.right').addEventListener('click', function () {
		right();
		arretSlide();
	});
	document.querySelector('.left').addEventListener('click', function () {
		left();
		arretSlide();
	});


	for (var i = 0; i < nbSlides.length; i++) {
		document.querySelectorAll('.imgCont')[i].addEventListener("mouseenter", arretSlide);
		document.querySelectorAll('.imgCont')[i].addEventListener("mouseleave", animationSlide);
	};


	doteIdent();

}); //Fin DOMContentLoaded


/*
FUNCTION
*/

/*
TAILLE DU SLIDE
*/

function widthSlide() {
	slides.style.width = (100 * nbSlides.length) + 100 + "%";
};

/*
MISE EN PLACE DES ELEMENT
*/
function miseEnPlace() {
	var nav = '<div class="annexe"> <div class="fleches right"><img src="right.png" alt=""></div> <div class="fleches left"><img src="left.png" alt=""></div></div>';
	var dote = '<div class="dote"></div>';

	slider.innerHTML = nav + slider.innerHTML + dote;

	for (var i = 0; i < nbSlides.length; i++) {
		document.querySelector('.dote').innerHTML +=
			'<i class="fa fa-circle" data-nth="' + i + '"></i>'
	};

	var listDote = document.querySelectorAll('.fa-circle');

	for (var i = 0; i < listDote.length; i++) {
		listDote[i].addEventListener('click', doteLien);
	};
};

function doteLien() {
	var position = this.getAttribute('data-nth') * 100 + '%';
	document.querySelector('.slides').style.left = '-' + this.getAttribute('data-nth') * 100 + '%';
	doteIdent();
};

/*
	DOUBLON PREMIER SLIDE
*/

function double() {
	document.querySelector('.slides').innerHTML += '<div class="imgCont">' + nbSlides[0].innerHTML + '</div>';
};

/*
INITIALISATION SLIDE
*/

function initialisationSlide() {
	document.querySelector('.slides').style.left = 0;
};

/*
A DROITE
*/

function right() {
	var position = parseInt(document.querySelector('.slides').style.left) - 100;
	var taille = parseInt(document.querySelector('.slides').style.width);
	if (position == -parseInt(document.querySelector('.slides').style.width) + 100) {
		document.querySelector('.slides').style.transition = '0.3s';
		document.querySelector('.slides').style.left = position + '%';
		setTimeout(function () {
			document.querySelector('.slides').style.transition = '0s';
			initialisationSlide();
			doteIdent();
		}, 300);
		right;
	} else {
		document.querySelector('.slides').style.transition = '0.3s';
		document.querySelector('.slides').style.left = position + '%';
	};
	doteIdent();
};

/*
A GAUCHE
*/

function left() {
	var position = parseInt(document.querySelector('.slides').style.left) + 100;
	var taille = -parseInt(document.querySelector('.slides').style.width) + 100;
	if (position == 0 + 100) {
		document.querySelector('.slides').style.transition = '0s';
		document.querySelector('.slides').style.left = taille + '%';
		setTimeout(function () {
			document.querySelector('.slides').style.transition = '0.3s';
			document.querySelector('.slides').style.left = -1000 + '%';
			doteIdent();
		}, 0);
		left;
	} else {
		document.querySelector('.slides').style.transition = '0.3s';
		document.querySelector('.slides').style.left = position + '%';
	};
	doteIdent();
};

/*
ARRET NAIMATION
*/

function arretSlide() {
	clearInterval(animation);
};

/*
COMMENCER ANIMATION
*/

function animationSlide() {
	animation = setInterval(right, 3000);
};


function doteIdent() {
	var position = parseInt(document.querySelector('.slides').style.left);
	if (position != 0) {
		position = -parseInt(document.querySelector('.slides').style.left) / 100;
	} else {
		position = parseInt(document.querySelector('.slides').style.left) / 100
	};
	console.log(position);
	var dotes = document.querySelectorAll('.fa-circle');
	console.log(dotes);
	for (var i = 0; i < dotes.length; i++) {
		dotes[i].style.color = 'black';
	};
	dotes[position].style.color = 'red';
};