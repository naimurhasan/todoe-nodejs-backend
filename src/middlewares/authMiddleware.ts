import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types';

// Middleware to verify JWT and set req.user
export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming the token is sent in the Authorization header as "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as { userId: string }; // Replace 'your_secret_key' with your actual secret key

    req.user = decodedToken.userId; // Set req.user with the user ID extracted from the token

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
