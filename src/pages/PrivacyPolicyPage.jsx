import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    { id: 'who-we-are', title: 'Who We Are', number: '01' },
    { id: 'data-we-collect', title: 'Data We Collect', number: '02' },
    { id: 'how-we-use', title: 'How We Use Your Data', number: '03' },
    { id: 'legal-basis', title: 'Legal Basis for Processing (GDPR)', number: '04' },
    { id: 'third-party', title: 'Third-Party Data Processors', number: '05' },
    { id: 'cookies', title: 'Cookies & Analytics', number: '06' },
    { id: 'retention', title: 'Data Retention', number: '07' },
    { id: 'rights', title: 'Your Rights', number: '08' },
    { id: 'transfers', title: 'International Data Transfers', number: '09' },
    { id: 'children', title: 'Children\'s Privacy', number: '10' },
    { id: 'changes', title: 'Changes to This Policy', number: '11' },
    { id: 'contact', title: 'Contact & Requests', number: '12' },
  ];

  const rights = [
    { title: 'ACCESS', desc: 'Request a copy of the personal data we hold about you.' },
    { title: 'RECTIFICATION', desc: 'Request correction of inaccurate or incomplete data.' },
    { title: 'ERASURE', desc: 'Request deletion of your personal data ("right to be forgotten").' },
    { title: 'RESTRICTION', desc: 'Request that we limit how we use your data in certain circumstances.' },
    { title: 'PORTABILITY', desc: 'Receive your data in a structured, machine-readable format.' },
    { title: 'OBJECTION', desc: 'Object to processing based on our legitimate interests.' },
    { title: 'WITHDRAW CONSENT', desc: 'Withdraw consent at any time without affecting prior processing.' },
    { title: 'COMPLAINT', desc: 'Lodge a complaint with your local data protection authority.' },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - The Wine Trips</title>
        <meta name="description" content="Privacy Policy for The Wine Trips. Learn how we handle and protect your personal data." />
        <link rel="canonical" href="https://thewinetrips.com/privacy-policy" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - The Wine Trips" />
        <meta property="og:description" content="Privacy Policy for The Wine Trips. Learn how we handle and protect your personal data." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/privacy-policy" />
        <meta property="twitter:title" content="Privacy Policy - The Wine Trips" />
        <meta property="twitter:description" content="Privacy Policy for The Wine Trips. Learn how we handle and protect your personal data." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      {/* Full Screen Overlay to replace main layout */}
      <div className="fixed inset-0 z-[100] bg-[#111624] overflow-y-auto scroll-smooth">
        
        {/* Custom Header */}
        <header className="sticky top-0 z-50 bg-[#1a1f2e] border-b border-[#c9a96e]/25 backdrop-blur-md bg-opacity-95">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-[#c9a96e] font-bold tracking-[0.2em] uppercase text-sm font-['Cormorant_Garamond']">
              T H E &nbsp; W I N E &nbsp; T R I P S
            </span>
            <Link 
              to="/" 
              className="group flex items-center gap-2 text-[#8a8a8a] hover:text-white transition-colors text-sm font-['Jost']"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to website
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-[#1a1f2e] pt-24 pb-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[#c9a96e] text-xs font-bold tracking-[0.25em] uppercase mb-6 block font-['Jost']">
              LEGAL
            </span>
            <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-white mb-8 font-light">
              Privacy Policy
            </h1>
            <div className="w-[60px] h-[1px] bg-[#c9a96e] mx-auto mb-8 opacity-50"></div>
            <p className="text-[#8a8a8a] text-sm font-['Jost'] tracking-wide">
              Last updated: June 2026 · www.thewinetrips.com
            </p>
          </motion.div>
        </section>

        {/* Content Container */}
        <div className="max-w-[800px] mx-auto px-6 py-16 font-['Jost'] font-light text-[#ddd8cf] leading-[1.8]">
          
          {/* Summary Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#c9a96e]/[0.08] border border-[#c9a96e]/25 p-8 mb-16 rounded-sm"
          >
            <p className="text-lg">
              <strong className="text-[#c9a96e] font-medium block mb-2">Plain-language summary:</strong>
              We collect the contact details you give us when you join our Club / waiting list — your email and, optionally, your name, phone (WhatsApp), country and destination of interest. We use them only to tell you about The Wine Trips experiences and to reply to you. With your consent, we also use Google Analytics and the Meta (Facebook) Pixel to understand how the site is used. We never sell your data, and we will never share it with third parties for their own marketing. You can unsubscribe or request deletion at any time.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1f2e] border-l-[3px] border-[#c9a96e] p-8 mb-20"
          >
            <h2 className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase mb-6 font-['Jost']">CONTENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="text-[#8a8a8a] hover:text-[#c9a96e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="text-[#c9a96e] opacity-50 group-hover:opacity-100 text-[10px]">{section.number}</span>
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-24">
            
            {/* 01 Who We Are */}
            <Section id="who-we-are" number="01" title="Who We Are">
              <p>
                The Wine Trips ("we", "us", "our") is a luxury wine travel service offering curated small-group experiences to premium wine regions worldwide. The service is currently operated under the brand The Wine Trips, reachable at info@thewinetrips.com.
              </p>
              <p className="mt-4">
                The Wine Trips experiences are operated by <strong className="text-white">Blisniuk &amp; Amanov</strong>, a travel agency registered in Argentina (RNAV Legajo N.º 20943), with head office at Manuel Ugarte 2035, Buenos Aires. For the purposes of applicable data protection law, Blisniuk &amp; Amanov, trading as The Wine Trips, acts as the data controller of the personal information collected through this website (www.thewinetrips.com).
              </p>
            </Section>

            {/* 02 Data We Collect */}
            <Section id="data-we-collect" number="02" title="Data We Collect">
              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Information you provide directly</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#c9a96e]">
                <li><strong>Email address</strong> — when you join our Club / waiting list or subscribe to our journal.</li>
                <li><strong>Phone number (WhatsApp)</strong> — optional, so we can contact you about the experiences you're interested in.</li>
                <li><strong>Name, country of residence, destination of interest and Instagram handle</strong> — optional, when you complete our contact / membership form.</li>
                <li>Any other information you voluntarily include when contacting us at info@thewinetrips.com or via WhatsApp.</li>
              </ul>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Information collected automatically</h3>
              <p>
                With your consent (see Section 6), we use <strong>Google Analytics 4</strong> and the <strong>Meta (Facebook) Pixel</strong>, which place cookies and collect usage data such as your IP address, device and browser type, pages visited and interactions. Our hosting and content-delivery provider (Vercel) also processes standard server log data for security and uptime.
              </p>
              <p className="mt-4">
                Analytics and advertising cookies are loaded only after you accept them in our cookie banner; by default they are denied (Google Consent Mode). See Section 6 for the full cookie policy.
              </p>
            </Section>

            {/* 03 How We Use Your Data */}
            <Section id="how-we-use" number="03" title="How We Use Your Data">
              <p>We use the data we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#c9a96e]">
                <li>To notify you when The Wine Trips experiences become available for booking.</li>
                <li>To send you relevant updates about our destinations, itineraries, and offers — only if you have subscribed and only in relation to wine travel.</li>
                <li>To respond to enquiries sent directly to info@thewinetrips.com.</li>
                <li>To comply with legal obligations if required.</li>
              </ul>
              <p className="mt-6 font-medium text-white/90">
                We will never sell, rent, or share your personal data with third parties for their own marketing or commercial purposes.
              </p>
            </Section>

            {/* 04 Legal Basis */}
            <Section id="legal-basis" number="04" title="Legal Basis for Processing (GDPR)">
              <p>If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, we process your personal data under the following legal bases as established by the General Data Protection Regulation (GDPR):</p>
              
              <div className="mt-6 space-y-4">
                <div className="border-l border-[#c9a96e]/30 pl-4">
                  <span className="text-white block mb-1">Consent (Art. 6(1)(a) GDPR)</span>
                  <span className="text-sm">By submitting your email address to our waiting list, you explicitly consent to receiving communications from The Wine Trips. You may withdraw this consent at any time.</span>
                </div>
                <div className="border-l border-[#c9a96e]/30 pl-4">
                  <span className="text-white block mb-1">Legitimate interests (Art. 6(1)(f) GDPR)</span>
                  <span className="text-sm">For server log data collected automatically by our hosting provider, in our legitimate interest of maintaining website security and functionality.</span>
                </div>
                <div className="border-l border-[#c9a96e]/30 pl-4">
                  <span className="text-white block mb-1">Legal obligation (Art. 6(1)(c) GDPR)</span>
                  <span className="text-sm">Where we are required by applicable law to retain or process certain information.</span>
                </div>
              </div>

              <p className="mt-6 text-sm italic opacity-80">
                If you are located in Argentina, this policy also complies with Ley 25.326 de Protección de Datos Personales and the regulations issued by the Agencia de Acceso a la Información Pública (AAIP).
              </p>
            </Section>

            {/* 05 Third Party */}
            <Section id="third-party" number="05" title="Third-Party Data Processors">
              <p>We work with the following third-party service providers who process data on our behalf. These providers are contractually bound to process your data only as instructed by us and in accordance with applicable privacy law:</p>
              <ul className="mt-6 space-y-4">
                <li className="bg-[#1a1f2e] p-6 rounded-sm border border-white/5">
                  <strong className="text-white block mb-2">Supabase Inc.</strong>
                  Database where the contact details you submit (email, phone, name, country, destination of interest) are securely stored. Privacy policy: <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">supabase.com/privacy</a>.
                </li>
                <li className="bg-[#1a1f2e] p-6 rounded-sm border border-white/5">
                  <strong className="text-white block mb-2">Vercel Inc.</strong>
                  Website hosting and content delivery (CDN). Processes standard server logs. Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">vercel.com/legal/privacy-policy</a>.
                </li>
                <li className="bg-[#1a1f2e] p-6 rounded-sm border border-white/5">
                  <strong className="text-white block mb-2">Google LLC — Google Analytics 4</strong>
                  Website analytics, loaded only after consent. Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">policies.google.com/privacy</a>.
                </li>
                <li className="bg-[#1a1f2e] p-6 rounded-sm border border-white/5">
                  <strong className="text-white block mb-2">Meta Platforms, Inc. — Meta Pixel</strong>
                  Measurement of advertising and site interactions, loaded only after consent. Privacy policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">facebook.com/privacy/policy</a>.
                </li>
                <li className="bg-[#1a1f2e] p-6 rounded-sm border border-white/5">
                  <strong className="text-white block mb-2">Calendly LLC</strong>
                  Scheduling tool used on our contact page to book consultations. Privacy policy: <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">calendly.com/privacy</a>.
                </li>
              </ul>
              <p className="mt-6">
                We also communicate with you via WhatsApp (Meta Platforms) when you choose to contact us through that channel. Any future change of processors will be reflected in an updated version of this policy, and where required by law we will seek your renewed consent.
              </p>
            </Section>

            {/* 06 Cookies */}
            <Section id="cookies" number="06" title="Cookies & Analytics">
              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Strictly necessary cookies</h3>
              <p>
                These are required for the website to function and for remembering your cookie choice. They do not require consent.
              </p>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Analytics &amp; advertising cookies</h3>
              <p>
                We use <strong>Google Analytics 4</strong> and the <strong>Meta (Facebook) Pixel</strong> to understand site usage and measure our marketing. These are <strong>non-essential</strong> cookies and are governed by consent: we implement <strong>Google Consent Mode</strong> with all analytics and advertising storage set to <em>denied by default</em>, and a cookie banner that lets you accept or decline before any such cookies are activated, in compliance with GDPR and the ePrivacy Directive.
              </p>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Your cookie choices</h3>
              <p>
                You can accept or decline non-essential cookies via our cookie banner, and you can change your choice at any time by clearing cookies in your browser. You may also disable cookies entirely through your browser settings, though this may affect functionality.
              </p>
            </Section>

            {/* 07 Retention */}
            <Section id="retention" number="07" title="Data Retention">
              <p>We retain your email address on our waiting list until one of the following occurs:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-4 marker:text-[#c9a96e]">
                <li>You unsubscribe or request deletion (see Section 8).</li>
                <li>The waiting list is no longer active and the data is no longer necessary for the purpose for which it was collected.</li>
              </ul>
              <p>
                We will not retain your data for longer than is necessary for the purposes described in this policy. Server log data is retained only as long as required for security purposes, typically no more than 90 days.
              </p>
            </Section>

            {/* 08 Rights */}
            <Section id="rights" number="08" title="Your Rights">
              <p className="mb-8">Depending on your location, you may have the following rights regarding your personal data. To exercise any of them, contact us at info@thewinetrips.com. We will respond within 30 days.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, idx) => (
                  <div key={idx} className="bg-[#1a1f2e] p-6 border-t-[3px] border-[#c9a96e] relative overflow-hidden group hover:bg-[#202636] transition-colors">
                     <span className="absolute top-4 right-4 text-[10px] text-[#c9a96e] uppercase tracking-widest font-bold">
                      {right.title}
                     </span>
                     <p className="mt-6 text-sm text-[#ddd8cf] font-light leading-relaxed">
                       {right.desc}
                     </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-[#8a8a8a]">
                EU/EEA residents may lodge a complaint with their national supervisory authority. Argentine residents may contact the Agencia de Acceso a la Información Pública (datospersonales.gob.ar).
              </p>
            </Section>

            {/* 09 Transfers */}
            <Section id="transfers" number="09" title="International Data Transfers">
              <p>
                The Wine Trips operates from Argentina. Your data may be stored on servers located in various countries by our hosting provider, Hostinger. Hostinger implements appropriate safeguards for international data transfers in compliance with GDPR, including Standard Contractual Clauses where applicable.
              </p>
              <p className="mt-4">
                By submitting your information, you acknowledge that your data may be transferred to and processed in countries outside your own. We take all reasonable steps to ensure such transfers are subject to appropriate protections.
              </p>
            </Section>

            {/* 10 Children */}
            <Section id="children" number="10" title="Children's Privacy">
              <p>
                Our service is intended for adults aged 18 and over. We do not knowingly collect personal data from children under the age of 16. If you believe we have inadvertently collected data from a minor, please contact us immediately at info@thewinetrips.com and we will delete it promptly.
              </p>
            </Section>

            {/* 11 Changes */}
            <Section id="changes" number="11" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time — particularly as we introduce new technologies (such as analytics tools) or as legal requirements evolve. When we make material changes, we will update the "Last updated" date at the top of this page.
              </p>
              <p className="mt-4">
                If we make significant changes that affect how we use your data, we will notify you by email (if we hold your address) and/or by a prominent notice on our website before the changes take effect.
              </p>
              <p className="mt-4">
                Your continued use of our website after changes are posted constitutes acceptance of the updated policy.
              </p>
            </Section>

            {/* 12 Contact */}
            <Section id="contact" number="12" title="Contact & Data Requests">
              <p className="mb-8">
                For any questions, requests, or concerns regarding this Privacy Policy or the handling of your personal data, please contact us.
              </p>

              <div className="bg-[#c9a96e]/[0.08] border border-[#c9a96e]/25 p-8 mb-8 rounded-sm">
                <h4 className="text-[#c9a96e] font-['Cormorant_Garamond'] text-2xl mb-4">The Wine Trips</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-[#8a8a8a]">Email:</span> info@thewinetrips.com</p>
                  <p><span className="text-[#8a8a8a]">Website:</span> www.thewinetrips.com</p>
                  <p><span className="text-[#8a8a8a]">Instagram:</span> @its.federico</p>
                </div>
              </div>

              <p>We will acknowledge your request within 5 business days and respond fully within 30 calendar days.</p>
            </Section>

          </div>
        </div>

        {/* Page specific footer */}
        <footer className="bg-[#1a1f2e] border-t border-[#c9a96e]/15 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase block mb-6 font-['Cormorant_Garamond']">
              T H E &nbsp; W I N E &nbsp; T R I P S
            </span>
            <div className="flex justify-center gap-8 text-xs font-['Jost'] text-[#8a8a8a]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

const Section = ({ id, number, title, children }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="scroll-mt-32"
  >
    <div className="flex flex-col gap-4">
      <span className="text-[#c9a96e] font-bold text-4xl opacity-40 font-['Cormorant_Garamond']">{number}</span>
      <h2 className="text-3xl font-['Cormorant_Garamond'] text-white pb-6 border-b border-[#c9a96e]/30 mb-6">
        {title}
      </h2>
    </div>
    <div className="text-lg font-light text-[#ddd8cf]">
      {children}
    </div>
  </motion.section>
);

export default PrivacyPolicyPage;