# MKU SDA Camp Fundraiser Website

A modern, responsive React application for Mount Kenya University Seventh-day Adventist Church camp fundraising events. Built with React, Vite, Tailwind CSS, and Framer Motion for smooth animations.

## ✨ Features

- **📱 Responsive Design** - Mobile-first approach with beautiful layouts across all devices
- **⏰ Live Countdown Timer** - Real-time countdown to camp end date
- **📊 Real-time Contribution Tracking** - Animated progress bars and donation updates
- **🎥 Live Stream Integration** - YouTube Live embed with status indicators
- **👥 Speaker Showcase** - Responsive grid layout for camp speakers
- **💳 Payment Integration Ready** - Support for M-Pesa, Visa, Mastercard, PayPal
- **🎨 Modern UI/UX** - Gold and blue theme with smooth animations
- **♿ Accessibility** - Semantic HTML and ARIA attributes
- **🔄 Demo Mode** - Simulated real-time donation updates for demonstration

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd mku-sda-camp
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
   - Navigate to `http://localhost:5173`
   - The website should load with sample MKU SDA content

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
mku-sda-camp/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Sticky navigation with smooth scrolling
│   │   ├── Hero.jsx        # Hero section with countdown timer
│   │   ├── ContributionTracker.jsx  # Real-time donation tracking
│   │   ├── Speakers.jsx    # Speaker cards grid
│   │   ├── LivePreview.jsx # YouTube Live embed
│   │   ├── ChairMessage.jsx # Chairperson message section
│   │   ├── Support.jsx     # Donation call-to-action
│   │   └── Footer.jsx      # Contact info and links
│   ├── data.js             # 📝 Main configuration file
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## ⚙️ Configuration

### 📝 Content Configuration (src/data.js)

All content is managed through the `src/data.js` file. Update this file to customize:

- **Event Details**: Name, target date, funding goal
- **Speakers**: Photos, names, roles, bio, social links
- **Contributors**: Current donations and contributor information
- **Contact Info**: Email, phone, address, social media
- **Payment Methods**: Available payment options

#### Key Configuration Examples:

```javascript
// Event settings
eventName: "MKU SDA Camp Fundraiser",
targetDate: new Date('2025-08-20T23:59:59'),
targetAmount: 5000000, // Target in KSh
currency: "KSh",

// Live stream (replace VIDEO_ID)
liveStreamUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
isLive: true, // Set to false when offline

// Demo mode
demoConfig: {
  enableDemoMode: true, // Set to false for production
  demoInterval: 10000,  // 10 seconds between demo donations
}
```

### 🎥 YouTube Live Stream Setup

1. Get your YouTube Live stream ID
2. In `src/data.js`, replace the `liveStreamUrl`:
   ```javascript
   liveStreamUrl: "https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID",
   ```
3. Set `isLive: true` when streaming, `false` when offline

### 💳 Payment Integration

The payment integration is designed to be easily connected to real payment processors:

**M-Pesa Integration Points:**
- `Support.jsx` - Add M-Pesa SDK integration in the donation button handler
- `data.js` - Configure M-Pesa API credentials (use environment variables)

**Other Payment Methods:**
- PayPal: Integrate PayPal SDK in the donation flow
- Stripe: Add Stripe Elements for card payments
- Bank Transfer: Display account details in modal

**Security Note:** Never commit API keys or secrets to the repository. Use environment variables for production.

## 🎨 Customization

### Colors and Branding

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      gold: '#F7C948',        // Primary gold color
      'royal-blue': '#1e40af', // Primary blue color
      'sky-blue': '#0ea5e9',   // Secondary blue
    }
  }
}
```

### Adding New Speakers

Add speaker objects to the `speakers` array in `data.js`:

```javascript
{
  id: 8,
  name: "New Speaker Name",
  role: "Speaker Role",
  bio: "Brief description",
  photo: "https://example.com/photo.jpg",
  social: {
    twitter: "#",
    facebook: "#"
  }
}
```

### Styling Components

All components use Tailwind CSS classes. Key utility classes are defined in `src/index.css`:

- `.btn-primary` - Gold gradient button
- `.btn-secondary` - Blue button
- `.section-padding` - Consistent section spacing
- `.container-custom` - Max-width container
- `.card-hover` - Hover animation effects

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if ESLint is configured)
npm run lint
```

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the setup prompts

### Traditional Web Hosting

1. Run `npm run build`
2. Upload the contents of `dist/` to your web server
3. Ensure your server is configured to serve the `index.html` for all routes

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Responsive Design**: Test on mobile, tablet, and desktop
- [ ] **Countdown Timer**: Verify countdown updates every second
- [ ] **Navigation**: Check smooth scrolling to all sections
- [ ] **Donation Progress**: Verify calculations are correct
- [ ] **Live Stream**: Test YouTube embed responsiveness
- [ ] **Demo Mode**: Enable/disable demo donations
- [ ] **Accessibility**: Test keyboard navigation and screen readers

### Adding Automated Tests

To add unit tests, install a testing framework:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Example test for donation calculation:

```javascript
import { calculateTotalRaised } from './data.js';

test('calculates total raised correctly', () => {
  const contributors = [
    { amount: 100000 },
    { amount: 200000 }
  ];
  expect(calculateTotalRaised(contributors)).toBe(300000);
});
```

## 🔒 Security Best Practices

1. **Environment Variables**: Store API keys in `.env` files
2. **Input Validation**: Validate all user inputs
3. **HTTPS**: Always use HTTPS in production
4. **CSP Headers**: Implement Content Security Policy
5. **Regular Updates**: Keep dependencies updated

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
- Ensure Node.js version 16+ is installed
- Delete `node_modules` and run `npm install` again
- Check for syntax errors in `data.js`

**Styles Not Loading:**
- Verify Tailwind CSS is properly configured
- Check `postcss.config.js` and `tailwind.config.js`
- Ensure `@tailwind` directives are in `index.css`

**Images Not Loading:**
- Verify image URLs in `data.js` are accessible
- For local images, place them in `src/assets/` and import them

### Performance Optimization

- **Images**: Optimize images and use appropriate formats (WebP)
- **Lazy Loading**: Images are already configured for lazy loading
- **Code Splitting**: Consider splitting large components
- **CDN**: Use a CDN for faster content delivery

## 📞 Support

For technical support or questions:

- **Email**: camp@mkusda.ac.ke
- **Phone**: +254 700 123 456

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Submit a pull request

## 📄 License

This project is created for Mount Kenya University SDA Church. All rights reserved.

## 🙏 Acknowledgments

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Unsplash** - Sample images for demonstration

---

**Built with ❤️ for MKU SDA Church Community**
#   m k u s d - C a m p - M e e t i n g - 2 0 2 5  
 