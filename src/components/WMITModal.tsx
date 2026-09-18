import React from 'react';
import { X, Globe, Sparkles, Code2, PhoneCall, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WMITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITModal: React.FC<WMITModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wmit-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <button
          id="close-wmit-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
            <Code2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 id="wmit-title" className="text-xl font-bold text-slate-900 dark:text-white">
                WebMaker IT Solutions
              </h3>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                WMIT
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enterprise Digital Engineering & Web Architectures
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p>
            Royal Surgical web portal was crafted by <strong>WebMaker IT Solutions (WMIT)</strong> with high-performance React architecture, local SEO optimization, PWA standalone mobile installation, and instant WhatsApp ordering integrations.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Full-Stack Web & PWA</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Local SEO & Google Maps</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>CRM & Lead Automation</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Pharma & Medical Portals</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <a
            id="wmit-contact-link"
            href="https://crm.webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <Globe className="h-4 w-4" />
            <span>Visit WMIT CRM Portal</span>
          </a>
          <button
            id="wmit-close-btn"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
