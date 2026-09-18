import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Moon, Sun, ShieldCheck, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenWhatsAppOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenWhatsAppOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <>
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Emergency Medicine Dispatch & Consultation
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Old GT Rd, near Gupta Mini Theater, Aurangabad, Bihar
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="top-call-link"
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>{SITE_CONFIG.displayPhone}</span>
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Open 8:00 AM - 10:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 shadow-md backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link
              id="header-brand-logo"
              to="/"
              className="flex items-center gap-3 focus:outline-hidden group"
              aria-label="Royal Surgical Home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-600 text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Royal <span className="text-emerald-600 dark:text-emerald-400">Surgical</span>
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Pharmacy &amp; Surgical Store • Aurangabad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60'
                        : 'text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* PWA Install Button */}
              <PWAInstallButton variant="header" />

              {/* Dark Mode Toggle */}
              <button
                id="dark-mode-toggle-btn"
                onClick={() => setDarkMode((prev) => !prev)}
                className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* WhatsApp Order Button */}
              <button
                id="header-whatsapp-order-btn"
                onClick={onOpenWhatsAppOrder}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile Hamburger & Dark Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-dark-mode-toggle"
                onClick={() => setDarkMode((prev) => !prev)}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 dark:border-slate-800 dark:bg-slate-900 shadow-xl animate-in slide-in-from-top-2"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-5 space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* Mandatory Add to Home Button */}
              <PWAInstallButton variant="mobile" />

              <button
                id="mobile-order-whatsapp-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppOrder();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Order Medicine on WhatsApp</span>
              </button>

              <a
                id="mobile-call-link"
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>Call Store ({SITE_CONFIG.displayPhone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
