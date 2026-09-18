import React from 'react';
import { Share2, PlusSquare, CheckCircle, X, Smartphone } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
  appName?: string;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({
  isOpen,
  onClose,
  appName = "Royal Surgical",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-install-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <Smartphone className="h-6 w-6" />
            </div>
            <div>
              <h3 id="ios-install-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Add to Home Screen
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Install {appName} on iPhone or iPad
              </p>
            </div>
          </div>
          <button
            id="close-ios-guide-btn"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
            aria-label="Close installation guide"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 font-semibold text-xs">
              1
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap the <Share2 className="h-4 w-4 text-blue-600 dark:text-blue-400 inline" /> Share button
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Located at the bottom bar in Safari on iPhone (or top right on iPad).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300 font-semibold text-xs">
              2
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Select <PlusSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400 inline" /> &quot;Add to Home Screen&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Scroll down the action sheet menu to find this option.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300 font-semibold text-xs">
              3
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 inline" /> &quot;Add&quot; in top right
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Royal Surgical will launch instantly from your phone app screen with fast access!
              </p>
            </div>
          </div>
        </div>

        <button
          id="understood-ios-guide-btn"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-[0.99] transition-all"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
};
