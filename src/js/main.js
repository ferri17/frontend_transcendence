import '/src/styles/style.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './routes.js';
import { getNavbar } from './navbar.js';

'use strict';

document.body.insertAdjacentHTML('afterbegin', getNavbar());

document.querySelector('#app').innerHTML += /*html*/
`
`
;
