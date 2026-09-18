import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Compass,
  Building,
  ShieldCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';

interface ContactProps {
  onOpenWhatsAppOrder: (inquiry?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Medicine Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please provide your name and valid contact number.');
      return;
    }
    setFormError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: 'General Medicine Inquiry',
        message: '',
      });
    }, 6000);
  };

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Contact & Location Map - Royal Surgical Aurangabad"
        description="Visit or contact Royal Surgical on Old GT Road, near Gupta Mini Theater, Aurangabad, Bihar 824101. Phone: +91 9572075812. Open daily 8:00 AM to 10:30 PM."
        canonicalPath="/contact"
      />

      {/* Hero / Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
            Reach Out to Our Pharmacists
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Royal Surgical
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Have a question about surgical supplies, prescription availability, or bulk hospital orders? Visit us on Old GT Road or reach out via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Business Cards & Quick Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address & Directions */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 mb-5">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Store Location
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {SITE_CONFIG.address.full}
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                Landmark: Near Gupta Mini Theater
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                id="contact-directions-btn"
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 dark:text-rose-400"
              >
                <Compass className="h-4 w-4" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mb-5">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Call &amp; WhatsApp
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly with our dispensary desk for stock inquiries or prescription delivery.
              </p>
              <div className="mt-3 space-y-1 text-xs">
                <p>
                  <strong className="text-slate-900 dark:text-white">Call:</strong>{' '}
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-sky-600 font-bold hover:underline">
                    {SITE_CONFIG.displayPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">WhatsApp:</strong>{' '}
                  <span className="text-emerald-600 font-bold">+91 {SITE_CONFIG.whatsapp}</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <a
                id="contact-call-btn"
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-sky-700 transition"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Store</span>
              </a>
              <button
                id="contact-whatsapp-btn"
                onClick={() => onOpenWhatsAppOrder('Contact Page Inquiry')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-emerald-700 transition"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Card 3: Working Hours */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400 mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Operating Hours
              </h3>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between border-b border-slate-100 pb-1.5 dark:border-slate-800">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Mon - Sat:</span>
                  <span>{SITE_CONFIG.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5 dark:border-slate-800">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Sunday:</span>
                  <span>{SITE_CONFIG.workingHours.sunday}</span>
                </div>
                <div className="pt-1">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Emergency Aid:</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">24/7 via WhatsApp prescription dispatch</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
              Licensed Pharmacy Reg: {SITE_CONFIG.drugLicenseNumber}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form & Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form (5 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Send an Online Inquiry
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Have a bulk surgical quotation request or medication query? Submit below and our team will contact you.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mt-3 text-base font-bold text-emerald-900 dark:text-emerald-200">
                  Inquiry Received!
                </h3>
                <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                  Thank you, {formData.name}. Our pharmacist will review your message and reply shortly. For immediate assistance, feel free to call our store.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {formError && (
                  <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Anand Mishra / Suresh Kumar"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-department" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Department
                  </label>
                  <select
                    id="contact-department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                    <option value="Surgical Supplies & Hospital Order">Surgical Supplies &amp; Hospital Order</option>
                    <option value="Home Delivery Coordination">Home Delivery Coordination</option>
                    <option value="Health Device / BP Monitor Inquiry">Health Device / BP Monitor Inquiry</option>
                    <option value="Chronic Care Supply Schedule">Chronic Care Supply Schedule</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Items Required
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="List required medications, surgical specifications, or any questions..."
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-4 text-xs font-bold text-white hover:bg-emerald-700 active:scale-95 transition-all shadow-md shadow-emerald-600/20"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Google Map & Directions Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    <span>Royal Surgical on Google Maps</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Old GT Rd, near Gupta Mini Theater, Aurangabad, Bihar 824101
                  </p>
                </div>
                <a
                  id="map-external-link-btn"
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-slate-100 p-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 transition"
                  aria-label="Open in Google Maps"
                >
                  Open App
                </a>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="aspect-16/10 w-full bg-slate-100 dark:bg-slate-800">
                <iframe
                  title="Royal Surgical Google Maps Location"
                  src={SITE_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 dark:text-slate-400">
                  Easy parking available in front of store
                </span>
                <a
                  id="map-directions-cta-btn"
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition"
                >
                  <Compass className="h-3.5 w-3.5" />
                  <span>Start Navigation</span>
                </a>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="rounded-3xl border border-rose-200 bg-rose-50/60 p-6 dark:border-rose-900/60 dark:bg-rose-950/20">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white font-bold">
                  24h
                </div>
                <div>
                  <h4 className="text-sm font-bold text-rose-950 dark:text-rose-200">
                    Urgent / Night Prescription Assistance
                  </h4>
                  <p className="text-xs text-rose-800/90 dark:text-rose-300/90 mt-1 leading-relaxed">
                    If an inpatient or family emergency requires critical surgical items or medications after store hours, message our emergency WhatsApp line: <strong>+91 {SITE_CONFIG.whatsapp}</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
