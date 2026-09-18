import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenWMIT: () => void;
  onOpenWhatsAppOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWMIT, onOpenWhatsAppOrder }) => {
  // Step 11 Tracker Hook implementation preserved exactly
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init',
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change',
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Trust Points */}
      <div className="border-b border-slate-800/80 bg-slate-950/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">100% Genuine Medicines</p>
                <p>Direct sourced from licensed pharma distributors</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-800/50">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Daily 8:00 AM - 10:30 PM</p>
                <p>Open 7 days a week for community healthcare</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Prime Landmark Location</p>
                <p>Old GT Rd, near Gupta Mini Theater</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800/50">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">WhatsApp Fast Delivery</p>
                <p>Quick prescription dispatch across Aurangabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Business Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-lg">
                RS
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Royal Surgical</h3>
                <p className="text-xs text-emerald-400 font-medium">
                  Pharmacy &amp; Surgical Medical Store
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Your trusted medical store for genuine medicines, hospital surgical goods, orthopedic aids, diagnostics and baby care in Aurangabad, Bihar. Dedicated to genuine care and affordable healthcare essentials since 2014.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-emerald-400 transition-colors">
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              <p>Drug License No: {SITE_CONFIG.drugLicenseNumber}</p>
              <p>GSTIN: {SITE_CONFIG.gstNumber}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors">
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact &amp; Map
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition-colors">
                  Customer / Staff Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Surgical Supplies &amp; Gauze</li>
              <li>Prescription Medicines</li>
              <li>OTC &amp; First Aid Essentials</li>
              <li>Blood Pressure &amp; Glucometers</li>
              <li>Orthopedic &amp; Rehab Aids</li>
              <li>Baby &amp; Mother Healthcare</li>
              <li>Nutritional Supplements</li>
            </ul>
          </div>

          {/* Column 4: Working Hours & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Store Hours</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">Monday - Saturday:</p>
                <p>{SITE_CONFIG.workingHours.weekdays}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Sunday:</p>
                <p>{SITE_CONFIG.workingHours.sunday}</p>
              </div>
              <div className="pt-1">
                <p className="font-semibold text-emerald-400">Emergency Prescription:</p>
                <p className="text-[11px]">24/7 on WhatsApp: +91 {SITE_CONFIG.whatsapp}</p>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs font-semibold text-slate-300 mb-2">Connect With Us</p>
              <div className="flex gap-2">
                <a
                  id="footer-social-facebook"
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition"
                  aria-label="Royal Surgical Facebook"
                >
                  f
                </a>
                <a
                  id="footer-social-instagram"
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition"
                  aria-label="Royal Surgical Instagram"
                >
                  ig
                </a>
                <a
                  id="footer-social-justdial"
                  href={SITE_CONFIG.socials.justdial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition"
                  aria-label="Royal Surgical JustDial"
                >
                  jd
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms &amp; Conditions</span>
            <span>•</span>
            <span>Healthcare Disclaimer</span>
            <span>•</span>
            <span>Prescription Drug Compliance</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Prescription items dispensed solely upon presenting a valid Registered Medical Practitioner prescription.
          </div>
        </div>

        {/* MANDATORY COPYRIGHT & WMIT POPUP TRIGGER SECTION */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto">
            <p className="order-2 sm:order-1">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
            </p>

            {/* MANDATORY POPUP TRIGGER PRESERVED EXACTLY IN CENTER */}
            <div className="order-1 sm:order-2">
              <a
                href="#"
                className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenWMIT();
                }}
              >
                Developed by WMIT
              </a>
            </div>

            <p className="order-3 text-[11px] text-slate-500">
              Aurangabad, Bihar 824101
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
