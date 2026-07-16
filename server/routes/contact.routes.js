const express = require("express");
const rateLimit = require("express-rate-limit");
const { createConsultation } = require("../controllers/contact.controller");

const router = express.Router();

// Tighter limit specifically on form submissions to deter spam/bot abuse,
// separate from the general "/api" limiter already applied in index.js.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

router.post("/", contactLimiter, createConsultation);

module.exports = router;
