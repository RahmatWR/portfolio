export default function Hero({ ref }) {
	const WA_NUMBER = "6281350769684";
	const EMAIL = "rahmatwr9@gmail.com";

	return (
		<section id="home" ref={ref} className="py-16">
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
							Chat WhatsApp
						</a>
						<a href={`mailto:${EMAIL}`} className="text-gray-600 underline">
							{EMAIL}
						</a>
					</div>
				</div>

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
										WhatsApp
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
	);
}
