import { Router } from 'express';
import { vehicleController } from '../controllers/vehicleController';
import { dealerController } from '../controllers/dealerController';
import { offerController } from '../controllers/offerController';
import { blogController } from '../controllers/blogController';
import { reviewController } from '../controllers/reviewController';
import { leadController } from '../controllers/leadController';
import { testDriveController } from '../controllers/testDriveController';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'BuyWheels REST API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Vehicles
router.get('/vehicles', vehicleController.getAllVehicles);
router.get('/vehicles/:slug', vehicleController.getVehicleBySlug);

// Dealers
router.get('/dealers', dealerController.getAllDealers);

// Offers
router.get('/offers', offerController.getAllOffers);

// Blogs
router.get('/blogs', blogController.getAllPosts);
router.get('/blogs/:slug', blogController.getPostBySlug);

// Reviews
router.get('/reviews', reviewController.getAllReviews);

// Submissions / Leads
router.post('/leads', leadController.createLead);
router.post('/test-drives', testDriveController.createBooking);

export default router;
