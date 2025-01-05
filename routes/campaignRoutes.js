import express from 'express';
import { createCampaign, getCampaigns, getCampaignById } from '../controllers/campaignController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createCampaign).get(protect, getCampaigns);
// Route to get a campaign by ID
router.get('/:id', protect, getCampaignById);

export default router;
