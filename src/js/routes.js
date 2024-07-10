import home from './pages/home.js';
import about from './pages/about.js';
import settings from './pages/settings.js';

'use strict';

const routes = {
	'/': { title: 'Home', render: home, css: 'home.css'},
	'/about': { title: 'About', render: about, css: 'about.css' },
	'/settings': { title: 'Settings', render: settings, css: 'settings.css' },
};

/* Select main container where different pages will render */
const	mainContainer = document.querySelector('#app');

/* Update router when content is fully loaded and user navigates session history */
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', () => {
	router();
});

/* Handle navigation */
window.addEventListener('click', e => {
	if (e.target.matches('[data-link]')) {
		const	oldCssRoute = routes[window.location.pathname].css;
		e.preventDefault();
		history.pushState('', '', e.target.href);
		router(oldCssRoute);
	}
});

/* Removes all 'active' classes from nav elements and adds it to the current page element */
function	updateActiveElementNavbar() {
	const	windowPathname = window.location.pathname;
	const	navLinks = document.querySelectorAll('.nav-link');

	navLinks.forEach(navElement => {
		const	elementPathname = new URL(navElement.href).pathname;

		navElement.classList.remove('active');
		if (elementPathname === windowPathname) {
			navElement.classList.add('active');
		}
	});
}

/* Renders page as SPA using location.pathname */
function	router(oldCssRoute=undefined) {
	const	windowPathname = window.location.pathname;
	
	let view = routes[windowPathname];
	
	loadCSS(view.css);
	if (oldCssRoute) {
		unloadCSS(oldCssRoute);
	}
	updateActiveElementNavbar();
	if (view) {
		document.title = view.title;
		mainContainer.innerHTML = view.render();
	} else {
		history.replaceState('', '', '/');
		router();
	}
};

function loadCSS(filename) {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = `/src/styles/${filename}`;
	document.head.appendChild(link);
}
  
function unloadCSS(filename) {
	const links = document.querySelectorAll(`link[href="/src/styles/${filename}"]`);
	links.forEach(link => link.parentElement.removeChild(link));
}

