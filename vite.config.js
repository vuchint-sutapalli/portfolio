import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	
	// Production optimizations
	build: {
		// Enable minification
		minify: 'esbuild',
		
		// Don't generate source maps for production (smaller bundle)
		sourcemap: false,
		
		// Optimize chunk splitting
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					icons: ['lucide-react'],
					ui: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge']
				},
			},
		},
		
		// Reduce bundle size warning threshold
		chunkSizeWarningLimit: 1000,
		
		// Target modern browsers
		target: 'esnext',
		
		// Inline small assets
		assetsInlineLimit: 4096,
	},
	
	// Performance optimizations
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'lucide-react',
			'@radix-ui/react-slot',
			'class-variance-authority',
			'clsx',
			'tailwind-merge',
			'react-error-boundary'
		],
	},
	
	// Preview server config
	preview: {
		port: 4173,
		host: true,
	},
	
	// Development server config
	server: {
		port: 3000,
		host: true,
		open: true,
	},
});
