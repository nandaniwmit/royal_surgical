import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ShoppingBag, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppOrder: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Right Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-white shadow-lg hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all backdrop-blur-xs"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          id="floating-call-btn"
          href={`tel:${SITE_CONFIG.phone}`}
          className="pointer-events-auto hidden md:flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all"
          aria-label="Call Royal Surgical Store"
        >
          <Phone className="h-4 w-4" />
          <span>Call: {SITE_CONFIG.displayPhone}</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={onOpenWhatsAppOrder}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-emerald-600 px-4.5 py-3 text-sm font-bold text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all group"
          aria-label="Order medicine on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="h-5 w-5 fill-white/20" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Navigation / Quick Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 p-2 md:hidden backdrop-blur-md shadow-2xl">
        <div className="grid grid-cols-4 gap-1 text-center">
          <a
            id="mobile-sticky-call"
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <Phone className="h-4 w-4 text-sky-600 mb-0.5" />
            <span>Call Store</span>
          </a>

          <button
            id="mobile-sticky-whatsapp"
            onClick={onOpenWhatsAppOrder}
            className="flex flex-col items-center justify-center py-1.5 px-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600 mb-0.5" />
            <span>Order</span>
          </button>

          <a
            id="mobile-sticky-stock"
            href="/services"
            className="flex flex-col items-center justify-center py-1.5 px-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600"
          >
            <ShoppingBag className="h-4 w-4 text-purple-600 mb-0.5" />
            <span>Stock</span>
          </a>

          <a
            id="mobile-sticky-directions"
            href={SITE_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600"
          >
            <MapPin className="h-4 w-4 text-rose-600 mb-0.5" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </>
  );
};
