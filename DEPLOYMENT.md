# 🚀 Portfolio Deployment Guide

This guide covers multiple deployment options for your production-ready portfolio website.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Update `src/config/portfolio.json` with your personal information
- [ ] Replace placeholder images in `/public` directory
- [ ] Update meta tags in `index.html` with your actual information
- [ ] Set up environment variables (see `.env.example`)
- [ ] Test the build locally with `npm run build && npm run preview`
- [ ] Verify all links and contact information are correct
- [ ] Run `npm run lint` to check for any code issues
- [ ] Test on multiple devices and browsers

## 🌐 Deployment Options

### 1. Netlify (Recommended for Beginners)

Netlify offers the easiest deployment with automatic builds from Git.

#### Steps:
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

#### Configuration:
The included `netlify.toml` file handles redirects, headers, and caching.

#### Environment Variables:
Set these in Netlify dashboard > Site settings > Environment variables:
```bash
VITE_SITE_URL=https://your-site.netlify.app
VITE_SITE_NAME="Your Portfolio"
# Add other variables from .env.example as needed
```

#### Custom Domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS with your domain provider

### 2. Vercel (Great for Performance)

Vercel offers excellent performance with global CDN and edge functions.

#### Steps:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

#### Or use the dashboard:
1. Import project from GitHub on [Vercel](https://vercel.com)
2. Build settings are automatically detected

#### Configuration:
The `vercel.json` file includes optimized settings.

### 3. GitHub Pages (Free Option)

Perfect for free hosting directly from your GitHub repository.

#### Steps:
1. Push code to GitHub
2. Enable GitHub Actions in `.github/workflows/deploy.yml`
3. Go to Repository Settings > Pages
4. Set source to "GitHub Actions"

#### For custom domain:
1. Add `CNAME` file in `public/` with your domain
2. Configure DNS with your domain provider

### 4. Firebase Hosting (Google's Platform)

Excellent for PWAs and integration with other Firebase services.

#### Setup:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Deploy:
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront (Enterprise Solution)

For enterprise-level hosting with full AWS integration.

#### Requirements:
- AWS Account
- AWS CLI configured

#### Steps:
1. Create S3 bucket with static website hosting
2. Set up CloudFront distribution
3. Configure Route53 for custom domain (optional)
4. Use AWS CLI or console to upload files

### 6. Docker Deployment

For containerized deployments on any platform.

#### Build and Run:
```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

#### Using Docker Compose:
```bash
# Development
docker-compose --profile dev up

# Production
docker-compose --profile prod up -d
```

### 7. Traditional Web Hosting (cPanel/FTP)

For shared hosting providers.

#### Steps:
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server's public directory
3. Ensure your server supports SPA routing (most modern hosts do)

## 🔧 Environment Configuration

### Production Environment Variables

Create appropriate environment files for each deployment:

```bash
# .env.production
VITE_SITE_URL=https://yourportfolio.com
VITE_SITE_NAME="Your Portfolio"
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

### Build Optimizations

The project includes several build optimizations:

- **Code Splitting**: Automatic vendor chunk separation
- **Asset Optimization**: Images and fonts are optimized
- **Tree Shaking**: Unused code is removed
- **Minification**: CSS and JS are minified
- **Compression**: Gzip compression enabled

## 📊 Performance Monitoring

### Lighthouse CI

GitHub Actions automatically runs Lighthouse audits. To set up:

1. Install Lighthouse CI: `npm install -g @lhci/cli`
2. Configure in `lighthouserc.js`
3. Add `LHCI_GITHUB_APP_TOKEN` to your repository secrets

### Web Vitals

Monitor Core Web Vitals using:
- Google PageSpeed Insights
- Google Search Console
- Web.dev Measure tool

## 🔒 Security Headers

All deployment configurations include security headers:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Content Security Policy (CSP)

## 📈 SEO Optimization

### Sitemap Generation

Automatically generates sitemap.xml on build:
```bash
npm run generate:sitemap
```

### Meta Tags

Update these in `index.html` before deployment:
- Title tags
- Description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## 🚨 Troubleshooting

### Common Issues:

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Routing Issues (404 on refresh)
Ensure your hosting platform supports SPA routing or configure redirects.

#### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Check variable names match exactly
- Restart development server after changes

#### Performance Issues
```bash
# Analyze bundle size
npm run build:analyze

# Check for large dependencies
npx bundle-analyzer dist/stats.json
```

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your configuration matches the examples
3. Test locally with `npm run build && npm run preview`
4. Check browser developer tools for errors
5. Review hosting platform documentation

## 🎯 Next Steps After Deployment

1. **Monitor Performance**: Set up analytics and monitoring
2. **SEO**: Submit sitemap to search engines
3. **Security**: Enable HTTPS and security headers
4. **Backup**: Set up automated backups
5. **Updates**: Plan for regular content and dependency updates

---

**Remember**: Always test your deployment thoroughly before announcing it to the world! 🌟
