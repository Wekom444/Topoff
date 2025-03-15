const Campaign = require("../models/Campaign");

// Get all campaigns
exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new campaign
exports.createCampaign = async (req, res) => {
  try {
    const { name, budget, audience, keywords } = req.body;
    const newCampaign = new Campaign({ name, budget, audience, keywords });
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
