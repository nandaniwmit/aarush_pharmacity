import { useState, useMemo } from 'react';
import { Search, ShoppingCart, RefreshCw, AlertTriangle, CheckCircle, Ban, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import medicineStockData from '../data/medicineStock.json';
import { Medicine } from '../types';

export default function MedicineStockChecker() {
  const { openOrderWithMedicine } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Future API Integration trigger point
  const fetchLatestInventory = async () => {
    setIsRefreshing(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsRefreshing(false);
  };

  const categories = useMemo(() => {
    const list = new Set(medicineStockData.map((item) => item.category));
    return ['All', ...Array.from(list)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineStockData as Medicine[]).filter((med) => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8" id="medicine-stock-checker">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Live Medicine Stock Checker</span>
            <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider">Real-time</span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Search our real-time stock list for brand availability, pricing, and active quantities before ordering.
          </p>
        </div>

        <button
          onClick={fetchLatestInventory}
          disabled={isRefreshing}
          className="flex items-center gap-2 text-xs font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors bg-brand-primary-light/40 dark:bg-slate-950/40 px-3.5 py-2 rounded-xl border border-brand-primary/10"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Syncing...' : 'Sync Inventory'}</span>
        </button>
      </div>

      {/* Search and Category Filter Section */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, salt formulation, or manufacturer (e.g. Dolo, Sun Pharma)..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 items-center overflow-x-auto pb-1 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Table / Grid */}
      <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-850">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Medicine / Brand</th>
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">MRP (INR)</th>
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Expiry</th>
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-850">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((med) => (
                <tr key={med.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-all text-sm">
                  {/* Name and Brand */}
                  <td className="p-4">
                    <div className="font-bold text-slate-800 dark:text-slate-100">{med.name}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{med.brand}</div>
                  </td>
                  {/* Category */}
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">
                      {med.category}
                    </span>
                  </td>
                  {/* MRP */}
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">
                    ₹{med.mrp.toFixed(2)}
                  </td>
                  {/* Expiry */}
                  <td className="p-4 text-slate-500 dark:text-slate-400 text-xs">
                    {med.expiry === 'N/A' ? 'Not Applicable' : med.expiry}
                  </td>
                  {/* Status */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {med.status === 'Available' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-semibold border border-emerald-100 dark:border-emerald-950">
                          <CheckCircle className="w-3 h-3" />
                          <span>In Stock</span>
                        </span>
                      )}
                      {med.status === 'Limited Stock' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full text-xs font-semibold border border-amber-100 dark:border-amber-950">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Limited</span>
                        </span>
                      )}
                      {med.status === 'Out of Stock' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 rounded-full text-xs font-semibold border border-red-100 dark:border-red-950">
                          <Ban className="w-3 h-3" />
                          <span>Out of Stock</span>
                        </span>
                      )}
                    </div>
                  </td>
                  {/* Action */}
                  <td className="p-4 text-right">
                    <button
                      onClick={() => openOrderWithMedicine(med.name)}
                      disabled={med.status === 'Out of Stock'}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        med.status === 'Out of Stock'
                          ? 'bg-slate-100 dark:bg-slate-950 text-slate-400 border border-slate-200 dark:border-slate-800 cursor-not-allowed'
                          : 'bg-brand-primary hover:bg-brand-primary-dark text-white shadow-sm shadow-brand-primary/10'
                      }`}
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>{med.status === 'Out of Stock' ? 'Restocking' : 'Order'}</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-12 text-center text-slate-400 dark:text-slate-500">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <HelpCircle className="w-12 h-12 text-slate-300" />
                    <div>
                      <p className="font-bold text-slate-600 dark:text-slate-400 text-base">No Medicines Found</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mt-1">
                        We might still carry it! Send us your prescription or call directly and our pharmacists will check our offline storeroom.
                      </p>
                    </div>
                    <button
                      onClick={() => openOrderWithMedicine(searchTerm || 'Custom Medicine Request')}
                      className="mt-3 px-5 py-2 bg-brand-primary-light text-brand-primary dark:bg-slate-950 hover:bg-brand-primary hover:text-white border border-brand-primary/20 text-xs font-bold rounded-xl transition-all"
                    >
                      Place Custom WhatsApp Query
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p className="flex items-center gap-1">
          <span>* Minimum discount of</span>
          <strong className="text-brand-primary">10% applied</strong>
          <span>on prescription medicines. Valid doctor prescription is mandatory.</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
            <span>Available</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Limited</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span>Out of stock</span>
          </span>
        </div>
      </div>
    </div>
  );
}
