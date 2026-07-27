import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import FloatingControls from './components/FloatingControls';
import { RefreshCw } from 'lucide-react';

// Lazy loading pages for optimal site performance as requested
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback spinner for lazy routing states
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white dark:bg-slate-900 text-slate-500" id="loading-spinner">
      <RefreshCw className="w-10 h-10 text-brand-primary animate-spin" />
      <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-slate-400">Loading Healthcare Desk...</p>
    </div>
  );
}

// 404 Fallback component
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-white dark:bg-slate-900" id="not-found-page">
      <h2 className="text-6xl font-black text-brand-primary">404</h2>
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-2">Page Not Found</h3>
      <p className="text-sm text-slate-500 mt-2 max-w-sm">The medicine cabinet or directory page you are looking for has been relocated or expired.</p>
      <a 
        href="/"
        className="mt-6 px-6 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-brand-primary/10"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300" id="app-root-container">
          
          {/* Sticky Navigation Header */}
          <Navigation />

          {/* Core Content Body with Lazy Loading Router Suspense */}
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Fallback unknown route */}
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Verbatim Global Tracking Hook + Responsive Visual Footer */}
          <Footer />

          {/* Interactive Floating Actions Modal */}
          <WhatsAppOrderForm />

          {/* Persistent Quick Helper Utilities: Call, Whatsapp modal, Back-to-Top */}
          <FloatingControls />

        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
