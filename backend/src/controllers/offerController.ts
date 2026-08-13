import { Request, Response } from 'express';
import { mockOffers } from '../data/mockDatabase';

export const offerController = {
  getAllOffers: (req: Request, res: Response) => {
    res.json({ status: 'success', count: mockOffers.length, data: mockOffers });
  }
};
