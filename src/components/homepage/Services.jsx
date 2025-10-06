export default function Services({ ref, ref2 }) {
	return (
		<>
			<section id="what-i-do" ref={ref} className="py-14 bg-white">
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
			<section
				id="services"
				ref={ref2}
				className="services-2 relative py-24 px-6 md:px-12 overflow-hidden">
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
					<div className="service p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
						<div className="text-4xl mb-4">💻</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Front-End Development
						</h3>
						<p className="text-gray-700 text-sm leading-relaxed">
							Membangun antarmuka web dengan React, Tailwind, dan tools modern.
						</p>
					</div>

					{/* Card 2 */}
					<div className="service p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
						<div className="text-4xl mb-4">🎨</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							UI Implementation
						</h3>
						<p className="text-gray-700 text-sm leading-relaxed">
							Convert desain dari Figma menjadi tampilan web yang responsive.
						</p>
					</div>

					{/* Card 3 */}
					<div className="service p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
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
		</>
	);
}
