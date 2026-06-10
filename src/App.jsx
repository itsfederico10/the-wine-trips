import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import WaitingListModal from '@/components/WaitingListModal';
import ItineraryDownloadModal from '@/components/ItineraryDownloadModal';
import Analytics from '@/components/Analytics';
import ConsentBanner from '@/components/ConsentBanner';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

// Code-split the non-landing routes so the first load (mobile) stays light.
// HomePage stays eager because it's the landing page.
const ExperiencesPage = lazy(() => import('@/pages/ExperiencesPage'));
const TripPage = lazy(() => import('@/pages/TripPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const JournalPage = lazy(() => import('@/pages/JournalPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const BordeauxLeftBankArticle = lazy(() => import('@/pages/articles/BordeauxLeftBankArticle.jsx'));
const BaroloArticle = lazy(() => import('@/pages/articles/BaroloArticle.jsx'));
const MendozaArticle = lazy(() => import('@/pages/articles/MendozaArticle.jsx'));
const SaintEmilionArticle = lazy(() => import('@/pages/articles/SaintEmilionArticle.jsx'));
const RiberaRiojaArticle = lazy(() => import('@/pages/articles/RiberaRiojaArticle.jsx'));
const BordeauxChateauVisitArticle = lazy(() => import('@/pages/articles/BordeauxChateauVisitArticle.jsx'));
const TuscanyArticle = lazy(() => import('@/pages/articles/TuscanyArticle.jsx'));
const BestTimeToVisitArticle = lazy(() => import('@/pages/articles/BestTimeToVisitArticle.jsx'));
const PrivateVsGroupToursArticle = lazy(() => import('@/pages/articles/PrivateVsGroupToursArticle.jsx'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-[#c9a96e] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/experiences/:id" element={<TripPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/bordeaux-left-bank-masterclass-terroir" element={<BordeauxLeftBankArticle />} />
            <Route path="/journal/barolo-king-italian-wines" element={<BaroloArticle />} />
            <Route path="/journal/mendoza-hidden-gems-beyond-malbec" element={<MendozaArticle />} />
            <Route path="/journal/saint-emilion-unesco-village-wine-guide" element={<SaintEmilionArticle />} />
            {/* Corrected slug. Old typo'd path kept as a redirect to preserve any existing links. */}
            <Route path="/journal/rioja-vs-ribera-del-duero-spanish-wine-rivalry" element={<RiberaRiojaArticle />} />
            <Route path="/journal/rioja-vs-ribiera-del-duero-spanish-wine-rivalry" element={<Navigate to="/journal/rioja-vs-ribera-del-duero-spanish-wine-rivalry" replace />} />
            <Route path="/journal/how-to-visit-bordeaux-chateaux-insider-guide" element={<BordeauxChateauVisitArticle />} />
            <Route path="/journal/tuscany-wine-regions-chianti-brunello-supertuscans" element={<TuscanyArticle />} />
            <Route path="/journal/best-time-visit-europe-wine-regions" element={<BestTimeToVisitArticle />} />
            <Route path="/journal/private-wine-tours-vs-group-tours" element={<PrivateVsGroupToursArticle />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </Suspense>
        <WaitingListModal />
        <ItineraryDownloadModal />
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
      <Toaster />
    </Router>
  );
}

export default App;
