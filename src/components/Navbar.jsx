import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const navItems = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#experience", label: "Experience" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			console.log("Scroll event detected");

			const sections = navItems.map((item) => item.href.substring(1));
			const scrollPosition = window.scrollY + 100;

			// Find the section that's currently in view
			let currentSection = sections[0]; // Default to first section

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				const element = document.getElementById(section);

				if (element) {
					const offsetTop = element.offsetTop;

					if (scrollPosition >= offsetTop) {
						currentSection = section;
						break;
					}
				}
			}

			console.log(`Active section: ${currentSection}`);
			setActiveSection(currentSection);
		};

		let ticking = false;

		const optimizedHandleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		// Add scroll listener to window instead of body
		window.addEventListener("scroll", optimizedHandleScroll);

		// Call once on mount to set initial active section
		handleScroll();

		return () => {
			window.removeEventListener("scroll", optimizedHandleScroll);
		};
	}, []); // Add navItems as dependency
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		console.log("Scroll event detected");

	// 		const sections = navItems.map((item) => item.href.substring(1));
	// 		const scrollPosition = window.scrollY + 100;

	// 		for (const section of sections) {
	// 			const element = document.getElementById(section);
	// 			if (element) {
	// 				const offsetTop = element.offsetTop;
	// 				const offsetHeight = element.offsetHeight;

	// 				if (
	// 					scrollPosition >= offsetTop &&
	// 					scrollPosition < offsetTop + offsetHeight
	// 				) {
	// 					console.log(`Active section: ${section}`);

	// 					setActiveSection(section);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 	};
	// 	let ticking = false;

	// 	const optimizedHandleScroll = () => {
	// 		if (!ticking) {
	// 			window.requestAnimationFrame(() => {
	// 				handleScroll();
	// 				ticking = false;
	// 			});
	// 			ticking = true;
	// 		}
	// 	};

	// 	document
	// 		.getElementsByTagName("body")[0]
	// 		.addEventListener("scroll", optimizedHandleScroll);

	// 	return () => {
	// 		document
	// 			.getElementsByTagName("body")[0]
	// 			.removeEventListener("scroll", optimizedHandleScroll);
	// 	};
	// }, []);

	const handleNavClick = (href) => {
		setIsOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
			<div className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-card">
				<div className="flex items-center justify-center">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						{navItems.map((item) => (
							<button
								key={item.href}
								onClick={() => handleNavClick(item.href)}
								className={`relative px-4 py-2 text-sm font-medium transition-smooth hover:text-primary rounded-full ${
									activeSection === item.href.substring(1)
										? "text-blue-600 bg-primary/15"
										: "text-foreground/85 hover:text-primary"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-full text-foreground/85 hover:text-primary transition-smooth"
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden mt-3 pt-3 border-t border-border/50">
						<div className="space-y-1">
							{navItems.map((item) => (
								<button
									key={item.href}
									onClick={() => handleNavClick(item.href)}
									className={`block w-full text-center px-4 py-2 text-sm font-medium rounded-full transition-smooth ${
										activeSection === item.href.substring(1)
											? "text-blue-600 bg-primary/15"
											: "text-foreground/85 hover:text-primary hover:bg-primary/8"
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
