import { Router } from 'express';
import { authService } from '../services/auth.service';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * POST /api/auth/register
 * Register a new user
 */
router.post('/register', async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/auth/login
 * Login user
 */
router.post('/login', async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/auth/me
 * Get current user (requires authentication)
 */
router.get('/me', authenticate, async (req: AuthRequest, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

/**
 * POST /api/auth/verify
 * Verify token
 */
router.post('/verify', (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = authService.verifyToken(token);
    res.status(200).json({
      success: true,
      data: decoded,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
