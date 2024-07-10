export function getNavbar() {
	return /*html*/`
		<nav class="navbar navbar-expand-lg border-bottom --bs-primary mb-4">
			<div class="container-fluid col-lg-10">
				<a class="navbar-brand" href="/" data-link><img src="/assets/svg/GitHub.svg" alt="" width="30"></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="/" data-link>Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/about" data-link>About</a>
						</li>
					</ul>
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" href="/settings" data-link>Profile</a>
						</li>
						<!-- <li class="nav-item">
							<a class="nav-link" href="/sign in" data-link>Sign in</a>
						</li> -->
					</ul>
				</div>
			</div>
		</nav>
	`;
};
  