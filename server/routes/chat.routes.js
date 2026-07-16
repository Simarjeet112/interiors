const express = require("express");
const rateLimit = require("express-rate-limit");
const { chat } = require("../controllers/chat.controller");

const router = express.Router();

// Separate, tighter limiter for chat — each conversation makes several
// requests, so this allows normal use while still deterring abuse of the
// (metered) Groq API.
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages. Please wait a few minutes and try again.",
  },
});

router.post("/", chatLimiter, chat);

module.exports = router;