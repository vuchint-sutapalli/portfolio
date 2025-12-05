import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import React from "react";

const Contact = ({ config }) => {
	const { personal } = config;

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Get In Touch
					</h2>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-2xl text-center">
									Let's work together!
								</CardTitle>
							</CardHeader>

							<CardContent className="space-y-8">
								<p className="text-center text-lg text-gray-600 leading-relaxed">
									I'm always interested in new opportunities and exciting
									projects. Whether you have a question or just want to say hi,
									feel free to reach out!
								</p>

								<div className="grid md:grid-cols-3 gap-6">
									{[
										{
											icon: <Mail />,
											label: "Email",
											value: personal.email,
											href: `mailto:${personal.email}`,
										},
										{
											icon: <Phone />,
											label: "Phone",
											value: personal.phone,
											href: `tel:${personal.phone}`,
										},
										{
											icon: <MapPin />,
											label: "Location",
											value: personal.location,
										},
									].map(({ icon, label, value, href }, idx) => (
										<div key={idx} className="text-center space-y-2">
											<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
												{React.cloneElement(icon, {
													className: "h-6 w-6 text-white",
												})}
											</div>
											<h3 className="font-semibold">{label}</h3>
											{href ? (
												<a
													href={href}
													className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block"
												>
													{value}
												</a>
											) : (
												<span className="text-gray-600 block">{value}</span>
											)}
										</div>
									))}
								</div>

								<div className="flex justify-center pt-6">
									<Button
										size="lg"
										className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8"
										asChild
									>
										<a href={personal.resume} download>
											<Download className="mr-2 h-5 w-5" />
											Download Resume
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
