"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { siteConfig, services, budgetRanges, getWhatsAppLink } from "@/lib/site-config";

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type SubmitState = "idle" | "loading" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  budget: "",
  message: "",
};

const phoneRegex = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!phoneRegex.test(data.phone.trim())) {
    errors.phone = "Enter a valid 10-digit phone number";
  }
  if (!emailRegex.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  if (data.city.trim().length < 2) {
    errors.city = "Please enter your city";
  }
  if (!data.service) {
    errors.service = "Please select a service";
  }
  if (!data.budget) {
    errors.budget = "Please select a budget range";
  }

  return errors;
}

const inputClasses =
  "w-full bg-obsidian-900/60 border border-ivory/10 rounded-sm px-5 py-4 text-sm text-ivory placeholder:text-obsidian-400 focus:outline-none focus:border-gold transition-colors duration-300";

const labelClasses =
  "block text-xs tracking-[0.2em] uppercase text-obsidian-300 mb-2";

const errorClasses = "mt-1.5 text-xs text-red-400/90";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

      const res = await fetch(apiUrl + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      setFormData(initialFormData);
      setErrors({});
    } catch (err) {
      setSubmitState("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[560px] h-[560px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-luxury relative">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            Get In Touch
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            Book your free
            <span className="text-gold-gradient"> consultation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-6 max-w-lg text-obsidian-300 text-base leading-relaxed"
          >
            Share a few details about your space and our design team will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="glass p-8 sm:p-10 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full border border-gold/30 flex items-center justify-center">
                  <Phone size={18} strokeWidth={1.5} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-obsidian-300 mb-2">
                    Call Us
                  </p>
                  <div className="flex flex-col gap-1">
                    {siteConfig.phones.map((phone) => (
                      
                        key={phone}
                        href={"tel:+91" + phone}
                        className="text-ivory hover:text-gold transition-colors duration-300 text-sm"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full border border-gold/30 flex items-center justify-center">
                  <Mail size={18} strokeWidth={1.5} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-obsidian-300 mb-2">
                    Email Us
                  </p>
                  
                    href={"mailto:" + siteConfig.email}
                    className="text-ivory hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full border border-gold/30 flex items-center justify-center">
                  <MessageCircle size={18} strokeWidth={1.5} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-obsidian-300 mb-2">
                    WhatsApp
                  </p>
                  
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory hover:text-gold transition-colors duration-300 text-sm"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {submitState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <CheckCircle2 size={48} strokeWidth={1.25} className="text-gold mb-6" />
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory mb-3">
                      Request received
                    </h3>
                    <p className="text-obsidian-300 text-sm max-w-sm mb-8">
                      Thank you for reaching out. Our design team will contact you within 24 hours to schedule your free consultation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitState("idle")}
                      className="text-xs tracking-[0.15em] uppercase text-gold hover:text-ivory transition-colors duration-300"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className={inputClasses}
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                        />
                        {errors.name ? <p className={errorClasses}>{errors.name}</p> : null}
                      </div>

                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="98765 43210"
                          className={inputClasses}
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                        {errors.phone ? <p className={errorClasses}>{errors.phone}</p> : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className={inputClasses}
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                        {errors.email ? <p className={errorClasses}>{errors.email}</p> : null}
                      </div>

                      <div>
                        <label htmlFor="city" className={labelClasses}>
                          City
                        </label>
                        <input
                          id="city"
                          type="text"
                          placeholder="Delhi, Gurugram..."
                          className={inputClasses}
                          value={formData.city}
                          onChange={(e) => updateField("city", e.target.value)}
                        />
                        {errors.city ? <p className={errorClasses}>{errors.city}</p> : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="service" className={labelClasses}>
                          Service Required
                        </label>
                        <select
                          id="service"
                          className={inputClasses + " appearance-none cursor-pointer"}
                          value={formData.service}
                          onChange={(e) => updateField("service", e.target.value)}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-obsidian-900">
                              {service}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-5 top-[42px] text-obsidian-300"
                        />
                        {errors.service ? <p className={errorClasses}>{errors.service}</p> : null}
                      </div>

                      <div className="relative">
                        <label htmlFor="budget" className={labelClasses}>
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className={inputClasses + " appearance-none cursor-pointer"}
                          value={formData.budget}
                          onChange={(e) => updateField("budget", e.target.value)}
                        >
                          <option value="">Select a budget</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget} value={budget} className="bg-obsidian-900">
                              {budget}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-5 top-[42px] text-obsidian-300"
                        />
                        {errors.budget ? <p className={errorClasses}>{errors.budget}</p> : null}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us a little about your project..."
                        className={inputClasses + " resize-none"}
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                      />
                    </div>

                    {submitState === "error" ? (
                      <p className="text-sm text-red-400/90 bg-red-400/10 border border-red-400/20 rounded-sm px-5 py-3">
                        {errorMessage}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="mt-2 w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold-gradient text-obsidian-950 text-xs tracking-[0.15em] uppercase font-medium shadow-gold-glow hover:shadow-none transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Request Consultation"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
