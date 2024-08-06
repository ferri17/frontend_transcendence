import Lottie from 'lottie-web';
//import '/src/styles/style.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//import '/src/styles/custom-bootstrap.css';

'use strict';

const	lightModeSwitch = document.querySelectorAll('.light-mode-switch');

document.addEventListener('DOMContentLoaded', () => {
	
	//updateLightMode();
});

Lottie.loadAnimation({
	container: document.getElementById('paddle-animation'), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: '/src/assets/paddle_lottie.json'
});

// Light mode switch behaviour

lightModeSwitch.forEach( elementSwitch => {
	elementSwitch.addEventListener('click', () => {
		updateLightMode();
	});
});

function	updateLightMode() {
	lightModeSwitch.forEach( elementSwitch => {
		elementSwitch.classList.toggle('d-none');
	});
	if (document.documentElement.hasAttribute('data-bs-theme'))
		document.documentElement.removeAttribute('data-bs-theme');
	else
		document.documentElement.setAttribute('data-bs-theme', 'light');
}
	