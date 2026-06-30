import { Router } from 'express';

const router = Router();

/**
 * GET /api/stocks
 * Get all stocks with filters
 */
router.get('/', async (req, res) => {
  // TODO: Implement stock listing
  res.status(200).json({
    success: true,
    data: [],
  });
});

/**
 * GET /api/stocks/:symbol
 * Get stock details
 */
router.get('/:symbol', async (req, res) => {
  // TODO: Implement stock details
  res.status(200).json({
    success: true,
    data: {
      symbol: req.params.symbol,
      currentPrice: 0,
      dayChange: 0,
    },
  });
});

export default router;
