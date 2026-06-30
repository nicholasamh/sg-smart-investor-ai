# SG Smart Investor AI

A production-ready Progressive Web App (PWA) for monitoring Singapore (SGX) shares with AI-powered investment recommendations.

## 🎯 Features

### Dashboard
- **Portfolio Overview**: Real-time portfolio value, P&L, and allocation
- **Market Data**: STI Index, top gainers/losers, most active stocks
- **AI Recommendations**: Smart buy opportunities with confidence scores
- **News Feed**: Latest financial news with sentiment analysis
- **Market Metrics**: Fear & Greed meter, market heatmap
- **Dividends & Earnings**: Upcoming dividend and earnings calendar

### Smart Features
- ⭐ Customizable watchlist
- 📊 Interactive technical charts (RSI, MACD, EMA, Volume)
- 🤖 AI Chat assistant
- 🔔 Push notifications
- 📈 Stock screener with advanced filters
- 💰 Portfolio tracking and performance analysis
- 📋 Dividend tracker with annual yield calculation
- 🎨 Dark mode and Apple-inspired UI

### AI Analysis Engine
- **Technical Analysis**: RSI, MACD, EMA, Bollinger Bands, Golden Cross, Death Cross
- **Fundamental Analysis**: Revenue, EPS, ROE, Debt Ratio, Cash Flow, PE, PB
- **Sentiment Analysis**: Company announcements, news, social media, SGX filings
- **Buy Score**: 0-100 scale with confidence ratings and detailed explanations

## 📋 Tech Stack

### Frontend
- **Next.js 14+** - React framework with SSR/SSG
- **React 18+** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **PWA Support** - Works offline, installable
- **Apple HIG** - iOS-inspired design

### Backend
- **Node.js 18+** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Primary database
- **Prisma ORM** - Database toolkit
- **Redis** - Caching and queue

### Authentication
- **Google OAuth 2.0**
- **Apple Sign-In**
- **Email/Password with JWT**

### Deployment
- **Vercel** - Frontend hosting
- **Railway/Supabase** - Backend & database
- **Docker** - Containerization
- **GitHub Actions** - CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/nicholasamh/sg-smart-investor-ai.git
cd sg-smart-investor-ai

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Setup database
npx prisma migrate dev
npx prisma db seed

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 PWA Installation

### iPhone Safari
1. Open the app in Safari
2. Tap Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap Add

### Android Chrome
1. Open the app in Chrome
2. Tap menu (⋮)
3. Tap "Install app"
4. Tap Install

## 🏗️ Project Structure

```
sg-smart-investor-ai/
├── apps/
│   ├── frontend/           # Next.js frontend
│   └── backend/            # Express.js backend
├── packages/
│   ├── database/           # Prisma schema
│   ├── api-client/         # Shared API client
│   └── types/              # Shared TypeScript types
├── docker/                 # Docker configurations
├── docs/                   # Documentation
├── tests/                  # Test files
└── scripts/                # Utility scripts
```

## 🔧 Development

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## 📦 Building for Production

```bash
# Build frontend
cd apps/frontend && npm run build

# Build backend
cd apps/backend && npm run build

# Create Docker image
docker build -t sg-smart-investor-ai:latest .
```

## 🌐 Deployment

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment instructions.

## 📚 API Documentation

API docs available at `/api/docs` when running the backend.

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For issues and questions, please open a GitHub issue.

## ⚠️ Disclaimer

This application provides market analysis and investment recommendations for informational purposes only. It is not financial advice. Always consult with a qualified financial advisor before making investment decisions. Past performance does not guarantee future results. Invest at your own risk.
