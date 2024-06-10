
"use strict";

window.onload = function() {
	const	path = window.location.pathname.split("/");

	switch(path[3])
	{
		case "": {
			loadPage("home");
			break;
		}
		case "about": {
			loadPage("about");
			break;
		}
		case "settings": {
			loadPage("settings");
			break;
		}
		default: {
			loadPage("404");
			break;
		}
	}

	document.querySelectorAll(".nav-link").forEach((item) => {
		item.addEventListener("click", function() {
			const	path = item.getAttribute("value");
			loadPage(path);
			if (path == "") {
				window.history.pushState("", "", "/");
				return;
			}
			window.history.pushState("", "", path);
		});
	});

	function	loadPage($path) {
		if ($path == "") return;

		const	container = document.getElementById("main-container");
		const	request = new XMLHttpRequest();
		console.log($path);
		request.open("GET", $path + ".html");
		request.send();
		request.onload = function () {
			if (request.status == 200) {
				container.innerHTML = request.responseText;
			}
		}
	}
}