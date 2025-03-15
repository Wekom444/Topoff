// /backend/controllers/aiController.js
const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.generateAIAd = async (req, res) => {
  try {
    const { campaignId, adType, audience, keywords } = req.body;
    const prompt = `Generate a high-converting ${adType} ad for ${audience} with keywords: ${keywords}`;
    
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt,
      max_tokens: 150,
    });
    
    const generatedAd = response.choices[0].text.trim();
    res.status(200).json({ success: true, ad: generatedAd });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.trainAIModel = async (req, res) => {
  try {
    const { datasetId, parameters } = req.body;
    const trainingStatus = `Training model with dataset ${datasetId} using ${JSON.stringify(parameters)}`;
    res.status(200).json({ success: true, status: trainingStatus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.customizeAd = async (req, res) => {
  try {
    const { adId, modifications } = req.body;
    const updatedAd = `Ad ${adId} updated with ${JSON.stringify(modifications)}`;
    res.status(200).json({ success: true, ad: updatedAd });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
