import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, ShoppingBag, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navigation() {
  const { darkMode, setDarkMode, setOrderModalOpen } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle sticky scrolling border/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-100 dark:border-slate-800 py-3'
          : 'bg-white dark:bg-slate-900 py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Section */}
          <Link to="/" className="flex items-center gap-3 group" id="nav-brand">
            <div className="w-10 h-10 bg-brand-primary text-white flex items-center justify-center rounded-lg font-bold text-xl transition-all shadow-md shadow-brand-primary/10 group-hover:scale-105">
              AP
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-blue dark:text-white font-serif leading-none">
                Aarush <span className="text-brand-primary italic">Pharmacity</span>
              </span>
              <span className="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5 leading-none">
                Gaya Sourcing Desk
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 p-1.5 rounded-xl border border-slate-150/40 dark:border-slate-850">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-brand-primary shadow-sm border border-slate-100 dark:border-slate-800'
                        : 'text-slate-600 dark:text-slate-400 hover:text-brand-primary hover:bg-white/40 dark:hover:bg-slate-900/40'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-brand-primary dark:text-slate-400 dark:hover:text-brand-primary bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="dark-mode-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Consultation Call */}
            <a
              href="tel:+917011429205"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-brand-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>+91 70114 29205</span>
            </a>

            {/* Order Now Trigger */}
            <button
              onClick={() => setOrderModalOpen(true)}
              className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-brand-blue/10 flex items-center gap-1.5 cursor-pointer"
              id="order-prescription-cta"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-white/90" />
              <span>Order Medicines</span>
            </button>
          </div>

          {/* Mobile Right Controls: Hamburger & Dark Mode */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-brand-primary dark:text-slate-400 dark:hover:text-brand-primary bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-150 dark:border-slate-850 transition-all cursor-pointer"
              id="mobile-dark-mode-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Order Now Icon-Only for mobile */}
            <button
              onClick={() => setOrderModalOpen(true)}
              className="p-2 bg-brand-primary text-white rounded-lg transition-all shadow-md cursor-pointer"
              title="Order Medicines"
              id="mobile-order-prescription"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-950 rounded-lg transition-colors cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden animate-slide-down bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800" id="mobile-nav-drawer">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-brand-primary-light dark:bg-slate-950/60 text-brand-primary border-l-4 border-brand-primary'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Emergency Info for Mobile */}
            <div className="p-4 bg-brand-primary-light/40 dark:bg-slate-950/40 rounded-xl border border-brand-primary/10">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Emergency Support</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-2">Need medication urgently? Call our pharmacists immediately.</p>
              <a
                href="tel:+917011429205"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-extrabold rounded-lg shadow-md w-full justify-center transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 70114 29205</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
