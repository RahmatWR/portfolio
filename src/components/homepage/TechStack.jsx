import reactLogo from "../../assets/react.svg";
import tailWindLogo from "../../assets/tailwindcss-mark.svg";
import gsapLogo from "../../assets/gsap.png";

export default function TechStack({ ref }) {
	return (
		<section ref={ref} id="tech-stack" className="py-14 bg-white">
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
	);
}
