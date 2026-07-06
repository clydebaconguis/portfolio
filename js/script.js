// ===== Terminal Portfolio — interactions =====
(function () {
	"use strict";

	// ---- Boot sequence ----
	const boot = document.getElementById("boot");
	const bootLog = document.getElementById("boot-log");
	const bootBar = document.getElementById("boot-bar");
	const bootLines = [
		"[  OK  ] Mounting portfolio filesystem...",
		"[  OK  ] Loading profile: clyde.baconguis",
		"[  OK  ] Starting laravel.service",
		"[  OK  ] Starting react.service",
		"[  OK  ] Starting flutter.service",
		"[  OK  ] Reached target: ready.",
	];

	function runBoot() {
		if (!boot || !bootLog) {
			startTyping();
			return;
		}
		let i = 0;
		const total = bootLines.length;
		const timer = setInterval(function () {
			if (i < total) {
				const line = document.createElement("p");
				line.innerHTML =
					'<span style="color:#00ff9c">' +
					bootLines[i].slice(0, 8) +
					"</span>" +
					bootLines[i].slice(8);
				bootLog.appendChild(line);
				if (bootBar) bootBar.style.width = Math.round(((i + 1) / total) * 100) + "%";
				i++;
			} else {
				clearInterval(timer);
				setTimeout(function () {
					boot.style.transition = "opacity .5s ease";
					boot.style.opacity = "0";
					setTimeout(function () {
						boot.style.display = "none";
						document.body.style.overflow = "";
					}, 500);
					startTyping();
				}, 350);
			}
		}, 220);
	}

	// ---- Typing effect (role) ----
	const typedEl = document.getElementById("typed");
	const roles = [
		"Full-Stack Web & Mobile Developer",
		"Laravel · React · Vue Engineer",
		"Flutter & Kotlin Mobile Dev",
		"REST API Architect",
	];

	function startTyping() {
		if (!typedEl) return;
		let r = 0,
			c = 0,
			deleting = false;
		function tick() {
			const word = roles[r];
			if (!deleting) {
				typedEl.textContent = word.slice(0, ++c);
				if (c === word.length) {
					deleting = true;
					return setTimeout(tick, 1600);
				}
			} else {
				typedEl.textContent = word.slice(0, --c);
				if (c === 0) {
					deleting = false;
					r = (r + 1) % roles.length;
				}
			}
			setTimeout(tick, deleting ? 45 : 85);
		}
		tick();
	}

	// ---- Mobile menu ----
	const menuBtn = document.getElementById("menu-btn");
	const mobileMenu = document.getElementById("mobile-menu");
	if (menuBtn && mobileMenu) {
		menuBtn.addEventListener("click", function () {
			mobileMenu.classList.toggle("hidden");
		});
		document.querySelectorAll(".mnav").forEach(function (link) {
			link.addEventListener("click", function () {
				mobileMenu.classList.add("hidden");
			});
		});
	}

	// ---- Scroll reveal ----
	function initReveal() {
		const els = document.querySelectorAll(".reveal");
		if (!("IntersectionObserver" in window)) {
			els.forEach(function (el) {
				el.classList.add("visible");
			});
			return;
		}
		const io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		els.forEach(function (el) {
			io.observe(el);
		});
	}

	// ---- Year ----
	function setYear() {
		const y = document.getElementById("year");
		if (y) y.textContent = new Date().getFullYear();
	}

	// ---- Init ----
	document.addEventListener("DOMContentLoaded", function () {
		document.body.style.overflow = "hidden";
		setYear();
		initReveal();
		runBoot();
	});
})();
