"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API endpoint or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle size={56} className="text-sage mx-auto mb-4" />
        <h3 className="heading-3 text-charcoal mb-2">Thank You!</h3>
        <p className="text-charcoal/60">
          We&apos;ve received your message. Our team will reach out to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm"
            placeholder="(432) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-method" className="block text-sm font-medium text-charcoal mb-1.5">
          Preferred Contact Method
        </label>
        <select
          id="contact-method"
          name="contact-method"
          className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm text-charcoal/80"
        >
          <option value="phone">Phone Call</option>
          <option value="text">Text Message</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
          Service You&apos;re Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm text-charcoal/80"
        >
          <option value="">Select a service...</option>
          <option value="cleaning">Cleaning & Exam</option>
          <option value="invisalign">Invisalign</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="botox">Botox</option>
          <option value="emergency">Emergency Care</option>
          <option value="periodontal">Periodontal Therapy</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all outline-none text-sm resize-none"
          placeholder="Tell us about your smile goals..."
        />
      </div>

      <p className="text-xs text-charcoal/40">
        By submitting, you agree to receive communication from The Smile Suite via phone, text, or email.
      </p>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
