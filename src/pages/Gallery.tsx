import { useState, useMemo } from 'react';
import { ZoomIn, ZoomOut, X, Camera, Eye, Filter } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Aarush Pharmacity Store Front',
      category: 'Store Front',
      image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
      description: 'Our highly accessible, modern physical pharmacy located in AP Colony, Gaya, Bihar.'
    },
    {
      id: 2,
      title: 'Organized Prescription Shelves',
      category: 'Medicine Shelves',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Strict categorized storage sorting medicines by therapeutic categories to prevent dispensing errors.'
    },
    {
      id: 3,
      title: 'Pediatric & Baby Care Section',
      category: 'Healthcare Products',
      image: 'https://images.unsplash.com/photo-1616679911721-eff6eec18fcd?auto=format&fit=crop&q=80&w=800',
      description: 'Dermatologically safe pediatric washes, infant nutrients, baby powders, and skin balms.'
    },
    {
      id: 4,
      title: 'Clinical Diagnostic Device Storage',
      category: 'Equipment',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
      description: 'Factory-calibrated Omron BP monitors, oximeters, and Accu-Chek glucometers.'
    },
    {
      id: 5,
      title: 'Disinfected Surgical Wound Dressings',
      category: 'Equipment',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
      description: 'sterile surgical tools, micropore tapes, gauzes, bandages, and high-purity clinical liquids.'
    },
    {
      id: 6,
      title: 'Nutritional Supplements Counter',
      category: 'Healthcare Products',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      description: 'immunity multi-vitamins, calcium formulas, dietary fibers, and diabetic nutritional drinks.'
    }
  ];

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Healthcare Products', 'Equipment'];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setZoomScale(1);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  const zoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 2));
  };

  const zoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div className="space-y-16 pb-16 animate-fade-in" id="gallery-page">
      
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-850 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-brand-primary uppercase tracking-widest bg-brand-primary-light dark:bg-slate-900 px-3 py-1 rounded-full border border-brand-primary/10">
              Visual Tour
            </span>
            <h2 className="text-4xl font-bold font-serif text-brand-blue dark:text-white tracking-tight">
              Our Professional Sourcing Environments
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Inspect our clean, temperature-controlled physical storefront, professional medical inventory racks, clinical surgical shelves, and certified testing environments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter Tab Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-850 pb-6 mb-10">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <Filter className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-bold">Filter Gallery By Section:</span>
          </div>

          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between cursor-pointer"
              onClick={() => handleOpenLightbox(item)}
              id={`gallery-item-${item.id}`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-950">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover Mask */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Section Tag */}
                <span className="absolute bottom-3 left-3 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-sm px-2.5 py-0.5 rounded-lg text-[9px] font-black text-brand-primary tracking-wider uppercase border border-slate-800">
                  {item.category}
                </span>
              </div>

              {/* Descriptions */}
              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold font-serif text-brand-blue dark:text-white line-clamp-1 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIGHTBOX COMPONENT MODAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4"
          role="dialog"
          aria-modal="true"
          id="gallery-lightbox"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between text-white p-4">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-brand-primary" />
              <div>
                <span className="text-sm font-bold">{selectedItem.title}</span>
                <span className="text-[10px] block text-slate-400 -mt-0.5 uppercase tracking-wider">{selectedItem.category}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={zoomOut}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button 
                onClick={zoomIn}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <span className="w-px h-5 bg-slate-800"></span>
              <button 
                onClick={handleCloseLightbox}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                id="close-lightbox-btn"
                title="Close Lightbox"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>
          </div>

          {/* Core Image Canvas */}
          <div className="flex-1 flex items-center justify-center p-2 overflow-auto">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              style={{ transform: `scale(${zoomScale})` }}
              className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg transition-transform duration-200 shadow-2xl border border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Footer Metadata description */}
          <div className="max-w-2xl mx-auto text-center text-slate-400 px-6 pb-6 pt-4">
            <p className="text-xs sm:text-sm leading-relaxed">
              {selectedItem.description}
            </p>
            <p className="text-[10px] text-slate-600 mt-2">
              Scale factor: {(zoomScale * 100).toFixed(0)}% • Esc to close
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
