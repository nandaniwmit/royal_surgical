import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowRight,
  Package,
  Activity,
  HeartPulse,
  Award,
  ChevronDown,
  Sparkles,
  Send,
  UserCheck,
  Truck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppOrder: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppOrder }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredServices = [
    {
      id: 'surgical-supplies',
      title: 'Surgical Supplies & Disposables',
      description: 'Hospital-grade sterile gloves, IV sets, sutures, cotton, surgical dressings, and disposable instruments.',
      icon: Package,
      badge: 'Hospital Grade',
    },
    {
      id: 'prescription-medicines',
      title: 'Prescription Medicines',
      description: 'Authentic cardiac, diabetic, blood pressure, neurological, and antibiotic formulations from verified pharma labs.',
      icon: HeartPulse,
      badge: '100% Genuine',
    },
    {
      id: 'health-devices',
      title: 'Health Devices & Diagnostics',
      description: 'Omron digital BP monitors, Accu-Chek glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
      icon: Activity,
      badge: 'Certified',
    },
    {
      id: 'otc-first-aid',
      title: 'OTC & First Aid Essentials',
      description: 'Instant relief analgesics, antiseptics, cough remedies, digestive gels, and complete family first-aid kits.',
      icon: ShieldCheck,
      badge: 'Instant Stock',
    },
    {
      id: 'baby-mother-care',
      title: 'Baby & Mother Healthcare',
      description: 'Infant formulas, hypoallergenic baby skincare, maternal vitamins, and pediatric wellness care.',
      icon: HeartPulse,
      badge: 'Gentle Care',
    },
    {
      id: 'home-healthcare',
      title: 'Home & Elderly Care Aids',
      description: 'Wheelchairs, walking sticks, adult diapers, compression stockings, and patient rehabilitation accessories.',
      icon: Award,
      badge: 'Supportive',
    },
  ];

  const featuredProducts = [
    {
      name: 'Omron Digital BP Monitor HEM-7120',
      category: 'Diagnostic Device',
      mrp: '₹2,150',
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sterile Surgical Examination Gloves',
      category: 'Surgical Supply',
      mrp: '₹650 / Box',
      tag: 'Hospital Choice',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Accu-Chek Active Glucose Test Strips',
      category: 'Diabetes Care',
      mrp: '₹975 / 50 Strips',
      tag: 'High Accuracy',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Betadine Antiseptic Ointment 20g',
      category: 'First Aid & Wound Care',
      mrp: '₹125',
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const faqs = [
    {
      q: 'Do you deliver genuine medicines to homes in Aurangabad?',
      a: 'Yes, Royal Surgical provides fast WhatsApp-based doorstep delivery across Aurangabad town and nearby localities. Simply send your medicine name or photo of your doctor’s prescription.',
    },
    {
      q: 'Are all surgical instruments and disposables sterile and certified?',
      a: 'Absolutely. We stock certified hospital-grade products from reputable manufacturers including Romsons, BD, and top surgical houses. Every batch is sealed, sterilized, and quality-inspected.',
    },
    {
      q: 'Can I verify if my required medicine is in stock before coming?',
      a: 'Yes! Use our Live Medicine Stock Checker right on this website, or drop a quick WhatsApp message to +91 95720 75812. Our pharmacist will confirm stock in seconds.',
    },
    {
      q: 'Where exactly is Royal Surgical located in Aurangabad?',
      a: 'We are situated on Old GT Road, right near Gupta Mini Theater in Aurangabad, Bihar 824101. You can click "Get Directions" for instant Google Maps navigation.',
    },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      <SEO
        title="Royal Surgical - Your Trusted Medical Store & Pharmacy"
        description="Royal Surgical in Aurangabad, Bihar: Genuine medicines, hospital surgical goods, OTC essentials, diagnostic devices & fast WhatsApp home delivery."
        canonicalPath="/"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&auto=format&fit=crop&q=80"
            alt="Healthcare background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Aurangabad&apos;s Trusted Pharmacy &amp; Surgical Hub Since 2014</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Genuine Medicines &amp; <span className="text-emerald-400">Surgical Supplies</span> You Can Rely On.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Hero Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-call-now-btn"
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-500 active:scale-95 transition-all min-h-[44px]"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              <button
                id="hero-whatsapp-order-btn"
                onClick={() => onOpenWhatsAppOrder()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-95 transition-all min-h-[44px]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                id="hero-get-directions-btn"
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all min-h-[44px]"
              >
                <MapPin className="h-4 w-4 text-rose-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Fast Stats */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs">
              <div>
                <p className="text-2xl font-extrabold text-emerald-400">100%</p>
                <p className="text-slate-400">Authentic Batch Sourced</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-sky-400">10+ Yrs</p>
                <p className="text-slate-400">Serving Aurangabad</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-amber-400">Fast</p>
                <p className="text-slate-400">WhatsApp Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-slate-200/80 dark:bg-slate-900 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>About Royal Surgical</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Committed to Authenticity &amp; Compassionate Care in Bihar
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Located on Old GT Road, near Gupta Mini Theater, <strong>Royal Surgical</strong> is Aurangabad’s premier one-stop destination for genuine pharmaceuticals, specialized surgical sundries, diagnostic apparatus, and day-to-day healthcare commodities.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                We believe that healing begins with trust. That is why every single tablet, syringe, bandage, and medical equipment in our store is directly acquired from certified corporate pharma distribution channels with temperature-regulated storage.
              </p>

              <div className="pt-2">
                <Link
                  id="about-view-more-btn"
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 group"
                >
                  <span>Learn More About Our Journey &amp; Values</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80"
                  alt="Royal Surgical Pharmacy Shelf"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-emerald-600 p-5 text-white shadow-xl hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Store Address</p>
                <p className="text-sm font-bold mt-1">Old GT Rd, near Gupta Mini Theater</p>
                <p className="text-xs text-emerald-100 mt-0.5">Aurangabad, Bihar 824101</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Max 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Comprehensive Healthcare Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Healthcare Services
            </h2>
          </div>
          <Link
            id="services-view-all-btn"
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
                  {service.description}
                </p>
                <button
                  id={`order-service-${service.id}`}
                  onClick={() => onOpenWhatsAppOrder(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Live Medicine Stock Checker Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker
          onSelectMedicine={(med) => onOpenWhatsAppOrder(med)}
          maxItems={6}
        />
        <div className="text-center mt-4">
          <Link
            id="view-full-inventory-btn"
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Explore Full Inventory &amp; Categorized Stock on Services Page</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              The Royal Surgical Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Why Healthcare Professionals &amp; Families Choose Us
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Serving Aurangabad with uncompromised ethics, medical expertise, and rapid responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                100% Genuine Certified Medicines
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Every medication is traced to registered manufacturers. No counterfeit or unauthorized generic substitutes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400 mb-4">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Hospital-Grade Surgical Stock
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Supplying trusted surgical instruments, sutures, sterile disposables, and orthopedic splints to clinics and doctors.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400 mb-4">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Swift Local WhatsApp Delivery
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Patients who cannot travel can quickly message their doctor’s prescription for reliable home delivery across Aurangabad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Reliable Daily Hours &amp; Emergency Aid
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Open from 8:00 AM to 10:30 PM with active WhatsApp assistance for after-hours emergency prescription coordination.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400 mb-4">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Qualified &amp; Courteous Pharmacists
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Accurate dosage guidance, drug interaction warnings, and clear instructions for elderly patients and chronic care management.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400 mb-4">
                <HeartPulse className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Transparent &amp; Fair Pricing
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Standard MRP discounts on critical chronic care therapies, diabetic care supplies, and bulk surgical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Popular Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Healthcare Products
            </h2>
          </div>
          <Link
            id="featured-products-view-more"
            to="/gallery"
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            <span>View Store Gallery &amp; Photos</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                  {prod.tag}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {prod.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 line-clamp-2">
                    {prod.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    {prod.mrp}
                  </span>
                  <button
                    id={`order-product-preview-${idx}`}
                    onClick={() => onOpenWhatsAppOrder(prod.name)}
                    className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Preview (Local Verified Sentiments from Aurangabad) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Verified Community Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            What Patients &amp; Doctors Say
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Summaries of public reviews from Aurangabad residents and visiting clinical staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 italic">
              &quot;Royal Surgical has always had surgical gloves, IV cannulas, and specific cardiac medicines that were unavailable elsewhere in the district. Their prompt service on Old GT Road is invaluable.&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Dr. A. K. Verma</p>
                <p className="text-[11px] text-slate-500">Aurangabad Clinic</p>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                Verified Doctor
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 italic">
              &quot;I ordered my father&apos;s regular diabetes and BP medicines over WhatsApp. The pharmacist answered within two minutes, verified the prescription, and delivered it safely to our home.&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Rajeev Ranjan</p>
                <p className="text-[11px] text-slate-500">Old GT Road Resident</p>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                WhatsApp Order
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 italic">
              &quot;Bought an Omron BP Monitor and nebulizer for our household. The shop staff explained how to measure correctly and provided warranty stamping with fair billing.&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Sunita Devi</p>
                <p className="text-[11px] text-slate-500">Aurangabad Local</p>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                Store Customer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <button
                id={`faq-toggle-${idx}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-4.5 text-left text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                    openFaq === idx ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="border-t border-slate-100 px-4.5 pb-4 pt-2 text-xs leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Pharmacist Health Journal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Latest Daily Health Tips
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Practical medical advice from our licensed pharmacists in Aurangabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Chronic Care
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
              Managing Seasonal Blood Pressure Fluctuations
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Regular daily self-monitoring with a certified upper-arm BP device prevents undetected hypertensive spikes. Always test resting seated for 5 minutes.
            </p>
            <span className="text-[11px] text-slate-400 font-medium">By Royal Surgical Pharmacist • 3 min read</span>
          </article>

          <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              First Aid
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
              Essential Dressing Protocol for Minor Wounds
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Clean with normal saline, apply povidone-iodine antiseptic, and cover with sterile absorbent gauze. Avoid cotton wool directly touching bleeding surfaces.
            </p>
            <span className="text-[11px] text-slate-400 font-medium">By Royal Surgical Staff • 4 min read</span>
          </article>

          <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Medication Safety
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
              Why Completing Antibiotic Courses Is Mandatory
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Stopping an antibiotic prematurely when symptoms improve fosters dangerous bacterial resistance. Finish the entire prescribed duration.
            </p>
            <span className="text-[11px] text-slate-400 font-medium">By Royal Surgical Pharmacy • 3 min read</span>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-800 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Need Medicine or Surgical Supplies Dispatched Now?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 font-normal leading-relaxed">
              Skip the queue. Send your prescription or medicine name on WhatsApp. Our registered pharmacists will inspect, pack, and prepare your dispatch immediately.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="cta-whatsapp-order-btn"
                onClick={() => onOpenWhatsAppOrder()}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-800 shadow-md hover:bg-emerald-50 active:scale-95 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Start WhatsApp Order</span>
              </button>
              <a
                id="cta-call-btn"
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Direct Call: {SITE_CONFIG.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Stay Updated on Healthcare Tips &amp; Stock Alerts
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Receive monthly wellness alerts, seasonal health advice, and stock announcements for critical medications in Aurangabad.
          </p>

          <form onSubmit={handleNewsletter} className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              id="newsletter-email-input"
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Subscribe</span>
            </button>
          </form>

          {subscribed && (
            <p className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Thank you for subscribing to Royal Surgical health updates!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
