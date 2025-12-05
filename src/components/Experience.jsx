import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import React from "react";

const Experience = ({ config }) => {
	const { experience } = config;

	// Framer animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: i * 0.2,
				ease: "easeOut",
			},
		}),
	};

	return (
		<section className="py-24 bg-gray-50 relative z-10">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] bg-clip-text text-transparent">
						Experience
					</h2>

					<div className="relative">
						{/* Timeline vertical line */}
						<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] z-0"></div>

						<div className="space-y-16">
							{experience.map((exp, index) => (
								<motion.div
									key={exp.id}
									variants={cardVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.3 }}
									custom={index}
									className={`relative flex items-center ${
										index % 2 === 0 ? "md:justify-start" : "md:justify-end"
									}`}
								>
									{/* Dot */}
									<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">
										<span className="w-4 h-4 bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] rounded-full border-4 border-white shadow-lg z-10 animate-ping absolute opacity-75"></span>
										<div className="w-4 h-4 bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] rounded-full border-4 border-white shadow-lg z-20 relative"></div>
									</div>

									{/* Card */}
									<div
										className={`w-full md:w-1/2 ${
											index % 2 === 0 ? "pl-12 md:pl-0 md:pr-8" : "pl-12"
										}`}
									>
										<Card className="border-gray-200 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white/90 backdrop-blur-sm">
											<CardContent className="p-6 space-y-5">
												<div className="space-y-1">
													<h3 className="text-xl font-bold text-gray-900">
														{exp.position}
													</h3>
													<p className="text-base font-semibold text-[hsl(var(--brand-start))]">
														{exp.company}
													</p>
													<p className="text-sm text-gray-400">
														{exp.duration}
													</p>
												</div>

												<p className="text-gray-700 leading-relaxed tracking-wide text-sm">
													{exp.description}
												</p>

												{exp.technologies?.length > 0 && (
													<div className="space-y-1">
														<p className="text-xs text-gray-500 font-medium">
															Technologies used:
														</p>
														<div className="flex flex-wrap gap-2">
															{exp.technologies.map((tech, techIndex) => (
																<Badge
																	key={techIndex}
																	variant="secondary"
																	className="bg-blue-50 text-[hsl(var(--brand-start))] border-blue-200 hover:bg-blue-100 transition-colors duration-200"
																>
																	{tech}
																</Badge>
															))}
														</div>
													</div>
												)}
											</CardContent>
										</Card>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
