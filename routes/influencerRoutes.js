import express from 'express';
import { applyForCampaign, getApprovedCampaigns } from '../controllers/influencerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', protect, applyForCampaign);
// Route for influencers to fetch approved campaigns
router.get('/approved', protect, getApprovedCampaigns);

export default router;
