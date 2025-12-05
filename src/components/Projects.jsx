import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = ({ config }) => {
	const { projects } = config;
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Featured Projects
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white backdrop-blur-sm group overflow-hidden">
									<div className="aspect-video bg-gray-100 relative overflow-hidden">
										{project.image ? (
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										) : (
											<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
												<div className="text-6xl font-bold text-gray-600">
													{project.title
														.split(" ")
														.map((word) => word[0])
														.join("")}
												</div>
											</div>
										)}
									</div>

									<CardHeader>
										<CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200 group-hover:-translate-y-1">
											{project.title}
										</CardTitle>
									</CardHeader>

									<CardContent className="space-y-4">
										<p className="text-gray-600 leading-relaxed">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="outline"
													className="border-blue-200 text-blue-600 hover:bg-blue-50"
												>
													{tech}
												</Badge>
											))}
										</div>

										<div className="flex gap-3 pt-4">
											<Button
												size="sm"
												variant="outline"
												className="border-gray-300 hover:border-blue-400 hover:shadow-md transition-all duration-200"
												asChild
											>
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="mr-2 h-4 w-4" />
													Code
												</a>
											</Button>

											<Button
												size="sm"
												className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 transition-transform duration-300"
												asChild
											>
												<a
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													Demo
												</a>
											</Button>
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

export default Projects;
