// ==================== Auth Types ====================

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  riskLevel: 'CONSERVATIVE' | 'BALANCED' | 'AGGRESSIVE';
  notificationFrequency: 'hourly' | 'daily' | 'weekly';
  darkMode: boolean;
  aiProvider: 'openai' | 'claude' | 'gemini';
  createdAt: Date;
}

export interface AuthPayload {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresIn: number;
}

// ==================== Stock Types ====================

export interface Stock {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  industry?: string;
  currentPrice: number;
  dayChange: number;
  dayChangePercent: number;
  volume: number;
  marketCap: number;
  pe: number;
  pb: number;
  dividendYield: number;
  eps: number;
  roe: number;
  debtRatio: number;
  weekHigh52: number;
  weekLow52: number;
  ema20: number;
  ema50: number;
  ema200: number;
  rsi14: number;
  macdLine: number;
  macdSignal: number;
  bollingerUpper: number;
  bollingerLower: number;
  aiScore: number;
  sentimentScore: number;
  recommendation: 'STRONG_BUY' | 'BUY' | 'WATCH' | 'NONE';
  recommendationReason?: string;
  lastUpdated: Date;
}

export interface StockPrice {
  symbol: string;
  price: number;
  timestamp: Date;
  dayChange: number;
  dayChangePercent: number;
  volume: number;
}

export interface PriceHistory {
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// ==================== Portfolio Types ====================

export interface Portfolio {
  id: string;
  userId: string;
  totalValue: number;
  totalCost: number;
  totalProfit: number;
  totalProfitPercentage: number;
  todayProfit: number;
  todayProfitPercentage: number;
  holdings: Holding[];
  sectorAllocation: Record<string, number>;
  annualDividendIncome: number;
  riskScore: number;
  lastUpdated: Date;
}

export interface Holding {
  id: string;
  stockSymbol: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  totalCost: number;
  currentValue: number;
  profit: number;
  profitPercentage: number;
  totalDividendReceived: number;
  annualDividendYield: number;
  acquisitionDate: Date;
}

export interface WatchlistItem {
  id: string;
  symbol: string;
  type: 'STOCK' | 'REIT' | 'ETF';
  notes?: string;
  addedAt: Date;
}

// ==================== AI Recommendation Types ====================

export interface AIRecommendation {
  symbol: string;
  recommendation: 'STRONG_BUY' | 'BUY' | 'WATCH' | 'NONE';
  score: number; // 0-100
  confidence: number; // 0-100
  reasons: string[];
  technicalSignals: TechnicalSignals;
  fundamentalFactors: FundamentalFactors;
  sentimentScore: number; // -100 to +100
  lastUpdated: Date;
}

export interface TechnicalSignals {
  rsiOversold: boolean;
  rsiOverbought: boolean;
  macdBullish: boolean;
  goldenCross: boolean;
  deathCross: boolean;
  volumeBreakout: boolean;
  supportBreakdown: boolean;
  resistanceBreakout: boolean;
}

export interface FundamentalFactors {
  revenueGrowth: number;
  epsGrowth: number;
  peUndervalued: boolean;
  pbUndervalued: boolean;
  dividendGrowth: number;
  roe: number;
  debtRatio: number;
}

export interface NewsAnalysis {
  id: string;
  headline: string;
  summary: string;
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
  sentimentScore: number; // -1 to 1
  impactLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  affectedSymbols: string[];
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  source: string;
  publishedAt: Date;
}

export interface AIChat {
  id: string;
  userId: string;
  topic: string;
  query: string;
  response: string;
  contextSymbols: string[];
  createdAt: Date;
}

// ==================== Notification Types ====================

export interface PushNotification {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag: string;
  data?: Record<string, any>;
}

export interface NotificationEvent {
  type: 'PRICE_ALERT' | 'BUY_RECOMMENDATION' | 'NEWS_ALERT' | 'DIVIDEND_ALERT' | 'EARNINGS_ALERT';
  symbol: string;
  data: Record<string, any>;
  timestamp: Date;
}

// ==================== API Response Types ====================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// ==================== Dashboard Types ====================

export interface DashboardData {
  portfolio: Portfolio;
  topGainers: Stock[];
  topLosers: Stock[];
  mostActive: Stock[];
  trendingStocks: Stock[];
  aiRecommendations: AIRecommendation[];
  latestNews: NewsAnalysis[];
  upcomingDividends: Dividend[];
  upcomingEarnings: Earnings[];
  stiIndex: MarketIndex;
  fearGreedIndex: number;
  marketHeatmap: Record<string, number>;
}

export interface MarketIndex {
  symbol: string;
  name: string;
  currentValue: number;
  dayChange: number;
  dayChangePercent: number;
  dayOpen: number;
  dayHigh: number;
  dayLow: number;
  lastUpdated: Date;
}

export interface Dividend {
  symbol: string;
  dividendPerShare: number;
  exDate: Date;
  paymentDate: Date;
  yield: number;
}

export interface Earnings {
  symbol: string;
  quarter: string;
  fiscalYear: number;
  eps: number;
  revenue: number;
  announcementDate: Date;
}

// ==================== Screener Types ====================

export interface ScreenerFilter {
  sector?: string[];
  dividendYield?: { min: number; max: number };
  marketCap?: { min: number; max: number };
  pe?: { min: number; max: number };
  pb?: { min: number; max: number };
  roe?: { min: number; max: number };
  debtRatio?: { min: number; max: number };
  volume?: { min: number; max: number };
  price?: { min: number; max: number };
  rsi?: { min: number; max: number };
  macd?: 'BULLISH' | 'BEARISH';
  presets?: 'BULLISH' | 'OVERSOLD' | 'UNDERVALUED' | 'HIGH_DIVIDEND' | 'GROWTH' | 'REITS'[];
}

export interface ScreenerResult extends Stock {
  matchScore: number;
}
