import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { animateHeader, animateHumbergerNav } from "../animations";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef(null);

	const navLinks = [
		{ label: "Home", href: "#home" },
		{ label: "What I Do", href: "#what-i-do" },
		{ label: "Services", href: "#services" },
		{ label: "Projects", href: "#projects" },
		{ label: "Tech Stack", href: "#tech-stack" },
		{ label: "Contact", href: "#contact" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		const navLinks = document.querySelectorAll(".nav-item");
		const humbergerNavLinks = document.querySelectorAll(".humberger-nav-item");

		let click = false;

		for (const navLink of humbergerNavLinks) {
			navLink.addEventListener("click", () => {
				click = true;

				for (const navLink of humbergerNavLinks) {
					navLink.classList.remove("text-blue-500", "font-semibold");
				}

				navLink.classList.add("text-blue-500", "font-semibold");
				setTimeout(() => (click = false), 750);
			});
		}

		for (const navLink of navLinks) {
			navLink.addEventListener("click", () => {
				click = true;

				for (const navLink of navLinks) {
					navLink.classList.remove("text-blue-500", "font-semibold");
				}

				navLink.classList.add("text-blue-500", "font-semibold");
				setTimeout(() => (click = false), 750);
			});
		}

		function handleScroll() {
			if (click) return;
			let current = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop - 64;
				if (window.scrollY >= sectionTop) current = section.getAttribute("id");
			});

			navLinks.forEach((navLink) => {
				navLink.classList.remove("text-blue-500", "font-semibold");
				if (navLink.getAttribute("href") === `#${current}`)
					navLink.classList.add("text-blue-500", "font-semibold");
			});
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			if (headerRef.current) animateHumbergerNav(headerRef.current);
		});

		return () => ctx.revert();
	});

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			if (headerRef.current) animateHeader(headerRef.current);
		});

		return () => ctx.revert(); // cleanup saat unmount
	}, []);

	return (
		<header
			ref={headerRef}
			className={`${
				isOpen ? "w-3/4 pb-0 h-[100vh]" : "w-full"
			} transition-[width] duration-200 delay-150 py-4 sticky top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm`}>
			<div className="container flex items-center justify-between">
				<div className="logo text-2xl font-extrabold">
					<a href="/">RAW DEV</a>
				</div>

				<nav>
					{/* Nav's Link */}
					<ul className={`hidden md:flex items-center gap-6`}>
						{navLinks.map((nav, i) => (
							<li key={nav.label}>
								<a
									href={nav.href}
									className={`${
										i === 0 ? "text-blue-500 font-semibold" : ""
									} nav-item inline-block hover:text-lg`}>
									{nav.label}
								</a>
							</li>
						))}
					</ul>

					<button
						onClick={toggleMenu}
						className="flex md:hidden flex-col gap-1">
						<span
							className={`${
								isOpen ? "-rotate-45 translate-y-[6px]" : ""
							} transition duration-300 delay-150 w-5 h-0.5 bg-black`}></span>
						<span
							className={`${
								isOpen ? "translate-x-[40vw]" : ""
							} transition duration-300 relative w-5 h-0.5 bg-black`}></span>
						<span
							className={`${
								isOpen ? "rotate-45 translate-y-[-6px]" : ""
							} transition duration-300 delay-150 w-5 h-0.5 bg-black`}></span>
					</button>
				</nav>
			</div>

			<div
				className={`${
					isOpen ? "left-0" : "hidden -left-full "
				} transition-all duration-300 container relative bg-white/50 backdrop-blur-sm rounded-r-lg mt-2`}>
				<nav>
					{/* Nav's Link */}
					<ul className={`flex flex-col justify-start gap-3`}>
						{navLinks.map((nav, i) => (
							<li key={nav.label}>
								<a
									href={nav.href}
									className={`${
										i === 0 ? "text-blue-500 font-semibold" : ""
									} humberger-nav-item inline-block hover:text-lg`}>
									{nav.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

// export default function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const headerRef = useRef(null);

// useLayoutEffect(() => {
// 	let ctx = gsap.context(() => {
// 		if (headerRef.current) animateHeader(headerRef.current);
// 	});

// 	return () => ctx.revert(); // cleanup saat unmount
// }, []);

// const navLinks = [
// 	{ label: "Home", href: "#home" },
// 	{ label: "What I Do", href: "#what-i-do" },
// 	{ label: "Services", href: "#services" },
// 	{ label: "Projects", href: "#projects" },
// 	{ label: "Tech Stack", href: "#tech-stack" },
// 	{ label: "Contact", href: "#contact" },
// ];

// 	const toggleMenu = () => setIsOpen(!isOpen);

// 	return (
// 		<nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
// 			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
// 				{/* Brand */}
// 				<a href="#home" className="text-xl font-bold tracking-wide">
// 					Raw Dev
// 				</a>

// 				{/* Desktop Menu */}
// 				<ul className="hidden md:flex items-center gap-6">
// 					{navLinks.map((link) => (
// 						<li key={link.href}>
// 							<a
// 								href={link.href}
// 								className="hover:text-blue-600 transition-colors">
// 								{link.label}
// 							</a>
// 						</li>
// 					))}
// 				</ul>

// 				{/* Mobile Button */}
// 				<button
// 					onClick={toggleMenu}
// 					className="md:hidden flex flex-col gap-1"
// 					aria-label="Toggle menu">
// 					<span className="w-6 h-0.5 bg-black"></span>
// 					<span className="w-6 h-0.5 bg-black"></span>
// 					<span className="w-6 h-0.5 bg-black"></span>
// 				</button>
// 			</div>

// 			{/* Fullscreen Overlay Menu */}
// 			{isOpen && (
// 				<div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl">
// 					{navLinks.map((link) => (
// 						<a
// 							key={link.href}
// 							href={link.href}
// 							className="hover:text-blue-600 transition-colors"
// 							onClick={() => setIsOpen(false)}>
// 							{link.label}
// 						</a>
// 					))}
// 					<button
// 						onClick={toggleMenu}
// 						className="absolute top-6 right-6 text-3xl">
// 						✕
// 					</button>
// 				</div>
// 			)}
// 		</nav>
// 	);
// }
