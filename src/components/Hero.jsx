// import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = ({ config }) => {
	const { personal, social } = config;

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			// Calculate offset for better positioning
			const offset = sectionId === "home" ? 0 : 80;
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: Math.max(0, offsetPosition),
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden pt-16">
			<div className="absolute inset-0 bg-black/10"></div>

			<div className="container mx-auto px-4 text-center relative z-10">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.6 }}
					>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse">
							{personal.name}
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.6 }}
					>
						<h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
							{personal.title}
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.6 }}
					>
						<p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
							{personal.tagline}
						</p>
					</motion.div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Button
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 text-white font-semibold px-8"
							onClick={() => scrollToSection("contact")}
						>
							<Mail className="mr-2 h-5 w-5" />
							Get In Touch
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="border-gray-400 text-gray-200 hover:border-blue-400 hover:text-blue-400 hover:shadow-md transition-all duration-300 px-8"
							onClick={() => scrollToSection("projects")}
						>
							View My Work
						</Button>
					</div>

					<div className="flex justify-center gap-6 mb-16">
						<a
							href={social.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full border border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-md transition-all duration-300"
						>
							<Github className="h-6 w-6" />
						</a>
						<a
							href={social.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full border border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-md transition-all duration-300"
						>
							<Linkedin className="h-6 w-6" />
						</a>
					</div>

					<Button
						variant="ghost"
						onClick={() => scrollToSection("about")}
						className="animate-bounce hover:animate-none transition-colors duration-200 text-gray-300 hover:text-blue-400"
					>
						<ArrowDown className="h-6 w-6" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
