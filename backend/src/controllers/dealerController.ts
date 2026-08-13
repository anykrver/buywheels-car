import { Request, Response } from 'express';
import { mockDealers } from '../data/mockDatabase';

export const dealerController = {
  getAllDealers: (req: Request, res: Response) => {
    const { city, brand } = req.query;
    let result = [...mockDealers];

    if (city && city !== 'All Cities') {
      result = result.filter(d => d.location.toLowerCase() === String(city).toLowerCase());
    }
    if (brand && brand !== 'All Brands') {
      result = result.filter(d => d.brand.toLowerCase().includes(String(brand).toLowerCase()));
    }

    res.json({ status: 'success', count: result.length, data: result });
  }
};
