import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Phone, 
  Send, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Truck, 
  Clock, 
  Activity, 
  Search, 
  CheckCircle,
  HelpCircle,
  Calendar,
  Sparkles,
  BookOpen,
  Mail
} from 'lucide-react';
import MedicineStockChecker from '../components/MedicineStockChecker';

export default function Home() {
  const { setOrderModalOpen } = useApp();

  const servicesPreview = [
    { id: 1, title: 'Prescription Medicines', desc: '100% genuine medications sourced directly from verified global manufacturers.', icon: ShieldCheck },
    { id: 2, title: 'OTC Healthcare Products', desc: 'Pain relievers, cold remedies, digestive health, and everyday wellness essentials.', icon: Activity },
    { id: 3, title: 'Diagnostics & Health Devices', desc: 'Premium blood pressure monitors, glucose meters, pulse oximeters, and more.', icon: Sparkles },
    { id: 4, title: 'Baby Care Specialties', desc: 'Pediatric vitamins, organic baby washes, safe powders, and premium infant formulas.', icon: Users },
    { id: 5, title: 'Surgical & Wound Care', desc: 'Hospital-grade dressings, antiseptic liquids, bandages, and surgical tools.', icon: CheckCircle },
    { id: 6, title: 'Nutritional Supplements', desc: 'Immunity boosters, multivitamin formulations, and specialized protein supplements.', icon: HeartIcon }
  ];

  const benefits = [
    { title: '100% Genuine Medicines', desc: 'Every tablet and device undergoes rigorous sourcing and batch checks to guarantee purity.', icon: ShieldCheck },
    { title: 'Flat 10%+ Prescriptions Discount', desc: 'Enjoy high-affordability care with flat discount slabs on necessary medicine lists.', icon: Sparkles },
    { title: 'Super-Fast Home Delivery', desc: 'Convenient medication drop-offs directly to your doorstep in AP Colony and greater Gaya.', icon: Truck },
    { title: 'Certified Pharmacist Guidance', desc: 'Experienced professionals available for medicine counseling and dosage questions.', icon: Users }
  ];

  const featuredProducts = [
    { name: 'Paracetamol 650mg (Dolo)', brand: 'Micro Labs', price: '₹34.20', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300', tag: 'OTC Medicine' },
    { name: 'Omron HEM-7120 BP Monitor', brand: 'Omron', price: '₹2450.00', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300', tag: 'Health Devices' },
    { name: 'Limcee Vitamin C 500mg', brand: 'Abbott', price: '₹25.50', image: 'https://images.unsplash.com/photo-1616679911721-eff6eec18fcd?auto=format&fit=crop&q=80&w=300', tag: 'Supplements' },
    { name: 'Dettol Antiseptic 500ml', brand: 'Reckitt Benckiser', price: '₹218.00', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300', tag: 'Personal Care' }
  ];

  const reviewsPreview = [
    { name: 'Rajesh Kumar', role: 'AP Colony Resident', rating: 5, comment: 'Excellent store. Highly professional staff and I got a flat discount on all my regular blood pressure and diabetic medicines. Aarush is definitely my first choice in Gaya.' },
    { name: 'Preeti Sharma', role: 'Local Customer', rating: 5, comment: 'Very fast home delivery! Ordered my grandmother\'s baby powder and health device over WhatsApp and it reached within an hour. Highly recommended!' }
  ];

  const faqsPreview = [
    { q: 'How can I order medicines online?', a: 'You can search for the medicine in our stock checker, click "Order", and fill in the WhatsApp order form. Our pharmacist will verify and confirm via chat.' },
    { q: 'Is a doctor\'s prescription mandatory?', a: 'For Schedule H and other prescription-only medications, a valid doctor\'s prescription is strictly required before we can dispense.' }
  ];

  const healthTips = [
    { title: '5 Vital Health Monitors for Every Home', excerpt: 'Having essential tracking devices like a BP monitor or glucometer is key to long-term chronic illness management.', date: 'July 24, 2026', readTime: '3 min read' },
    { title: 'The Importance of Finishing Antibiotic Courses', excerpt: 'Skipping antibiotic doses or stopping early causes bacterial mutation and drug resistance. Read our guidelines.', date: 'July 18, 2026', readTime: '5 min read' }
  ];

  return (
    <div className="space-y-20 pb-12" id="home-page">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#eff6ff]/80 via-white to-[#e6f7f2]/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 min-h-[85vh] flex items-center overflow-hidden border-b border-slate-100 dark:border-slate-900" id="hero-banner">
        {/* Artistic Background Accent Graphics */}
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
          <div className="absolute top-12 left-12 w-96 h-96 bg-brand-blue-light/50 dark:bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 right-12 w-96 h-96 bg-brand-primary-light/50 dark:bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue-light dark:bg-slate-900 text-brand-blue dark:text-emerald-400 border border-brand-blue/10 dark:border-emerald-500/15 rounded-full text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Your Trusted Partner in Gaya</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-blue dark:text-white tracking-tight leading-[1.15]">
                Your Trusted Partner for <span className="italic text-brand-primary">Genuine</span> Healthcare.
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Providing verified prescription medicines, baby care essentials, and surgical supplies at affordable, discounted rates in AP Colony, Gaya.
              </p>

              {/* USP Row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 max-w-xl">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>100% Genuine</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>Gaya Home Delivery</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>Flat Discounts</span>
                </span>
              </div>

              {/* Call-to-Actions (3 Buttons as requested) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                {/* Call Now */}
                <a
                  href="tel:+917011429205"
                  className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-brand-blue/15 flex items-center justify-center gap-2 group"
                  id="hero-call-now"
                >
                  <Phone className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Call 07011429205</span>
                </a>

                {/* WhatsApp Order */}
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="px-8 py-4 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-brand-primary/15 flex items-center justify-center gap-2 group cursor-pointer"
                  id="hero-whatsapp-order"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Order via WhatsApp</span>
                </button>

                {/* Get Directions */}
                <a
                  href="https://maps.google.com/?q=Aarush+Pharmacity+AP+Colony+Gaya+Bihar+823001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm rounded-xl hover:border-brand-blue dark:hover:border-emerald-500 transition-colors flex items-center justify-center gap-2"
                  id="hero-get-directions"
                >
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Visual (5 Columns) - Premium glass box with live operational hours */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="p-8 bg-white dark:bg-slate-900 rounded-[30px] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4 font-serif">
                  <Clock className="w-5 h-5 text-brand-primary animate-pulse" />
                  <span>Store Operational Status</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold text-sm">Today's Status:</span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
                      Open Now
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold text-sm">Timings:</span>
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">08:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold text-sm">Physical Store:</span>
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">AP Colony, Gaya</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="font-bold text-brand-blue dark:text-emerald-400 uppercase tracking-wide">Prescription Delivery?</div>
                  <p>Send a snapshot of your doctor's slip. Our Gaya delivery staff will fulfill and deliver it safely.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MEDICINE STOCK CHECKER INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-inventory-checker">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Search Store</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Check Medicine Availability Instantly</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Save time! Type any drug name to check real-time stock levels, MRP rates, and batch details before visiting or ordering.
          </p>
        </div>
        <MedicineStockChecker />
      </section>

      {/* 3. SHORT ABOUT PREVIEW */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850" id="home-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Frame */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                alt="Pharmacist dispensing medicines Gaya" 
                className="rounded-2xl shadow-xl w-full object-cover h-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary flex items-center justify-center rounded-xl font-bold text-xl">
                  10+
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Years of Service</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Trusted Pharmacy in Gaya</p>
                </div>
              </div>
            </div>

            {/* Text Area */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">About Our Pharmacy</span>
              <h3 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
                Authentic Medications Formulating a Healthier Gaya
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aarush Pharmacity was built on a simple vision: bringing high-integrity, completely genuine pharmaceutical care to AP Colony and surrounding suburbs of Gaya. We bridge the gap between quality medicines and customer accessibility.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every medicine we stock undergoes batch registration, expiry checks, and direct cold-chain transport to ensure maximum bio-efficacy of your medication.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-1 text-sm font-extrabold text-brand-primary hover:text-brand-primary-dark group"
                  id="view-about-more"
                >
                  <span>Learn more about our standards</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (Maximum 6 as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-featured-services">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Specialized Pharmacy Offerings</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            More than a standard medical shop, we cater to a full spectrum of healthcare requirements for patients in Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesPreview.map((service) => (
            <div 
              key={service.id}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group text-left flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-xl w-fit mb-5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              </div>
              
              <Link 
                to="/services"
                className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 mt-2"
              >
                <span>Browse Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold text-xs rounded-xl shadow-md shadow-brand-primary/10 hover:bg-brand-primary-dark transition-all"
            id="view-all-services-btn"
          >
            <span>View All Service Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden" id="home-why-choose-us">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Why Aarush Pharmacity</span>
            <h2 className="text-3xl font-bold font-serif text-white mt-1">Setting the Standard for Medicine Sourcing</h2>
            <p className="text-sm text-slate-400 mt-2">
              We focus on uncompromising pharmaceutical rules, speed, and local care which sets us apart in AP Colony, Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-slate-950/40 rounded-2xl border border-slate-850 space-y-4">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl w-fit">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED POPULAR PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-featured-products">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Healthcare Essentials</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Popular Wellness & Device Products</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Check availability or place WhatsApp orders for daily healthcare devices, cold gels, and OTC items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-brand-primary shadow-sm uppercase tracking-wider">
                  {product.tag}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{product.brand}</p>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mt-0.5">{product.name}</h3>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-850 mt-2">
                  <span className="text-sm font-black text-slate-900 dark:text-white">{product.price}</span>
                  <button
                    onClick={() => setOrderModalOpen(true)}
                    className="px-3 py-1.5 bg-brand-primary-light hover:bg-brand-primary dark:bg-slate-950 text-brand-primary hover:text-white text-[10px] font-extrabold rounded-lg transition-all cursor-pointer"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
            id="view-all-products-link"
          >
            <span>Search all 20+ stock catalog items</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS PREVIEW */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850" id="home-reviews-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-4 text-left space-y-4">
              <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Patient Trust</span>
              <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
                Highly Rated by Local Gaya Residents
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We believe in serving every customer with empathy, speed, and precise product knowledge. Read verified public reviews.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white">4.8</span>
                <div className="flex text-amber-400 text-lg">★★★★★</div>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">(Google Reviews)</span>
              </div>
            </div>

            {/* Right Card Sliders */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewsPreview.map((rev, i) => (
                <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md flex flex-col justify-between text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-850 pt-3 mt-2">
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{rev.name}</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500">{rev.role}</p>
                    </div>
                    <div className="text-amber-400 text-sm">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6" id="home-faq-preview">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Questions & Answers</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Have a question about our operations or delivery guidelines?
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqsPreview.map((faq, i) => (
            <div key={i} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/contact"
            className="text-xs font-extrabold text-brand-primary hover:underline flex items-center justify-center gap-1"
            id="view-all-faqs-link"
          >
            <span>Have more questions? View full Contact & FAQ coordinates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850" id="home-health-tips-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-left">
            <div>
              <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Health Articles</span>
              <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Daily Health & Wellness Blogs</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Actionable tips compiled by our medical team to assist you in making conscious everyday health choices.
              </p>
            </div>
            <Link 
              to="/about"
              className="text-xs font-bold text-brand-primary hover:underline shrink-0 flex items-center gap-1 mt-4 sm:mt-0"
              id="view-all-tips-link"
            >
              <span>Read all wellness stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthTips.map((tip, i) => (
              <div 
                key={i} 
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left space-y-4"
              >
                <div className="flex items-center gap-3 text-[10px] text-slate-400 dark:text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{tip.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{tip.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                  {tip.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {tip.excerpt}
                </p>

                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                >
                  <span>Continue Reading</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER & CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6" id="home-newsletter">
        <div className="relative bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          {/* Accent decoration */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/5"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">Stay Updated on Gaya Healthcare Alerts</h2>
            <p className="text-sm text-brand-primary-light max-w-lg mx-auto">
              Subscribe to get immediate notifications on vaccine availability updates, medicine discount programs, and periodic health articles.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Aarush Pharmacity newsletter!');
              }}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/40 text-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl text-sm transition-all shadow-md shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-brand-primary-light/70">
              No spam. We value your digital security. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

// Missing Lucide HeartIcon substitution
function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
