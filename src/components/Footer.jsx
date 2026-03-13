import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Logo */}
          <div className="text-xl font-light tracking-widest text-gray-900 uppercase">
            The Wine Trips
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <Link
              to="/privacy-policy"
              className="text-xs font-light text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs font-light text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-xs font-light text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-50 text-center md:text-left">
          <p className="text-[10px] text-gray-400 font-light tracking-wide">
            © {new Date().getFullYear()} The Wine Trips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;