import React, { useState } from 'react';
import {
  Package,
  HeartPulse,
  Activity,
  ShieldCheck,
  Baby,
  Sparkles,
  Stethoscope,
  Smile,
  Home,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Search
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppOrder: (serviceOrMedicine?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppOrder }) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  const serviceCategories = [
    {
      id: 'surgical-equipment',
      title: 'Surgical Supplies & Hospital Equipment',
      category: 'Surgical',
      badge: 'Hospital & OT Certified',
      icon: Package,
      summary: 'Comprehensive surgical consumables, surgical instruments, sterilization wraps, and hospital ward supplies.',
      details: [
        'Pre-powdered & powder-free sterile surgical gloves (Sizes 6.5, 7.0, 7.5, 8.0)',
        'Surgical sutures (Vicryl, Monocryl, Silk, Prolene, Chromic Catgut)',
        'IV Cannulas with injection ports (18G, 20G, 22G, 24G)',
        'Absorbent surgical cotton, sterile gauze swabs, and roller bandages',
        'Scalpel blades, disposable syringes (2ml, 5ml, 10ml, 50ml), and infusion sets',
        'Foley catheters, urine collection bags, and suction catheters'
      ],
      popularBrands: 'Romsons, BD, Royal Surgical Elite, Sutures India, Polymed'
    },
    {
      id: 'prescription-medicines',
      title: 'Prescription Medicines & Chronic Care',
      category: 'Prescription',
      badge: '100% Genuine Certified',
      icon: HeartPulse,
      summary: 'Critical daily treatments for cardiovascular, hypertension, diabetes, neurological, and respiratory ailments.',
      details: [
        'Antihypertensives: Telmisartan, Amlodipine, Olmesartan, Atenolol, Enalapril',
        'Diabetic Care: Metformin, Glimepiride, Sitagliptin, Vildagliptin, Empagliflozin',
        'Cardiac Formulations: Atorvastatin, Rosuvastatin, Clopidogrel, Aspirin',
        'Physician Prescribed Antibiotics: Amoxicillin-Clavulanate, Azithromycin, Cefixime',
        'Gastro & Acid Reflux: Pantoprazole, Rabeprazole, Esomeprazole with Domperidone',
        'Thyroid management: Levothyroxine formulations (25mcg to 150mcg)'
      ],
      popularBrands: 'Sun Pharma, Cipla, Torrent, Glenmark, Abbott, Dr. Reddy’s'
    },
    {
      id: 'otc-medicines',
      title: 'OTC Medicines & First Aid Remedies',
      category: 'OTC',
      badge: 'Instant Over-The-Counter',
      icon: ShieldCheck,
      summary: 'Quick-relief everyday remedies for headaches, seasonal fevers, acidity, pain relief, and family first-aid.',
      details: [
        'Antipyretics & Analgesics: Dolo 650, Crocin Advance, Combiflam, Paracetamol',
        'Antiseptics & Wound Care: Betadine 10% Ointment, Dettol, Savlon, Hydrogen Peroxide',
        'Topical Pain Relief: Volini Spray/Gel, Moov, Iodex, Fast Relief ointment',
        'Digestive Care: Digene Gel, Eno Sachets, Pudin Hara, Gelusil Tablets',
        'Cold, Cough & Allergy: Cetirizine, Levocetirizine, Honitus Syrup, Vicks Vaporub',
        'Oral Rehydration: Electral WHO-formula ORS, Enerzal energy drink'
      ],
      popularBrands: 'Micro Labs, Win-Medicare, Sun Pharma, Dabur, Reckitt'
    },
    {
      id: 'health-devices',
      title: 'Health Devices & Diagnostic Monitors',
      category: 'Diagnostics',
      badge: 'Clinically Validated',
      icon: Activity,
      summary: 'Precision home health apparatus allowing continuous monitoring of vital parameters with brand warranties.',
      details: [
        'Digital Blood Pressure Monitors (Omron IntelliSense, Dr. Morepen, Hicks)',
        'Blood Glucose Glucometers & Sterile Test Strips (Accu-Chek Active, Contour TS)',
        'Handheld Ultrasonic & Mesh Nebulizers for asthma management',
        'Fingertip Pulse Oximeters with OLED SpO2 & PR displays',
        'Waterproof Digital Clinical Thermometers & Infrared forehead scanners',
        'Steam inhalers, hot water bottles, and electric heating pads'
      ],
      popularBrands: 'Omron Healthcare, Roche Accu-Chek, Dr. Morepen, Hicks, Beurer'
    },
    {
      id: 'baby-mother-care',
      title: 'Baby Care & Maternal Healthcare',
      category: 'Baby Care',
      badge: 'Gentle & Pediatric Grade',
      icon: Baby,
      summary: 'Hypoallergenic baby wellness products, certified infant nutritional formula, and maternal postpartum essentials.',
      details: [
        'Infant Formulas: Dexolac, Similac, Lactogen, Nan Pro Stage 1 & 2',
        'Pediatric Skincare: Sebamed Baby Wash, Cetaphil Baby Daily Lotion, Johnsons Baby',
        'Diaper Rash Creams: Sudocrem, Sebamed Rash Cream, Zinc Oxide Ointment',
        'Feeding accessories: Anti-colic feeding bottles, sterilizers, silicone teethers',
        'Maternal Nutritional Supplements: Folic acid, prenatal DHA, lactation granules',
        'Maternity pads, breast pumps, and postpartum compression binders'
      ],
      popularBrands: 'Danone Nutricia, Abbott Pediatric, Sebamed, Cetaphil, Chicco'
    },
    {
      id: 'home-care-rehab',
      title: 'Home Care & Elderly Mobility Aids',
      category: 'Home Care',
      badge: 'Rehabilitation Support',
      icon: Home,
      summary: 'Supportive aids designed to assist recovering patients, seniors, and bedridden individuals at home.',
      details: [
        'Foldable lightweight wheelchairs and commode chairs',
        'Adjustable aluminum walking sticks, quadrupods, and walker frames',
        'Adult incontinence pull-up diapers and bed protector underpads',
        'Orthopedic aids: Lumbar sacral belts, cervical collars, knee caps, rib belts',
        'Silicone anti-bedsore air mattresses with alternating pressure pumps',
        'Oxygen nasal cannulas, oxygen mask sets, and flowmeters'
      ],
      popularBrands: 'Tynor Orthotics, Flamingo Health, Friends Adult Diapers, KosmoCare'
    },
    {
      id: 'supplements-wellness',
      title: 'Nutritional Supplements & Immunity Boosters',
      category: 'Supplements',
      badge: 'Dietary & Wellness',
      icon: Sparkles,
      summary: 'High-potency multivitamins, calcium complexes, protein powders, and herbal wellness boosters.',
      details: [
        'Bone Strength: Shelcal 500 Calcium with Vit D3, Gemcal, Cipcal',
        'Nerve & Energy: Neurobion Forte, Becosules Z, Supradyn Daily Multivitamin',
        'Immunity & Antioxidants: Limcee 500mg Chewable Vit C, Zincovit Tablets/Syrup',
        'Protein Supplements: Ensure Diabetes Care, Protinex Mama, Threptin Disks',
        'Heart & Omega: Fish Oil Omega-3 softgels, Coenzyme Q10 capsules',
        'Ayurvedic Tonics: Chyawanprash, Ashwagandha, Giloy, Liv-52 Liver Care'
      ],
      popularBrands: 'Torrent, Abbott Nutrition, Himalaya, Dabur, Apex Laboratories'
    },
    {
      id: 'personal-care',
      title: 'Personal Care & Clinical Hygiene',
      category: 'Personal Care',
      badge: 'Everyday Hygiene',
      icon: Smile,
      summary: 'Dermatological skincare, oral hygiene, anti-fungal powders, and hospital-grade surface sanitizers.',
      details: [
        'Dermatological cleansers: Cetaphil Gentle Skin Cleanser, Episoft, Moiz Cleansing',
        'Anti-fungal powders: Candid Powder, Clocip, Abzorb Dusting Powder',
        'Specialty Oral Care: Sensodyne Toothpaste, Hexidine Antiseptic Mouthwash',
        'Medicated Shampoos: Scalpe Plus, Nizral 2% Ketoconazole for dandruff',
        'Hospital disinfectants: 70% Isopropyl Alcohol Rub, Chlorhexidine scrubs',
        'Moisturizing Lotions: Moisturex Soft, Nivea, Venusia Dermacare'
      ],
      popularBrands: 'Glenmark Derma, Cipla Health, Johnson & Johnson, Curatio'
    }
  ];

  const filteredServices = activeCategoryTab === 'All'
    ? serviceCategories
    : serviceCategories.filter(s => s.category === activeCategoryTab);

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Healthcare Services & Surgical Catalog - Royal Surgical"
        description="Explore Royal Surgical's full range of genuine prescription medicines, surgical equipment, diagnostic devices, baby care, and home care aids in Aurangabad, Bihar."
        canonicalPath="/services"
      />

      {/* Hero / Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
            Aurangabad Comprehensive Medical Store
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Healthcare &amp; Surgical Services
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            From critical cardiac prescription medications to sterile operating theatre disposables and home elderly care apparatus, Royal Surgical provides complete healthcare provisioning.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Dedicated Live Medicine Stock Checker Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Exclusive Feature
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Searchable Medicine Availability Checker
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Instantly search real-time stock levels of medicines, surgical supplies, and diagnostic monitors before placing your order.
          </p>
        </div>

        <MedicineStockChecker
          onSelectMedicine={(med) => onOpenWhatsAppOrder(med)}
        />
      </section>

      {/* Services Tabs and Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Category-Wise Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Detailed Healthcare Departments
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {['All', 'Surgical', 'Prescription', 'OTC', 'Diagnostics', 'Baby Care', 'Home Care', 'Supplements'].map((tab) => (
              <button
                key={tab}
                id={`services-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategoryTab(tab)}
                className={`rounded-xl px-3.5 py-1.5 font-semibold transition-all ${
                  activeCategoryTab === tab
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-emerald-500/40 transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-4">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
                      Key Items &amp; Formulations Available:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-6">
                    <strong>Leading Brands:</strong> {service.popularBrands}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    <span>Stored under certified temperature controls</span>
                  </div>
                  <button
                    id={`cta-service-card-${service.id}`}
                    onClick={() => onOpenWhatsAppOrder(service.title)}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4.5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 active:scale-95 shadow-xs transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire / Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prescription Safety Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-amber-50 p-6 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex flex-col sm:flex-row items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white font-bold">
            Rx
          </div>
          <div className="space-y-1 text-xs text-amber-900 dark:text-amber-200">
            <h4 className="font-bold text-sm text-amber-950 dark:text-amber-100">
              Government Regulatory Compliance on Prescription Drugs (Schedule H &amp; H1)
            </h4>
            <p className="leading-relaxed">
              Schedule H and H1 medications (such as antibiotics, psychotropics, and cardiac vasodilators) are dispensed exclusively upon presentation of a valid physical or digital prescription from a Registered Medical Practitioner (RMP). You may safely photograph and send your prescription via our WhatsApp portal for validation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
