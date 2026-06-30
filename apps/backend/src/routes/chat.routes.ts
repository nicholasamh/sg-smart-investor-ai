import { Router } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * POST /api/chat
 * Send message to AI assistant
 */
router.post('/', authenticate, async (req: AuthRequest, res) => {
  // TODO: Implement AI chat
  res.status(200).json({
    success: true,
    data: {
      response: 'AI response placeholder',
    },
  });
});

export default router;
