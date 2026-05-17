const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const whatsappWrap = document.querySelector(".floating-whatsapp-wrap");
const whatsappButton = document.querySelector(".floating-whatsapp");

if (navToggle && siteNav) {
	navToggle.addEventListener("click", () => {
		const isOpen = siteNav.classList.toggle("is-open");
		document.body.classList.toggle("nav-open", isOpen);
		navToggle.setAttribute("aria-expanded", String(isOpen));
	});

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			siteNav.classList.remove("is-open");
			document.body.classList.remove("nav-open");
			navToggle.setAttribute("aria-expanded", "false");
		});
	});
}

if (whatsappWrap && whatsappButton) {
	whatsappButton.addEventListener("click", () => {
		const isOpen = whatsappWrap.classList.toggle("is-open");
		whatsappButton.setAttribute("aria-expanded", String(isOpen));
	});

	document.addEventListener("click", (event) => {
		if (!whatsappWrap.contains(event.target)) {
			whatsappWrap.classList.remove("is-open");
			whatsappButton.setAttribute("aria-expanded", "false");
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			whatsappWrap.classList.remove("is-open");
			whatsappButton.setAttribute("aria-expanded", "false");
		}
	});
}
