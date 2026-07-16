const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      "SMTP credentials not fully set. Email notifications will be skipped."
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter;
}

function buildConsultationEmailHtml(consultation) {
  const { name, phone, email, city, service, budget, message, createdAt } =
    consultation;

  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["City", city],
    ["Service", service],
    ["Budget", budget],
    ["Submitted at", new Date(createdAt || Date.now()).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px;font-weight:600;color:#0a0a0a;border-bottom:1px solid #eee;white-space:nowrap;">${label}</td>
          <td style="padding:8px 16px;color:#333;border-bottom:1px solid #eee;">${escapeHtml(
            String(value ?? "")
          )}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#f7f5f0;padding:24px;">
      <h2 style="color:#c9a24b;margin-bottom:4px;">New Consultation Request</h2>
      <p style="color:#4d4d4d;margin-top:0;">S.S. Sodhi Interiors — website enquiry</p>
      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;">
        ${rows}
      </table>
      ${
        message
          ? `<div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;">
              <p style="font-weight:600;margin:0 0 8px;color:#0a0a0a;">Message</p>
              <p style="margin:0;color:#333;white-space:pre-wrap;">${escapeHtml(
                message
              )}</p>
            </div>`
          : ""
      }
    </div>
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendConsultationNotification(consultation) {
  const activeTransporter = getTransporter();
  if (!activeTransporter) {
    return { sent: false, reason: "SMTP not configured" };
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

  try {
    await activeTransporter.sendMail({
      from: `"S.S. Sodhi Interiors Website" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      replyTo: consultation.email,
      subject: `New Consultation Enquiry — ${consultation.name} (${consultation.service})`,
      html: buildConsultationEmailHtml(consultation),
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send consultation email:", err.message);
    return { sent: false, reason: err.message };
  }
}

module.exports = { sendConsultationNotification };
