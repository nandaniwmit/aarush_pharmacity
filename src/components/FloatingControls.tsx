import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquarePlus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FloatingControls() {
  const { setOrderModalOpen } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5" id="floating-action-controls">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white dark:bg-slate-800 text-brand-primary dark:text-white rounded-full shadow-xl border border-slate-100 dark:border-slate-700 hover:bg-brand-primary-light dark:hover:bg-slate-700 transition-all hover:-translate-y-1 group active:scale-95 cursor-pointer"
          title="Back to Top"
          id="back-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+917011429205"
        className="p-3.5 bg-brand-blue text-white rounded-full shadow-2xl hover:bg-brand-blue-dark transition-all hover:-translate-y-1 flex items-center justify-center active:scale-95 group"
        title="Call Pharmacist Directly"
        id="floating-call-btn"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      {/* Floating WhatsApp Quick Order */}
      <button
        onClick={() => setOrderModalOpen(true)}
        className="p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:-translate-y-1 flex items-center justify-center active:scale-95 group relative cursor-pointer"
        title="Order via WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="absolute -top-1 -left-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageSquarePlus className="w-5.5 h-5.5 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
