import Lottie from 'lottie-web';
//import '/src/styles/style.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//import '/src/styles/custom-bootstrap.css';

'use strict';

const	lightModeSwtich = document.querySelector('#light-mode-switch');

document.addEventListener('DOMContentLoaded', () => {
	
	updateLightMode();
});

Lottie.loadAnimation({
	container: document.getElementById('paddle-animation'), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: '/src/assets/paddle_lottie.json'
});

// Light mode switch behaviour


lightModeSwtich.addEventListener('change', (event) => updateLightMode(event));

function	updateLightMode(event) {
	if (event.target.checked)
		document.documentElement.setAttribute('data-bs-theme', 'light');
	else
		document.documentElement.removeAttribute('data-bs-theme');

}
	