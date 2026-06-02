import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WHATSAPP_NUMBER = '34675949245'; // +34 675 949 245

export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const trackWhatsApp = () => {
  if (window.gtag) window.gtag('event', 'contact_whatsapp');
  if (window.fbq) window.fbq('track', 'Lead');
};

// Global floating WhatsApp button — primary conversion CTA, present on every page.
const WhatsAppButton = () => {
  const { t } = useTranslation();
  return (
    <a
      href={waLink(t('whatsapp.defaultMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsApp}
      aria-label={t('whatsapp.label')}
      className="fixed bottom-6 right-6 z-[150] flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white pl-4 pr-5 py-3 rounded-full shadow-xl transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">{t('whatsapp.label')}</span>
    </a>
  );
};

export default WhatsAppButton;
