const Lead = require("../models/Lead");

// Get all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new lead
exports.createLead = async (req, res) => {
  try {
    const { name, email, campaignId } = req.body;
    const newLead = new Lead({ name, email, campaignId });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
