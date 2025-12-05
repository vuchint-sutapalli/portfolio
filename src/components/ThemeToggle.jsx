import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch by only mounting after client-side render
	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		
		// Announce theme change for accessibility
		const announcement = `Switched to ${newTheme} mode`;
		if ('speechSynthesis' in window && window.speechSynthesis.speak) {
			const utterance = new SpeechSynthesisUtterance(announcement);
			utterance.volume = 0.1;
			window.speechSynthesis.speak(utterance);
		}
	};

	// Don't render until mounted to prevent hydration issues
	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={toggleTheme}
			className={`
				fixed top-4 right-4 z-50 
				transition-all duration-300 ease-in-out
				border-gray-300 hover:border-blue-400 
				hover:shadow-lg hover:scale-105
				bg-white/80 backdrop-blur-sm
				dark:bg-gray-800/80 dark:border-gray-600 dark:hover:border-blue-400
				active:scale-95
			`}
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
			title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			<div className="relative w-4 h-4">
				<Moon 
					className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
						theme === "light" 
							? "rotate-0 scale-100 opacity-100" 
							: "rotate-90 scale-0 opacity-0"
					}`}
				/>
				<Sun 
					className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
						theme === "dark" 
							? "rotate-0 scale-100 opacity-100" 
							: "-rotate-90 scale-0 opacity-0"
					}`}
				/>
			</div>
		</Button>
	);
};

export default ThemeToggle;
