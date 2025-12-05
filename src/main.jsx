import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global styles
import "./index.css";

// Main App component
import App from "./App.jsx";

// Performance monitoring (optional - can be removed in production)
const logPerformance = () => {
	if (typeof window !== "undefined" && window.performance) {
		window.addEventListener("load", () => {
			const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
			console.log(`⚡ Portfolio loaded in ${loadTime}ms`);
		});
	}
};

// Initialize app with error boundaries and performance monitoring
const initializeApp = () => {
	try {
		logPerformance();
		
		const rootElement = document.getElementById("root");
		if (!rootElement) {
			throw new Error("Root element not found. Make sure your HTML includes <div id='root'></div>");
		}

		const root = createRoot(rootElement);
		root.render(
			<StrictMode>
				<App />
			</StrictMode>
		);
	} catch (error) {
		console.error("Failed to initialize portfolio:", error);
		// Fallback rendering
		document.body.innerHTML = `
			<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui; text-align: center;">
				<div>
					<h1 style="color: #ef4444; margin-bottom: 16px;">Portfolio Loading Error</h1>
					<p style="color: #6b7280; margin-bottom: 16px;">Unable to load the portfolio. Please refresh the page.</p>
					<button onclick="window.location.reload()" style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Refresh Page</button>
				</div>
			</div>
		`;
	}
};

// Initialize the application
initializeApp();
