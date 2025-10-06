import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import {
	animateHero,
	animateServices,
	animateProjects,
	animateTechStack,
	animateFooter,
} from "./animations";

import reactLogo from "./assets/react.svg";
import tailWindLogo from "./assets/tailwindcss-mark.svg";
import gsapLogo from "./assets/gsap.png";

const WA_NUMBER = "6281350769684";
const EMAIL = "rahmatwr9@gmail.com";

function Header() {
	return (
		<header className="w-full py-6">
			<div className="container flex items-center justify-between">
				<div className="text-2xl font-extrabold">RAW DEV</div>
				<nav className="space-x-8 text-gray-700">
					<a href="#home" className="hover:text-black">
						Home
					</a>
					<a href="#services" className="hover:text-black">
						Services
					</a>
					<a href="#projects" className="hover:text-black">
						Projects
					</a>
					<a href="#contact" className="hover:text-black">
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}

export default function App() {
	// REFS untuk tiap section
	const heroRef = useRef(null);
	const servicesRef = useRef(null);
	const projectsRef = useRef(null);
	const footerRef = useRef(null);
	const techStackRef = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			if (heroRef.current) animateHero(heroRef.current);
			if (servicesRef.current) animateServices(servicesRef.current);
			if (projectsRef.current) animateProjects(projectsRef.current);
			if (techStackRef.current) animateTechStack(techStackRef.current);
			if (footerRef.current) animateFooter(footerRef.current);
		});

		return () => ctx.revert(); // cleanup saat unmount
	}, []);

	return (
		<div className="min-h-screen bg-white text-gray-800">
			<Header />

			{/* HERO SECTION */}
			<section id="home" ref={heroRef} className="py-16">
				<div className="container flex flex-col-reverse lg:flex-row items-center gap-10">
					<div className="flex-1">
						<h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.15] text-gray-900 tracking-tight">
							I Build Modern <br /> Web Interfaces
						</h1>
						<p className="mt-4 text-lg text-gray-600">
							Front-End Developer (React & Tailwind) — clean code, pixel-perfect
							UI, fast delivery.
						</p>
						<ul className="mt-8 space-y-3 text-gray-700">
							<li className="flex items-center gap-3">
								<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-primary">
									✓
								</span>
								<span>Landing Pages</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-primary">
									✓
								</span>
								<span>Dashboards</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-primary">
									✓
								</span>
								<span>Web Apps</span>
							</li>
						</ul>

						<div className="mt-8 flex items-center gap-4">
							<a
								href={`https://wa.me/${WA_NUMBER}`}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-white font-medium shadow hover:bg-blue-600">
								Chat via WhatsApp
							</a>
							<a href={`mailto:${EMAIL}`} className="text-gray-600 underline">
								{EMAIL}
							</a>
						</div>
					</div>

					{/* <div className="flex-1 flex justify-center">
						<div className="w-full max-w-md">
							<div className="aspect-[4/3] rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center">
								<svg
									viewBox="0 0 200 140"
									className="w-72 h-56"
									xmlns="http://www.w3.org/2000/svg">
									<g fill="none" fillRule="evenodd">
										<path
											d="M10 100 L100 10 L190 100 L100 140 Z"
											fill="#EFF6FF"
										/>
										<rect
											x="52"
											y="50"
											width="96"
											height="54"
											rx="3"
											fill="#fff"
											stroke="#DBEAFE"
										/>
										<rect
											x="60"
											y="60"
											width="80"
											height="6"
											rx="2"
											fill="#E0F2FE"
										/>
										<rect
											x="60"
											y="70"
											width="60"
											height="6"
											rx="2"
											fill="#BFDBFE"
										/>
										<rect
											x="60"
											y="80"
											width="40"
											height="6"
											rx="2"
											fill="#93C5FD"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div> */}

					{/* RIGHT - Multi-device Mockup (Desktop + Mobile) */}
					<div className="flex-1 flex justify-center">
						<div className="w-full max-w-md relative">
							{/* Desktop mockup */}
							<div className="transform -rotate-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
									<div className="w-24 h-3 rounded bg-gray-200"></div>
									<div className="flex items-center gap-2">
										<span className="w-2 h-2 rounded-full bg-red-400"></span>
										<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
										<span className="w-2 h-2 rounded-full bg-green-400"></span>
									</div>
								</div>

								{/* Inner "screenshot" - recreate hero layout as preview */}
								<div className="p-6">
									<div className="h-6 w-56 bg-gray-100 rounded mb-4"></div>
									<div className="h-4 w-40 bg-gray-100 rounded mb-2"></div>

									<div className="mt-4 space-y-2">
										<div className="h-3 w-48 bg-gray-100 rounded"></div>
										<div className="h-3 w-32 bg-gray-100 rounded"></div>
										<div className="h-3 w-40 bg-gray-100 rounded"></div>
									</div>

									<div className="mt-6 flex gap-3">
										<div className="h-9 px-4 rounded bg-primary text-white inline-flex items-center justify-center">
											Chat via WhatsApp
										</div>
										<div className="h-9 px-3 rounded border border-gray-200 inline-flex items-center justify-center text-sm text-gray-600">
											rahmatwr9@gmail.com
										</div>
									</div>
								</div>
							</div>

							{/* Mobile mockup floating */}
							<div className="absolute right-0 top-28 transform scale-75 translate-x-6 rotate-3">
								<div className="w-44 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
									<div className="bg-gray-50 px-3 py-2 border-b border-gray-100 flex items-center justify-between">
										<div className="w-16 h-2 rounded bg-gray-200"></div>
										<div className="flex items-center gap-1">
											<span className="w-2 h-2 rounded-full bg-red-400"></span>
											<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
											<span className="w-2 h-2 rounded-full bg-green-400"></span>
										</div>
									</div>

									<div className="p-3">
										<div className="h-4 w-32 bg-gray-100 rounded mb-3"></div>
										<div className="h-3 w-24 bg-gray-100 rounded mb-2"></div>

										<div className="mt-3 space-y-2">
											<div className="h-2 w-28 bg-gray-100 rounded"></div>
											<div className="h-2 w-20 bg-gray-100 rounded"></div>
										</div>

										<div className="mt-4">
											<div className="h-8 rounded bg-primary flex items-center justify-center text-white text-sm">
												Chat WhatsApp
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section id="services" ref={servicesRef} className="py-14 bg-white">
				<div className="container">
					<h3 className="text-[22px] font-semibold text-gray-900 tracking-tight">
						What I Do
					</h3>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="service p-6 border rounded-lg">
							Landing Page Development
						</div>
						<div className="service p-6 border rounded-lg">
							Dashboard / Admin UI
						</div>
						<div className="service p-6 border rounded-lg">React Front-End</div>
					</div>
				</div>
			</section>
			<section className="relative py-24 px-6 md:px-12 overflow-hidden">
				{/* Background Gradient + Blur */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent backdrop-blur-xl"></div>

				<div className="relative max-w-6xl mx-auto text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
						Services
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Solusi profesional untuk kebutuhan pengembangan web modern.
					</p>
				</div>

				{/* Cards */}
				<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* Card 1 */}
					<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
						<div className="text-4xl mb-4">💻</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Front-End Development
						</h3>
						<p className="text-gray-700 text-sm leading-relaxed">
							Membangun antarmuka web dengan React, Tailwind, dan tools modern.
						</p>
					</div>

					{/* Card 2 */}
					<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
						<div className="text-4xl mb-4">🎨</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							UI Implementation
						</h3>
						<p className="text-gray-700 text-sm leading-relaxed">
							Convert desain dari Figma menjadi tampilan web yang responsive.
						</p>
					</div>

					{/* Card 3 */}
					<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
						<div className="text-4xl mb-4">⚙️</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Web Optimization
						</h3>
						<p className="text-gray-700 text-sm leading-relaxed">
							Perbaikan performa, maintenance, dan debugging untuk website kamu.
						</p>
					</div>
				</div>
			</section>

			{/* PROJECTS PREVIEW */}
			<section id="projects" ref={projectsRef} className="py-14">
				<div className="container">
					<h3 className="project text-[22px] font-semibold text-gray-900 tracking-tight">
						Featured Projects
					</h3>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="project p-4 border rounded-lg">
							Student Dashboard (Preview)
						</div>
						<div className="project p-4 border rounded-lg">
							Fun To-Do App (Theme)
						</div>
					</div>
				</div>
			</section>

			{/* TECH STACK */}
			<section ref={techStackRef} id="tech-stack" className="py-14 bg-white">
				<div className="container">
					<h3 className="text-[22px] font-semibold text-gray-900 tracking-tight">
						Tech Stack & Tools
					</h3>
					<div className="mt-8 space-y-6">
						<div className="tech flex items-start gap-4">
							<img src={reactLogo} alt="React" className="w-8 h-8" />
							<div>
								<div className="font-medium text-gray-900">React</div>
								<div className="text-gray-600 text-sm">
									Library utama untuk seluruh komponen UI dan logic interaktif.
								</div>
							</div>
						</div>

						<div className="tech flex items-start gap-4">
							<img src={tailWindLogo} alt="Tailwind CSS" className="w-8 h-8" />
							<div>
								<div className="font-medium text-gray-900">Tailwind CSS</div>
								<div className="text-gray-600 text-sm">
									Utility-first styling untuk layout cepat dan konsisten.
								</div>
							</div>
						</div>

						<div className="tech flex items-start gap-4">
							<img src={gsapLogo} alt="GSAP" className="w-8 h-8" />
							<div>
								<div className="font-medium text-gray-900">GSAP</div>
								<div className="text-gray-600 text-sm">
									High-performance animation engine untuk efek profesional.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer id="contact" ref={footerRef} className="py-12 border-t">
				<div className="container flex flex-col md:flex-row items-center justify-between">
					<div>
						<div className="font-bold text-lg">Raw Dev</div>
						<div className="text-sm text-gray-600">
							Clean Code. Sharp Interface. Real Results.
						</div>
					</div>
					<div className="mt-6 md:mt-0">
						<a
							href={`https://wa.me/${WA_NUMBER}`}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-600">
							Chat via WhatsApp
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
