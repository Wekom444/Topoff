// /backend/routes/aiTraining.js
const express = require("express");
const router = express.Router();
const { trainAIModel } = require("../controllers/aiController");

router.post("/train", trainAIModel);

module.exports = router;
