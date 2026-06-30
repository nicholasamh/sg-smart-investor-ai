import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { registerSchema, loginSchema } from '../validation/auth.validation';
import { AppError } from '../middleware/errorHandler';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authService = {
  /**
   * Register a new user with email and password
   */
  async register(data: any) {
    const validated = registerSchema.parse(data);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validated.email },
    });

    if (existingUser) {
      throw new AppError(409, 'User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validated.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: validated.email,
        password: hashedPassword,
        firstName: validated.firstName,
        lastName: validated.lastName,
      },
    });

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    };
  },

  /**
   * Login user with email and password
   */
  async login(data: any) {
    const validated = loginSchema.parse(data);

    const user = await prisma.user.findUnique({
      where: { email: validated.email },
    });

    if (!user || !user.password) {
      throw new AppError(401, 'Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(validated.password, user.password);

    if (!isPasswordValid) {
      throw new AppError(401, 'Invalid email or password');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    };
  },

  /**
   * Verify and decode JWT token
   */
  verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      throw new AppError(401, 'Invalid or expired token');
    }
  },
};
