import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: string; // Replace 'string' with the appropriate type for the user ID
}