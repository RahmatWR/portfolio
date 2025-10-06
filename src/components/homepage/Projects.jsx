export default function Projects({ ref }) {
	return (
		<section id="projects" ref={ref} className="py-14">
			<div className="container">
				<h3 className="text-[22px] font-semibold text-gray-900 tracking-tight">
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
	);
}
