const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const path = require("path");

const app = express();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 GPT Route
app.post("/gpt", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://netflix-project-eehp.onrender.com/",
          "X-Title": "NetflixProject",
        },
      },
    );

    const content = response.data?.choices?.[0]?.message?.content;

    res.json({ result: content });
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 🔥 Serve frontend build
app.use(express.static(path.join(__dirname, "../build")));

// 🔥 Catch-all (Express 5 SAFE)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// 🔥 Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
