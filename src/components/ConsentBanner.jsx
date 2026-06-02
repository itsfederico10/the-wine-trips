import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// GDPR consent banner. Trackers load in "denied" mode by default (see index.html);
// accepting flips Google Consent Mode + Meta Pixel to "granted".
const ConsentBanner = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) setShow(true);
    else if (stored === 'granted') grant();
  }, []);

  const grant = () => {
    if (window.gtag) window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    if (window.fbq) window.fbq('consent', 'grant');
  };

  const accept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    grant();
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] bg-[#1a1a1a] text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-sans">
      <p className="max-w-2xl font-light">
        {t('consent.text')}
      </p>
      <div className="flex gap-3 shrink-0">
        <button onClick={decline} className="px-4 py-2 border border-white/40 hover:border-white text-xs uppercase tracking-widest transition-colors">
          {t('consent.decline')}
        </button>
        <button onClick={accept} className="px-4 py-2 bg-[#c9a96e] hover:bg-[#b89a60] text-xs uppercase tracking-widest transition-colors">
          {t('consent.accept')}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
