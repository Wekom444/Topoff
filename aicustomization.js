// /backend/routes/aiCustomization.js
const express = require("express");
const router = express.Router();
const { customizeAd } = require("../controllers/aiController");

router.post("/customize", customizeAd);

module.exports = router;
