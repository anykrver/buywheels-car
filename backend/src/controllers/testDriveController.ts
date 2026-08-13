import { Request, Response } from 'express';

export const testDriveController = {
  createBooking: (req: Request, res: Response) => {
    const { name, phone, email, vehicleName, city, preferredDate, timeSlot } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ status: 'error', message: 'Name and phone are required' });
    }

    const bookingId = `BW-TD-${Math.floor(100000 + Math.random() * 900000)}`;
    const booking = {
      id: `td-${Date.now()}`,
      bookingId,
      name,
      phone,
      email: email || null,
      vehicleName: vehicleName || 'Selected Vehicle',
      city: city || 'Ranchi',
      preferredDate,
      timeSlot,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    console.log('[Test Drive API]:', booking);

    res.status(201).json({
      status: 'success',
      message: 'Test drive booking created successfully',
      data: booking
    });
  }
};
