import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Download, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-white/80 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      {/* Soft Light Background Orbs - Warm Stone & Taupe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-stone-200/50 via-amber-100/30 to-stone-200/40 dark:from-stone-900/30 dark:via-amber-950/15 dark:to-stone-900/20 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-stone-200/30 dark:bg-stone-900/10 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} />
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="bg-gradient-to-r from-stone-800 via-stone-700 to-amber-700 dark:from-stone-100 dark:via-stone-300 dark:to-amber-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm currently open to software engineering, web development, and full-stack roles. Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl font-bold pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 text-slate-900 dark:text-white">
                <MessageSquare size={18} className="text-stone-800 dark:text-stone-200" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-slate-800">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-slate-800">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-stone-800 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-stone-100/70 dark:bg-slate-800 border border-stone-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 shrink-0 border border-stone-200 dark:border-stone-700">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-semibold uppercase text-stone-800 dark:text-stone-300">Email Address</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{personalInfo.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-stone-900 hover:bg-white dark:hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-stone-800 dark:text-stone-200" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Quick Links:</p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-semibold text-xs transition-all shadow-xs"
                >
                  <Mail size={14} />
                  <span>Email Me</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Morish_Kumar_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
                >
                  <Download size={14} />
                  <span>View CV</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-center space-y-2">
                <Check size={32} className="mx-auto text-stone-800 dark:text-stone-200" />
                <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-stone-700 dark:text-stone-300">
                  Thank you for reaching out, Morish will reply to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-stone-700 dark:focus:ring-stone-400 text-slate-900 dark:text-white text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-stone-700 dark:focus:ring-stone-400 text-slate-900 dark:text-white text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry / Hiring Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-stone-700 dark:focus:ring-stone-400 text-slate-900 dark:text-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Hello Morish, I'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-stone-700 dark:focus:ring-stone-400 text-slate-900 dark:text-white text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Sliding Hover Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-semibold text-sm transition-all overflow-hidden shadow-xs active:scale-95"
                >
                  <span className="flex items-center gap-2 group-hover:-translate-y-[150%] group-hover:opacity-0 transition-all duration-300">
                    <span>Let's talk</span>
                    <Send size={15} />
                  </span>

                  <span className="absolute flex items-center gap-2 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Send Message</span>
                    <ArrowRight size={15} />
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
