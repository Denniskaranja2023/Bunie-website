# Bunie Creatives - Photography Portfolio

A modern full-stack photography portfolio website for Bunie Creatives, featuring a React frontend and Node.js backend with email contact form functionality.

## Features

- **Responsive Design**: Optimized for all devices
- **Interactive Gallery**: Lightbox functionality with keyboard navigation
- **Smooth Scrolling**: Enhanced user experience with parallax effects
- **Contact Form**: Professional contact form with email backend
- **Modern React Architecture**: Component-based structure with hooks
- **Node.js Backend**: Express API for contact form submissions

## Services Showcased

- Wedding Photography
- Corporate Event Photography
- Professional Headshots
- Live Recording Coverage
- Personal Shoots & Special Events

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install all dependencies:
   ```bash
   npm run install-all
   ```

3. Configure environment variables:
   - Navigate to `Backend/.env`
   - Add your Gmail app password to `EMAIL_PASS`

4. Start both frontend and backend:
   ```bash
   npm run dev
   ```

   Or run them separately:
   ```bash
   # Backend (port 5000)
   npm run backend
   
   # Frontend (port 5173)
   npm run frontend
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the frontend.

### Building for Production

```bash
npm run build
```

## Project Structure

```
Frontend/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── data/               # Static data
│   ├── assets/             # Static assets
│   └── styles/             # CSS styles
├── public/                 # Public assets
└── package.json           # Frontend dependencies

Backend/
├── server.js              # Express server with API endpoints
├── package.json           # Backend dependencies
└── .env                   # Environment variables
```

## API Endpoints

- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, message, service }`

## Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Custom styling with responsive design
- **JavaScript ES6+**: Modern JavaScript features

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Nodemailer**: Email sending
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Contact

For inquiries about photography services:
- Email: buniecompany@gmail.com
- Facebook: [Bunie Creatives](https://web.facebook.com/bunie.creatives)
- Instagram: [@bunie_creatives](https://www.instagram.com/bunie_creatives)

---

© 2025 Bunie Creatives. Great memories are worth keeping.