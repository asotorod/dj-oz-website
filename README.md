# DJ OZ - Ozzie Bembe Productions Website

A professional DJ website for DJ OZ (Ozzie Bembe Productions), featuring a modern, dark-themed design with neon accents.

## Pages

- **Home** (`index.html`) - Main landing page with hero slider, services overview, testimonials
- **About Us** (`about.html`) - About DJ OZ, values, experience, and stats
- **Services** (`services.html`) - Detailed services for weddings, events, and extras with pricing packages
- **Contact Us** (`contact.html`) - Contact form, FAQs, and contact information

## Features

- 🎵 Modern dark theme with neon pink/cyan gradient accents
- 📱 Fully responsive design
- 🎠 Hero image slider with auto-play
- 🎬 **Intro Video Modal** (optional full-page video on first visit)
- 🖱️ Smooth scroll navigation
- 📝 Contact form with event booking fields
- ⚡ CSS animations and hover effects
- 🔗 Instagram integration (@ozziebembeproductions_)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (Bebas Neue, Outfit)
- Font Awesome Icons

## File Structure

```
dj-oz-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   ├── style.css
│   └── intro-video.css
├── js/
│   ├── main.js
│   └── intro-video.js
├── videos/
│   └── (place intro video here)
└── README.md
```

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS

## Setting Up the Intro Video

To enable the intro video modal (like GVC website):

1. Place your video file in the `videos/` folder (e.g., `videos/intro.mp4`)
2. Open `js/intro-video.js` and update the config:
   ```javascript
   const INTRO_VIDEO_CONFIG = {
       enabled: true,
       videoUrl: 'videos/intro.mp4',  // Your video path
       showOnce: true
   };
   ```
3. Add these lines to your HTML files (in the `<head>` section):
   ```html
   <link rel="stylesheet" href="css/intro-video.css">
   ```
4. Add this before the closing `</body>` tag:
   ```html
   <script src="js/intro-video.js"></script>
   ```

## Customization

### Contact Information
Update the following in all HTML files:
- Phone number: `(555) 123-4567`
- Email: `info@djoz.com`
- Social media links

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --neon-pink: #ff00ff;
    --neon-cyan: #00ffff;
    --dark-bg: #0a0a0f;
    /* ... */
}
```

### Images
Replace placeholder images with actual photos:
- Hero slider images
- DJ OZ photo
- Service images

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

© 2024 DJ OZ - Ozzie Bembe Productions. All Rights Reserved.