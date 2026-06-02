import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ExperiencesPage from '@/pages/ExperiencesPage';
import TripPage from '@/pages/TripPage';
import ContactPage from '@/pages/ContactPage';
import AboutPage from '@/pages/AboutPage';
import JournalPage from '@/pages/JournalPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import BordeauxLeftBankArticle from '@/pages/articles/BordeauxLeftBankArticle.jsx';
import BaroloArticle from '@/pages/articles/BaroloArticle.jsx';
import MendozaArticle from '@/pages/articles/MendozaArticle.jsx';
import SaintEmilionArticle from '@/pages/articles/SaintEmilionArticle.jsx';
import RiberaRiojaArticle from '@/pages/articles/RiberaRiojaArticle.jsx';
import BordeauxChateauVisitArticle from '@/pages/articles/BordeauxChateauVisitArticle.jsx';
import TuscanyArticle from '@/pages/articles/TuscanyArticle.jsx';
import BestTimeToVisitArticle from '@/pages/articles/BestTimeToVisitArticle.jsx';
import PrivateVsGroupToursArticle from '@/pages/articles/PrivateVsGroupToursArticle.jsx';
import WaitingListModal from '@/components/WaitingListModal';
import ItineraryDownloadModal from '@/components/ItineraryDownloadModal';
import Analytics from '@/components/Analytics';
import ConsentBanner from '@/components/ConsentBanner';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <Header />
      <main>
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
