import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);
  const toggleLang = () => i18n.changeLanguage(lang === 'es' ? 'en' : 'es');
  
  // These pages have full-height hero images or dark backgrounds and should start transparent
  const isTransparentHeroPage = ['/', '/about', '/contact', '/journal'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.experiences'), path: '/experiences' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.journal'), path: '/journal' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const LangToggle = ({ className = '' }) => (
    <button
      onClick={toggleLang}
      aria-label="Change language"
      className={`text-[12px] font-sans font-light tracking-wide transition-colors duration-300 hover:opacity-70 ${className}`}
    >
      <span className={lang === 'es' ? 'font-semibold' : 'opacity-60'}>ES</span>
      <span className="opacity-40 mx-1">/</span>
      <span className={lang === 'en' ? 'font-semibold' : 'opacity-60'}>EN</span>
    </button>
  );

  // Logic for header background
  const shouldBeTransparent = isTransparentHeroPage && !isScrolled;
  
  const headerBg = shouldBeTransparent 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm';
    
  // Logic for text colors
  const textColor = shouldBeTransparent 
    ? 'text-white' 
    : 'text-gray-900';

  // Logic for button styles
  const buttonBg = shouldBeTransparent
    ? 'bg-white text-gray-900 hover:bg-gray-100'
    : 'bg-gray-900 text-white hover:bg-gray-800';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          
          {/* Desktop Navigation (Left Aligned) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-sans font-light tracking-wide transition-colors duration-300 hover:opacity-70 ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button (Left) */}
          <div className="md:hidden justify-self-start">
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1 transition-colors duration-300 ${textColor}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Logo (Centered) */}
          <Link 
            to="/" 
            className={`text-[20px] font-light tracking-widest uppercase transition-colors duration-300 justify-self-center whitespace-nowrap ${textColor}`}
          >
            The Wine Trips
          </Link>

          {/* CTA Button + Language Toggle (Right Aligned) */}
          <div className="hidden md:flex justify-end items-center gap-5">
            <LangToggle className={textColor} />
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-full text-[12px] font-sans font-light tracking-wide transition-all duration-300 ${buttonBg}`}
            >
              {t('cta.joinWaitlist')}
            </Link>
          </div>

           {/* Mobile Placeholder for right alignment balance */}
           <div className="md:hidden justify-self-end w-5"></div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pt-6 border-t border-gray-100 bg-white absolute top-full left-0 right-0 px-6 pb-8 shadow-lg"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-sans font-light text-gray-900 hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 rounded-full text-xs font-sans font-light bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                {t('cta.joinWaitlist')}
              </Link>
              <LangToggle className="text-gray-900" />
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;