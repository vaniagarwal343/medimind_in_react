const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: functions.config().openai.key, // Use Firebase config
});

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
      temperature: 0.7,
    });
    res.json({ text: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

// Export the app as a Firebase Function
exports.chat = functions.https.onRequest(app);
