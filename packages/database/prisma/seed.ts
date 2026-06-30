import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.stock.deleteMany();
  await prisma.marketIndex.deleteMany();

  // Seed SGX Stocks
  const stocks = await prisma.stock.createMany({
    data: [
      {
        symbol: 'DBS',
        name: 'DBS Group Holdings Limited',
        sector: 'Financials',
        industry: 'Banking',
        currentPrice: 34.50,
        marketCap: 108000000000,
      },
      {
        symbol: 'OCBC',
        name: 'OCBC Bank',
        sector: 'Financials',
        industry: 'Banking',
        currentPrice: 16.45,
        marketCap: 62000000000,
      },
      {
        symbol: 'UOB',
        name: 'United Overseas Bank Limited',
        sector: 'Financials',
        industry: 'Banking',
        currentPrice: 32.80,
        marketCap: 45000000000,
      },
      {
        symbol: 'ST Engineering',
        name: 'Singapore Technologies Engineering Ltd',
        sector: 'Industrials',
        industry: 'Aerospace & Defence',
        currentPrice: 4.76,
        marketCap: 6200000000,
      },
      {
        symbol: 'Singtel',
        name: 'Singapore Telecommunications Limited',
        sector: 'Telecommunications',
        industry: 'Telecom',
        currentPrice: 3.68,
        marketCap: 20500000000,
      },
      {
        symbol: 'CapLand Integrated Commercial Trust',
        name: 'CapLand Integrated Commercial Trust',
        sector: 'Real Estate',
        industry: 'REIT',
        currentPrice: 1.955,
        marketCap: 11000000000,
      },
      {
        symbol: 'Keppel',
        name: 'Keppel Corporation Limited',
        sector: 'Industrials',
        industry: 'Conglomerate',
        currentPrice: 7.73,
        marketCap: 14500000000,
      },
      {
        symbol: 'Genting Sing',
        name: 'Genting Singapore Limited',
        sector: 'Consumer Discretionary',
        industry: 'Gaming & Gambling',
        currentPrice: 1.09,
        marketCap: 4000000000,
      },
    ],
  });

  console.log(`✅ Seeded ${stocks.count} stocks`);

  // Seed Market Index
  const stiIndex = await prisma.marketIndex.create({
    data: {
      symbol: 'STI',
      name: 'Straits Times Index',
      currentValue: 3500.0,
    },
  });

  console.log(`✅ Seeded market index: ${stiIndex.symbol}`);
  console.log('🎉 Database seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
