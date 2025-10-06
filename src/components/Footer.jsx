export default function Footer({ ref }) {
	const WA_NUMBER = "6281350769684";
	return (
		<footer id="contact" ref={ref} className="py-12 border-t">
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
	);
}
