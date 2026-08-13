import { Request, Response } from 'express';
import { mockVehicles } from '../data/mockDatabase';

export const vehicleController = {
  getAllVehicles: (req: Request, res: Response) => {
    const { category, brand, fuel, search } = req.query;
    let result = [...mockVehicles];

    if (category) {
      const catLower = String(category).toLowerCase();
      result = result.filter(v => {
        if (catLower === 'ev') return v.isEV || v.category === 'ev';
        return v.category.toLowerCase() === catLower;
      });
    }

    if (brand) {
      const brandLower = String(brand).toLowerCase();
      result = result.filter(v => v.brand.toLowerCase().includes(brandLower));
    }

    if (fuel) {
      const fuelLower = String(fuel).toLowerCase();
      result = result.filter(v => v.fuelTypes.some(f => f.toLowerCase() === fuelLower));
    }

    if (search) {
      const query = String(search).toLowerCase();
      result = result.filter(v =>
        v.brand.toLowerCase().includes(query) ||
        v.model.toLowerCase().includes(query)
      );
    }

    res.json({
      status: 'success',
      count: result.length,
      data: result
    });
  },

  getVehicleBySlug: (req: Request, res: Response) => {
    const { slug } = req.params;
    const vehicle = mockVehicles.find(v => v.slug === slug || v.id === slug);
    if (!vehicle) {
      return res.status(404).json({ status: 'error', message: 'Vehicle not found' });
    }
    res.json({ status: 'success', data: vehicle });
  }
};
