import React, { useState } from 'react';
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Camera,
  MapPin,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Store Front View & Signage',
      category: 'Store View',
      description: 'Prominent medical storefront located on Old GT Road near Gupta Mini Theater in Aurangabad.',
      url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=1200&auto=format&fit=crop&q=80',
      caption: 'Main storefront entrance on Old GT Road, easily accessible with parking.',
    },
    {
      id: 2,
      title: 'Hygienic Medicine Shelving & Storage',
      category: 'Medicine Shelves',
      description: 'Systematically categorized pharmaceutical racks organized alphabetically by pharmacological generic salt.',
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&auto=format&fit=crop&q=80',
      caption: 'Temperature-controlled medicine storage ensuring 100% molecular stability.',
    },
    {
      id: 3,
      title: 'Surgical Disposables & Hospital Stock',
      category: 'Surgical',
      description: 'Sealed boxes of sterile surgical gloves, disposable syringes, infusion cannulas, and surgical dressing rolls.',
      url: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1200&auto=format&fit=crop&q=80',
      caption: 'Gamma-sterilized surgical equipment for local clinics and hospitals.',
    },
    {
      id: 4,
      title: 'Home Diagnostic Equipment Display',
      category: 'Equipment',
      description: 'Omron IntelliSense digital BP monitors, Accu-Chek glucometers, ultrasonic nebulizers, and pulse oximeters.',
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format&fit=crop&q=80',
      caption: 'Clinically calibrated home health diagnostic apparatus with warranty.',
    },
    {
      id: 5,
      title: 'Cold-Chain Insulin & Biologicals Fridge',
      category: 'Interior',
      description: 'Dedicated 2°C – 8°C pharmaceutical refrigerator ensuring the viability of insulins, vaccines, and biologics.',
      url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=1200&auto=format&fit=crop&q=80',
      caption: 'Continuous digital cold-chain temperature monitoring system.',
    },
    {
      id: 6,
      title: 'Dispensing Counter & Patient Care Desk',
      category: 'Interior',
      description: 'Professional pharmacist dispensing counter equipped with digital billing and prescription validation software.',
      url: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&auto=format&fit=crop&q=80',
      caption: 'Clear consultation desk where pharmacists verify dosages and explain regimens.',
    },
    {
      id: 7,
      title: 'Orthopedic Support & Rehabilitation Section',
      category: 'Equipment',
      description: 'Tynor lumbo-sacral belts, cervical collars, knee braces, wrist splints, and aluminum mobility sticks.',
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80',
      caption: 'Comprehensive rehabilitation and physiotherapy support gear.',
    },
    {
      id: 8,
      title: 'Maternal & Baby Wellness Care Aisle',
      category: 'Products',
      description: 'Infant formulas, Sebamed & Cetaphil hypoallergenic pediatric skincare, and maternal supplements.',
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
      caption: 'Pediatrician-recommended nutrition and sensitive infant care items.',
    },
    {
      id: 9,
      title: 'Family First Aid & Emergency Remedies',
      category: 'Products',
      description: 'Instant antiseptics, povidone-iodine ointments, burn gels, cotton bandages, and WHO-formula ORS electrolytes.',
      url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&auto=format&fit=crop&q=80',
      caption: 'Ready emergency first-aid boxes and topical recovery remedies.',
    },
  ];

  const categories = ['All', 'Store View', 'Interior', 'Medicine Shelves', 'Surgical', 'Equipment', 'Products'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Store Gallery & Facilities - Royal Surgical Aurangabad"
        description="View photos of Royal Surgical pharmacy storefront, medicine shelves, sterile surgical inventory, diagnostic equipment, and patient care counter in Aurangabad, Bihar."
        canonicalPath="/gallery"
      />

      {/* Hero / Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
            Store Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Royal Surgical Store Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a visual tour inside our medical store on Old GT Road, Aurangabad. View our systematic inventory, cold-chain storage, surgical supply bays, and modern diagnostic display.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Filter className="h-4 w-4 text-emerald-600" />
            <span>Filter Gallery:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-xl transition-all dark:border-slate-800 dark:bg-slate-900 cursor-pointer"
              onClick={() => setActiveImageIndex(idx)}
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>

              <div className="p-4">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-black max-h-[70vh] w-full flex items-center justify-center">
              <img
                src={filteredItems[activeImageIndex].url}
                alt={filteredItems[activeImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white hover:bg-slate-900 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white hover:bg-slate-900 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Caption Card */}
            <div className="mt-4 w-full rounded-xl bg-slate-900/90 p-4 text-white border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {filteredItems[activeImageIndex].category}
                </span>
                <span className="text-xs text-slate-400">
                  {activeImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-base font-bold mt-1">
                {filteredItems[activeImageIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredItems[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
