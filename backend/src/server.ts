import express from 'express';
import { corsMiddleware } from './middleware/cors';
import { requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use('/api/v1', apiRouter);

// Root Health Route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Welcome to BuyWheels Cars API v1.0',
    documentation: '/api/v1/health',
    endpoints: [
      '/api/v1/vehicles',
      '/api/v1/dealers',
      '/api/v1/offers',
      '/api/v1/blogs',
      '/api/v1/reviews',
      '/api/v1/leads',
      '/api/v1/test-drives'
    ]
  });
});

// Error handling middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` 🚗 BuyWheels Node.js Express REST API Server`);
  console.log(` 🚀 Listening at: http://localhost:${PORT}`);
  console.log(` 📊 API Base URL: http://localhost:${PORT}/api/v1`);
  console.log(`====================================================`);
});

export default app;
