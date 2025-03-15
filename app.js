// /backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const campaignRoutes = require("./routes/campaignRoutes");
const leadRoutes = require("./routes/leads"); // Create similar to campaign if needed
const paymentRoutes = require("./routes/payment");
const aiAdRoutes = require("./routes/aiAds");
const aiTrainingRoutes = require("./routes/aiTraining");
const aiCustomizationRoutes = require("./routes/aiCustomization");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/ai-ads", aiAdRoutes);
app.use("/api/ai-training", aiTrainingRoutes);
app.use("/api/ai-customization", aiCustomizationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
