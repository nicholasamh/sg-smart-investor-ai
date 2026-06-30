import { Router } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * GET /api/watchlist
 * Get user watchlist
 */
router.get('/', authenticate, async (req: AuthRequest, res) => {
  // TODO: Implement watchlist retrieval
  res.status(200).json({
    success: true,
    data: [],
  });
});

/**
 * POST /api/watchlist
 * Add to watchlist
 */
router.post('/', authenticate, async (req: AuthRequest, res) => {
  // TODO: Implement add to watchlist
  res.status(201).json({
    success: true,
    data: { id: '1' },
  });
});

export default router;
