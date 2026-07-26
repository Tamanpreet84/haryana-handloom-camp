import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, Store, CheckCircle } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Bed Sheets',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Store Inquiry from Website:\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.category}\nMessage: ${formData.message}`;
    const targetUrl = getWhatsAppUrl(selectedPhoneIndex, text);
    window.open(targetUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#091326] relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e6c265]">Visit Or Contact Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            We Are Ready To <span className="gold-text">Assist You</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Visit our physical store in Nandyal or reach out for custom size orders and home deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Store Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 border-2 border-[#e6c265]/40 space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#e6c265]/20">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f7e6a1] to-[#b88d2d] p-0.5 shadow-md">
                  <div className="w-full h-full bg-[#070d1a] rounded-[14px] flex items-center justify-center text-[#e6c265]">
                    <Store className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {STORE_DETAILS.name}
                  </h3>
                  <p className="text-xs text-[#e6c265] font-semibold">{STORE_DETAILS.subtitle}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e6c265] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block text-sm mb-0.5">Store Address</span>
                  <p className="text-slate-300 font-sans leading-relaxed">{STORE_DETAILS.address}</p>
                  <span className="text-[11px] text-[#e6c265] font-medium mt-1 inline-block">
                    Landmark: Near Sai Baba Mandir, Nandyal (Pincode 518501)
                  </span>
                </div>
              </div>

              {/* Both Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e6c265] shrink-0 mt-1" />
                <div className="text-xs space-y-2 w-full">
                  <span className="font-bold text-slate-200 block text-sm">Call Us Directly (2 Lines)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={`tel:+91${STORE_DETAILS.phones[0].number}`}
                      className="px-3 py-2 rounded-xl bg-[#162d5a] border border-[#e6c265]/40 text-[#f7e6a1] font-bold hover:bg-[#e6c265] hover:text-black transition-colors text-center block"
                    >
                      📞 9215211025
                    </a>
                    <a
                      href={`tel:+91${STORE_DETAILS.phones[1].number}`}
                      className="px-3 py-2 rounded-xl bg-[#162d5a] border border-[#e6c265]/40 text-[#f7e6a1] font-bold hover:bg-[#e6c265] hover:text-black transition-colors text-center block"
                    >
                      📞 9215511025
                    </a>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#e6c265] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block text-sm">Store Timings</span>
                  <p className="text-slate-300">{STORE_DETAILS.hours}</p>
                  <p className="text-[11px] text-emerald-400 font-medium mt-0.5">Open All 7 Days a Week</p>
                </div>
              </div>

              {/* Google Maps Navigation Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Nk+road+nandyal+518501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline-gold justify-center text-xs py-2.5"
                >
                  <MapPin className="w-4 h-4 text-[#e6c265]" />
                  <span>Open Location in Google Maps</span>
                </a>
              </div>

            </div>

          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border-2 border-[#e6c265]/40 space-y-6">
              
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Send Direct Store Inquiry</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Looking for custom curtain fitting or bulk bedsheet orders? Leave your details below and choose which store line to contact.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#070d1a] border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Your inquiry has been formatted and redirected to WhatsApp for instantaneous confirmation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold text-xs px-4 py-2"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#e6c265]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#e6c265]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Category of Interest</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-white text-xs focus:outline-none focus:border-[#e6c265]"
                    >
                      <option value="Bed Sheets">Bed Sheets</option>
                      <option value="Cushion Covers">Cushion Covers</option>
                      <option value="Curtains">Curtains</option>
                      <option value="Comforters">Comforters & Mink</option>
                      <option value="Blankets & Polar">Blankets & Polar Fleeces</option>
                      <option value="Shawls & Pillows">Shawls & Pillows</option>
                    </select>
                  </div>

                  {/* WhatsApp Store Number Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[#e6c265] mb-1 uppercase">Select WhatsApp Representative:</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {STORE_DETAILS.phones.map((p, idx) => (
                        <button
                          type="button"
                          key={p.number}
                          onClick={() => setSelectedPhoneIndex(idx)}
                          className={`p-2 rounded-xl border text-center font-bold transition-all ${
                            selectedPhoneIndex === idx
                              ? 'border-emerald-500 bg-emerald-950/60 text-emerald-400'
                              : 'border-white/10 bg-[#070d1a] text-slate-400'
                          }`}
                        >
                          Line {idx + 1}: {p.number}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Custom Requirements</label>
                    <textarea
                      rows="3"
                      placeholder="Specify sizes, colors, or custom stitching requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#e6c265]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold justify-center py-3 text-xs font-bold"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>Send Inquiry to Line {selectedPhoneIndex + 1} ({STORE_DETAILS.phones[selectedPhoneIndex].number})</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
