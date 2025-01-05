import Campaign from '../models/Campaign.js';

export const approveCampaign = async (req, res) => {
  const { campaignId } = req.params;

  try {
      // Find the campaign by ID and update its status
      const campaign = await Campaign.findByIdAndUpdate(
          campaignId, // The ID of the campaign to update
          { status: 'approved' }, // Update the status to "approved"
          { new: true } // Return the updated document
      );

      if (!campaign) {
          return res.status(404).json({ message: 'Campaign not found' });
      }

      res.status(200).json({ message: 'Campaign approved', campaign });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
