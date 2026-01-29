# Personal Website

A modern, responsive personal website built with React, showcasing projects, skills, and contact information through an elegant modal-based interface.

## Features

- 🎨 **Modern Design**: Sophisticated editorial-inspired aesthetic with bold typography
- 🚀 **React Best Practices**: Component-based architecture with proper separation of concerns
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🎭 **Modal Navigation**: Smooth modal transitions for About, Projects, and Contact sections
- 📄 **Resume Download**: One-click resume download feature in the navbar
- ⚡ **Performance**: Optimized with Vite for fast build times and hot module replacement
- 🎯 **Clean Code**: Well-organized file structure for easy maintenance

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing

## Project Structure

```
Personal-website/
├── public/
│   └── Richard_Bustamante_Resume.pdf      
│   └── tcnj-library.jpg    
├── src/
│   ├── components/
│   │   ├── modals/
│   │   │   ├── AboutModal.jsx
│   │   │   ├── ContactModal.jsx
│   │   │   └── ProjectsModal.jsx
│   │   ├── Hero.jsx
│   │   ├── Modal.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── projects.js     # Project data
│   ├── styles/
│   │   └── globals.css     # Custom styles and animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RichBustamante/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Customization

### My Information

1. **Personal Details** (`src/components/modals/AboutModal.jsx`):
   - Contains name, bio, skills, and philosophy

2. **Projects** (`src/data/projects.js`):
   - My projects with title, description, tech stack, and URLs

3. **Contact Information** (`src/components/modals/ContactModal.jsx`):
   - My email, GitHub, and LinkedIn links

4. **Hero Section** (`src/components/Hero.jsx`):
   - Custom the headline and tagline

### Styling

- **Colors**: Modify the gradient colors in `tailwind.config.js` or component files
- **Typography**: Change fonts in `src/styles/globals.css`
- **Animations**: Adjust timing and effects in `src/styles/globals.css`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment

You can deploy this website to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages (Where we are deploying)
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## Resume Download Feature

The resume download button in the navbar:
- Looks for `Richard_Bustamante_Resume.pdf` in the `public/` folder
- Downloads the file when clicked
- Can be customized in `src/components/Navbar.jsx`


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own Personal!

## Author

Richard Bustamante - [GitHub](https://github.com/RichBustamante) - [LinkedIn](www.linkedin.com/in/richard-bustamante-50b687153)

## Acknowledgments

- Design inspiration from modern editorial layouts
- Icons by [Lucide](https://lucide.dev/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)