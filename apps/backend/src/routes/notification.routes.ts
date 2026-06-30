import { Router } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * POST /api/notifications/subscribe
 * Subscribe to push notifications
 */
router.post('/subscribe', authenticate, async (req: AuthRequest, res) => {
  // TODO: Implement push notification subscription
  res.status(200).json({
    success: true,
    data: { subscribed: true },
  });
});

export default router;
