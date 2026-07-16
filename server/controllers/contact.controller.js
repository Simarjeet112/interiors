const Consultation = require("../models/Consultation.model");
const { validateContactPayload } = require("../validators/contact.validator");
const { sendConsultationNotification } = require("../config/mailer");

async function createConsultation(req, res) {
  const validation = validateContactPayload(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "Please check the highlighted fields and try again.",
      errors: validation.errors,
    });
  }

  try {
    const consultation = await Consultation.create(validation.data);

    // Email notification should never block the user's success response —
    // the enquiry is already safely stored the moment it's saved to MongoDB.
    const emailResult = await sendConsultationNotification(consultation);
    if (emailResult.sent) {
      consultation.emailNotified = true;
      await consultation.save();
    }

    return res.status(201).json({
      success: true,
      message: "Thank you! Your consultation request has been received.",
      data: {
        id: consultation._id,
        createdAt: consultation.createdAt,
      },
    });
  } catch (err) {
    console.error("Error creating consultation:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again in a moment.",
    });
  }
}

module.exports = { createConsultation };
