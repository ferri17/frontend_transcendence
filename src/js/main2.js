import Lottie from "lottie-web";
import '/src/styles/style.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

"use strict";

  Lottie.loadAnimation({
	container: document.getElementById('paddle-animation'), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: '/src/assets/paddle_lottie.json' // the path to the animation json
  });