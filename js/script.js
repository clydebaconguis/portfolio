$(document).ready(function () {
	const btn = document.getElementById("menu-btn");
	const nav = document.getElementById("menu");

	btn.addEventListener("click", () => {
		btn.classList.toggle("open");
		nav.classList.toggle("flex");
		nav.classList.toggle("hidden");
	});

	$(".about-section").waypoint(function (direction) {
		if (direction == "down") {
			$("header").addClass(
				"fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10"
			);
			$(".nav-menu").removeClass("text-white");
			$(".nav-menu").addClass("text-black");
		} else {
			$("header").removeClass(
				"fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10"
			);
			$(".nav-menu").removeClass("text-black");
			$(".nav-menu").addClass("text-white");
		}
	});
	$("#contact").waypoint(function (direction) {
		if (direction == "down") {
			$(".nav-menu").removeClass("text-white");
			$(".nav-menu").addClass("text-black");
		} else {
			$(".nav-menu").removeClass("text-black");
			$(".nav-menu").addClass("text-white");
		}
	});
	$(".portfolio-section").waypoint(function (direction) {
		if (direction == "down") {
			$(".nav-menu").removeClass("text-black");
			$(".nav-menu").addClass("text-white");
		} else {
			$(".nav-menu").removeClass("text-white");
			$(".nav-menu").addClass("text-black");
		}
	});

	// $(".scroll-to-about").click(function () {
	// 	$("body, html").animate(
	// 		{ scrollTop: $(".about-section").offset().top },
	// 		1000
	// 	);
	// });

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

	// // Animation scroll
	// $(".js--about-section").waypoint(
	// 	function (direction) {
	// 		$(".js--about-fade").addClass("animate__animated animate__fadeIn");
	// 	},
	// 	{
	// 		offset: "50%",
	// 	}
	// );

	// $(".js--service-section").waypoint(
	// 	function (direction) {
	// 		$(".js--service-box").addClass("animate__animated animate__zoomIn");
	// 	},
	// 	{
	// 		offset: "50%",
	// 	}
	// );

	// $(".js--package-section").waypoint(function (direction) {
	// 	$(".js--enterprise").addClass("animate__animated animate__pulse");
	// });
});
