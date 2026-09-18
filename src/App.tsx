import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Global hooks
import { useGlobalTracker } from './hooks/useGlobalTracker';
import { usePWAInstall } from './hooks/usePWAInstall';

// Common Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OfflineIndicator } from './components/OfflineIndicator';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { WMITModal } from './components/WMITModal';
import { IOSInstallGuide } from './components/IOSInstallGuide';

// 6 Required Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  // Initialize WMIT global analytics and session tracker
  useGlobalTracker();

  // PWA Install state
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('royal_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('royal_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('royal_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Modals state
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState<string | undefined>(undefined);
  const [isWMITModalOpen, setIsWMITModalOpen] = useState(false);

  const handleOpenWhatsAppOrder = (medName?: string) => {
    setSelectedMedicineName(medName);
    setIsWhatsAppModalOpen(true);
  };

  const handleInstallClick = () => {
    if (isIOS) {
      setShowIOSGuide(true);
    } else {
      install();
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white pb-14 md:pb-0">
        {/* Offline Status Bar */}
        <OfflineIndicator />

        {/* Global App Header */}
        <Header
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        />

        {/* Main Content Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/about"
              element={<About onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/services"
              element={<Services onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/gallery"
              element={<Gallery />}
            />
            <Route
              path="/contact"
              element={<Contact onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global App Footer */}
        <Footer
          onOpenWMITModal={() => setIsWMITModalOpen(true)}
          onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        />

        {/* Floating Actions & Sticky Mobile Bottom Bar */}
        <FloatingActions
          onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        />

        {/* WhatsApp Order Modal */}
        <WhatsAppOrderModal
          isOpen={isWhatsAppModalOpen}
          onClose={() => setIsWhatsAppModalOpen(false)}
          initialMedicineName={selectedMedicineName}
        />

        {/* WMIT Anchor Modal */}
        <WMITModal
          isOpen={isWMITModalOpen}
          onClose={() => setIsWMITModalOpen(false)}
        />

        {/* iOS PWA Install Instruction Guide */}
        <IOSInstallGuide
          isOpen={showIOSGuide}
          onClose={() => setShowIOSGuide(false)}
        />
      </div>
    </BrowserRouter>
  );
}
