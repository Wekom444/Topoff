// /backend/routes/aiAds.js
const express = require("express");
const router = express.Router();
const { generateAIAd } = require("../controllers/aiController");

router.post("/generate", generateAIAd);

module.exports = router;
