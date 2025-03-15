// /backend/models/Campaign.js
const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keywords: [String],
  targetAudience: String,
  budget: Number,
  aiGeneratedAds: String,
}, { timestamps: true });

module.exports = mongoose.model("Campaign", CampaignSchema);
