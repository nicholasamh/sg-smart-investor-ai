'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('✅ Service Worker registered'))
        .catch(() => console.log('❌ Service Worker registration failed'));
    }
  }, []);

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 className="text-2xl font-bold" variants={item}>
            🚀 SG Smart Investor AI
          </motion.h1>
          <motion.nav className="flex gap-4" variants={item}>
            <Link href="/login" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
              Sign Up
            </Link>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div className="text-center" variants={item}>
          <h2 className="text-5xl font-bold mb-6">Monitor Singapore Stocks Intelligently</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get AI-powered buy recommendations for SGX stocks, REITs, and ETFs with real-time analysis of technical
            indicators, fundamentals, sentiment, and news.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup" className="btn-primary">
              Get Started Free
            </Link>
            <Link href="#features" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <motion.h3 className="text-3xl font-bold text-center mb-12" variants={item}>
          Powerful Features
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: '📊', title: 'Real-time Data', desc: 'Monitor all SGX stocks, REITs, and ETFs' },
            { icon: '🤖', title: 'AI Recommendations', desc: 'Smart buy signals with confidence scores' },
            { icon: '📰', title: 'News Analysis', desc: 'Sentiment analysis of latest news' },
            { icon: '💼', title: 'Portfolio Tracking', desc: 'Track holdings and calculate returns' },
            { icon: '💰', title: 'Dividend Tracker', desc: 'Monitor upcoming dividends and yields' },
            { icon: '📱', title: 'PWA App', desc: 'Works on iPhone without App Store' },
          ].map((feature, idx) => (
            <motion.div key={idx} className="card-hover" variants={item}>
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 p-12 text-center"
          variants={item}
        >
          <h3 className="text-3xl font-bold mb-4">Start Investing Smarter Today</h3>
          <p className="text-gray-400 mb-8 text-lg">Join thousands of investors using AI to find better opportunities</p>
          <Link href="/signup" className="btn-primary">
            Create Free Account
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2024 SG Smart Investor AI. All rights reserved.</p>
          <p className="text-sm mt-2">⚠️ Not financial advice. Invest at your own risk.</p>
        </div>
      </footer>
    </motion.main>
  );
}
