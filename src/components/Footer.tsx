import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
        const payload = {
            cid: cid, 
            visitor_id: visitorId, 
            session_id: sessionId,
            page_name: getPageName(), 
            referrer: document.referrer || '',
            device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            browser: navigator.userAgent, 
            action: 'init'
        };
        fetch(TRACKING_ENDPOINT, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
        }).catch(err => {});
    };

    const sendExitPayload = () => {
        const payload = { 
            cid: cid, 
            session_id: sessionId, 
            page_name: getPageName(), 
            action: 'page_change' 
        };
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
            fetch(TRACKING_ENDPOINT, { 
                method: 'POST', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload), 
                keepalive: true 
            }).catch(err => {});
        }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
        if (isIdle) {
            isIdle = false;
            sendInitPayload(); // Wake up! Resume tracking
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            sendExitPayload(); // Inactive! Stop tracking
        }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') { 
            sendExitPayload(); 
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
        window.removeEventListener('popstate', handleLocationChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', sendExitPayload);
        activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
        clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-brand-blue text-slate-100 pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand and Description (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white text-brand-blue flex items-center justify-center rounded-lg font-bold text-xl shadow-lg transition-transform group-hover:scale-105">
                AP
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-serif">Aarush <span className="text-emerald-300 italic font-serif">Pharmacity</span></span>
                <span className="text-[10px] block text-emerald-300 font-bold tracking-widest uppercase -mt-0.5">Gaya Sourcing Desk</span>
              </div>
            </Link>
            <p className="text-sm text-slate-200 leading-relaxed">
              Your highly trusted healthcare destination in Gaya, Bihar. We provide 100% genuine medicines, prescription fulfillment, clinical equipment, and premium baby & personal care products.
            </p>
            
            {/* Working Hours */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Business Hours</h4>
              <div className="flex items-start gap-2 text-sm text-slate-200">
                <Clock className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Open 7 Days a Week</p>
                  <p className="text-slate-200">08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-300">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-300 transition-colors flex items-center gap-1 group">
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-300 transition-colors flex items-center gap-1 group">
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors flex items-center gap-1 group">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-300">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <span>A P Colony, Gaya, Bihar 823001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-300 shrink-0" />
                <a href="tel:+917011429205" className="hover:text-emerald-300 transition-colors font-medium text-white">
                  +91 70114 29205
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-300 shrink-0" />
                <a href="mailto:info@aarushpharmacity.com" className="hover:text-emerald-300 transition-colors">
                  info@aarushpharmacity.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect Online</h4>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-emerald-500 text-white rounded-lg transition-all" aria-label="Facebook">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-emerald-500 text-white rounded-lg transition-all" aria-label="Instagram">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-emerald-500 text-white rounded-lg transition-all" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-300">
              Our Location
            </h3>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 bg-slate-800 relative">
              <iframe
                title="Aarush Pharmacity Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.977239611681!2d84.99617329580434!3d24.789124233777747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf4d0e620fb%3A0xe5a363994ee31dbd!2sA%20P%20Colony%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Aarush+Pharmacity+AP+Colony+Gaya+Bihar+823001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-emerald-300 hover:underline"
            >
              <span>Get full driving directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-white/15 my-8" />

        {/* Disclaimer / Healthcare Statement */}
        <div className="bg-black/15 p-4 rounded-xl border border-white/10 text-xs text-slate-300 leading-relaxed mb-8">
          <div className="flex items-center gap-2 mb-1.5 text-white font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Healthcare Disclaimer</span>
          </div>
          The information on this website is for general educational and search-availability purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for specific medical conditions. Aarush Pharmacity dispenses medications strictly on presentation of a valid doctor's prescription.
        </div>

        {/* Legal and WMIT Credits Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-slate-300">
          <div>
            <p>&copy; {new Date().getFullYear()} Aarush Pharmacity. All rights reserved.</p>
            <p className="mt-1 flex items-center gap-1.5 text-slate-400">
              <span>Managed by</span>
              <span className="text-white/20">•</span>
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer"> WMIT</a>
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
