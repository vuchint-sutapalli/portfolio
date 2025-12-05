# 🚀 Modern Portfolio Website

A professional, responsive portfolio website built with React, Tailwind CSS v4, and modern web development practices.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Optimized for speed with lazy loading and code splitting
- **🎯 SEO Optimized**: Meta tags, structured data, and social media integration
- **🌙 Theme Support**: Light/dark theme toggle (ready for future implementation)
- **🔧 Easy to Customize**: JSON-based configuration for easy content updates
- **🛡️ Error Boundaries**: Robust error handling for better user experience
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🏗️ Built With

- **React 19.1.1** - Modern React with hooks and latest features
- **Tailwind CSS v4** - Latest version with new design system
- **Vite 7.1.0** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **React Error Boundary** - Error handling and recovery

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git (for deployment)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   npm install
   ```

2. **Configure your portfolio**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Edit portfolio configuration
   # Update src/config/portfolio.json with your information
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── badge.jsx   # Badge component
│   │   ├── button.jsx  # Button component
│   │   └── card.jsx    # Card component
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact section
│   ├── Experience.jsx  # Experience timeline
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills grid
│   └── ThemeToggle.jsx # Theme switcher
├── config/
│   └── portfolio.json  # Portfolio configuration
├── lib/
│   └── utils.js       # Utility functions
├── App.jsx            # Main app component
└── main.jsx          # App entry point
```

## ⚙️ Configuration

### Personal Information

Edit `src/config/portfolio.json` to customize your portfolio:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "tagline": "Your professional tagline",
    "bio": "Your professional bio...",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "resume": "/path-to-resume.pdf"
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

## 🎨 Component Architecture

### Main App Structure
- **Error Boundaries**: Catches and handles errors gracefully
- **Loading States**: Professional loading animations
- **SEO Integration**: Dynamic meta tags and Open Graph data
- **Smooth Scrolling**: Enhanced user experience

### UI Components
- **Button**: Multiple variants (default, outline, destructive, etc.)
- **Badge**: Technology and skill indicators
- **Card**: Content containers with consistent styling

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: ~246KB (gzipped: ~76KB)
- **First Load**: Sub-second on fast connections
- **Build Time**: ~3-4 seconds

## 🔧 Development Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production (includes sitemap generation)
npm run build:analyze    # Build with bundle analyzer
npm run preview          # Preview production build
npm run preview:network  # Preview with network access
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run clean            # Clean build directory
npm run serve            # Build and serve production version
npm run generate:sitemap # Generate sitemap.xml
```

## 🚀 Production Features

### ⚡ Performance Optimizations
- **Code Splitting**: Automatic vendor and UI library separation
- **Bundle Size**: Optimized chunks with 1000KB warning threshold
- **Asset Optimization**: Images inlined under 4KB, others optimized
- **Tree Shaking**: Dead code elimination
- **Minification**: CSS and JavaScript compression
- **Modern Targets**: ESNext for smaller bundles

### 🔒 Security & SEO
- **Security Headers**: XSS protection, frame options, content type
- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Structured Data**: SEO-optimized markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **PWA Ready**: Web app manifest included

### 🌐 Deployment Ready
- **Multiple Platforms**: Netlify, Vercel, GitHub Pages, Firebase, AWS, Docker
- **CI/CD**: GitHub Actions workflow included
- **Environment Config**: Production environment variables
- **Health Checks**: Docker health monitoring
- **Error Pages**: Custom 404 and error handling

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions including:

- Netlify (recommended for beginners)
- Vercel (great for performance)
- GitHub Pages (free hosting)
- Firebase Hosting
- AWS S3 + CloudFront
- Docker containerization
- Traditional web hosting

## 🐳 Docker Support

```bash
# Build and run with Docker
docker build -t portfolio .
docker run -p 80:80 portfolio

# Or use Docker Compose
docker-compose --profile prod up -d
```

## 📊 Monitoring & Analytics

- **Lighthouse CI**: Automated performance auditing
- **Core Web Vitals**: Performance monitoring ready
- **Error Boundaries**: Graceful error handling
- **Bundle Analysis**: Size optimization insights

---

**Made with ❤️ and modern web technologies**

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
