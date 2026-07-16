const { z } = require("zod");

// Accepts Indian mobile numbers, optionally with +91 / 91 prefix,
// and tolerates spaces or dashes from copy-pasted numbers.
const phoneRegex = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;

const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .regex(phoneRegex, "Enter a valid 10-digit Indian phone number"),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Enter a valid email address")
    .max(150, "Email is too long"),
  city: z
    .string({ required_error: "City is required" })
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(100, "City is too long"),
  service: z
    .string({ required_error: "Service is required" })
    .trim()
    .min(2, "Please select a service")
    .max(100, "Service is too long"),
  budget: z
    .string({ required_error: "Budget is required" })
    .trim()
    .min(2, "Please select a budget range")
    .max(50, "Budget is too long"),
  message: z
    .string()
    .trim()
    .max(2000, "Message is too long")
    .optional()
    .default(""),
});

function validateContactPayload(payload) {
  const result = contactSchema.safeParse(payload);
  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));

  return { success: false, errors };
}

module.exports = { validateContactPayload };
