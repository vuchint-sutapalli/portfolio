import React, { useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Core Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

// Configuration
import portfolioConfig from "./config/portfolio-fstack.json";

// Styles
import "./App.css";

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
	<div className="min-h-screen flex items-center justify-center bg-gray-100">
		<div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
			<h2 className="text-2xl font-bold text-red-600 mb-4">
				Something went wrong
			</h2>
			<p className="text-gray-600 mb-4">
				We're sorry, but something went wrong. Please try refreshing the page.
			</p>
			<button
				onClick={resetErrorBoundary}
				className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
			>
				Try again
			</button>
		</div>
	</div>
);

// SEO Component
const SEO = ({ config }) => {
	useEffect(() => {
		// Set document title
		document.title = `${config.personal.name} - ${config.personal.title}`;

		// Set meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.content = config.personal.bio;
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content = config.personal.bio;
			document.head.appendChild(meta);
		}

		// Set viewport meta tag if not exists
		if (!document.querySelector('meta[name="viewport"]')) {
			const viewport = document.createElement("meta");
			viewport.name = "viewport";
			viewport.content = "width=device-width, initial-scale=1.0";
			document.head.appendChild(viewport);
		}
	}, [config]);

	return null;
};

function App() {
	const [config] = useState(portfolioConfig);

	// Smooth scrolling setup
	useEffect(() => {
		// Add smooth scrolling to html element
		document.documentElement.style.scrollBehavior = "smooth";

		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	if (!config) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
					<div role="status">
						<svg
							aria-hidden="true"
							className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0492C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => window.location.reload()}
		>
			<div className="w-full">
				{/* SEO Setup */}
				<SEO config={config} />

				{/* Navigation */}
				<Navbar />

				{/* Theme Toggle */}
				<ThemeToggle />

				{/* Main Content */}
				<main className="w-full">
					{/* Hero Section */}
					<section id="home" className="w-full">
						<Hero config={config} />
					</section>

					{/* About Section */}
					<section id="about" className="w-full scroll-mt-16">
						<About config={config} />
					</section>

					{/* Experience Section */}
					<section id="experience" className="w-full scroll-mt-16">
						<Experience config={config} />
					</section>

					{/* Skills Section */}
					<section id="skills" className="w-full scroll-mt-16">
						<Skills config={config} />
					</section>

					{/* Projects Section */}
					<section id="projects" className="w-full scroll-mt-16">
						<Projects config={config} />
					</section>

					{/* Contact Section */}
					<section id="contact" className="w-full scroll-mt-16">
						<Contact config={config} />
					</section>
				</main>

				{/* Footer */}
				<footer className="w-full bg-gray-900 text-white py-8">
					<div className="max-w-7xl mx-auto px-4 text-center">
						<p className="text-gray-400">
							© {new Date().getFullYear()} {config.personal.name}. All rights
							reserved.
						</p>
						<p className="text-sm text-gray-500 mt-2">
							Built with React, Tailwind CSS, and ❤️
						</p>
					</div>
				</footer>
			</div>
		</ErrorBoundary>
	);
}

export default App;
