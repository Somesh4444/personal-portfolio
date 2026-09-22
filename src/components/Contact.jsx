import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Explicit initialization with your EmailJS public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "lfJKn0j0WHSG66okJ";
    if (publicKey) {
      emailjs.init({ publicKey });
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitted) setSubmitted(false);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.website) return;

    setSubmitting(true);
    setError('');

    const webhookUrl = import.meta.env.VITE_DISCORD_CONTACT_WEBHOOK;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gfmv1dd";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_swj9fmm";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "lfJKn0j0WHSG66okJ";

    // 1. Send to Discord
    let discordPromise = Promise.resolve();
    if (webhookUrl) {
      discordPromise = fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: "💼 New Client Inquiry",
              color: 0x22C55E,
              fields: [
                { name: "👤 Client Name", value: formData.name || "Anonymous", inline: true },
                { name: "📧 Email", value: formData.email || "No email", inline: true },
                { name: "📌 Subject", value: formData.subject || "General Inquiry", inline: false },
                { name: "📝 Message", value: formData.message || "No content" }
              ],
              footer: { text: "somesh-dev.netlify.app • Dual Dispatch" },
              timestamp: new Date().toISOString()
            }
          ]
        })
      });
    }

    // 2. Send via EmailJS (keys match your previous static HTML script)
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Portfolio Inquiry",
      message: formData.message,
      time: new Date().toLocaleString()
    };

    try {
      // Execute both dispatches
      const [discordRes, emailRes] = await Promise.allSettled([
        discordPromise,
        emailjs.send(serviceId, templateId, templateParams, publicKey)
      ]);

      if (emailRes.status === 'rejected') {
        console.error("EmailJS dispatch failed:", emailRes.reason);
      }

      if (discordRes.status === 'fulfilled' || emailRes.status === 'fulfilled') {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        throw new Error("Delivery failed on both channels.");
      }
    } catch (err) {
      console.error("Submission failed completely:", err);
      setError("Failed to send message. Please try again or reach out directly via email.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32" id="contact">
      <div className="relative rounded-3xl bg-[#121217] border border-white/[0.08] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
        
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-brandYellow/[0.05] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          
          {/* LEFT: IDENTITY & MESSAGE */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="relative">
                  <img 
                    src="https://somesh4444.github.io/portfolio/images/lipun.jpg" 
                    alt="Somesh Behera" 
                    className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#121217] rounded-full"></span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block leading-tight">Somesh Behera</span>
                  <span className="text-xs text-brandMuted">Available for new projects</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                Let’s talk about your next project.
              </h2>

              <p className="text-brandMuted text-sm sm:text-base leading-relaxed max-w-[420px]">
                Have an idea or looking for a full-stack developer to join your team? Send a message and I’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-brandMuted font-mono">
              <span>Prefer email?</span>
              <a href="mailto:ofcsomu@gmail.com" className="text-brandYellow hover:underline">
                ofcsomu@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Honeypot Spam Field */}
            <input 
              type="text" 
              name="website" 
              value={formData.website} 
              onChange={handleChange} 
              tabIndex={-1} 
              autoComplete="off" 
              className="hidden" 
            />

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
                <i className="ri-checkbox-circle-fill text-lg"></i>
                <span>Thanks for reaching out! I've received your note and will reply soon.</span>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-center gap-2.5">
                <i className="ri-error-warning-fill text-lg"></i>
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brandYellow/70 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brandYellow/70 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1.5">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="New project inquiry"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brandYellow/70 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1.5">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you're working on..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brandYellow/70 focus:bg-white/[0.05] transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-brandYellow text-[#0c0c0e] py-3.5 px-6 rounded-xl font-bold text-sm hover:bg-yellow-300 disabled:opacity-50 disabled:hover:bg-brandYellow shadow-[0_10px_25px_rgba(229,241,52,0.15)] hover:shadow-[0_12px_30px_rgba(229,241,52,0.3)] transition-all cursor-pointer"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="ri-arrow-right-line text-base"></i>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}