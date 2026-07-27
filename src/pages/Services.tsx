import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Users, 
  Heart, 
  Layers, 
  Thermometer, 
  HeartHandshake, 
  ShoppingBag,
  Info
} from 'lucide-react';
import MedicineStockChecker from '../components/MedicineStockChecker';

export default function Services() {
  const { setOrderModalOpen, openOrderWithMedicine } = useApp();

  const serviceCategories = [
    {
      title: 'Prescription Medicines',
      tagline: 'Direct, brand-certified ethical drugs',
      desc: 'Get access to 100% authentic life-saving medicines for diabetes, oncology, cardiovascular issues, neurology, and other chronic or acute ailments. Sourced directly from Sun Pharma, Abbott, Cipla, and GSK.',
      icon: ShieldCheck,
      details: [
        'Batch-verified authentic medicines',
        'Valid doctor prescription mandatory',
        'Strict batch code and batch expiration logs',
        'Cold-chain transport for temperature-sensitive drugs'
      ],
      color: 'blue'
    },
    {
      title: 'OTC Medicines',
      tagline: 'Everyday quick relief solutions',
      desc: 'We store a vast variety of safe over-the-counter painkillers, digestive tablets, cough syrups, cold lozenges, and standard first-aid gels for immediate symptom relief.',
      icon: Activity,
      details: [
        'Trusted brands like Dettol, Volini, Combiflam',
        'Free clinical advice from our registered pharmacists',
        'High-purity and fresh stock guarantees',
        'No doctor prescription required'
      ],
      color: 'emerald'
    },
    {
      title: 'Health Devices & Monitors',
      tagline: 'Precise home tracking equipment',
      desc: 'Keep check on your wellness metrics with our premium clinical monitors. We stock blood pressure readers, digital diabetes testing strips, pulse oximeters, and contact-free thermometers.',
      icon: Thermometer,
      details: [
        'Omron, Accu-Chek, and standard leading brand listings',
        'Manufacturer warranty support on every device',
        'In-store demonstration and user calibration guide',
        'Regular discount codes on diagnostic test strips'
      ],
      color: 'indigo'
    },
    {
      title: 'Baby Care Specialties',
      tagline: 'Safe, dermatologically-approved formulas',
      desc: 'Caring for your little ones with the utmost safety. Browse high-quality pediatric powders, soap-free washes, baby oils, rash creams, and organic infant milk formulas.',
      icon: Users,
      details: [
        'Sebamed, Himalaya, and Johnsons pediatric range',
        'Zero-chemical skin-friendly ingredients',
        'Infant nutrition food and baby bottles',
        'Pediatrician-recommended wellness products'
      ],
      color: 'pink'
    },
    {
      title: 'Nutritional Supplements & Home Care',
      tagline: 'Build strength and active immunity',
      desc: 'Nurture your daily health with customized vitamins, protein powders, calcium complexes, herbal immunity tonics, adult diapers, and clinical mobility support items.',
      icon: Heart,
      details: [
        'Enriching multi-vitamins and cod liver oil capsules',
        'Whey protein, Ensure, and diabetic nutritional support',
        'Immunity-boosting Ayurvedic tonics',
        'Home care products like wheel chairs, commodes and walkers'
      ],
      color: 'purple'
    },
    {
      title: 'Medical Equipment & Surgical Supplies',
      tagline: 'Hospital-grade dressings & clinical utilities',
      desc: 'Catering to home patient-care, clinics, and local nursing homes with hospital-grade dressings, antiseptic solutions, medical masks, syringes, and sterile surgical gloves.',
      icon: HeartHandshake,
      details: [
        'Sterilized gauze pads, micropore tapes, bandages',
        'N95 and 3-ply filtration masks',
        'Surgical scalpel blades, disposable syringes',
        'Clinical support products at high bulk discounts'
      ],
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-16 pb-16" id="services-page">
      
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-850 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-widest bg-brand-primary-light dark:bg-slate-900 px-3 py-1 rounded-full border border-brand-primary/10">
              Our Medicine & Device Catalog
            </span>
            <h2 className="text-4xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
              Premium Pharmacy Services & Healthcare Slabs
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              From direct prescription fulfillment of chronic medicines to daily home care diagnostic devices, browse our categorized offerings and check stock availability instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Medicine Stock Checker - Main Prominent Position */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-inventory">
        <div className="bg-brand-primary-light/35 dark:bg-slate-950/45 p-6 rounded-3xl border border-brand-primary/15 mb-10 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-brand-primary text-white rounded-2xl shrink-0 mt-1">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Instant Sourcing Guarantee</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                Can't find a medicine in the stock checker below? Don't worry. Simply snap a picture of your doctor's slip, click the WhatsApp button, and our pharmacists will source it from our central offline distributor network within 4 hours.
              </p>
            </div>
          </div>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-5 py-3 bg-slate-900 hover:bg-slate-950 dark:bg-brand-primary dark:hover:bg-brand-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Scribble Custom Order
          </button>
        </div>

        <MedicineStockChecker />
      </section>

      {/* Category-wise services description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-grid-list">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Product Slabs</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Detailed Sourcing Portfolios</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Explore the complete lists and rules governing each specialized medical category we service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {serviceCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-2xl">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-brand-blue dark:text-white">{cat.title}</h3>
                    <p className="text-xs text-brand-primary font-bold tracking-wide uppercase">{cat.tagline}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {cat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-50 dark:border-slate-850 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <Info className="w-4 h-4 text-slate-400" />
                  <span>Flat discounts applicable here</span>
                </div>
                <button
                  onClick={() => openOrderWithMedicine(cat.title)}
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-dark text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  Order Category Items
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
