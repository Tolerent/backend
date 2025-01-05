import Campaign from '../models/Campaign.js';

export const applyForCampaign = async (req, res) => {
  const { campaignId } = req.body;
  try {
      // Add logic for applying to a campaign
      res.status(200).json({ message: 'Application successful' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

export const getApprovedCampaigns = async (req, res) => {
  try {
      // Fetch only campaigns with status "approved"
      const approvedCampaigns = await Campaign.find({ status: 'approved' });
      res.status(200).json(approvedCampaigns);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};