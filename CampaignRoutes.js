// /backend/routes/campaignRoutes.js
const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

// Create Campaign
router.post("/", async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Campaigns
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
