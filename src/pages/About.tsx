import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Clock,
  Building,
  UserCheck,
  Calendar,
  MessageCircle,
  Phone
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';

interface AboutProps {
  onOpenWhatsAppOrder: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppOrder }) => {
  const values = [
    {
      title: '100% Genuine Medicine Guarantee',
      desc: 'Zero tolerance for substandard or spurious drugs. Every stock batch is procured with authentic tax invoices from verified pharmaceutical manufacturers.',
      icon: ShieldCheck,
    },
    {
      title: 'Patient-First Compassion',
      desc: 'We consider each customer family. Our pharmacists take time to explain schedules, precautions, and affordable genuine options without commercial bias.',
      icon: Heart,
    },
    {
      title: 'Surgical & Hospital Readiness',
      desc: 'Maintaining ready stocks of sterile surgical sutures, dressings, cannulas, and orthopedic gear for urgent operations and trauma needs in Aurangabad.',
      icon: Award,
    },
    {
      title: 'Integrity & Fair Pricing',
      desc: 'Transparent pricing following government National Pharmaceutical Pricing Authority guidelines with honest discounts on chronic treatments.',
      icon: Target,
    },
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Foundation on Old GT Road',
      desc: 'Royal Surgical opened its doors near Gupta Mini Theater in Aurangabad with a vision to deliver authentic surgical supplies and critical medicines to local clinics.',
    },
    {
      year: '2017',
      title: 'Cold-Chain Insulin Storage Expansion',
      desc: 'Installed dedicated digital temperature-monitored refrigeration systems to guarantee the potency of vaccines, insulins, and temperature-sensitive biologicals.',
    },
    {
      year: '2020',
      title: 'Community Pandemic Support',
      desc: 'Served frontline emergency healthcare throughout lockdowns with uninterrupted stocks of N95 masks, pulse oximeters, oxygen accessories, and antiviral essentials.',
    },
    {
      year: '2023',
      title: 'Digital Home Dispatch & Diagnostics',
      desc: 'Introduced fast WhatsApp prescription ordering and expanded home medical diagnostic devices including advanced Omron digital BP monitors and glucometers.',
    },
    {
      year: 'Present',
      title: 'Progressive Web Portal & Stock Transparency',
      desc: 'Launched live online inventory tracking, allowing Aurangabad citizens to verify medicine stock instantly before visiting.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="About Royal Surgical - Pharmacy & Surgical Supplies Aurangabad"
        description="Learn about Royal Surgical's story, values, certified pharmacists, and 10+ years journey providing authentic medicines and surgical supplies in Aurangabad, Bihar."
        canonicalPath="/about"
      />

      {/* Hero / Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
            Our Legacy of Trust &amp; Healthcare
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Serving Aurangabad with Integrity Since 2014
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Your neighborhood pharmacy and surgical hub dedicated to ensuring no patient in Aurangabad ever lacks genuine medications, sterile surgical consumables, or emergency medical support.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              The Royal Surgical Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Founded on the Principle That Quality Healthcare Essentials Must Be Accessible to All
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              When <strong>Royal Surgical</strong> was established near Gupta Mini Theater on Old GT Road, local medical practitioners and families frequently struggled with inconsistent availability of hospital-grade surgical items, diagnostic devices, and genuine chronic disease medicines.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We made an uncompromised vow: every single product stocked on our shelves would be 100% authentic, procured through certified pharmaceutical supply lines, and stored with strict adherence to pharmaceutical storage protocols. Over the last decade, that steadfast dedication has made Royal Surgical a household medical name throughout Aurangabad and surrounding towns in Bihar.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-700 dark:text-slate-300">
              <div>
                <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</p>
                <p className="text-slate-500">Local Families Served</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <p className="text-2xl font-extrabold text-sky-600 dark:text-sky-400">500+</p>
                <p className="text-slate-500">Surgical &amp; Medical SKUs</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">100%</p>
                <p className="text-slate-500">Drug License Compliant</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=80"
              alt="Medical Store Pharmacy Interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-emerald-50/70 p-8 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white mb-5 shadow-md">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              To deliver authentic, affordable medicines, surgical consumables, and advanced diagnostic devices to the people of Aurangabad with unyielding commitment to patient safety, rapid response, and transparent guidance.
            </p>
          </div>

          <div className="rounded-3xl bg-sky-50/70 p-8 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white mb-5 shadow-md">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              To be recognized as Bihar’s benchmark community pharmacy and healthcare store, combining personalized pharmacist relationships with modern digital accessibility and instant stock transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Store Overview & Facilities */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              State-of-the-Art Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Store Overview &amp; Facility Infrastructure
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Designed to preserve clinical potency, hygienic handling, and swift patient assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400 mb-3">
                <Building className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Precision Cold-Chain Storage
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Medical refrigerators equipped with digital temperature monitoring between 2°C – 8°C for insulin, eye drops, biological vaccines, and delicate hormone injections.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Sterile Surgical Sundry Bay
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Dust-free, moisture-controlled shelving for gamma-sterilized surgical gloves, catheters, IV sets, gauze swabs, and disposable hospital kits.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200 dark:bg-slate-850 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 mb-3">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Licensed Pharmacist Desk
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Dedicated consultation counter providing patient counseling, dosage validation, side-effect awareness, and blood pressure trial measurements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacist & Owner Message */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50/50 p-8 sm:p-12 dark:border-emerald-900/60 dark:bg-emerald-950/20 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white text-2xl font-bold shadow-lg">
              RS
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                A Message from the Management
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                &quot;Your Family’s Health Is Our Highest Responsibility&quot;
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                &quot;In healthcare, authenticity is not an option—it is a sacred duty. At Royal Surgical, our team personally verifies every pharmaceutical batch that enters our doors. Whether you need an emergency late-night medicine or specialized surgical equipment for a patient, you have our personal commitment to speed, fairness, and absolute authenticity.&quot;
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-900 dark:text-white">
                — Head Pharmacist &amp; Store Director, Royal Surgical (Aurangabad, Bihar)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Decade of Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Our Business Timeline
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-emerald-200 dark:before:bg-emerald-900/50">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-10">
              <div className="absolute left-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-950"></div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 flex-1">
                <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 mb-1">
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="about-order-whatsapp-btn"
            onClick={onOpenWhatsAppOrder}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Connect on WhatsApp</span>
          </button>
          <Link
            id="about-contact-page-btn"
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
          >
            <Phone className="h-4 w-4" />
            <span>View Contact &amp; Location Map</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
