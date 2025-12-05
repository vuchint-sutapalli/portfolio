import { Card, CardContent } from "./ui/card";

const About = ({ config }) => {
	const { personal } = config;

	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] bg-clip-text text-transparent">
						About Me
					</h2>

					<Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
						<CardContent className="p-8">
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<div>
									<p className="text-lg leading-relaxed text-gray-700 mb-6">
										{personal.bio}
									</p>

									<div className="space-y-3">
										<div className="flex items-center">
											<span className="font-semibold text-[hsl(var(--brand-start))] mr-2">
												Location:
											</span>
											<span className="text-gray-600">{personal.location}</span>
										</div>
										<div className="flex items-center">
											<span className="font-semibold text-[hsl(var(--brand-start))] mr-2">
												Email:
											</span>
											<a
												href={`mailto:${personal.email}`}
												className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
											>
												{personal.email}
											</a>
										</div>
									</div>
								</div>

								<div className="flex justify-center">
									<div className="w-64 h-64 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] p-1">
										<div className="w-full h-full rounded-full bg-white flex items-center justify-center">
											<div className="w-56 h-56 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
												{personal.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default About;
