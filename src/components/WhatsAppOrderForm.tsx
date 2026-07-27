import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, Phone, Upload, Check, AlertCircle } from 'lucide-react';

export default function WhatsAppOrderForm() {
  const { isOrderModalOpen, setOrderModalOpen, prefilledMedicineName, setPrefilledMedicineName } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [hasPrescription, setHasPrescription] = useState('No');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('09:00 AM - 01:00 PM');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOrderModalOpen) {
      setMedicineName(prefilledMedicineName);
    }
  }, [isOrderModalOpen, prefilledMedicineName]);

  if (!isOrderModalOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setHasPrescription('Yes');
    }
  };

  const handleClose = () => {
    setOrderModalOpen(false);
    setPrefilledMedicineName('');
    setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !address || !medicineName) {
      setError('Please fill in all required fields (Name, Phone, Address, Medicine Name).');
      return;
    }

    const businessWhatsApp = '917011429205'; // International format for 07011429205 (Gaya, Bihar, India)
    
    const formattedText = `Hello Aarush Pharmacity,
I would like to place a Medicine Order:

*Customer Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'N/A'}
*Medicine Required:* ${medicineName}
*Address:* ${address}
*Prescription Uploaded:* ${hasPrescription === 'Yes' ? 'Yes (File Attached)' : 'No'}
*Preferred Delivery Time:* ${deliveryTime}
*Additional Message:* ${message || 'None'}`;

    const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" id="whatsapp-order-modal">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-brand-primary-light/30 dark:bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500 text-white rounded-xl">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Order via WhatsApp</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Order your medicines securely & easily</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors"
            id="close-order-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email (optional)"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Preferred Delivery Time
              </label>
              <select 
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
              >
                <option value="09:00 AM - 01:00 PM">Morning (09:00 AM - 01:00 PM)</option>
                <option value="01:00 PM - 05:00 PM">Afternoon (01:00 PM - 05:00 PM)</option>
                <option value="05:00 PM - 09:00 PM">Evening (05:00 PM - 09:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Medicines Required <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="List down your medicine names, brands, or quantities. E.g. Paracetamol 650mg - 2 strips, Combiflam - 1 strip"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm resize-none"
              required
            ></textarea>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Full Delivery Address <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Provide your complete home or delivery address in Gaya"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm resize-none"
              required
            ></textarea>
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Do you have a doctor's prescription?
            </label>
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="prescriptionRadio" 
                  value="Yes"
                  checked={hasPrescription === 'Yes'}
                  onChange={() => setHasPrescription('Yes')}
                  className="accent-brand-primary w-4 h-4"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="prescriptionRadio" 
                  value="No"
                  checked={hasPrescription === 'No'}
                  onChange={() => {
                    setHasPrescription('No');
                    setPrescriptionFile(null);
                  }}
                  className="accent-brand-primary w-4 h-4"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">No</span>
              </label>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col items-center justify-center transition-all hover:border-brand-primary/50 relative">
                <input 
                  type="file" 
                  id="prescription-upload-input"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                {prescriptionFile ? (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    <span>Selected: {prescriptionFile.name}</span>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Drag & drop or click to select files</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Accepts PNG, JPG, PDF (Max 5MB)</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Additional Notes (optional)
            </label>
            <textarea 
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific instruction for the delivery person or pharmacist..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm resize-none"
            ></textarea>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            By clicking "Send via WhatsApp", you will be redirected to WhatsApp with your order draft. No payment is taken online.
          </p>
          <div className="flex gap-3 justify-end">
            <button 
              type="button"
              onClick={handleClose}
              className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 text-slate-600 dark:text-slate-300 font-semibold rounded-xl text-sm transition-all"
            >
              Cancel
            </button>
            <button 
              type="button"
              onClick={handleSubmit}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
