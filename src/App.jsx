import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import Header from "./components/Header";
import Hero from "./components/homepage/Hero";
import Services from "./components/homepage/Services";
import Projects from "./components/homepage/Projects";
import TechStack from "./components/homepage/TechStack";
import Footer from "./components/Footer";

import {
	animateHero,
	animateServices,
	animateProjects,
	animateTechStack,
	animateFooter,
} from "./animations";

const WA_NUMBER = "6281350769684";
const EMAIL = "rahmatwr9@gmail.com";

export default function App() {
	// REFS untuk tiap section
	// const headerRef = useRef(null);
	const heroRef = useRef(null);
	const servicesRef = useRef(null);
	const servicesRef2 = useRef(null);
	const projectsRef = useRef(null);
	const footerRef = useRef(null);
	const techStackRef = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			if (heroRef.current) animateHero(heroRef.current);
			if (servicesRef.current) animateServices(servicesRef.current);
			if (servicesRef2.current) animateServices(servicesRef2.current);
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
			<Hero ref={heroRef} />

			{/* SERVICES */}
			<Services ref={servicesRef} ref2={servicesRef2} />

			{/* PROJECTS PREVIEW */}
			<Projects ref={projectsRef} />

			{/* TECH STACK */}
			<TechStack ref={techStackRef} />

			{/* FOOTER */}
			<Footer ref={footerRef} />
		</div>
	);
}
