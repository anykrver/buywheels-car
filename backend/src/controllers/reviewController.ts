import { Request, Response } from 'express';
import { mockReviews } from '../data/mockDatabase';

export const reviewController = {
  getAllReviews: (req: Request, res: Response) => {
    res.json({ status: 'success', count: mockReviews.length, data: mockReviews });
  }
};
