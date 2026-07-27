import { useState, FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertTriangle, 
  Navigation, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const workingHours = [
    { day: 'Monday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '08:00 AM - 10:00 PM' }
  ];

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      setError('Please fill in Name, Phone, and your Message.');
      return;
    }
    // Simulate successful API dispatch
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 animate-fade-in" id="contact-page">
      
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-850 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-widest bg-brand-primary-light dark:bg-slate-900 px-3 py-1 rounded-full border border-brand-primary/10">
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
              Connect with Our Gaya Sourcing Desk
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Do you have specialized prescription lists, commercial surgical inquiries, or feedback? Send us a message or contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards (Left) vs Inquiry Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-details-form-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-brand-blue dark:text-white">Store Coordinates</h3>
              
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="p-3 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-xl h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Physical Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">A P Colony, Gaya, Bihar 823001</p>
                  <a 
                    href="https://maps.google.com/?q=Aarush+Pharmacity+AP+Colony+Gaya+Bihar+823001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-brand-primary font-bold uppercase mt-2.5 hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get driving directions</span>
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="p-3 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-xl h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Phone Numbers</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Customer Care Desk:</p>
                  <a href="tel:+917011429205" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors block mt-0.5">
                    +91 70114 29205
                  </a>
                  <p className="text-[10px] text-slate-400 mt-1">Sourcing/Commercial Desk:</p>
                  <a href="tel:07011429205" className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors block">
                    07011429205
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="p-3 bg-brand-primary-light dark:bg-slate-950 text-brand-primary rounded-xl h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Email Addresses</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">General Inquiries:</p>
                  <a href="mailto:info@aarushpharmacity.com" className="hover:text-brand-primary transition-colors text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    info@aarushpharmacity.com
                  </a>
                </div>
              </div>
            </div>

            {/* Timetable */}
            <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>Weekly Operational Timetable</span>
              </h3>
              <div className="space-y-2 text-xs">
                {workingHours.map((wh, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1">
                    <span className="text-slate-400 font-medium">{wh.day}</span>
                    <span className="font-semibold text-slate-200">{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Info Notice */}
            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-400 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-extrabold">Need medication urgently?</h4>
                <p className="text-[11px] mt-0.5 leading-relaxed">
                  During emergency hours, do not wait for email responses. Call our direct pharmacists at <a href="tel:+917011429205" className="font-bold underline">+91 70114 29205</a> immediately. We operate deliveries across Gaya for life saving requests.
                </p>
              </div>
            </div>

          </div>

          {/* Form Area (7 Columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg text-left">
            <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white mb-2">Send an Online Message</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Our backdesk monitors messages 7 days a week. We usually reply within 30 minutes.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <div>
                  <h4 className="text-base font-extrabold">Inquiry Sent Successfully!</h4>
                  <p className="text-xs mt-1 text-emerald-600 dark:text-emerald-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry subject of "{subject}" has been cataloged. A clinical coordinator will call or email you shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                {error && (
                  <p className="text-xs text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-3 rounded-xl font-semibold">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Singh"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07011429205"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. example@mail.com"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Inquiry Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary text-xs"
                    >
                      <option value="General Inquiry">General Sourcing</option>
                      <option value="Bulk Order Inquiry">Bulk Surgical Inquiry</option>
                      <option value="Partnership Offer">Distributor Partnership</option>
                      <option value="Feedback / Complaints">Store Experience Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Message *</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your medicine specifications, quantity required, or medical devices needed..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary text-xs resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-primary/10 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Secure Message</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Full-width Map Frame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-full-map">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-bold font-serif text-brand-blue dark:text-white">Our Geographical Location</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Conveniently situated in A P Colony, Gaya, Bihar. Click to open larger map or get driving directions.
          </p>
        </div>

        <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-850 shadow-lg bg-slate-100 relative">
          <iframe
            title="Aarush Pharmacity Full Interactive Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.977239611681!2d84.99617329580434!3d24.789124233777747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf4d0e620fb%3A0xe5a363994ee31dbd!2sA%20P%20Colony%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
