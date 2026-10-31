import React, { useState } from 'react';
import { MessageCircle, Mail, Linkedin, MapPin, Copy, Check, Send, ArrowUpRight, Phone } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [service, setService] = useState('Brand Identity');
  const [budget, setBudget] = useState('Standard');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OWNER_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Muhammad Nasir!\n\nName: ${name || 'Prospective Client'}\nContact: ${senderContact || 'Not provided'}\nProject: ${service}\nBudget Range: ${budget}\n\nProject Details:\n${message || 'I would like to hire you for graphic design work.'}`;
    return `https://wa.me/923373522755?text=${encodeURIComponent(text)}`;
  };

  const generateMailtoUrl = () => {
    const subject = `Graphic Design Inquiry: ${service} - from ${name || 'Client'}`;
    const body = `Hi Muhammad Nasir,\n\nName: ${name}\nContact: ${senderContact}\nRequested Service: ${service}\nBudget: ${budget}\n\nMessage:\n${message}\n\nLooking forward to hearing from you.`;
    return `mailto:${OWNER_DETAILS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleSendEmail = () => {
    window.location.href = generateMailtoUrl();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#070a14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold mb-2">
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight text-balance">
            Start Your Next Graphic Design Project.
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Have a project in mind, need a brand rebrand, or want high-performing social media creatives? Reach out directly via WhatsApp, Email, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels & Quick Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={OWNER_DETAILS.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0b101c] border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#0c1424] transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-[#25D366] stroke-none" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">WhatsApp (Direct Chat)</div>
                  <div className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                    {OWNER_DETAILS.phone}
                  </div>
                  <div className="text-[11px] text-[#25D366]">Typically responds within 1 hour</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={OWNER_DETAILS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0b101c] border border-[#00f0ff]/20 hover:border-[#00f0ff] hover:bg-[#0c1424] transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
                  <div className="text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    Muhammad Nasir
                  </div>
                  <div className="text-[11px] text-slate-400">View professional network & experience</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#00f0ff] transition-colors" />
            </a>

            {/* Email Card with Copy Trigger */}
            <div className="p-5 rounded-2xl bg-[#0b101c] border border-white/10 hover:border-[#00f0ff]/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <a
                      href={`mailto:${OWNER_DETAILS.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#00f0ff] transition-colors break-all"
                    >
                      {OWNER_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00f0ff]/10 text-slate-300 hover:text-[#00f0ff] text-xs font-medium transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${OWNER_DETAILS.email}`}
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                >
                  Open Mail App →
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0b101c] border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Based In</div>
                <div className="text-base font-bold text-white">{OWNER_DETAILS.location}</div>
                <div className="text-[11px] text-slate-400">Available for local & international remote contracts</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0b101c] border border-white/10 rounded-3xl p-6 sm:p-8 relative">
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Project Consultation Form
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out your requirements below to instantly dispatch via WhatsApp or Email.
            </p>

            {formSubmitted && (
              <div className="p-4 mb-6 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs text-[#00f0ff] flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! Your inquiry was opened in your chosen application. Nasir will reply shortly.</span>
              </div>
            )}

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Email / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="email@example.com or phone"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Service Needed</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="Brand Identity & Logo Design">Brand Identity & Logo Design</option>
                    <option value="Social Media Graphics & Ad Creatives">Social Media Graphics & Ads</option>
                    <option value="Product Packaging & Label Design">Packaging & Print Collateral</option>
                    <option value="Poster Art & Editorial Typography">Poster Art & Typography</option>
                    <option value="Other Graphic Design Project">Other Custom Graphic Design</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Project Timeline / Scope</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="Urgent (1-3 Days)">Urgent (1-3 Days)</option>
                    <option value="Standard (1-2 Weeks)">Standard (1-2 Weeks)</option>
                    <option value="Comprehensive (3+ Weeks)">Comprehensive (3+ Weeks)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Project Brief / Details *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your brand, requirements, deliverables, and goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp and Email */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs tracking-wide hover:bg-white transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-black stroke-none" />
                  <span>Send via WhatsApp (+92 337 3522755)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#00f0ff] text-black font-bold text-xs hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/20 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-500">
                  Direct inquiries: <a href="mailto:nasirimran899@gmail.com" className="text-slate-400 hover:text-[#00f0ff]">nasirimran899@gmail.com</a>
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
