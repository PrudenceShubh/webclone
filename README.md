# Uniodessy - High-Converting Website Agency

![Uniodessy Logo](public/webphotos/logo-full.webp)

A modern, responsive website for Uniodessy - a web development agency that builds high-converting websites to turn visitors into paying customers.

## 🚀 Live Demo

Visit the live website: [uniodessy.com](https://uniodessy.com)

## ✨ Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Mobile Swipe Functionality** - Touch-friendly case study gallery
- **Email Integration** - Direct contact through email links
- **Smooth Scrolling** - Enhanced navigation experience
- **Modern UI/UX** - Clean, professional design with animations
- **Fast Performance** - Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Icons**: Radix UI Icons
- **Animations**: React Fast Marquee
- **Routing**: React Router DOM 7.6.2
- **Deployment**: Netlify

## 📁 Project Structure

```
website/
├── public/
│   ├── webphotos/          # Company logos and case study images
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx        # Landing section
│   │   ├── Navebar.jsx     # Navigation bar
│   │   ├── contactus.jsx   # Contact section
│   │   ├── caseStudy.jsx   # Case studies with swipe
│   │   ├── comopany.jsx    # Trusted companies marquee
│   │   ├── footer.jsx      # Footer section
│   │   ├── prising.jsx     # Pricing section
│   │   ├── benifits/       # Benefits section
│   │   └── testimonials/   # Customer testimonials
│   ├── Page/
│   │   └── MainPage.jsx    # Main page layout
│   ├── assets/
│   │   └── company.js      # Company list data
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── netlify.toml           # Netlify deployment config
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/uniodessy-website.git
   cd uniodessy-website/website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Mobile Features

### Swipe Functionality
- **Case Study Gallery**: Touch-enabled horizontal scrolling
- **Snap Points**: Smooth image-to-image transitions
- **Hidden Scrollbars**: Clean, native-like experience

### Responsive Design
- **Mobile-first approach** with Tailwind CSS
- **Adaptive layouts** for all screen sizes
- **Touch-friendly buttons** and interactions

## 📧 Contact Integration

The website includes direct email integration:
- **Email**: shubham.work.holder@gmail.com
- **Pre-filled templates** for professional inquiries
- **Multiple CTA buttons** throughout the site

## 🎨 Design System

### Colors
- **Primary Green**: `#53d364`
- **Background**: `#000000` (Black)
- **Text**: `rgba(255, 255, 255, 0.87)` (White with transparency)
- **Accent**: `#0d0d0d` (Dark gray)

### Typography
- **Font Family**: System UI, Avenir, Helvetica, Arial
- **Responsive Text**: Scales from mobile to desktop
- **Font Weights**: Light, Regular, Semibold, Bold

## 🚀 Deployment

### Netlify Deployment

The project is configured for Netlify deployment:

1. **Connect your GitHub repository** to Netlify
2. **Build settings** are configured in `netlify.toml`
3. **Automatic deployments** on git push

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📊 Performance

- **Fast Loading**: Optimized with Vite
- **Image Optimization**: WebP format for faster loading
- **Code Splitting**: Automatic with React and Vite
- **SEO Ready**: Proper meta tags and structure

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/Page/MainPage.jsx`
3. Add navigation link in `Navebar.jsx` if needed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contact

**Shubham Kumar**
- Email: shubham.work.holder@gmail.com
- Website: [uniodessy.com](https://uniodessy.com)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **Netlify** for seamless deployment

---

**Built with ❤️ by Uniodessy Team**
