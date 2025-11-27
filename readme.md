# 🌍 CarbonEase

> **AI-Powered Carbon Credit Trading Platform**  
> Connecting buyers and sellers in the global carbon market with transparency, security, and intelligent insights.

[![Live Platform](https://img.shields.io/badge/Live-Platform-success?style=for-the-badge)](https://carbonease.vercel.app)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)
[![AI Powered](https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [AI/ML Integration](#-aiml-integration)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**CarbonEase** is a comprehensive full-stack MERN platform designed to revolutionize the carbon credit trading market. By leveraging cutting-edge AI technology and modern web development practices, we create a transparent, secure, and efficient marketplace for carbon credit transactions.

### 🎯 Mission

To combat climate change by making carbon credit trading accessible, transparent, and intelligent for businesses and individuals worldwide.

### 🔗 Live Platform

**Experience CarbonEase:** [https://carbonease.vercel.app](https://carbonease.vercel.app)

---

## 💡 Problem Statement

The current carbon credit market faces several critical challenges:

- **Lack of Transparency**: Difficulty verifying authenticity of carbon credits
- **Complex Processes**: Complicated verification and transaction workflows
- **Information Asymmetry**: Buyers and sellers lack market intelligence
- **Inefficient Matching**: Difficulty connecting suitable projects with buyers
- **Limited Support**: Absence of intelligent decision-making assistance
- **Fraud Risks**: Insufficient automated fraud detection mechanisms

**CarbonEase solves these problems** by providing an integrated platform with AI-powered insights, real-time analytics, and automated verification processes.

---

## ✨ Key Features

### 🔐 Authentication & Security
- **JWT-based Authentication** with secure token management
- **OTP Email Verification** using Nodemailer
- **Argon2 Password Hashing** for maximum security
- **Role-Based Access Control** (Buyers, Sellers, Admins)
- **Rate Limiting** to prevent API abuse
- **Input Validation** using Joi schemas

### 🛒 Marketplace
- **Advanced Filtering** by project type, location, certification, price
- **Real-time Inventory Management**
- **Multiple Project Types**: Reforestation, Renewable Energy, Waste Management, Agriculture, Blue Carbon
- **Certification Standards**: VCS, Gold Standard, CDM
- **Semantic Search** with multi-criteria support
- **Interactive Project Details** with verification documents

### 💳 Transaction Management
- **Secure Purchase Workflow** with escrow-like protection
- **Transaction History Tracking**
- **Automated Receipt Generation** (PDF export)
- **Payment Status Monitoring** (Pending, Completed, Failed, Refunded)
- **Export Functionality** for compliance reporting
- **Detailed Transaction Ledger**

### 🤖 AI-Powered Chatbot (Google Gemini)
- **Real-time Platform Context** integration
- **Domain-Specific Knowledge** restriction to carbon credits
- **Dynamic Data Fetching** (listings, statistics, prices)
- **Personalized Recommendations**
- **Natural Language Understanding**
- **24/7 Automated Support**

### 📊 Analytics Dashboards

#### Seller Analytics
- Total revenue tracking
- Credits sold metrics
- Monthly revenue trends (6-month view)
- Top buyers identification
- Active listings count
- Recent transaction history

#### Buyer Analytics
- Total spending analysis
- Credits purchased tracking
- Monthly spending trends
- Credits distribution by project type
- Carbon offset calculation (tons CO₂)
- Purchase history with filters

#### Market Trends (Public)
- Average price trends over time
- Popular project types ranking
- Top locations by listing count
- Total platform credits available
- Trading volume analysis

### 👨‍💼 Admin Panel
- **User Management**: View, activate/deactivate users
- **Role Management**: Update user roles
- **Platform Statistics Dashboard**
- **Transaction Monitoring**
- **Listing Moderation** and deletion
- **Search & Pagination** across all entities

### 🎨 UI/UX Excellence
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Dark/Light Theme Toggle** with system preference detection
- **Animated Components** (Marquee, Shimmer, Number Ticker)
- **Interactive Globe Visualization** showing global reach
- **Toast Notifications** for user feedback
- **Accessible Components** (ARIA compliant)
- **Modern ShadCN UI** component library

---

## 🛠 Tech Stack

### Frontend
```
├── React 19.0.0          # Component-based architecture
├── ShadCN UI             # Accessible component library
├── Tailwind CSS 3.4.17   # Utility-first styling
├── Motion 12.4.1         # Advanced animations
├── React Router 7.1.5    # Client-side routing
├── Recharts 2.15.1       # Data visualization
├── Axios 1.7.9           # HTTP client
└── Vite 6.1.0            # Build tool
```

### Backend
```
├── Node.js & Express 4.21.2    # RESTful API server
├── MongoDB 8.10.0              # NoSQL database
├── Mongoose                    # ODM for MongoDB
├── JSON Web Tokens 9.0.2       # Authentication
├── Argon2 0.41.1               # Password hashing
├── Nodemailer 6.10.0           # Email service
├── Winston 3.17.0              # Logging framework
├── Joi 17.13.3                 # Schema validation
└── Google Gemini AI            # AI chatbot
```

### Security & DevOps
- **CORS** configured for cross-origin requests
- **Rate Limiting** middleware
- **Input Validation** on all endpoints
- **Winston Logger** for error tracking
- **Morgan** for HTTP request logging
- **Environment Variables** for sensitive data

---

## 🏗 Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (React)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Landing   │  │Auth      │  │Marketplace│  │Analytics │   │
│  │Page      │  │Pages     │  │Pages      │  │Dashboards│   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   API Layer (Express)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Auth      │  │Listing   │  │Transaction│  │Analytics │   │
│  │Routes    │  │Routes    │  │Routes     │  │Routes    │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                Database Layer (MongoDB)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │Users     │  │Listings  │  │Transactions                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              External Services                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │Google    │  │Nodemailer│  │Payment   │                  │
│  │Gemini AI │  │(Email)   │  │Gateway   │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

### Database Schema

#### User Model
```javascript
{
  email: String (unique, indexed),
  password: String (hashed with Argon2),
  name: String,
  company: String,
  phone: String,
  role: Enum ["user", "admin"],
  totalCreditsPurchased: Number,
  totalSpending: Number,
  postedListings: [ObjectId],
  seenListings: [ObjectId],
  transactions: [ObjectId],
  isVerified: Boolean,
  isActive: Boolean,
  createdAt: Date,
  lastLogin: Date
}
```

#### Listing Model
```javascript
{
  title: String,
  description: String,
  seller: ObjectId (ref: User),
  quantity: Number,
  pricePerCredit: Number,
  totalPrice: Number (calculated),
  location: String,
  projectType: Enum [
    "Reforestation",
    "Renewable Energy", 
    "Waste Management",
    "Agriculture",
    "Blue Carbon",
    "Others"
  ],
  verification: {
    verifiedBy: Enum ["VCS", "Gold Standard", "CDM", "Others"],
    certificateUrl: String
  },
  status: Enum ["Available", "Sold", "Pending"],
  createdAt: Date,
  updatedAt: Date
}
```

#### Transaction Model
```javascript
{
  listing: ObjectId (ref: Listing),
  buyer: ObjectId (ref: User),
  seller: ObjectId (ref: User),
  quantity: Number,
  pricePerCredit: Number,
  totalAmount: Number,
  paymentStatus: Enum ["pending", "completed", "failed", "refunded"],
  paymentMethod: String,
  transactionHash: String,
  purchaseDate: Date
}
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**
- **MongoDB** instance (local or cloud)
- **Google Gemini API Key**
- **Email Service** credentials (Gmail recommended)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/rao-mukul/carbon-ease.git
cd carbon-ease
```

#### 2. Setup Backend

```bash
cd server
npm install
```

Create `.env` file in `server/` directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/carbonease
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/carbonease

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
JWT_EXPIRES_IN=7d

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Frontend URL
CLIENT_URL=http://localhost:5173
```

#### 3. Setup Frontend

```bash
cd ../client
npm install
```

Create `.env` file in `client/` directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

#### 4. Seed Database (Optional)

```bash
cd ../server
npm run seed
```

This will populate the database with sample listings and test users.

#### 5. Run the Application

**Backend** (Terminal 1):
```bash
cd server
npm run dev
```

**Frontend** (Terminal 2):
```bash
cd client
npm run dev
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 📁 Project Structure

```
CarbonEaseNew/
│
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images, icons
│   │   ├── components/
│   │   │   ├── animations/          # Animated components
│   │   │   ├── common/              # Reusable components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── GeminiChatbot.jsx
│   │   │   │   └── ThemeToggle.jsx
│   │   │   ├── layout/              # Route guards
│   │   │   │   ├── ProtectedRoute.jsx
│   │   │   │   ├── PublicRoute.jsx
│   │   │   │   └── RoleBasedRoute.jsx
│   │   │   ├── magicui/             # Special UI components
│   │   │   └── ui/                  # ShadCN components
│   │   ├── constants/               # API endpoints, constants
│   │   ├── context/                 # React Context (AuthContext)
│   │   ├── features/
│   │   │   ├── admin/               # Admin dashboard
│   │   │   ├── auth/                # Authentication pages
│   │   │   ├── buyer/               # Buyer features
│   │   │   ├── landing/             # Landing page sections
│   │   │   ├── seller/              # Seller features
│   │   │   └── shared/              # Shared features
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── lib/                     # Utilities (API client, utils)
│   │   ├── services/                # API service layer
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Backend Node.js application
│   ├── src/
│   │   ├── config/                  # Configuration files
│   │   │   └── index.js
│   │   ├── controllers/             # Route controllers
│   │   │   ├── adminController.js
│   │   │   ├── analyticsController.js
│   │   │   ├── authController.js
│   │   │   ├── chatbotController.js
│   │   │   └── listingController.js
│   │   ├── db/                      # Database connection
│   │   │   └── index.js
│   │   ├── middlewares/             # Express middlewares
│   │   │   ├── adminMiddleware.js
│   │   │   ├── authMiddleware.js
│   │   │   ├── rateLimitMiddleware.js
│   │   │   └── validateMiddleware.js
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── Listing.js
│   │   │   ├── otpModel.js
│   │   │   ├── transactionsModel.js
│   │   │   └── userModel.js
│   │   ├── routes/                  # API routes
│   │   │   ├── adminRoute.js
│   │   │   ├── analyticsRoute.js
│   │   │   ├── authRoute.js
│   │   │   ├── chatbotRoute.js
│   │   │   └── listingRoute.js
│   │   ├── scripts/                 # Utility scripts
│   │   │   └── seedData.js
│   │   ├── utils/                   # Helper functions
│   │   │   ├── emailNotifications.js
│   │   │   ├── logger.js
│   │   │   ├── mailer.js
│   │   │   └── receiptGenerator.js
│   │   └── validators/              # Joi schemas
│   │       ├── authValidator.js
│   │       └── listingValidator.js
│   ├── index.js                     # Server entry point
│   └── package.json
│
├── MID_TERM_REPORT_UPDATED.txt     # Project documentation
└── README.md                        # This file
```

---

## 🤖 AI/ML Integration

### Current Implementation: Google Gemini Chatbot

**Technology:** Google Gemini 2.5 Flash model

**Features:**
- **Context-Aware Responses**: Fetches real-time platform data (statistics, listings, prices)
- **Domain Restriction**: Limited to carbon credits and sustainability topics
- **Dynamic Data Integration**: Aggregates MongoDB data for intelligent responses
- **Personalized Recommendations**: Suggests listings based on user preferences
- **Natural Language Understanding**: Handles complex queries about the carbon market

**Architecture:**
```
User Query → Frontend Chatbot Component
     ↓
Backend API (/api/chatbot/context)
     ↓
MongoDB Aggregation (Stats, Listings, Prices)
     ↓
Google Gemini API (Prompt + Context)
     ↓
AI Response → User Interface
```

### Future AI/ML Roadmap

#### 🔮 Planned Enhancements

1. **Price Prediction System**
   - LSTM neural networks for time-series forecasting
   - Predict future carbon credit prices
   - Market trend analysis

2. **Smart Recommendation Engine**
   - Collaborative filtering for personalized suggestions
   - Content-based filtering using project attributes
   - Hybrid recommendation system

3. **Fraud Detection**
   - Anomaly detection using Isolation Forest
   - Pattern recognition for suspicious transactions
   - Seller reputation scoring

4. **NLP-Powered Search**
   - BERT embeddings for semantic search
   - Multi-language support
   - Intent classification

5. **Carbon Footprint Calculator**
   - ML-based emission estimation
   - Industry-specific models
   - Reduction recommendations

6. **Sentiment Analysis**
   - Market sentiment from news and social media
   - Policy change alerts
   - Market mood indicators

7. **Computer Vision Verification**
   - Satellite imagery analysis for reforestation projects
   - Automated project verification
   - Progress monitoring

8. **Blockchain Integration**
   - NFT-based carbon credits
   - Smart contract automation
   - Immutable transaction ledger

**See [MID_TERM_REPORT_UPDATED.txt](./MID_TERM_REPORT_UPDATED.txt) for detailed AI/ML implementation plans.**

---

## 📡 API Documentation

### Base URL
```
Production: https://carbonease.vercel.app/api
Development: http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "company": "Green Corp",
  "phone": "+1234567890"
}
```

#### Verify OTP
```http
POST /api/auth/verify-otp
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}
```

### Listing Endpoints

#### Get All Listings
```http
GET /api/listings?projectType=Reforestation&location=India&minPrice=10&maxPrice=50
Authorization: Bearer <token>
```

#### Create Listing
```http
POST /api/listings
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Solar Farm Carbon Credits",
  "description": "Verified credits from 100MW solar installation",
  "quantity": 1000,
  "pricePerCredit": 25,
  "location": "Rajasthan, India",
  "projectType": "Renewable Energy",
  "verification": {
    "verifiedBy": "Gold Standard",
    "certificateUrl": "https://..."
  }
}
```

#### Update Listing
```http
PUT /api/listings/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 800,
  "pricePerCredit": 22
}
```

#### Delete Listing
```http
DELETE /api/listings/:id
Authorization: Bearer <token>
```

### Transaction Endpoints

#### Create Transaction
```http
POST /api/transactions
Authorization: Bearer <token>
Content-Type: application/json

{
  "listingId": "60d5ec49f1b2c8b45c8e4a23",
  "quantity": 50,
  "paymentMethod": "Credit Card"
}
```

#### Get User Transactions
```http
GET /api/transactions/my-transactions
Authorization: Bearer <token>
```

### Analytics Endpoints

#### Get Market Trends
```http
GET /api/analytics/market-trends
```

#### Get Seller Analytics
```http
GET /api/analytics/seller
Authorization: Bearer <token>
```

#### Get Buyer Analytics
```http
GET /api/analytics/buyer
Authorization: Bearer <token>
```

### Chatbot Endpoints

#### Get Platform Context
```http
GET /api/chatbot/context
```

### Admin Endpoints

#### Get All Users
```http
GET /api/admin/users?page=1&limit=10
Authorization: Bearer <admin-token>
```

#### Toggle User Status
```http
PATCH /api/admin/users/:id/toggle-status
Authorization: Bearer <admin-token>
```

---

## 📸 Screenshots

### 🌐 Landing Page
Beautiful interactive globe visualization with climate change facts and platform features.

### 🛍 Marketplace
Advanced filtering, search, and sorting capabilities for finding the perfect carbon credits.

### 📊 Analytics Dashboard
Comprehensive charts showing revenue, spending, market trends, and carbon offset impact.

### 💬 AI Chatbot
Intelligent assistant providing real-time information and personalized recommendations.

### 👤 User Profile
Manage account details, view transaction history, and track your environmental impact.

### 🔐 Admin Panel
Complete platform management with user moderation, listing approval, and system statistics.

---

## 🗺 Future Roadmap

### Phase 2 (Next 2-3 Months)
- [ ] Price prediction system using LSTM
- [ ] Smart recommendation engine
- [ ] Enhanced chatbot with RAG (Retrieval-Augmented Generation)
- [ ] NLP-powered semantic search
- [ ] Interactive carbon footprint calculator

### Phase 3 (3-6 Months)
- [ ] Fraud detection using ML
- [ ] Computer vision for project verification
- [ ] Dynamic pricing optimization
- [ ] Sentiment analysis for market insights
- [ ] Blockchain integration for immutable records

### Phase 4 (6-12 Months)
- [ ] Predictive analytics dashboard
- [ ] AI-powered document processing
- [ ] Mobile applications (iOS & Android)
- [ ] Advanced compliance and reporting tools
- [ ] Integration with international carbon registries

### Long-term Vision
- [ ] Global carbon marketplace with multi-currency support
- [ ] IoT integration for real-time project monitoring
- [ ] API marketplace for third-party integrations
- [ ] Carbon credit derivatives trading
- [ ] B2B enterprise solutions

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**: Open an issue describing the bug
2. **Suggest Features**: Share your ideas for new features
3. **Submit Pull Requests**: Contribute code improvements
4. **Improve Documentation**: Help us make docs better
5. **Spread the Word**: Star the repo and share with others

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration for JavaScript/React
- Use meaningful variable and function names
- Write comments for complex logic
- Maintain consistent formatting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Department of Computer Science & Engineering**  
B.Tech VII Semester  
Academic Year: 2025-26

---

## 🙏 Acknowledgments

- **Google Gemini** for AI chatbot capabilities
- **ShadCN UI** for beautiful, accessible components
- **MongoDB** for flexible database solutions
- **Vercel** for seamless deployment
- **Carbon Registries** (Verra, Gold Standard, CDM) for certification standards
- **Open Source Community** for amazing libraries and tools

---

## 📞 Contact & Support

- **Live Platform**: [https://carbonease.vercel.app](https://carbonease.vercel.app)
- **Repository**: [https://github.com/rao-mukul/carbon-ease](https://github.com/rao-mukul/carbon-ease)
- **Issues**: [GitHub Issues](https://github.com/rao-mukul/carbon-ease/issues)

---

## 🌱 Impact

> *"Every carbon credit traded on CarbonEase represents a tangible step towards a sustainable future."*

Join us in the fight against climate change. **Trade credits. Save the planet.** 🌍💚

---

<div align="center">

**Made with ❤️ for a sustainable future**

[![GitHub stars](https://img.shields.io/github/stars/rao-mukul/carbon-ease?style=social)](https://github.com/rao-mukul/carbon-ease/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rao-mukul/carbon-ease?style=social)](https://github.com/rao-mukul/carbon-ease/network/members)

</div>
