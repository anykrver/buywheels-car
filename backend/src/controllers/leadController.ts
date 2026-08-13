import { Request, Response } from 'express';

export const leadController = {
  createLead: (req: Request, res: Response) => {
    const { name, phone, email, source, vehicleInterest, notes } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ status: 'error', message: 'Name and phone are required' });
    }

    const lead = {
      id: `lead-${Date.now()}`,
      name,
      phone,
      email: email || null,
      source: source || 'Web Form',
      vehicleInterest: vehicleInterest || null,
      notes: notes || null,
      stage: 'New',
      createdAt: new Date().toISOString()
    };

    console.log('[Lead Capture API]:', lead);

    res.status(201).json({
      status: 'success',
      message: 'Lead captured successfully',
      data: lead
    });
  }
};
