import React, { useState } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  variant?: 'header' | 'mobile' | 'footer';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running as an installed PWA, do not display
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Fallback for browsers without beforeinstallprompt or desktop
      setShowIOSGuide(true);
    }
  };

  if (installSuccess) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        <Check className="h-4 w-4 text-emerald-600" />
        <span>Installed!</span>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <>
        <button
          id="pwa-install-mobile-btn"
          onClick={handleInstallClick}
          aria-label="Add Royal Surgical to Home Screen"
          className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:from-emerald-700 hover:to-teal-700 active:scale-95 transition-all min-h-[44px] ${className}`}
        >
          <span className="text-base">📲</span>
          <span>Add to Home</span>
          <Sparkles className="h-4 w-4 opacity-75" />
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  return (
    <>
      <button
        id="pwa-install-header-btn"
        onClick={handleInstallClick}
        aria-label="Add Royal Surgical to Home Screen"
        className={`group relative inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs hover:bg-emerald-100 hover:border-emerald-600 dark:border-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 dark:hover:bg-emerald-900/80 transition-all min-h-[38px] ${className}`}
      >
        <span className="text-sm transition-transform group-hover:scale-110">📲</span>
        <span>Add to Home</span>
      </button>
      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
