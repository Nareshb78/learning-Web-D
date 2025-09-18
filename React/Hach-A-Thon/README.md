# Jharkhand Tourism Platform

An AI-powered digital tourism platform for Jharkhand that offers personalized itinerary planning, multilingual chatbot assistance, blockchain-enabled secure transactions, interactive maps with AR/VR previews, and a local marketplace for tribal handicrafts and services.

## Features

### 🎯 Core Features
- **AI-Powered Itinerary Planning**: Personalized trip planning using OpenAI GPT
- **Multilingual Chatbot**: Support for English, Hindi, Bengali, and Odia
- **Interactive Maps**: Real-time location services with Leaflet integration
- **AR/VR Previews**: 360-degree previews of tourist destinations
- **Local Marketplace**: Platform for tribal handicrafts and local services
- **Blockchain Integration**: Secure transactions and service verification
- **Analytics Dashboard**: Comprehensive tourism analytics for officials

### 🏗️ Technical Stack

#### Frontend
- **React 18** with modern hooks and context API
- **React Router** for navigation
- **React Query** for data fetching and caching
- **Styled Components** for styling
- **Framer Motion** for animations
- **Leaflet** for interactive maps
- **Three.js** and **A-Frame** for AR/VR experiences
- **Recharts** for analytics visualization

#### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time communication
- **JWT** for authentication
- **OpenAI API** for AI features
- **Cloudinary** for image management
- **Stripe** for payments
- **Ethers.js** for blockchain integration

### 🚀 Getting Started

#### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- OpenAI API key
- Cloudinary account
- Stripe account (for payments)

#### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jharkhand-tourism-platform
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp server/env.example server/.env
   
   # Edit server/.env with your configuration
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on http://localhost:5000
   - Frontend development server on http://localhost:3000

### 📁 Project Structure

```
jharkhand-tourism-platform/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── utils/          # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/            # Configuration files
│   ├── middleware/        # Express middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── package.json
└── package.json          # Root package.json
```

### 🔧 API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

#### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:id` - Get destination details
- `POST /api/destinations/:id/reviews` - Add review

#### Itineraries
- `POST /api/itineraries/generate` - Generate AI itinerary
- `GET /api/itineraries` - Get user itineraries
- `GET /api/itineraries/:id` - Get itinerary details
- `PUT /api/itineraries/:id` - Update itinerary

#### Marketplace
- `GET /api/marketplace/products` - Get products
- `GET /api/marketplace/services` - Get services
- `POST /api/marketplace/products` - Create product
- `POST /api/marketplace/services` - Create service

#### Chatbot
- `POST /api/chatbot/chat` - Chat with AI assistant
- `GET /api/chatbot/quick-responses` - Get quick responses
- `POST /api/chatbot/translate` - Translate text

#### Analytics
- `GET /api/analytics/dashboard` - Get dashboard data
- `GET /api/analytics/engagement` - Get engagement metrics
- `GET /api/analytics/sentiment` - Get sentiment analysis

### 🎨 Key Components

#### Frontend Components
- **Navbar**: Navigation with user authentication
- **Chatbot**: AI-powered travel assistant
- **ItineraryPlanner**: AI trip planning interface
- **DestinationCard**: Destination display component
- **MarketplaceGrid**: Product/service listing
- **AnalyticsDashboard**: Tourism analytics visualization

#### Backend Models
- **User**: User accounts and profiles
- **Destination**: Tourist destinations
- **Itinerary**: Trip plans and schedules
- **Product**: Marketplace products
- **Service**: Local services

### 🔐 Authentication & Security

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting for API endpoints
- CORS configuration
- Input validation with Joi
- Helmet for security headers

### 🌐 Internationalization

The platform supports multiple languages:
- English (en)
- Hindi (hi)
- Bengali (bn)
- Odia (or)

### 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interfaces
- Progressive Web App features

### 🚀 Deployment

#### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the build folder
```

#### Backend (Heroku/Railway)
```bash
cd server
# Configure environment variables
# Deploy to your preferred platform
```

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### 📄 License

This project is licensed under the MIT License.

### 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

### 🎯 Future Enhancements

- Mobile app development
- Advanced AR/VR features
- Machine learning recommendations
- Social features and reviews
- Integration with local transport
- Real-time weather updates
- Offline functionality

---

**Built with ❤️ for Jharkhand Tourism**
