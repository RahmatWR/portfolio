// src/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Header Animation
export const animateHeader = (header) => {
	gsap.from(header.querySelectorAll(".logo, .nav-item"), {
		opacity: 0,
		y: 30,
		duration: 0.6,
		ease: "power2.out",
		stagger: 0.2,
		toggleActions: "restart none none none",
	});
};

export const animateHumbergerNav = (header) => {
	gsap.from(header.querySelectorAll(".humberger-nav-item"), {
		opacity: 0,
		x: -30,
		duration: 0.6,
		ease: "power2.out",
		stagger: 0.2,
	});
};

// HERO ANIMATION (on load)
export const animateHero = (section) => {
	const tl = gsap.timeline();

	tl.fromTo(
		section.querySelectorAll("h1, p, ul li, a"),
		{
			opacity: 0,
			y: 40,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "elastic.out(1, 0.6)",
			stagger: 0.15,
		}
	);
};

// SERVICES (on scroll)
export const animateServices = (section) => {
	gsap.from(section.querySelectorAll(".service"), {
		scrollTrigger: {
			trigger: section,
			start: "top 70%",
			onEnterBack: () => {
				gsap.from(section.querySelectorAll(".service"), {
					opacity: 0,
					y: -50,
					ease: "power2.out",
					stagger: 0.2,
				});
			},
			toggleActions: "restart none none none",
		},
		opacity: 0,
		y: 50,
		duration: 0.6,
		ease: "power2.out",
		stagger: 0.2,
	});
};

// PROJECTS (on scroll)
export const animateProjects = (section) => {
	gsap.from(section.querySelectorAll(".project"), {
		scrollTrigger: {
			trigger: section,
			start: "top 80%",
			onEnterBack: () => {
				gsap.from(section.querySelectorAll(".project"), {
					opacity: 0,
					y: -60,
					duration: 0.7,
					ease: "back.out(1.7)",
					stagger: 0.25,
				});
			},
			toggleActions: "restart none none none",
		},
		opacity: 0,
		y: 60,
		duration: 0.7,
		ease: "back.out(1.7)",
		stagger: 0.25,
	});
};

export const animateTechStack = (section) => {
	gsap.from(section.querySelectorAll(".tech"), {
		scrollTrigger: {
			trigger: section,
			start: "top 75%",
			onEnterBack: () => {
				gsap.from(section.querySelectorAll(".tech"), {
					opacity: 0,
					y: -40,
					ease: "back.out(1.7)",
					stagger: 0.25,
				});
			},
			toggleActions: "restart none none none",
		},
		opacity: 0,
		y: 40,
		duration: 0.6,
		ease: "power2.out",
		stagger: 0.2,
	});
};

// FOOTER (on scroll)
export const animateFooter = (footer) => {
	gsap.from(footer.querySelectorAll("*"), {
		scrollTrigger: {
			trigger: footer,
			start: "top bottom",
		},
		opacity: 0,
		y: 10,
		duration: 0.6,
		ease: "power2.out",
		stagger: 0.2,
	});
};
