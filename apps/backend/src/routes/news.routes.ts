import { Router } from 'express';

const router = Router();

/**
 * GET /api/news
 * Get latest news
 */
router.get('/', async (req, res) => {
  // TODO: Implement news retrieval
  res.status(200).json({
    success: true,
    data: [],
  });
});

/**
 * GET /api/news/:id
 * Get news article
 */
router.get('/:id', async (req, res) => {
  // TODO: Implement news article retrieval
  res.status(200).json({
    success: true,
    data: {},
  });
});

export default router;
