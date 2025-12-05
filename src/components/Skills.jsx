import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const Skills = ({ config }) => {
	const { skills } = config;

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Skills & Technologies
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{skills.map((skillGroup, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white backdrop-blur-sm group">
									<CardHeader>
										<CardTitle className="text-xl font-semibold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
											{skillGroup.category}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2 justify-center">
											{skillGroup.technologies.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="secondary"
													className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
												>
													{tech}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
