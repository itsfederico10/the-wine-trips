import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fires a page_view on every SPA route change (GA4 + Meta Pixel).
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    if (window.gtag) window.gtag('event', 'page_view', { page_path: path });
    if (window.fbq) window.fbq('track', 'PageView');
  }, [location]);

  return null;
};

export default Analytics;
