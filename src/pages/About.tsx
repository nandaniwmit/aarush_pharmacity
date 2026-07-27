import { Shield, Target, Eye, Award, CheckCircle, Heart, User, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Absolute Integrity', desc: 'We procure 100% of our products directly from manufacturing brands and authorized distributors, maintaining a strict zero-counterfeit guarantee.', icon: Shield },
    { title: 'Accuracy First', desc: 'Our clinical pharmacists verify every dosage and label twice to prevent cross-contamination or erroneous drug administration.', icon: Target },
    { title: 'Compassionate Care', desc: 'We look at customers as patients first, providing professional consultation, drug storage advice, and pocket-friendly generic alternatives.', icon: Heart },
    { title: 'Cold-Chain Excellence', desc: 'We maintain continuous backup generators for our medical refrigerators so insulin, vaccines, and biologics remain biochemically potent.', icon: Sparkles }
  ];

  const milestones = [
    { year: '2016', title: 'Founding Year', desc: 'Aarush Pharmacity was registered in AP Colony, Gaya, with the single-minded goal of providing high-purity medications.' },
    { year: '2019', title: 'Healthcare Inventory Expansion', desc: 'Expanded storage shelves to catalog premium health devices, pediatric baby care essentials, and specialized surgical equipment.' },
    { year: '2022', title: 'Free Home Delivery Launch', desc: 'Introduced immediate home medication deliveries in Gaya to assist chronic heart and diabetic patients during mobility issues.' },
    { year: '2025', title: 'Real-time Stock Integration', desc: 'Adopted digital stock keeping databases enabling customers to verify stock online before making a physically exhausting trip.' }
  ];

  return (
    <div className="space-y-16 pb-16" id="about-page">
      
      {/* Page Header Banner */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-850 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-widest bg-brand-primary-light dark:bg-slate-900 px-3 py-1 rounded-full border border-brand-primary/10">
              Our Journey & Ethos
            </span>
            <h2 className="text-4xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
              A Legacy of Authenticity & Community Care in Gaya
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Learn about our medical store's historical timeline, operational standards, core values, and our uncompromising focus on patient-first pharmacy distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Message & Store Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Owner/Pharmacist Photo Box (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" 
                alt="Pharmacist Proprietor Aarush Pharmacity" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 text-left">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Aarush Singh</h4>
              <p className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">Chief Pharmacist & Founder</p>
              <div className="text-[10px] text-slate-400 mt-1">B.Pharm, Registered Pharmacist</div>
            </div>
          </div>

          {/* Owner Message & Core Story (7 Columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Founder's Message</span>
            <h3 className="text-2xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
              "Medicines must be authentic because behind every prescription is a human life."
            </h3>
            
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                As a registered pharmacist, I founded Aarush Pharmacity in Gaya because I observed how difficult it was for families to consistently acquire 100% genuine medical supplies. Our goal has never been volume sales; it has always been visual and clinical integrity.
              </p>
              <p>
                We source each pill directly from manufacturer distribution lines. We maintain absolute storage rules—including strict refrigeration guidelines—and train our staff to assist clients with warm, polite, and logical dosage answers.
              </p>
              <p>
                Whether you need a common OTC pain reliever or a highly specialized oncology medication, you can expect the same uncompromising care, genuine batch codes, and flat fair discounts.
              </p>
            </div>

            <div className="p-4 bg-brand-primary-light/40 dark:bg-slate-950/40 rounded-2xl border border-brand-primary/10 flex items-center gap-3 w-fit">
              <Award className="w-5 h-5 text-brand-primary" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">ISO 9001:2015 Certified Sourcing Pharmacy</span>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Mission */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-2xl w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-brand-blue dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To elevate healthcare standards in Bihar by establishing an ironclad, completely reliable inventory distribution channel. We aim to protect consumers from counterfeit drugs, reduce treatment costs, and provide prompt doorstep health support.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-2xl w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-brand-blue dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To become Gaya's most trusted full-service neighborhood pharmacy, recognized for our state-of-the-art cold chain capabilities, highly digitalized stock accessibility, and deeply empathetic family health advisors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="core-values">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Unwavering Standards</span>
          <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">Our Core Pillars</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            The principles that guide our everyday distribution processes and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {values.map((val, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="p-2.5 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-xl w-fit">
                <val.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{val.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Timeline */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-100 dark:border-slate-850" id="business-timeline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider">Our Milestones</span>
            <h2 className="text-3xl font-bold font-serif text-brand-blue dark:text-white tracking-tight mt-1">How We Built Our Pharmacy</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              A decade of commitment, growth, and continuous healthcare advancements in Bihar.
            </p>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-brand-primary/20 ml-4 md:ml-32 space-y-12">
            {milestones.map((node, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Year tag offset on left in desktop */}
                <span className="hidden md:block absolute -left-36 top-0 text-right w-24 font-black text-brand-primary text-lg">
                  {node.year}
                </span>

                {/* Bullets */}
                <span className="absolute -left-2.5 top-1 w-5 h-5 bg-white dark:bg-slate-900 border-4 border-brand-primary rounded-full shadow-sm z-10"></span>
                
                <div className="space-y-1">
                  <span className="md:hidden inline-block text-brand-primary font-black text-sm mb-1">{node.year}</span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{node.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
