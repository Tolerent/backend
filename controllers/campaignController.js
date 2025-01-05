import Campaign from '../models/Campaign.js';

export const createCampaign = async (req, res) => {
    const { adContent, budget, cpf, maxInfluencers, targetingOptions } = req.body;
    try {
        const campaign = await Campaign.create({
            brand: req.user._id, // inferred from authentication middleware
            adContent,
            budget,
            cpf,
            maxInfluencers,
            targetingOptions,
        });
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({});
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single campaign by ID
export const getCampaignById = async (req, res) => {
    const { id } = req.params;

    try {
        const campaign = await Campaign.findById(id);

        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};