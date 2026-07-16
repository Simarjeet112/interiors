const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name is too long"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      maxlength: [20, "Phone number is too long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: [150, "Email is too long"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      maxlength: [100, "City is too long"],
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
      maxlength: [100, "Service is too long"],
    },
    budget: {
      type: String,
      required: [true, "Budget is required"],
      trim: true,
      maxlength: [50, "Budget is too long"],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, "Message is too long"],
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
    source: {
      type: String,
      default: "website",
    },
    emailNotified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

consultationSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Consultation", consultationSchema);
