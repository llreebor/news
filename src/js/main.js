// Initialize mobile menu and submenu functionality
function initializeMobileMenu() {
	// Select main DOM elements for mobile menu
	const menu = document.querySelector("#mobile-menu")
	const overlay = document.querySelector("#mobile-menu-overlay")
	const burger = document.querySelector("#burger")
	const body = document.querySelector("body")

	// Define mobile breakpoint for responsive behavior
	const MOBILE_BREAKPOINT = 992

	// Exit if required elements are missing
	if (!menu || !burger || !body || !overlay) return

	// ============================
	// MENU TOGGLE FUNCTIONALITY
	// ============================

	const updateMenuState = (isOpen) => {
		burger.setAttribute("aria-expanded", isOpen)
		burger.classList.toggle("active", isOpen)

		menu.classList.toggle("is-open", isOpen)
		menu.classList.toggle("-translate-x-full", !isOpen)
		menu.classList.toggle("translate-x-0", isOpen)

		overlay.classList.toggle("opacity-0", !isOpen)
		overlay.classList.toggle("opacity-100", isOpen)
		overlay.classList.toggle("pointer-events-none", !isOpen)
		overlay.classList.toggle("pointer-events-auto", isOpen)

		body.classList.toggle("overflow-hidden", isOpen)
	}

	const handleBurgerClick = () => {
		const isOpening = !menu.classList.contains("is-open")
		updateMenuState(isOpening)
	}

	const handleOverlayClick = (event) => {
		if (event.target === overlay) updateMenuState(false)
	}

	const handleEscapeKey = (event) => {
		if (event.key === "Escape" && menu.classList.contains("is-open")) {
			updateMenuState(false)
		}
	}

	const handleWindowResize = () => {
		if (window.innerWidth >= MOBILE_BREAKPOINT) {
			updateMenuState(false)
		}
	}

	// Add event listeners for main menu
	burger.addEventListener("click", handleBurgerClick)
	overlay.addEventListener("click", handleOverlayClick)
	document.addEventListener("keydown", handleEscapeKey)
	window.addEventListener("resize", handleWindowResize)

	burger.setAttribute("aria-expanded", "false")
	handleWindowResize()

	// ============================
	// SUBMENU FUNCTIONALITY
	// ============================

	// Check if there are submenu triggers at all
	const submenuTriggersExist = menu.querySelector(".submenu-trigger")

	if (submenuTriggersExist) {
		menu.addEventListener("click", (event) => {
			const trigger = event.target.closest(".submenu-trigger")
			if (!trigger) return

			const submenuItem = trigger.closest(".with-submenu")
			if (submenuItem) {
				submenuItem.classList.toggle("active")
			}
		})
	}

	// ============================
	// LINK CLICK CLOSE MENU
	// ============================

	menu.addEventListener("click", (event) => {
		const link = event.target.closest("a")
		if (!link) return

		const href = link.getAttribute("href")
		if (href && href !== "#") {
			updateMenuState(false)
		}
	})
}

// Inits
document.addEventListener("DOMContentLoaded", () => {
	// Mobile Menu
	// initializeMobileMenu()
})

// Sliders
new Swiper(".swiper-photos", {
	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next-photos",
		prevEl: ".swiper-button-prev-photos",
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		640: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 3.3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-sports", {
	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next-sports",
		prevEl: ".swiper-button-prev-sports",
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		640: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 3.3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-entertainment", {
	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next-entertainment",
		prevEl: ".swiper-button-prev-entertainment",
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		640: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 3.3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-lifestyle", {
	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next-lifestyle",
		prevEl: ".swiper-button-prev-lifestyle",
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		640: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 3.3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
